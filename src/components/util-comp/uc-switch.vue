<template>
  <button class="uc-switch" type="button" role="switch">
    <span class="uc-switch-check">
      <span v-if="$slots.default" class="uc-switch-icon">
        <slot />
      </span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'UCSwitch'
}
</script>