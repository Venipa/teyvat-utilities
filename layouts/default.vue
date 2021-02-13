<template>
  <div class="container-layout flex-auto h-full flex flex-col">
    <div
      class="shadow mb-6 py-4 bg-gray-900 text-gray-100 border-b border-gray-800"
    >
      <div
        class="container flex flex-row h-full px-6 md:px-2 justify-items-center place-items-center md:place-items-start"
      >
        <div
          class="flex flex-col md:flex-row items-center justify-start text-center md:text-left w-full"
        >
          <nuxt-link
            to="/"
            class="flex flex-col md:flex-row items-center justify-start text-center md:text-left w-full"
          >
            <Logo class="h-12" />
            <div class="flex flex-col md:ml-4">
              <div class="text-gray-200 text-base">
                Teyvat
              </div>
              <div class="text-gray-500 text-xs">
                Genshin Impact Utilities
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <Nuxt class="flex-auto" />
    <div class="mt-6 mb-2 text-primary-DEFAULT flex flex-col">
      <doge-bonk class="mx-auto my-2"></doge-bonk>
      <div class="text-sm text-center">
      website made with ✨ by <a href="https://venipa.net">venipa.net</a>
      </div>
    </div>
  </div>
</template>
<script>
import DarkModeToggle from '~/components/DarkModeToggle.vue'
import DogeBonk from '~/components/DogeBonk.vue'
export default {
  components: { DarkModeToggle },
}
</script>
    DogeBonk
<style lang="scss">
html {
  font-family: 'Nunito', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.container-layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}
</style>
