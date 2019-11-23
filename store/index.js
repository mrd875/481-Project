export const state = () => ({
  hoverText: 'Play CoD TODAY!',
  currentMenuText: 'Main Menu',
  lobby: ''
})

export const mutations = {
  setHoverText (state, text) {
    state.hoverText = text
  },
  setCurrentMenuText (state, text) {
    state.currentMenuText = text
  },
  setLobby (state, text) {
    state.lobby = text
  }
}
