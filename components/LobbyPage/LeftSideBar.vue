<template>
  <div>
    <ul class="list-group">
      <li class="sidebar-group-items">
        <div class="btn-group dropright">
          <button
            @mouseenter="$store.commit('setHoverText', 'Change your soldier. Find options for customizing your loadouts and view stats.')"
            type="button"
            class="menu-btn btn btn-secondary dropdown-toggle btn-square"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Soldier
          </button>
          <div class="dropdown-menu">
            <a @click="$modal.show('Unimplemented')" @mouseenter="$store.commit('setHoverText', 'Change your weapon, perk and division loadouts.')" class="submenu-btn dropdown-item btn-square" href="#">Create-A-Class</a>
            <a @click="$modal.show('Unimplemented')" @mouseenter="$store.commit('setHoverText', 'Change your scorestreaks. Scorestreaks are rewards for getting score without dying.')" class="submenu-btn dropdown-item btn-square" href="#">Scorestreaks</a>
            <a @click="$modal.show('Unimplemented')" @mouseenter="$store.commit('setHoverText', 'View your stats and change your title and emblem.')" class="submenu-btn dropdown-item btn-square" href="#">Dossier</a>
          </div>
        </div>
      </li>

      <li class="sidebar-group-items">
        <div class="btn-group dropright">
          <button
            @click="$modal.show('Unimplemented')"
            @mouseenter="$store.commit('setHoverText', 'Select from a list of contracts and challenges to complete with rewards.')"
            type="button"
            class="menu-btn btn btn-secondary btn-square"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Orders
          </button>
        </div>
      </li>

      <li class="sidebar-group-items">
        <div class="btn-group dropright">
          <button
            @click="$router.push('/Social')"
            @mouseenter="$store.commit('setHoverText', 'See your friends and recent players. Invite or join them.')"
            type="button"
            class="menu-btn btn btn-secondary btn-square"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Social
          </button>
        </div>
      </li>

      <li class="sidebar-group-items">
        <div class="btn-group dropright">
          <button
            @click="$router.push('/Settings')"
            @mouseenter="$store.commit('setHoverText', 'Change settings, graphical, control and audio settings.')"
            type="button"
            class="menu-btn btn btn-secondary btn-square"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Settings
          </button>
        </div>
      </li>

      <li class="sidebar-group-items">
        <div class="btn-group dropright">
          <button
            @mouseenter="$store.commit('setHoverText', 'Exit back to the main menu of the game.')"
            @click="$modal.show('AreYouSure')"
            type="button"
            class="menu-btn btn btn-secondary btn-square"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Leave
          </button>
        </div>
      </li>
    </ul>

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
          <div class="col align-self-center">
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
      name="AreYouSure"
      transition="nice-modal-fade"
      width="30%"
      height="auto"
    >
      <div class="container modal-popout">
        <div class="row justify-content-center">
          <p>Are you sure you want to leave the lobby?</p>
        </div>
        <div class="row justify-content-between">
          <div class="col justify-content-center">
            <button @click="$modal.hide('AreYouSure'); $router.push('/'); $store.commit('setLobby', '')" class="menu-btn btn btn-secondary btn-square">
              Yes
            </button>
          </div>
          <div class="col justify-content-center">
            <button @click="$modal.hide('AreYouSure')" class="menu-btn btn btn-secondary btn-square float-right">
              No
            </button>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

.sidebar-group-items{
  list-style-type: none;
}

.menu-btn{
  width: 125px;
  border: 1px solid darkgrey;
}

.submenu-btn{
  border: 1px solid darkgrey;
  background-color:rgb(122, 122, 122);
  color: white;
}

.submenu-btn:hover{
  background-color:rgb(100, 100, 100);
}

.dropdown-menu {
  padding: 0px;
  background: rgba(0, 0, 0, 0);
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
