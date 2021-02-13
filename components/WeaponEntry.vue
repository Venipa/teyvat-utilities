<template>
  <div
    class="card bg-gray-800 text-gray-300"
  >
    <div class="card-title flex flex-row items-start">
      <nuxt-link
        :to="`/weapons/${item.id}`"
      >
        {{ item.name }}
      </nuxt-link>
      <img v-if="item.imageUrl" class="w-16 h-16 ml-auto" :src="item.imageUrl" :alt="item.name">
    </div>
    <div class="card-content flex flex-col text-gray-400">
      <div>{{ item.description }}</div>
      <div>
        <nuxt-link
        :to="`/weapons/${item.id}`"
        class="border-b border-primary-DEFAULT text-primary-DEFAULT"
      >
        Read more
      </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    item: Object,
  },
}
</script>

<style lang="scss" scoped>
.card {
  @apply rounded-xl shadow flex flex-col p-4 select-none transition-shadow duration-200 ease-out;
  &-title {
    @apply text-base font-bold cursor-default;
  }
  &-content {
    @apply -mx-4 px-4 my-1 text-sm cursor-default;
    min-height: 80px;
  }
  &-actions {
    @apply -mb-1 -mx-4 px-4 mt-3 border-t pt-3;
  }
}
</style>
