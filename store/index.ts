interface Store {
  darkMode: boolean;
}

export const state = (): Store => ({
  darkMode: false
})

export const mutations = {
  setDarkMode(state: Store, payload: boolean) {
    state.darkMode = payload;
  }
}
