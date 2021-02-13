<template>
  <button class="btn-icon" @click="nextTheme">
    <DarkIcon v-if="$colorMode.preference === 'dark'" />
    <SysIcon v-else-if="$colorMode.preference === 'system'" />
    <LightIcon v-else />
  </button>
</template>

<script>
import LightIcon from '~/assets/icons/sun.svg?inline'
import DarkIcon from '~/assets/icons/moon.svg?inline'
import SysIcon from '~/assets/icons/desktop-computer.svg?inline'
export default {
  components: {
    DarkIcon,
    LightIcon,
    SysIcon,
  },
  methods: {
    nextTheme() {
      this.$colorMode.preference === 'system'
        ? (this.$colorMode.preference = 'dark')
        : this.$colorMode.preference === 'dark'
        ? (this.$colorMode.preference = 'light')
        : (this.$colorMode.preference = 'system')
    },
  },
}
</script>

<style lang="scss">
.dark-mode-toggle {
  @apply h-10 w-10 p-2 cursor-pointer rounded-full flex flex-row justify-center items-center;
}
</style>
