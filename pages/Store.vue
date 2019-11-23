<template>
  <div class="row">
    <div class="col" style="background: rgba(66, 66, 66, 0.7); margin:15px;padding-top:15px;padding-bottom:15px;">
      <div class="row">
        <div class="col">
          <div class="row">
            <div v-for="(item, i) in storeItems" :key="i" class="col-2">
              <div class="row">
                <div class="col" style="padding-top:5px;padding-bottom:5px;">
                  <button @click="$modal.show('AreYouSure')" style="background:rgb(55,55,55);border: 1px solid black;color:white;height:230px">
                    <img :src="item.pic" width="100px">
                    <p><br>{{ item.name }}<br>{{ item.price }}</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-end">
        <div class="col">
          <button
            @mouseenter="$store.commit('setHoverText', 'Exit back to the main menu.')"
            @click="$router.push('/')"
            type="button"
            class="btn btn-secondary btn-square"
          >
            Exit
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
      name="Purchased"
      transition="nice-modal-fade"
      width="30%"
      height="auto"
    >
      <div class="container modal-popout">
        <div class="row justify-content-center">
          <p>Your item has been purchased!</p>
        </div>
        <div class="row">
          <div class="col align-self-center">
            <button @click="$modal.hide('Purchased')" class="menu-btn btn btn-secondary btn-square" style="margin:auto;display:block;">
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
          <p>Are you sure you want to purchase this item?</p>
        </div>
        <div class="row justify-content-between">
          <div class="col justify-content-center">
            <button @click="$modal.hide('AreYouSure'); $modal.show('Purchased')" class="menu-btn btn btn-secondary btn-square">
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
  components: {
  },
  data () {
    return {
      storeItems: [{
        pic: '/cp.png',
        name: '100 CoD Points',
        desc: '100 CoD Points',
        price: '$1'
      },
      {
        pic: '/shovel.png',
        name: 'German Shovel',
        desc: 'A German Shovel',
        price: '50 CoD Points'
      },
      {
        pic: '/dress.png',
        name: 'Medic Dress',
        desc: 'A German Shovel',
        price: '90 CoD Points'
      },
      {
        pic: '/helm.png',
        name: 'Helmet',
        desc: 'A Helmet',
        price: '40 CoD Points'
      },
      {
        pic: '/helm2.png',
        name: 'Helmet',
        desc: 'A Helmet',
        price: '45 CoD Points'
      },
      {
        pic: '/gun.png',
        name: 'PPSH',
        desc: 'A PPSH',
        price: '205 CoD Points'
      },
      {
        pic: '/gun2.png',
        name: 'MP40',
        desc: 'A PPSH',
        price: '205 CoD Points'
      }]
    }
  },
  mounted () {
    this.$store.commit('setCurrentMenuText', `Store`)
  }
}
</script>

<style>
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
