<template>
  <v-app style="background-color: rgba(0, 0, 0, 0)">
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import AppBar from "@/views/appbar/AppBar";
  import Profile from "@/views/main/profile/Profile";
  import network from "@/network/network";
  export default {
    components: {Profile, AppBar},
    data: () => ({
      image: require('@/assets/wallhaven-3z32j3.jpg'),
    })
  }
</script>

<style lang="scss">
</style>
