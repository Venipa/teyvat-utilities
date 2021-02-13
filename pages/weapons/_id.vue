<template>
  <div class="flex flex-col">
    <div
      v-if="item"
      class="-mt-6 mb-6 bg-gray-800 text-gray-400 border-b border-gray-700 shadow-inner"
    >
      <div class="container px-2">
        <div class="h-12 flex flex-row items-center justify-start gap-x-4">
          <nuxt-link class="btn-icon" to="/">
            <ArrowLeftIcon />
          </nuxt-link>
          Back
        </div>
      </div>
    </div>
    <div class="container text-gray-200 px-6 md:px-2">
      <template v-if="item">
        <div
          class="flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start gap-4 mb-6"
        >
          <img
            v-if="item.imageUrl"
            :src="item.imageUrl"
            class="w-32 h-32 appear"
            :alt="item.name"
          />
          <div class="flex flex-col">
            <h1 class="text-3xl font-bold my-0">{{ item.name }}</h1>
            <span class="text-gray-400 italic text-center md:text-left">{{ item.series }}</span>
            <div class="flex flex-row items-center justify-center md:justify-start gap-2">
              <span v-for="i in item.rarity">⭐</span>
            </div>
            <div class="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-2">
              <span>Lv.90: </span>
              <div class="flex flex-col items-center md:items-start">
                <span>{{item.stats.level[90].attack}} Base Attack</span>
                <span>{{item.stats.level[90].secondary}} {{item.secondaryLabel}}</span>
              </div>
            </div>
          </div>
        </div>
        <nuxt-content
          :document="item"
          class="blog-content prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
        />
        <template>
          <h4 class="text-xl font-bold mb-2">Related Items</h4>
          <div class="flex flex-row items-center gap-2" v-if="relatedItems">
            <nuxt-link
              :to="`/weapons/${relatedItem.id}`"
              v-for="relatedItem of relatedItems"
              class="cursor-pointer"
              :key="relatedItem.id"
            >
              <div
                class="shadow bg-gray-800 rounded p-2"
                v-tippy
                :content="relatedItem.name"
              >
                <img
                  :src="relatedItem.imageUrl"
                  class="w-12 h-12 appear"
                  :alt="relatedItem.name"
                />
              </div>
            </nuxt-link>
          </div>
        </template>
      </template>
      <template v-else>
        <div class="flex flex-col items-center justify-center flex-auto">
          <svg
            class="h-12 w-12 mb-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            />
          </svg>
          <div>Item not found.</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import ArrowLeftIcon from '~/assets/icons/arrow-left.svg?inline'

export default Vue.extend({
  components: {
    ArrowLeftIcon,
  },
  head() {
    // @ts-ignore
    const item = this.item;
    return {
      title: `${item.name} (${item.category})`,
    }
  },
  async asyncData({ $content, params }): Promise<any> {
    const data = await $content('weapons')
      .where({
        id: params.id,
      })
      .fetch()
      // @ts-ignore
      .then((x) => x[0])
      .catch(() => null)
    if (!data) {
      return { item: null }
    }
    const relatedItems = await $content('weapons')
      .where({
        category: data.category,
      })
      .limit(10)
      .fetch()
      .catch(() => null)
    return {
      item: data,
      relatedItems,
    }
  },
})
</script>
