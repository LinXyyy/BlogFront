<template>
  <div>
    <v-app-bar app color="rgba(0, 0, 0, 0)" height="60px" elevate-on-scroll>
      <v-app-bar-title style="margin: 0 150px; color: #FFFFFF">Curtain</v-app-bar-title>

      <div style="margin: 10px 0; padding: 0;">
        <v-btn text color="#FFFFFF" style="margin: auto 10px; padding: 0;" to="/write">
          <v-icon>mdi-pencil-outline</v-icon>
          新建
        </v-btn>
      </div>
    </v-app-bar>

    <router-view/>

  </div>
</template>

<script>
  import network from "@/network/network";

  export default {
    name: "Background",
    data: () => ({
      image: require('@/assets/wallhaven-3z32j3.jpg'),
      articles: '',
      backgroundImage: "url(" + require("/src/assets/Snipaste_2021-06-29_14-52-20.png") + ")"
    }),
    methods: {
      getArticles() {
        network({
          url: '/articles',
          method: 'get'
        }).then(res => {
          this.articles = res.data.articles
        })
      },
      setBackgroundImage() {
        document.body.style.backgroundImage = this.backgroundImage
        document.body.style.backgroundSize = '100%'
        document.body.style.backgroundAttachment = 'fixed'
      },
      clearBackgroundImage() {
        document.body.style.backgroundImage = ''
      }
    },
    mounted() {
      this.setBackgroundImage()
    },
    beforeDestroy() {
      this.clearBackgroundImage()
    }
  }
</script>

<style scoped>

</style>