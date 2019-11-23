<template>
  <div class="SocialBox">
    <div class="SocialBox-TopBar-Master">
      <div class="SocialBox-TopBar-Party SocialBox-TopBar-Div">
        <button v-on:click="display='Party'" class="SocialBox-TopBar-Button">
          Party
        </button>
      </div>
      <div class="SocialBox-TopBar-Friends SocialBox-TopBar-Div">
        <button v-on:click="display='Friends'" class="SocialBox-TopBar-Button">
          Friends
        </button>
      </div>
      <div class="SocialBox-TopBar-Recent SocialBox-TopBar-Div">
        <button v-on:click="display='Recent'" class="SocialBox-TopBar-Button">
          Recent
        </button>
      </div>
    </div>
    <div class="SocialBox-ContentBody">
      <div v-if="display=='Party'" class="Body-Party">
        <div class="SocialBox-Body-Row">
          <div v-bind:key="person.id" v-for="person in partyPeople" class="lobby-body-line">
            <div v-bind:class="{'in-party':person.inParty, 'is-you':person.isYou}" class="lobby-name-output lobby-info-display">
              <div v-if="person.microphone" class="lobby-player-element">
                <i v-bind:class="{'talking':person.isTalking, 'not-talking':!person.isTalking}" class="fa fa-microphone" />
              </div>
              <div v-if="person.microphonemute" class="lobby-player-element">
                <i class="fa fa-microphone-slash" style="color:white" />
              </div>
              <div v-if="person.isYou" class="lobby-player-element">
                <span class="badge badge-pill badge-light">You</span>
              </div>
              <div v-if="person.isHost" class="lobby-player-element">
                <span class="badge badge-pill badge-primary">Host</span>
              </div>
              <div v-if="person.inParty" class="lobby-player-element">
                <span class="badge badge-pill badge-success">Party</span>
              </div>
              <div class="lobby-player-element">
                {{ person.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="display=='Friends'" class="Body-Friend">
        <div class>
          <div v-bind:key="person.id" v-for="person in friendPeople" class="SocialBox-Body-Row">
            <div class="lobby-player-element">
              <div v-if="person.isOnline" class="lobby-player-element">
                <span class="badge badge-pill badge-success">Online</span>
              </div>
              <div class="lobby-player-element">
                {{ person.name }}
              </div>
            </div>
            <div class="lobby-ping-output lobby-info-display">
              {{ person.activityStatus }}
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="display=='Recent'" class="Body-Recent">
        <div class="SocialBox-Body-Row">
          <div v-bind:key="person.id" v-for="person in recentPeople" class="SocialBox-Body-Row">
            <div class="lobby-player-element">
              {{ person.name }}
            </div>
            <div class="lobby-ping-output lobby-info-display">
              <button class="SocialBox-TopBar-Button-2">
                Add Friend
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <h1 v-if="display=='Party'">
      PARTY
    </h1>
    <h1 v-if="display=='Friends'">
      FRIENDS
    </h1>
    <h1 v-if="display=='Recent'">
      RECENT
    </h1> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      display: '',
      recentPeople: [
        {
          id: 1,
          name: 'Heaven332',
          lastSeen: '2 Minutes Ago'
        },
        {
          id: 2,
          name: 'Macaroni-Head',
          lastSeen: '23 Minutes Ago'
        }
      ],
      friendPeople: [
        {
          id: 1,
          name: 'ExtremelyConcerned',
          ping: '92',
          inParty: true,
          isYou: false,
          isHost: true,
          microphone: true,
          microphonemute: false,
          isTalking: true,
          isOnline: true,
          activityStatus: 'In Lobby'
        },
        {
          id: 7,
          name: 'CrazyCrookedMan',
          ping: '23',
          inParty: true,
          isYou: false,
          isHost: false,
          microphone: false,
          microphonemute: false,
          isOnline: false,
          activityStatus: 'Offline'
        },
        {
          id: 8,
          name: 'JabbaTheNormie',
          ping: '52',
          inParty: true,
          isYou: false,
          isHost: false,
          microphone: true,
          microphonemute: false,
          isOnline: true,
          activityStatus: 'In Lobby'
        },
        {
          id: 9,
          name: 'JaredSucks',
          ping: '999',
          inParty: true,
          isYou: false,
          isHost: false,
          microphone: false,
          microphonemute: true,
          isOnline: true,
          activityStatus: 'Playing Team Deathmatch'
        },
        {
          id: 10,
          name: 'Bilbo Swaggins',
          ping: '999',
          inParty: true,
          isYou: false,
          isHost: false,
          microphone: false,
          microphonemute: true,
          isOnline: false,
          activityStatus: 'Offline'
        }
      ],

      partyPeople: [
        {
          id: 1,
          name: 'ExtremelyConcerned',
          ping: '92',
          inParty: true,
          isYou: false,
          isHost: true,
          microphone: true,
          microphonemute: false,
          isTalking: true
        },
        {
          id: 4,
          name: 'iikkjjuu',
          ping: '2',
          inParty: false,
          isYou: true,
          isHost: false,
          microphone: true,
          microphonemute: false,
          isTalking: true
        },
        {
          id: 7,
          name: 'CrazyCrookedMan',
          ping: '23',
          inParty: true,
          isYou: false,
          isHost: false,
          microphone: false,
          microphonemute: false
        },
        {
          id: 8,
          name: 'JabbaTheNormie',
          ping: '52',
          inParty: true,
          isYou: false,
          isHost: false,
          microphone: true,
          microphonemute: false
        },
        {
          id: 9,
          name: 'JaredSucks',
          ping: '999',
          inParty: true,
          isYou: false,
          isHost: false,
          microphone: false,
          microphonemute: true
        }
      ]
    }
  }
}
</script>

