<template>
  <UCSwitch
    class="uc-switch-appearance"
    :aria-label="'Toggle dark mode'"
    :aria-checked="isDark"
    @click="toggle"
  >
    <UCIconSun class="uc-switch-appearance-sun" />
    <UCIconMoon class="uc-switch-appearance-moon" />
  </UCSwitch>
</template>

<script>
import UCSwitch from './uc-switch.vue'
import UCIconSun from '../icons/switch-sun.vue'
import UCIconMoon from '../icons/switch-moon.vue'

export default {
  name: 'UCSwitchAppearance',
  components: {
    UCSwitch: UCSwitch,
    UCIconSun: UCIconSun,
    UCIconMoon: UCIconMoon
  },
  data() {
    return {
      isDark: true
    }
  },
  methods: {
    toggle(e) {
      const classList = document.documentElement.classList
      // const setClass = (dark) => classList[dark ? 'add' : 'remove']('dark')
      // setClass((this.isDark = !this.isDark))

      // 动画效果
      // 执行切换主题操作
      const that = this
      const transition = document.startViewTransition(() => {
        // 动画过渡切换主题色
        that.isDark = !that.isDark
        that.$emit('lampClick', that.isDark)
        classList.toggle('dark')
      })
      transition.ready.then(() => {
        // 获取鼠标的坐标
        const { clientX, clientY } = e
        // 计算最大半径
        const radius = Math.hypot(
          Math.max(clientX, innerWidth - clientX),
          Math.max(clientY, innerHeight - clientX)
        )
      //   that.updateCss(
      //     `
      //   * {
      //   transition: none !important;
      // }
      //   `,
      //   'disable-transition'
      //   )
        // 圆形动画扩散开始
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0% at ${clientX}px ${clientY}px)`,
              `circle(4% at ${clientX}px ${clientY}px)`,
              `circle(${radius}px at ${clientX}px ${clientY}px)`
            ]
          },
          {
            duration: 1000,
            easing: 'ease-in',
            pseudoElement: '::view-transition-new(root)'
            // pseudoElement: that.isDark ? '::view-transition-new(root)' : '::view-transition-new(root)',
          }
        )
        // .addEventListener('finish', () => {
        //   that.removeCss('disable-transition')
        // })
      })
    }
  }
}
</script>
