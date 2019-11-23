<template>
  <div>
    <SocialBox />
    <div class="row align-items-end">
      <div class="col">
        <button
          @mouseenter="$store.commit('setHoverText', 'Exit back')"
          @click="clickedLeave"
          type="button"
          class="btn btn-secondary btn-square"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SocialBox from '~/components/SocialBox.vue'

export default {
  components: {
    SocialBox
  },
  computed: {
    lobby () {
      return this.$store.state.lobby
    }
  },
  methods: {
    clickedLeave () {
      if (this.lobby === '') { this.$router.push('/') } else { this.$router.push(`/LobbyPage?playlist=${this.lobby}`) }
    }
  }
}
</script>

<style>
.btn-square {
  border-radius: 0;
}
</style>
