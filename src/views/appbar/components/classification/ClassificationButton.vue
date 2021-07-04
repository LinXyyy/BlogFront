<template>
  <v-menu open-on-hover bottom offset-y transition="slide-y-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text v-bind="attrs" v-on="on" color="#FFFFFF" style="margin: auto 10px; padding: 0;">
        <v-icon>mdi-bookmark</v-icon>
        分类
      </v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, index) in classifications" :key="index">
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
  import network from "@/network/network";

  export default {
    name: "ClassificationButton",
    data:() => ({
      classifications: ''
    }),
    methods: {
      getClassifications() {
        network({
          url: '/classifications',
          method: 'get'
        }).then(res => {
          this.classifications = res.data
        })
      }
    },
    created() {
      this.getClassifications();
    }
  }
</script>

<style scoped>

</style>