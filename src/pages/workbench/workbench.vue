<template>
  <div class="workbench">
    <background-wrapper :is-dark="isDark" />
    <input
      v-model="key"
      class="search-inp"
      type="text"
      placeholder="SEARCH"
    >
    <ucSwitchAppearance @lampClick="themeBtnClick"></ucSwitchAppearance>
  </div>
</template>

<script>
import BackgroundWrapper from '@/components/homepage/background-wrapper.vue';
import ucSwitchAppearance from '@/components/util-comp/uc-switch-appearance.vue';
export default {
  name: 'Workbench',
  components: {
    BackgroundWrapper,
    ucSwitchAppearance
  },
  data() {
    return {
      key: '',
      isDark: true
    };
  },
  methods: {
    themeBtnClick(value) {
      this.isDark = value;
    }
  }
}
</script>

<style lang="scss">
.workbench {
  position: relative;
  padding: 0;
  margin: 0;
  background: var(--uc-c-bg);
  font-size: 14px;
  line-height: 1;
  width: inherit;
  height: inherit;
  .background-wrapper {
    position: absolute;
    width: inherit;
    height: inherit;
  }
  .search-inp {
    position: absolute;
    top: 35%;
    left: 200px;
    right: 200px;
    background-color: rgba(51, 51, 51, 0.5);
    border: 1px solid rgba(51, 51, 51, 0.5);
    height: 60px;
    border-radius: 8px 50px 50px 8px;
    padding: 0 20px;
    transition: all 0.5s;
  }
  .search-inp:focus {
    background-color: rgba(238, 238, 238, 0.75);
  }
  .search-inp:focus-visible {
    outline: none;
  }
  .uc-switch {
    float: right;
  }
}
</style>