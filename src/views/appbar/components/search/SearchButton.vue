<template>
  <div>
    <v-btn v-if="!showSearchEdit" icon style="margin: 0 20px;" class="searchButton" @click="switchButton">
      <v-icon color="#FFFFFF">mdi-magnify</v-icon>
    </v-btn>
    <v-text-field placeholder="找点什么.." @keyup.enter="search" autocomplete="false" hide-details prepend-inner-icon="mdi-magnify" v-model="searchText" color="#FFFFFF" outlined dense autofocus v-click-outside="switchButton" v-if="showSearchEdit"/>
  </div>
</template>

<script>
  import network from "@/network/network";

  export default {
    name: "SearchButton",
    data:() => ({
      showSearchEdit: false,
      searchText: ''
    }),
    methods: {
      switchButton() {
        this.showSearchEdit = !this.showSearchEdit
        this.searchText = ''
      },
      search() {
        let title = this.searchText

        network({
          url: '/select',
          method: 'get',
          params: {
            title
          }
        }).then(res => {
          this.$store.commit('setArticles', res.data)
        })
      }
    }
  }
</script>

<style scoped>

</style>