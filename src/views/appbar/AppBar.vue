<template>
  <v-app-bar app color="rgba(0, 0, 0, 0)" height="60px" elevate-on-scroll>
    <v-app-bar-title style="margin: 0 150px; color: #FFFFFF">Curtain</v-app-bar-title>

    <div style="margin: 10px 0; padding: 0;">
      <v-btn text color="#FFFFFF" style="margin: auto 10px; padding: 0;" @click="toMain()">
        <v-icon>mdi-home</v-icon>
        首页
      </v-btn>

      <classification-button/>

      <v-btn text color="#FFFFFF" @click="toBackGround" style="margin: auto 10px; padding: 0;">
        <v-icon>mdi-account-lock</v-icon>
        后台
      </v-btn>
    </div>

    <v-spacer/>

    <search-button/>
  </v-app-bar>
</template>

<script>
  import ClassificationButton from "@/views/appbar/components/classification/ClassificationButton";
  import SearchButton from "@/views/appbar/components/search/SearchButton";
  import network from "@/network/network";
  export default {
    name: "AppBar",
    components: {SearchButton, ClassificationButton},
    data: () => ({

    }),
    methods: {
      toBackGround() {
        this.$router.push('/validate')
      },
      toMain() {
        if (this.$route.path !== '/') {
          this.$router.push('/')
        }
        network({
          url: '/articles',
          method: 'get'
        }).then(res => {
          this.$store.commit("setArticles", res.data)
        })
      }
    }
  }
</script>

<style scoped>

</style>