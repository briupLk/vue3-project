<template>
  <div class="workbench">
    <background-wrapper />
    <input v-model="key" type="text">
  </div>
</template>

<script>
import BackgroundWrapper from '@/components/homepage/background-wrapper.vue';
export default {
  name: 'Workbench',
  components: {
    BackgroundWrapper
  }
}
</script>

<style lang="scss">
.workbench {
  position: relative;
  padding: 0;
  margin: 0;
  background: #181828;
  font-size: 14px;
  line-height: 1;
  width: inherit;
  height: inherit;
  .background-wrapper {
    position: absolute;
    width: inherit;
    height: inherit;
  }
}
</style>