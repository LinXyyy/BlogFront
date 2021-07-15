<template>
  <div style="margin: 50px 0">
    <v-row style="margin-top: 0; padding: 0;">
      <v-spacer></v-spacer>
      <v-col v-if="$store.state.articles != null">
        <div v-for="article in $store.state.articles" style="margin-bottom: 40px;">
          <article-card :article="article"></article-card>
        </div>
      </v-col>
      <v-col v-else>
        <v-card width="860px" height="200px" style="margin: 0 100px;">
          <div class="noResult">
            <v-icon size="72px" color="#DDDDDD">mdi-file-find-outline</v-icon>
            <span style="font-size: 36px; color: #DDDDDD">没有搜索结果</span>
          </div>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
import ArticleCard from "@/views/article/ArticleCard";
export default {
  name: "Manage",
  components: {ArticleCard}
}
</script>

<style scoped>

</style>