<template>
  <div class="container">
    <section class="s-input">
      <li>
        <img class="in-icon" src="../../static/image/txm.png"/>
        <input v-model="formData.barCode" type="number" placeholder="手工输入导诊册条形码"/>
        <img class="in-sao-icon" src="../../static/image/sm.png"/>
      </li>
      <li>
        <img class="in-icon second" src="../../static/image/xm.png"/>
        <input type="text" @input="checkInput(1)" v-model="formData.username" placeholder="请输入姓名"/>
        <img v-show="inClose" class="in-close" @click="checkInput(2)" src="../../static/image/in_close.png"/>
      </li>
    </section>
    <button class="sub_button" @click="goNext()">下一步</button>
  </div>
</template>

<script>
  import units from '../tool/units'
  export default {
    name: "index",
    data() {
      return {
        inClose: false,
        formData: {
          barCode: '',
          username: '',
        },
        barCode:{
          value: '',
          error: '',
          errorV: '请输入正确的条形码！',
        },
        username:{
          value: '',
          error: '',
          errorV: '请输入姓名！',
        },
      }
    },
    methods: {
      getToken(){
        // this.$axios.post('https://apiserver.jijiankang.cn/api-rest/account/fastlogin',
        //   this.qs.stringify({
        //     "phoneNumber":"‭15601118267‬",
        //     'vcode':'243856',
        //   }),{
        //     headers: {
        //       'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        //   }).then(function(res){
        //   console.log(res.data);
        // });
        this.$axios.post(units.host('writeGroup'),
          this.qs.stringify({
            "sglcheckId":"R\\/GzmryKAg0nc52cxFJ4T0iN4iY\\/J+pkpFOAM1aNZHw=",
            'checkCityId':'110100',
            'groupCode':'1803088774',
            'personCode':'1803088774',
          }),{
            headers: {
              // 'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization':'187CDEC552923321BFC9D442ECAF2740624E8A845ECF67D1DF5CB967E0033AC2'
            }
          }).then(function(res){
          console.log(res.data);
        });
      },
      checkInput(data) {
        if (data == 1) {
          this.inClose = true;
        } else {
          this.formData.username = "";
          this.inClose = false;
        }
      },
      goNext(){
        let that = this;//
        this.$axios.get(
          units.host('getPersonBySglcheckIdName?checkUserName=张炎&sglcheckId=000101018121171903&userId=23368855'),
          // {headers:{
          //     'Authorization':'187CDEC552923321BFC9D442ECAF2740624E8A845ECF67D1DF5CB967E0033AC2'}
          // }
          )
        .then(function(res){
            if(res.data.jjk_resultCode == "0"){
              that.$router.push('/information');
            }else{
              // that.$router.push('/information');
              that.$toast("登录错误")
            }
          });
      }
    },
    created(){
      // this.getToken();
    },
  }
</script>

<style scoped>
  .container{
    margin:auto .1rem;
  }
  .s-input {
    margin-top: .5rem;
  }

  .s-input li {
    display: flex;
    flex: 1;
    width: 6rem;
    height: 1.3rem;
    border-bottom: 0.01rem solid #e0e0e0;
    margin-left: .5rem;
    padding-left: .1rem;
    position: relative;
  }

  .s-input li .in-icon {
    width: .39rem;
    height: .31rem;
    position: absolute;
    bottom: .1rem;
  }

  .s-input li .in-sao-icon {
    width: .4rem;
    height: .38rem;
    position: absolute;
    right: .1rem;
    bottom: .1rem;
  }

  .s-input li .second {
    width: .36rem;
    height: .4rem;
    position: absolute;
    bottom: .1rem;
  }

  .s-input li .in-close {
    width: .2rem;
    height: .2rem;
    position: absolute;
    right: .2rem;
    bottom: .1rem;
  }

  .s-input li input {
    border: none;
    padding-left: .5rem;
    position: absolute;
    left: .7rem;
    bottom: .1rem;
    outline: none;
    color:#4e4e4e;
    font-size:.3rem;
  }

  .s-input li input::-webkit-input-placeholder {
    color: #999999;
    font-size: .3rem;
    text-align: left;
  }
</style>
