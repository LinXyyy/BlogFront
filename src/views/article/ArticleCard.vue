<template>
  <div>
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

      <div v-if="$route.path === '/manage'">
        <v-row>
          <v-spacer/>
          <v-btn text outlined color="#0380E9" style="margin: 30px 0;" @click="updateArticle(article.id)">修改</v-btn>
          <v-btn text outlined color="#FF0000" style="margin: 30px;" @click="deleteById(article.id)">删除</v-btn>
        </v-row>
      </div>
    </v-card>

    <v-snackbar v-model="showSnackbar" :timeout="timeout" top color="#FB7299">
      {{ snackbarText }}
    </v-snackbar>
  </div>
</template>

<script>
  import * as dayjs from "dayjs";
  import network from "@/network/network";
  import qs from "qs";

  export default {
    name: "ArticleCard",
    data: () => ({
      snackbarText: '',
      showSnackbar: false,
      timeout: 800
    }),
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
      },
      deleteById(id) {
        network({
          url: '/delete',
          method: 'post',
          data: qs.stringify({
            id
          })
        }).then(res => {
          if (res.code === 0) {
            network({
              url: '/articles',
              method: 'get'
            }).then(res => {
              this.$store.commit('setArticles', res.data)
            })
          }
          else {
            this.showSnackbar = !this.showSnackbar
            this.snackbarText = '删除失败'
          }
        })
      },
      updateArticle(id) {
        this.$store.commit('setArticleId', id)
        this.$router.push('/update')
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