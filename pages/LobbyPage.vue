<template>
  <div class="row align-items-center">
    <div class="col">
      <div class="row">
        <!-- left side bar list view -->
        <div class="col-3">
          <LeftSideBar />
        </div>
        <!-- Lobby view -->
        <div class="col float-right">
          <Lobby />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lobby from '~/components/LobbyPage/Lobby'
import LeftSideBar from '~/components/LobbyPage/LeftSideBar'

export default {
  components: {
    Lobby,
    LeftSideBar
  },
  data () {
    return {
      playlistType: 'Team Deathmatch'
    }
  },
  mounted () {
    this.playlistType = this.$route.query.playlist
    this.$store.commit('setCurrentMenuText', `${this.$route.query.playlist} Lobby`)
    this.$store.commit('setLobby', `${this.$route.query.playlist}`)
  }
}
</script>

<style>
</style>
