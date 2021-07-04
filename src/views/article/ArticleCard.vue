<template>
  <v-card width="860px" style="margin: 0 100px;">
    <div style="text-align: center" class="articleTitle">
      <v-btn text class="articleTitle" @click="showArticleText(article.id)">{{ article.title }}</v-btn>
    </div>

    <v-row style="margin: 0; padding: 20px 0;color: #757575">
      <v-spacer></v-spacer>
      <v-icon size="20px">mdi-clock-time-seven-outline</v-icon>
      {{ date }}
      <v-divider vertical style="margin: 0 10px"></v-divider>
      <v-icon>mdi-bookmark-outline</v-icon>
      {{ article.classification }}
      <v-spacer></v-spacer>
    </v-row>

    <div class="text-center" style="margin: 0; padding-bottom: 20px">
      {{ article.summary }}
    </div>

  </v-card>
</template>

<script>
  import * as dayjs from "dayjs";

  export default {
    name: "ArticleCard",
    props: {
      article: ''
    },
    computed: {
      date() {
        return dayjs(this.article.date).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    methods: {
      showArticleText(id) {
        this.$store.commit('setArticleId', id)
        this.$router.push('/text')
      }
    }
  }
</script>

<style scoped>
  .articleTitle {
    font-size: 24px;
    color: #7D99B7;
    text-align: center;
    padding-top: 40px;
  }
</style>