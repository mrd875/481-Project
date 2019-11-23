<template>
  <div>
    <!-- bg vid and aud -->
    <video id="myVideo" autoplay muted loop>
      <source src="bgmenu.mp4" type="video/mp4">
    </video>
    <audio src="bgmenu.mp3" autoplay hidden loop />

    <!-- content -->
    <div class="container-fluid">
      <!-- top view -->
      <div class="row align-items-start">
        <div class="col">
          <TopBar />
        </div>
      </div>
      <div style="height:5px;" />

      <!-- middle view -->
      <div class="row align-items-start" style="min-height:500px;">
        <div class="col">
          <nuxt />
        </div>
      </div>

      <div style="bottom:0;position:fixed;left:0;right:0;margin:0px 10px;margin-bottom:10px;">
        <!-- bottom scroll bar -->
        <div class="row">
          <div class="col">
            <BottomScrollBar />
          </div>
        </div>

        <!-- bottom view -->
        <div class="row align-items-end">
          <div class="col">
            <VeryBottomBar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BottomScrollBar from '~/components/BottomScrollBar'
import VeryBottomBar from '~/components/VeryBottomBar'
import TopBar from '~/components/TopBar'

export default {
  components: {
    BottomScrollBar,
    VeryBottomBar,
    TopBar
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>
