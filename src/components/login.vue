<template>
  <div class="container">
    <section class="s-input">
      <li>
        <img class="in-icon" src="../../static/image/mobile.png"/>
        <input v-model="formData.mobile" @input="checkInput(1)" type="number" placeholder="请输入手机号"/>
        <img v-show="inClose" class="in-close" @click="checkInput(2)" src="../../static/image/in_close.png"/>
      </li>
      <li>
        <img class="in-icon second" src="../../static/image/msg.png"/>
        <input type="text"  v-model="formData.code" placeholder="请输入验证码"/>
        <span class="msg-code" @click="getCode()">{{codeMsg}}</span>
      </li>
      <div class="s-msg">
        <p v-if="failMsg" class="fail-msg">{{errorMsg}}</p>
        <p v-show="timeOut" class="time-out" v-html="timeMsg"></p></div>
    </section>
    <button class="sub_button" @click="goNext()">登录</button>
  </div>
</template>

<script>
  import units from '../tool/units'
  export default {
    name: "login",
    data() {
      return {
        inClose: false,
        formData: {
          mobile: '',
          code: '',
        },
        mobile: {
          value: '',
          error: '',
          errorV: '请输入正确的手机号！',
          reg: /^[0-9]{11}$/
        },
        code: {
          value: '',
          error: '',
          errorV: '请输入正确的验证码！',
          reg: /^[0-9]{6}$/
        },
        codeMsg:'获取验证码',
        failMsg:false,
        timeOut:false,
        timeMsg:'',
        num:'',//倒计时
        timer: null,//倒计时
        flag:1,//获取验证可不可点击
        errorMsg:'',
      }
    },
    methods: {
      getToken(){
        this.$axios.post('https://apiserver.jijiankang.cn/api-rest/account/fastlogin',
          this.qs.stringify({
            "phoneNumber":"‭15601118267‬",
            'vcode':'243856',
          }),{
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then(function(res){
          console.log(res.data);
        });
      },
      getCode(){
        let that = this;
        if(!that.formData.mobile && !that.mobile.reg.test(that.formData.mobile)) {
          that.errorMsg = that.mobile.errorV;
          that.failMsg = true;
          return false;
        } else {
          that.failMsg = false;
        };
        if(that.flag == 1) {
          that.num = 60;
          that.flag = 2;
          that.timeOut = true;
          that.timer = setInterval(function () {
            that.num--;
            that.timeMsg = "获取中" + that.num + "S";
            if (that.num <= 0) {
              that.timeOut = false;
              that.codeMsg = "重新获取";
              clearInterval(that.timer);
              that.timer = null;
              that.flag = 1;
            }
          }, 1000);
        }
      },
      checkInput(data) {
        if (data == 1) {
          this.inClose = true;
        } else {
          this.formData.mobile = "";
          this.inClose = false;
        }
      },
      goNext(){
        let that = this;
        if(!that.formData.mobile && !that.mobile.reg.test(that.formData.mobile)) {
          that.errorMsg = that.mobile.errorV;
          that.failMsg = true;
          return false;
        } else {
          that.failMsg = false;
        };
        if(!that.formData.code && !that.code.reg.test(that.formData.code)){
          that.errorMsg = that.code.errorV;
          that.failMsg = true;
          return false;
        }else{
          that.failMsg = false;
        }
        this.$axios.get(units.host('getPersonBySglcheckIdName?checkUserName=张炎&sglcheckId=000101018121171903&userId=23368855'))
          .then(function(res){
            if(res.data.jjk_resultCode == "0"){
              that.$router.push('/information');
            }else{
              that.$router.push('/information');
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
  .s-input li .msg-code{
    flex: 1;
    font-size:.3rem;
    color:#4873D2;
    position: absolute;
    bottom: .1rem;
    right:.1rem;
  }
  .s-input li .in-icon {
    width: .3rem;
    height: .41rem;
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
    height: .32rem;
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
    margin-left: .15rem;
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
  .s-msg{
    display: flex;
    flex: 1;
    margin-top:.2rem;
  }
  .s-msg .fail-msg{
    font-size:.26rem;
    color:#F55823;
    margin-left:.6rem;
  }
  .s-msg .time-out{
    font-size:.3rem;
    color:#999999;
    flex: 1;
    text-align: right;
    margin-right:.85rem;
  }
</style>
