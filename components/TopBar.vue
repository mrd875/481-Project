<template>
  <div class="top-bar">
    <div class="top-bar-content top-bar-content-left">
      <div class="top-bar-title-element">
        {{ text }}
      </div>
    </div>
    <div class="top-bar-content top-bar-content-right">
      <div class="user-info-display">
        <div class="game-tokens currency-item">
          <i class="fa fa-star" style="color:white" />
          Game Tokens: {{ lobbyPeople[0].numGameTokens }}
        </div>
        <div class="cod-points currency-item">
          <i class="fa fa-usd" style="color:white" />
          COD Points: {{ lobbyPeople[0].numCodPoints }}
        </div>
      </div>
      <div class="user-info-display">
        <i class="fa fa-male" style="color:white" />
        User: {{ lobbyPeople[0].name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  components: {

  },
  data () {
    return {
      lobbyPeople: [
        {
          id: 4,
          name: 'iikkjjuu',
          ping: '2',
          inParty: false,
          isYou: true,
          isHost: false,
          numCodPoints: 68,
          numGameTokens: 1038
        }
      ]
    }
  },
  computed: {
    text () {
      return this.$store.state.currentMenuText
    }
  }
}

</script>

style <style scoped>
.top-bar{
  height: 50px;
  width: 100%;
  background-color:rgba(68, 68, 68, 0.623);
}
.top-bar-content{
  display: inline-block;
  color: white;
}
.top-bar-content-right{
  float: right;
  padding-right: 10px;
  transform: translateY(50%);
}
.user-info-display{
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}
.currency-item{
  display: inline-block;
  padding-left: 3px;
  padding-right: 3px;
}
.top-bar-title-element{
  padding-left: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 25px;
  font-weight: bold;
  transform: translateY(16%);

}
</style>
