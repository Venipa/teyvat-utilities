<template>
  <div class="flex-col">
    <div class="container pb-6 px-6 md:px-2">
      <div class="flex flex-col">
        <div class="alert alert-primary mb-6">
          <div class="alert-pill">Info</div>
          <div class="alert-content">Teyvat is in works, errors may occur.</div>
        </div>
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

export default Vue.extend({
  components: {},
  async asyncData({ $content }) {
    const weapons = await $content('weapons')
      .limit(9)
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
