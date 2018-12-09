<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="header">
      <div class="left"><p class="top_change"></p></div>
      <p>头看看是否就是部</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family:PingFangSC-Regular, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
html {
   font-size: calc(100vw / 7.5);
 }
.container{
  margin:auto .1rem;
}
li{
  list-style: none;
}
  .header{
    display:flex;
    height:1rem;
    line-height:1rem;
    border-bottom:.01rem solid #ebebeb;/*fe*/
    position:relative;
  }
  .left{
    position:absolute;
    top:35%;
    left:5%;
  }
  .header p{
    font-size:.33rem;
    /*line-height:1rem;*/
    /*margin-left:32%;*/
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  .top_change{
    width: 12px;
    height: 12px;
    border-top: 2px solid #acacac;
    border-left: 2px solid #acacac;
    transform: rotate(-45deg);
  }
.sub_button {
  background: linear-gradient(to right, #7EABEB, #4873D2);
  width: 7rem;
  height: 1rem;
  line-height: 1rem;
  border-radius: 5rem;
  border: none;
  color: #ffffff;
  position: fixed;
  bottom: .5rem;
  outline: none;
}
</style>