<style scoped>
.bottombar {
  color: white;
}

.SocialBox{
  width: 600px;
}

.SocialBox-TopBar-Master{
  background-color: rgb(68, 68, 68);
}

.SocialBox-TopBar-Div{
  display: inline-block;
  width: 32.736%;
}

.SocialBox-TopBar-Button{
  color: white;
  background-color: rgb(78, 78, 78);
  border: none;
  width: 100%;
  outline: none;
}

.SocialBox-TopBar-Button-2{
  color: white;
  background-color: rgb(78, 78, 78);
  border: none;
  width: 200px;
  outline: none;
  float: right;
}
.SocialBox-TopBar-Button-2:hover{
  background-color:rgba(63, 63, 63, 0.705);
}

.SocialBox-TopBar-Button:hover{
  background-color:rgba(63, 63, 63, 0.705);
}

.SocialBox-ContentBody{
  background-color:rgb(46, 46, 46);
  color:white;
}

.SocialBox-Body-Row{
  padding-left: 10px;
}

.SocialBox-Body-Row:nth-child(even){
  background-color:rgb(100, 100, 100);
}

.SocialBox-Body-Row:nth-child(odd){
  background-color:rgb(121, 121, 121);
}
.lobby-block{
  border-style: solid;
}
.lobby-header{
  color: white;
  background-color:rgb(80, 80, 80);
}
.lobby-body{
  color: white;
}
.lobby-body-line:nth-child(even){
    background-color:rgb(100, 100, 100);
}
.lobby-body-line:nth-child(odd){
  background-color:rgb(121, 121, 121);
}
.lobby-footer{
  color: white;
  background-color:rgb(80, 80, 80)
}
.lobby-info-display{
  display: inline-block;
}
.lobby-ping-output{
  float: right;
}
.lobby-header-title{
  display: inline-block;
}
.lobby-header-title-right{
  float: right;
  padding-right: 8px
}
.lobby-header-title-left{
  padding-left: 8px;
}
.in-party{
  color: rgb(0, 219, 0);
}
.is-you{
  color:rgb(230, 226, 0);
}
.lobby-name-output{
  padding-left: 10px;
  display: inline-block;

}
.lobby-ping-output{
  padding-right: 10px;
}
.lobby-above{
  background-color:rgba(100, 100, 100, 0.582);
  color: white;
  padding-left: 10px;
}
.lobby-player-element{
  display:inline-block;
}
.talking {
    color: rgb(0, 219, 0);
}
.not-talking{
    color:white;
}
.sort-right{
  float:right;
}
</style>
