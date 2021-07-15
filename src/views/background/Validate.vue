<template>
  <v-img height="100vh" width="100vw" :src="backgroundImage">
    <div class="content">
      <input v-model="account" type="text" id="id" name="account" value="" autocomplete="off" placeholder="account">
      <input v-model="password"  type="password" id="password" name="password" placeholder="password">
      <button class="login" id="login" @click="validate">login</button>
    </div>
  </v-img>
</template>

<script>
  import * as qs from "qs";
  import network from "@/network/network";

  export default {
    name: "Validate",
    data:() => ({
      backgroundImage: require("@/assets/backgroundimage.jpg"),
      account: '',
      password: ''
    }),
    methods: {
      validate() {
        let account = this.account
        let password = this.password

        let user = qs.stringify({
          account,
          password
        })

        network({
          url: '/login',
          method: 'post',
          data: user
        }).then(res => {
          if (res == 0) {
            this.$router.push('/manage')
          } else {
            this.account = ''
            this.password = ''
          }
        })
      }
    }
  }
</script>

<style scoped>
  .content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
  }
  .content input[type="text"],.content input[type="password"]{
    background: none;
    display: block;
    margin: 15px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 10px 10px;
    width: 250px;
    outline: none;
    border-radius: 24px;
    transition: 0.25s;
  }
  .content input[type="text"]:focus,.content input[type="password"]:focus{
    width: 300px;
    border-color: #2ecc71;
  }
  .content .login{
    background: none;
    display: block;
    margin: 1px auto;
    text-align: center;
    border: 2px solid #2ecc71;
    padding: 10px 40px;
    outline: none;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
  }
  .content .login:hover{
    background: #2ecc71;
    color: white;
  }
</style>