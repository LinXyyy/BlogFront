<template>
  <v-row style="margin-top: 0; padding: 0;">
    <v-spacer></v-spacer>
    <profile/>
    <v-col>
      <div v-for="article in $store.state.articles" style="margin-bottom: 40px;">
        <article-card :article="article"></article-card>
      </div>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
import ArticleCard from "@/views/article/ArticleCard";
import Profile from "@/views/main/profile/Profile";
import network from "@/network/network";

export default {
  name: "Overview",
  components: {ArticleCard, Profile},
  /*data: () => ({
    articles: ''
  }),*/
  methods: {
    getArticles() {
      network({
        url: '/articles',
        method: 'get'
      }).then(res => {
        this.$store.commit("setArticles", res.data)
      })
    }
  },
  created() {
    this.getArticles();
  }
}
</script>

<style scoped>

</style>