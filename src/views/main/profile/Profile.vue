<template>
  <v-card width="220px" height="300px" class="text-center">
    <v-avatar size="112px" style="margin: 20px 0">
      <img :src="avatar" alt="Curtain">
    </v-avatar>
    <div style="font-size: 18px">
      Curtain
    </div>
    <div>
      喝水选手
    </div>
    <div>
      ad
    </div>
  </v-card>
</template>

<script>
  export default {
    name: "Profile",
    data:() => ({
      avatar: require("@/assets/avatar.jpg")
    }),
  }
</script>

<style scoped>

</style>