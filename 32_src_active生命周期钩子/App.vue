<template>
  <div>
    <testPage></testPage>
    <BannerPage></BannerPage>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->
          <router-link class="list-group-item " active-class="active" to="/AboutPage">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/HomePage">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerPage from './components/BannerPage.vue'
import testPage from './components/testPage.vue'
export default {
  name: "App",
  components:{
    BannerPage:BannerPage,
    testPage:testPage
  },
}
</script>
<style lang="css" scoped>

</style>



