<template>
  <div class="flex-col">
    <div
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
    <div class="container pb-6 px-6 md:px-2">
      <div class="flex flex-col">
        <template v-if="weapons && weapons.length > 0">
          <div>
            <h4
              class="text-xl border-b border-gray-600 mb-3 ml-3 text-gray-300 inline-flex flex-row items-center gap-4"
            >
              Weapons
            </h4>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <template v-for="weapon of weapons">
              <weapon-entry :item="weapon" :key="weapon.id"> </weapon-entry
            ></template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import ArrowLeftIcon from '~/assets/icons/arrow-left.svg?inline'

export default Vue.extend({
  components: {
    ArrowLeftIcon
  },
  async asyncData({ $content }) {
    const weapons = await $content('weapons')
      .fetch()
      .then((x) =>
        x?.length
          ? x.map((y: any) => ({
              ...y,
              description: (y.description as string).substring(0, 100) + '...',
            }))
          : null
      )
      .catch(() => null)

    return {
      weapons,
    }
  },
})
</script>
