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
      text: ''
    }),
    methods: {
      save() {
        let title = this.title
        let summary = this.summary
        let classify = this.classify
        let text = this.text

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
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>

</style>