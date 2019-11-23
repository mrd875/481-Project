<template>
  <div class="">
    <div style="height:5px;" />
    <marquee behavior="scroll" direction="left" class="bottomscrollbar">
      {{ text }}
    </marquee>
  </div>
</template>

<script>
export default {
  computed: {
    text () {
      return this.$store.state.hoverText
    }
  }
}
</script>

<style scoped>
.bottomscrollbar {
  background-color:rgba(68, 68, 68, 0.5);
  border: solid 1px #0f0f0f;
  color:white;
}
</style>
