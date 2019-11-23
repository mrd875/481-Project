<template>
  <div class="lobby">
    <div class="lobby-above">
      <i class="fa fa-users" style="color:white" />
      Players in Lobby: {{ lobbyPeople.length }}/12
    </div>
    <div class="lobby-block">
      <div class="lobby-header">
        <div class="lobby-header-title-left lobby-header-title ">
          <i class="fa fa-user" style="color:white" />
          Player Name
        </div>
        <div class="lobby-header-title-right lobby-header-title ">
          <i class="fa fa-wifi" style="color:white" />
          Ping
        </div>
      </div>
      <div class="lobby-body">
        <div v-bind:key="person.id" v-for="person in lobbyPeople" class="lobby-body-line">
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
              <a v-bind:class="{'in-party':person.inParty, 'is-you':person.isYou, 'not-talking':!person.inParty && !person.isYou}" @click.prevent="$modal.show('player');player=person.name" href="">{{ person.name }}</a>
            </div>
          </div>
          <div class="lobby-ping-output lobby-info-display">
            {{ person.ping }}
          </div>
        </div>
      </div>
    </div>

    <modal
      :min-width="300"
      :min-height="200"
      :pivot-y="0.5"
      :adaptive="true"
      :reset="true"
      name="Kick"
      transition="nice-modal-fade"
      width="30%"
      height="auto"
    >
      <div class="container modal-popout">
        <div class="row justify-content-center">
          <p>You must be the host to Kick.</p>
        </div>
        <div class="row">
          <div class="col justify-content-center">
            <button @click="$modal.hide('Kick')" class="menu-btn btn btn-secondary btn-square" style="margin:auto;display:block;">
              Okay
            </button>
          </div>
        </div>
      </div>
    </modal>

    <modal
      :min-width="300"
      :min-height="200"
      :pivot-y="0.5"
      :adaptive="true"
      :reset="true"
      name="Unimplemented"
      transition="nice-modal-fade"
      width="30%"
      height="auto"
    >
      <div class="container modal-popout">
        <div class="row justify-content-center">
          <p>This option is not implemented.</p>
        </div>
        <div class="row">
          <div class="col justify-content-center">
            <button @click="$modal.hide('Unimplemented')" class="menu-btn btn btn-secondary btn-square" style="margin:auto;display:block;">
              Okay
            </button>
          </div>
        </div>
      </div>
    </modal>

    <modal
      :min-width="300"
      :min-height="200"
      :pivot-y="0.5"
      :adaptive="true"
      :reset="true"
      name="player"
      transition="nice-modal-fade"
      width="30%"
      height="auto"
    >
      <div class="container modal-popout">
        <div class="row justify-content-center">
          <p>Selected {{ player }}</p>
        </div>
        <div class="row justify-content-between">
          <div class="col justify-content-center">
            <button @click="$modal.hide('player');$modal.show('Kick')" class="menu-btn btn btn-secondary btn-square">
              Kick
            </button>
          </div>
          <div class="col justify-content-center">
            <button @click="$modal.hide('player');$modal.show('Unimplemented')" class="menu-btn btn btn-secondary btn-square">
              Dossier
            </button>
          </div>
          <div class="col justify-content-center">
            <button @click="$modal.hide('player');lobbyPeople.find((e)=>e.name==player).microphonemute=!lobbyPeople.find((e)=>e.name==player).microphonemute" class="menu-btn btn btn-secondary btn-square">
              Mute
            </button>
          </div>
          <div class="col justify-content-center">
            <button @click="$modal.hide('player')" class="menu-btn btn btn-secondary btn-square float-right">
              Close
            </button>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'Lobby',
  components: {

  },
  data () {
    return {
      player: '',
      lobbyPeople: [
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
          id: 2,
          name: 'Silly_Noob',
          ping: '41',
          inParty: false,
          isYou: false,
          isHost: false,
          microphone: false,
          microphonemute: false
        },
        {
          id: 3,
          name: 'Trooper',
          ping: '998',
          inParty: false,
          isYou: false,
          isHost: false,
          microphone: false,
          microphonemute: false
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
          id: 5,
          name: 'IDontNeedGames',
          ping: '5',
          inParty: false,
          isYou: false,
          isHost: false,
          microphone: false,
          microphonemute: false
        },
        {
          id: 6,
          name: 'FattyXPress',
          ping: '666',
          inParty: false,
          isYou: false,
          isHost: false,
          microphone: true,
          microphonemute: false
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
        },
        {
          id: 10,
          name: 'SmokeyTheTrailerParkBoy',
          ping: '24',
          inParty: false,
          isYou: false,
          isHost: false,
          microphone: false,
          microphonemute: false
        },
        {
          id: 11,
          name: 'Flying-Green-Man',
          ping: '0',
          inParty: false,
          isYou: false,
          isHost: false,
          microphone: true,
          microphonemute: false
        }
      ]
    }
  }
}
</script>

style <style scoped>
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
.btn-square {
  border-radius: 0;
}
.modal-popout {
  color:white;
  background: rgb(100, 100, 100);
  padding: 6px;
}
</style>
