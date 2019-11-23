<template>
  <div class="row">
    <!-- left side bar list view -->
    <div class="col-3">
      <LeftSideBar />
    </div>
    <!-- party view -->
    <div class="col float-right">
      <Party />
    </div>
  </div>
</template>

<script>
import Party from '~/components/index/Party'
import LeftSideBar from '~/components/index/LeftSideBar'

export default {
  components: {
    Party,
    LeftSideBar
  },
  mounted                  () {
    this.$store.commit('setCurrentMenuText', 'Main Menu')
  }
}
</script>

<style>
</style>
