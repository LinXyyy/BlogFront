<template>
  <div>
    <app-bar></app-bar>
    <div style="margin-top: -60px">
      <v-layout column wrap align-center justify-center style="padding: 10%">
        <div style="color: #FFFFFF; font-size: 36px">
          Curtain
        </div>
        <div style="color:#FFFFFF;">
          惟将终夜长开眼,报答平生未展眉
        </div>
      </v-layout>

      <router-view></router-view>

    </div>

  </div>
</template>

<script>

  import Profile from "@/views/main/profile/Profile";
  import AppBar from "@/views/appbar/AppBar";
  import ArticleCard from "@/views/article/ArticleCard";
  import network from "@/network/network";

  export default {
    name: "Main",
    components: {ArticleCard, Profile, AppBar},
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
    created() {
      this.getArticles();
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