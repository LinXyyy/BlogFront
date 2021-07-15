<template>
  <v-card width="220px" height="300px" class="text-center">
    <v-avatar size="112px" style="margin: 20px 0">
      <img :src="avatar" alt="Curtain">
    </v-avatar>
    <div style="font-size: 18px">
      Curtain
    </div>
    <div>
      喝水选手
    </div>
    <div>
      <v-row style="margin: 20px; padding: 0;">
        <v-spacer/>
        <v-col>
          <v-menu open-on-hover top offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>
                  mdi-qqchat
                </v-icon>
              </v-btn>
            </template>

            <v-img :src="qq" height="150px" width="150px"/>
          </v-menu>
        </v-col>
        <v-col>
          <v-menu open-on-hover top offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>
                  mdi-wechat
                </v-icon>
              </v-btn>
            </template>

            <v-img :src="vx" height="150px" width="150px"/>
          </v-menu>
        </v-col>
        <v-col>
          <v-btn icon @click="toGithub">
            <v-icon>
              mdi-github
            </v-icon>
          </v-btn>
        </v-col>
        <v-spacer/>
      </v-row>
    </div>
  </v-card>
</template>

<script>
  export default {
    name: "Profile",
    data:() => ({
      avatar: require("@/assets/avatar.jpg"),
      qq: require("@/assets/qq.png"),
      vx: require("@/assets/vx.png")
    }),
    methods: {
      toGithub() {
        let a = document.createElement('a')
        a.href = 'https://github.com/LinXyyy'
        a.click()
      }
    }
  }
</script>

<style scoped>

</style>