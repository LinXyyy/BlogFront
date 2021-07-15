<template>
  <div>
    <v-app-bar app color="rgba(0, 0, 0, 0)" height="60px" elevate-on-scroll>
      <v-app-bar-title style="margin: 0 150px; color: #FFFFFF">Curtain</v-app-bar-title>

      <div style="margin: 10px 0; padding: 0;">
        <v-btn text color="#FFFFFF" style="margin: auto 10px; padding: 0;" @click="toMain()">
          <v-icon>mdi-home</v-icon>
          首页
        </v-btn>

        <v-btn text color="#FFFFFF" style="margin: auto 10px; padding: 0;" to="/write">
          <v-icon>mdi-pencil-outline</v-icon>
          新建
        </v-btn>

        <v-btn text color="#FFFFFF" style="margin: auto 10px; padding: 0;" @click="toManage" to="/manage">
          <v-icon>mdi-border-all</v-icon>
          管理
        </v-btn>

        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="#FFFFFF" v-bind="attrs" v-on="on" style="margin: auto 10px; padding: 0; float: right;">
              <v-icon>mdi-update</v-icon>
              修改卡密
            </v-btn>
          </template>

          <v-card>
            <v-card-title style="background-color: rgba(251, 114, 144, 0.7); color:#FFFFFF;" class="text-h5 lighten-2">
              修改密码
            </v-card-title>

            <v-card-text>
              <v-text-field color="#FB7299" v-model="account" label="账号" placeholder="置空采用原账号" outlined dense hide-details style="margin: 20px 0; padding: 0;"></v-text-field>
              <v-text-field color="#FB7299" v-model="password" label="密码" placeholder="置空采用原密码" outlined dense hide-details style="margin: 20px 0; padding: 0;"></v-text-field>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="updateAorP">
                确定
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-app-bar>

    <v-snackbar v-model="showSnackbar" :timeout="timeout" top color="#FB7299">
      {{ tip }}
    </v-snackbar>

    <router-view/>

  </div>
</template>

<script>
  import network from "@/network/network";
  import qs from "qs";

  export default {
    name: "Background",
    data: () => ({
      image: require('@/assets/wallhaven-3z32j3.jpg'),
      articles: '',
      backgroundImage: "url(" + require("/src/assets/Snipaste_2021-06-29_14-52-20.png") + ")",
      dialog: false,
      account: '',
      password: '',
      tip: '',
      showSnackbar: false,
      timeout: 800
    }),
    methods: {
      getArticles() {
        network({
          url: '/articles',
          method: 'get'
        }).then(res => {
          this.articles = res.data
        })
      },
      setBackgroundImage() {
        document.body.style.backgroundImage = this.backgroundImage
        document.body.style.backgroundSize = '100%'
        document.body.style.backgroundAttachment = 'fixed'
      },
      clearBackgroundImage() {
        document.body.style.backgroundImage = ''
      },
      toMain() {
        this.$router.push('/')
      },
      toManage() {
        network({
          url: '/articles',
          method: 'get'
        }).then(res => {
          this.$store.commit('setArticles', res.data)
        })
      },
      updateAorP() {
        this.dialog = false
        let user = {}
        if (this.account !== '') {
          Object.assign(user, {account: this.account})
        }
        if (this.password !== '') {
          Object.assign(user, {password: this.password})
        }
        user = qs.stringify(user)
        network({
          url: '/updateUser',
          method: 'post',
          data: user
        }).then(res => {
          this.showSnackbar = true
          this.account = ''
          this.password = ''
          if (res.code === 0) {
            this.tip = '修改成功'
          } else {
            this.tip = '修改失败'
          }
        })
      }
    },
    mounted() {
      this.setBackgroundImage()
    },
    beforeDestroy() {
      this.clearBackgroundImage()
    }
  }
</script>

<style scoped>

</style>