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
  export default {
    name: "index",
    data() {
      return {
        inClose: false,
        formData: {
          barCode: '',
          username: '',
        }
      }
    },
    methods: {
      checkInput(data) {
        console.log(12);
        if (data == 1) {
          this.inClose = true;
        } else {
          this.formData.username = "";
          this.inClose = false;
        }
      },
      goNext(){
        let that = this;that.formData
        axios.post('/user', {})
          .then(function (response) {
            console.log(response);
          })
        this.$router.push('/information')
      }
    }
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
