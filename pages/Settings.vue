<template>
  <div class="row">
    <div class="col">
      <div class="row" style="min-height: 400px;">
        <div class="col-3">
          <ul ref="MainLists" class="list-group">
            <li>
              <button @mouseenter="$store.commit('setHoverText', 'Change audio settings.')" @click="clickedTypePlaylist" type="button" class="menu-btn btn btn-secondary btn-square">
                Audio
              </button>
            </li>
            <li>
              <button @mouseenter="$store.commit('setHoverText', 'Change graphical settings.')" @click="clickedTypePlaylist" type="button" class="menu-btn btn btn-secondary btn-square">
                Graphics
              </button>
            </li>
            <li>
              <button @mouseenter="$store.commit('setHoverText', 'Change control settings.')" @click="clickedTypePlaylist" type="button" class="menu-btn btn btn-secondary btn-square">
                Controls
              </button>
            </li>
            <li>
              <button @mouseenter="$store.commit('setHoverText', 'Change Game settings.')" @click="clickedTypePlaylist" type="button" class="menu-btn btn btn-secondary btn-square">
                Game
              </button>
            </li>
          </ul>
        </div>
        <div ref="Lists" class="col">
          <ul v-if="highlighted === 'Audio'" class="list-group playlist-description">
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">Audio Output Device</label>
                </div>
                <select id="inputGroupSelect01" class="custom-select btn-square" style="color:white; background-color: rgb(77, 77, 77); border: 1px solid black;">
                  <option selected>
                    Default
                  </option>
                  <option selected>
                    Speakers
                  </option>
                  <option value="1">
                    Headset
                  </option>
                  <option value="2">
                    None
                  </option>
                </select>
              </div>
            </li>
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">Sound Occulsion</label>
                </div>
                <div class="input-group-text btn-square" style="background: none; border: none;">
                  <input type="checkbox">
                </div>
              </div>
            </li>
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">Master Sound Level</label>
                </div>
                <div class="input-group-text btn-square" style="background: none; border: none;">
                  <span style="color:white;padding-right: 7px">0</span>
                  <input
                    id="myRange"
                    type="range"
                    min="1"
                    max="100"
                    value="50"
                    class="slider"
                  >
                  <span style="color:white;padding-left: 7px">100</span>
                </div>
              </div>
            </li>
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">Voice Sound Level</label>
                </div>
                <div class="input-group-text btn-square" style="background: none; border: none;">
                  <span style="color:white;padding-right: 7px">0</span>
                  <input
                    id="myRange"
                    type="range"
                    min="1"
                    max="100"
                    value="50"
                    class="slider"
                  >
                  <span style="color:white;padding-left: 7px">100</span>
                </div>
              </div>
            </li>
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">Music Sound Level</label>
                </div>
                <div class="input-group-text btn-square" style="background: none; border: none;">
                  <span style="color:white;padding-right: 7px">0</span>
                  <input
                    id="myRange"
                    type="range"
                    min="1"
                    max="100"
                    value="50"
                    class="slider"
                  >
                  <span style="color:white;padding-left: 7px">100</span>
                </div>
              </div>
            </li>
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">Ambient Sound Level</label>
                </div>
                <div class="input-group-text btn-square" style="background: none; border: none;">
                  <span style="color:white;padding-right: 7px">0</span>
                  <input
                    id="myRange"
                    type="range"
                    min="1"
                    max="100"
                    value="50"
                    class="slider"
                  >
                  <span style="color:white;padding-left: 7px">100</span>
                </div>
              </div>
            </li>
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">Effect Sound Level</label>
                </div>
                <div class="input-group-text btn-square" style="background: none; border: none;">
                  <span style="color:white;padding-right: 7px">0</span>
                  <input
                    id="myRange"
                    type="range"
                    min="1"
                    max="100"
                    value="50"
                    class="slider"
                  >
                  <span style="color:white;padding-left: 7px">100</span>
                </div>
              </div>
            </li>
          </ul>
          <ul v-if="highlighted === 'Graphics'" class="list-group playlist-description">
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">Game Resolution</label>
                </div>
                <select id="inputGroupSelect01" class="custom-select btn-square" style="color:white; background-color: rgb(77, 77, 77); border: 1px solid black;">
                  <option selected>
                    1920x1080
                  </option>
                  <option selected>
                    1280x720
                  </option>
                  <option value="1">
                    640x480
                  </option>
                  <option value="2">
                    320x240
                  </option>
                </select>
              </div>
            </li>
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">Frames Per Second</label>
                </div>
                <div class="input-group-text btn-square" style="background: none; border: none;">
                  <span style="color:white;padding-right: 7px">20</span>
                  <input
                    id="myRange"
                    type="range"
                    min="1"
                    max="100"
                    value="50"
                    class="slider"
                  >
                  <span style="color:white;padding-left: 7px">144</span>
                </div>
              </div>
            </li>
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">Brightness</label>
                </div>
                <div class="input-group-text btn-square" style="background: none; border: none;">
                  <span style="color:white;padding-right: 7px">0</span>
                  <input
                    id="myRange"
                    type="range"
                    min="1"
                    max="100"
                    value="50"
                    class="slider"
                  >
                  <span style="color:white;padding-left: 7px">200</span>
                </div>
              </div>
            </li>
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">Motion Blur</label>
                </div>
                <div class="input-group-text btn-square" style="background: none; border: none;">
                  <input type="checkbox">
                </div>
              </div>
            </li>
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">Ambient Occulsion</label>
                </div>
                <div class="input-group-text btn-square" style="background: none; border: none;">
                  <input type="checkbox">
                </div>
              </div>
            </li>
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">Depth Of Field</label>
                </div>
                <div class="input-group-text btn-square" style="background: none; border: none;">
                  <input type="checkbox">
                </div>
              </div>
            </li>
          </ul>
          <ul v-if="highlighted === 'Controls'" class="list-group playlist-description">
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">Controller Layout</label>
                </div>
                <select id="inputGroupSelect01" class="custom-select btn-square" style="color:white; background-color: rgb(77, 77, 77); border: 1px solid black;">
                  <option selected>
                    Default
                  </option>
                  <option selected>
                    Tactical
                  </option>
                  <option value="1">
                    Default Flipped
                  </option>
                  <option value="2">
                    Tactical Flipped
                  </option>
                </select>
              </div>
            </li>
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">Look Sensitivity</label>
                </div>
                <div class="input-group-text btn-square" style="background: none; border: none;">
                  <span style="color:white;padding-right: 7px">1</span>
                  <input
                    id="myRange"
                    type="range"
                    min="1"
                    max="100"
                    value="50"
                    class="slider"
                  >
                  <span style="color:white;padding-left: 7px">10</span>
                </div>
              </div>
            </li>
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">Inverted Look</label>
                </div>
                <div class="input-group-text btn-square" style="background: none; border: none;">
                  <input type="checkbox">
                </div>
              </div>
            </li>
          </ul>
          <ul v-if="highlighted === 'Game'" class="list-group playlist-description">
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">Field Of View</label>
                </div>
                <div class="input-group-text btn-square" style="background: none; border: none;">
                  <span style="color:white;padding-right: 7px">65</span>
                  <input
                    id="myRange"
                    type="range"
                    min="1"
                    max="100"
                    value="50"
                    class="slider"
                  >
                  <span style="color:white;padding-left: 7px">120</span>
                </div>
              </div>
            </li>
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">User Generated Content</label>
                </div>
                <div class="input-group-text btn-square" style="background: none; border: none;">
                  <input type="checkbox">
                </div>
              </div>
            </li>
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">Cross-Play</label>
                </div>
                <div class="input-group-text btn-square" style="background: none; border: none;">
                  <input type="checkbox">
                </div>
              </div>
            </li>
            <li>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-square">
                  <label class="input-group-text btn-square" style="min-width: 200px; text-align: right; display: block; background: rgb(55, 55, 55); border: none; color: white;" for="inputGroupSelect01">DLC Maps</label>
                </div>
                <div class="input-group-text btn-square" style="background: none; border: none;">
                  <input type="checkbox">
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="row align-items-end">
        <div class="col">
          <button
            @mouseenter="$store.commit('setHoverText', 'Exit back to the main menu.')"
            @click="$modal.show('Saved')"
            type="button"
            class="btn btn-secondary btn-square"
          >
            Exit and save
          </button>
        </div>
      </div>
    </div>

    <modal
      :min-width="300"
      :min-height="200"
      :pivot-y="0.5"
      :adaptive="true"
      :reset="true"
      name="Saved"
      transition="nice-modal-fade"
      width="30%"
      height="auto"
    >
      <div class="container modal-popout">
        <div class="row justify-content-center">
          <p>Your settings have been saved!</p>
        </div>
        <div class="row">
          <div class="col align-self-center">
            <button @click="$modal.hide('Saved');clickedLeave()" class="menu-btn btn btn-secondary btn-square" style="margin:auto;display:block;">
              Okay
            </button>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      highlighted: ''
    }
  },
  computed: {
    lobby () {
      return this.$store.state.lobby
    }
  },
  mounted () {
    this.$store.commit('setCurrentMenuText', `Settings`)
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
    clickedTypePlaylist (e) {
      this.setAllToLookDeactive()

      this.activateButtonCSS(e.srcElement)

      this.highlighted = e.srcElement.textContent.trim()
    },
    clickedLeave () {
      if (this.lobby === '') { this.$router.push('/') } else { this.$router.push(`/LobbyPage?playlist=${this.lobby}`) }
    }
  }
}
</script>

<style scoped>
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
  padding: 7px;
}

.make-closer-plox{
  display: inline-block;
}
.col4{
  padding-left:40px;
}
.modal-popout {
  color:white;
  background: rgb(100, 100, 100);
  padding: 6px;
}
</style>
