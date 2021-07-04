<template>
  <v-card class="textMain">
    <div style="text-align: center" class="articleTitle">
      {{ text.title }}
    </div>

    <v-row style="margin: 0; padding: 20px 0;color: #757575">
      <v-spacer></v-spacer>
      <v-icon size="20px">mdi-clock-time-seven-outline</v-icon>
      {{ date }}
      <v-divider vertical style="margin: 0 10px"></v-divider>
      <v-icon>mdi-bookmark-outline</v-icon>
      {{ text.classification }}
      <v-spacer></v-spacer>
    </v-row>

    <v-md-preview :text="text.text"/>
  </v-card>
</template>

<script>
  import network from "@/network/network";
  import * as dayjs from "dayjs";

  export default {
    name: "TextPage",
    data:() => ({
      text: ''
    }),
    computed: {
      date() {
        return dayjs(this.text.date).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    methods: {
      getText() {
        network({
          url: '/getArticleById',
          method: 'get',
          params: {
            id: this.$store.state.articleId
          }
        }).then(res => {
          this.text = res.data
        })
      }
    },
    created() {
      this.getText()
    }
  }
</script>

<style scoped>
  .textMain {
    background-color: #FFFFFF;
    width: 900px;
    margin: 0 auto 100px auto;
    padding: 0 50px;
  }
  .articleTitle {
    font-size: 24px;
    color: #7D99B7;
    text-align: center;
    padding-top: 40px;
  }
</style>