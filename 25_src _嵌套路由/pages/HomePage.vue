<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/homePage/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item active" active-class="active" to="/homePage/message">Message</router-link>
        </li>
      </ul>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'HomePage'
}
</script>

<style>

</style>