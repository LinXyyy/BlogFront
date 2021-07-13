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
      <v-btn style="margin: 0 20px;" outlined color="#FF0000" @click="save">保存</v-btn>
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
    name: "Create",
    data:() => ({
      title: '',
      summary: '',
      classify: '',
      text: '',
      tip: '',
      showSnackbar: false,
      timeout: 800
    }),
    methods: {
      save() {
        let title = this.title
        let summary = this.summary
        let classify = this.classify
        let text = this.text

        if (title === '' || summary === '' || classify === '' || text === '') {
          this.showSnackbar = !this.showSnackbar
          this.tip = '存在空值,请检查'
          return
        }

        let article = qs.stringify({
          title,
          summary,
          classify,
          text
        })

        network({
          url: '/add',
          method: 'post',
          data: article
        }).then(res => {
          if (res.code === 0) {
            this.showSnackbar = !this.showSnackbar
            this.tip = '发布成功'
            this.title = ''
            this.summary = ''
            this.classify = ''
            this.text = ''
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>