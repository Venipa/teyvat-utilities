<template>
  <div class="bonkers" @click="() => playBonk()"></div>
</template>

<script>
export default {
  methods: {
    playBonk() {
      console.log('BONK!')
      const audio = new Audio('/assets/bonk.mp3')
      audio.play()
    },
  },
}
</script>

<style lang="scss" scoped>
.bonkers {
  background-image: url(/assets/bonk.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  @apply h-24 w-32 cursor-pointer flex;
}
</style>
