<template>
  <div class="row">
    <div class="col">
      <div class="row make-closer-plox" style="min-height: 300px;">
        <div class="col-3 make-closer-plox">
          <ul ref="MainLists" class="list-group">
            <li v-for="(list, listName) in Lists" :key="listName" class="">
              <button @mouseenter="hoverChangeInfo" @click="clickedTypePlaylist" type="button" class="menu-btn btn btn-secondary btn-square">
                {{ listName }}
              </button>
            </li>
          </ul>
        </div>
        <div ref="Lists" class="col-4 make-closer-plox">
          <ul :ref="listName" v-for="(list, listName) in Lists" :key="listName" class="list-group">
            <li v-for="(itemName, i) in list" :key="i" class="">
              <button @mouseenter="hoverChangeInfo" @click="$router.push(`/LobbyPage?playlist=${itemName}`)" type="button" class="sub-menu-btn btn btn-secondary btn-square">
                {{ itemName }}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="row align-items-end">
        <div class="col">
          <button @mouseenter="hoverChangeInfo" @click="$router.push('/')" type="button" class="btn btn-secondary btn-square">
            Cancel
          </button>
        </div>
      </div>
    </div>
    <div class="make-closer-plox playlist-description" style="min-height: 400px">
      <div v-if="highlighted == 'Core'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          Core
        </h2>
        <p class="display-info-elem">
          Select from a diverse list of regular gamemodes.<br>
          <br>
          235,469 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'Hardcore'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          Hardcore
        </h2>
        <p class="display-info-elem">
          Select from a list of hardcore game-modes<br>
          <br>
          35,152 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'Party Games'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          Party Games
        </h2>
        <p class="display-info-elem">
          Select from a fun mix of gamemodes<br>
          <br>
          51,224 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'Team Deathmatch'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          Team Deathmatch
        </h2>
        <p class="display-info-elem">
          <br>Regular 75 Kill Run-and Gun. Shoot the enemy team to win. <br>
          <br>
          Players: 6 - 12 <br>
          <br>
          187,134 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'Free-For-All'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          Free-For-All
        </h2>
        <p class="display-info-elem">
          <br>An all-out battle against everyone<br>
          <br>
          Players: 4 - 8 <br>
          <br>
          238,134 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'Domination'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          Domination
        </h2>
        <p class="display-info-elem">
          <br>3 Flags, Capture each point to score points and win<br>
          <br>
          Players: 8 - 12 <br>
          <br>
          120 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'War'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          War
        </h2>
        <p class="display-info-elem">
          <br>Fight against the enemy team in an intense-battle of attack and defense!<br>
          <br>
          Players: 20 - 24 <br>
          <br>
          481,102 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'Ground War: War'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          Ground War: War
        </h2>
        <p class="display-info-elem">
          <br> Fight against the enemy without any vehicles<br>
          <br>
          Players: 7<br>
          <br>
          48,101 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'Ground War: Mosh Pit'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          Ground War: Mosh Pit
        </h2>
        <p class="display-info-elem">
          <br>Take the ground war battle to the Mosh Pits!<br>
          <br>
          Players: 20 <br>
          <br>
          81,134 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'Objective Mosh Pit'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          Objective Mosh Pit
        </h2>
        <p class="display-info-elem">
          <br>Mosh pit with a more technical objective stance<br>
          <br>
          Players: 6 - 12 <br>
          <br>
          1,120,101 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'Search and Destroy'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          Search and Destroy
        </h2>
        <p class="display-info-elem">
          <br>A 2-teamed battle of defending and attacking bomb-sites<br>
          <br>
          Players: 6 - 12 <br>
          <br>
          688,123 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'Kill Confirmed'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          Kill Confirmed
        </h2>
        <p class="display-info-elem">
          <br>Kill the enemy team and collect their dog tags to win points<br>
          <br>
          Players: 6 - 12 <br>
          <br>
          102,157 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'Ground War: Mosh Pit HC'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          Ground War: Mosh Pit HC
        </h2>
        <p class="display-info-elem">
          <br>Hardcore mosh pit ground war<br>
          <br>
          Players: 16<br>
          <br>
          238,134 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'Infected'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          Infected
        </h2>
        <p class="display-info-elem">
          <br>One person becomes infected, the rest fight for survival<br>
          <br>
          Players: 18 <br>
          <br>
          11,412 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'Dogfight'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          Dogfight
        </h2>
        <p class="display-info-elem">
          <br>Fight the other team in planes to the death<br>
          <br>
          Players: 10<br>
          <br>
          101,101 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'Prop Hunt'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          Prop Hunt
        </h2>
        <p class="display-info-elem">
          <br>Hunters and Hiders battle it out to play hide and seek<br>
          <br>
          Players: 12 - 18<br>
          <br>
          99,999 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'Gun Game'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          Gun Game
        </h2>
        <p class="display-info-elem">
          <br>Given a random weapon every 30 seconds, fight to win<br>
          <br>
          Players: 4 - 8 <br>
          <br>
          238,134 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'HQ 24/7'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          HQ 24/7
        </h2>
        <p class="display-info-elem">
          <br>24/7 Headquarters<br>
          <br>
          Players: 12 - 18 <br>
          <br>
          391,122 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'Sandbox 24/7'">
        <img src="gun.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          24/7 Sandbox
        </h2>
        <p class="display-info-elem">
          <br>An all-out battle against everyone<br>
          <br>
          Players: 8 - 12 <br>
          <br>
          11,134 in Playlist
        </p>
      </div>
      <div v-else-if="highlighted == 'Hardpoint'">
        <img src="gun2.png" width="200px" style="display:block; margin:auto">
        <h2 style="display:block; text-align: center;">
          Hardpoint
        </h2>
        <p class="display-info-elem">
          <br>Capture the hardpoint and prevent the other team from taking it<br>
          <br>
          Players: 8 <br>
          <br>
          1,238,134 in Playlist
        </p>
      </div>
      <div v-else>
        <br>
        <h2 style="display:block; text-align: center;">
          Choose a playlist!
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      Lists: {
        Core: ['Team Deathmatch', 'Free-For-All', 'Domination', 'War', 'Ground War: War', 'Ground War: Mosh Pit', 'Objective Mosh Pit'],
        Hardcore: ['Team Deathmatch', 'Search and Destroy', 'Domination', 'Free-For-All', 'Kill Confirmed', 'Ground War: Mosh Pit HC'],
        'Party Games': ['Infected', 'Dogfight', 'Prop Hunt', 'Gun Game', 'HQ 24/7', 'Sandbox 24/7']

      },
      playlistType: 'Casual',
      highlighted: ''
    }
  },
  async mounted () {
    this.playlistType = this.$route.query.playlist
    this.$store.commit('setCurrentMenuText', `${this.playlistType} Playlists`)

    if (this.playlistType === 'Ranked') {
      this.Lists = {
        Core: ['Hardpoint']
      }
    }

    await this.$nextTick()
    this.hideLists()
  },
  methods: {
    activateButtonCSS (btn) {
      if (btn.classList.contains('disabled')) {
        btn.classList.remove('disabled')
      }
    },
    deactivateButtonCSS (btn) {
      if (!btn.classList.contains('disabled')) {
        btn.classList.add('disabled')
      }
    },
    setAllToLookActive () {
      for (const list of this.$refs.MainLists.children) {
        this.activateButtonCSS(list.getElementsByTagName('button')[0])
      }
    },
    setAllToLookDeactive () {
      for (const list of this.$refs.MainLists.children) {
        this.deactivateButtonCSS(list.getElementsByTagName('button')[0])
      }
    },
    hideLists () {
      for (const list of this.$refs.Lists.children) {
        list.hidden = true
      }
    },
    clickedTypePlaylist (e) {
      this.hideLists()
      this.setAllToLookDeactive()

      this.activateButtonCSS(e.srcElement)

      this.$refs[e.srcElement.textContent.trim()][0].hidden = false
    },
    hoverChangeInfo (e) {
      this.highlighted = e.srcElement.textContent.trim()
    }
  }
}
</script>

style <style scoped>
.menu-btn{
  width: 125px;
  border: 1px solid darkgrey;
}
.sub-menu-btn{
  width: 300px;
  border: 1px solid darkgrey;
}
.list-group{
  list-style-type: none;
}
.btn-square{
  border-radius: 0;
}
.playlist-description {
  background: rgba(66, 66, 66, 0.7);
  color: white;
  margin-right: 15px;
  padding-left: 20px;
  height: 26px;
  width: 60%;
  display: block;
  height: 100%;
}

.make-closer-plox{
  display: inline-block;
}
.col4{
  padding-left:40px;
}
.display-info-elem{
  display: inline-block;
}
.right-info-elem{
  float:right
}
</style>
