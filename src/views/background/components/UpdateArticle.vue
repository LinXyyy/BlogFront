<template>
  <div>
    <v-row style="padding: 0; margin: 0">
      <v-spacer></v-spacer>
      <v-col cols="2" style="padding: 0; margin: 0 20px">
        <v-text-field v-model="title" label="标题" clearable autocomplete="off" outlined dense hide-details color="#FFFFFF"></v-text-field>
      </v-col>
      <v-col cols="2" style="padding: 0; margin: 0 20px">
        <v-text-field v-model="summary" label="简介" clearable autocomplete="off" outlined dense hide-details color="#FFFFFF"></v-text-field>
      </v-col>
      <v-col cols="2" style="padding: 0; margin: 0 20px">
        <v-text-field v-model="classify" label="分类" clearable autocomplete="off" outlined dense hide-details color="#FFFFFF"></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-btn style="margin: 0 20px;" outlined color="#FF0000" @click="saveUpdate">保存</v-btn>
    </v-row>

    <mavon-editor v-model="text" style="height: 80vh; width: 75vw; margin: 20px auto"></mavon-editor>

    <v-snackbar v-model="showSnackbar" :timeout="timeout" top color="#FB7299">
      {{ tip }}
    </v-snackbar>

  </div>
</template>

<script>
  import * as qs from "qs";
  import network from "@/network/network";

  export default {
    name: "UpdateArticle",
    data:() => ({
      title: '',
      summary: '',
      classify: '',
      text: '',
      article: '',
      tip: '',
      showSnackbar: false,
      timeout: 800
    }),
    methods: {
      getText() {
        network({
          url: '/getArticleById',
          method: 'get',
          params: {
            id: this.$store.state.articleId
          }
        }).then(res => {
          this.text = res.data.text
          this.title = res.data.title
          this.summary = res.data.summary
          this.classify = res.data.classification
          this.article = res.data
        })
      },
      saveUpdate() {
        let article = {}
        if (this.title !== this.article.title) {
          Object.assign(article, {title: this.title})
        }
        if (this.summary !== this.article.summary) {
          Object.assign(article, {summary: this.summary})
        }
        if (this.classify !== this.article.classification) {
          Object.assign(article, {classification: this.classify})
        }
        if (this.text !== this.article.text) {
          Object.assign(article, {text: this.text})
        }
        Object.assign(article, { id: this.$store.state.articleId })

        article = qs.stringify(article)

        network({
          url: '/updateArticle',
          method: 'post',
          data: article
        }).then(res => {
          this.showSnackbar = true
          if (res.code === 0) {
            this.tip = '修改成功'
            this.$router.push('/manage')
            network({
              url: '/articles',
              method: 'get'
            }).then(res => {
              this.$store.commit('setArticles', res.data)
            })
          }else {
            this.tip = '修改失败'
          }
        })
      }
    },
    created() {
      this.getText()
    }
  }
</script>

<style scoped>

</style>