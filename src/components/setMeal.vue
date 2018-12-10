<template>
  <div class="container">
    <section>
      <div class="top-head">
        <li>人员分组</li><li>35岁以上男</li>
      </div>
      <div class="line"></div>
      <div class="content">
        <div class="c-head">选择套餐</div>
        <li>
          <label class="radio-box">
            <input type="radio" @click="choseMeal(1)" name="group">
            <span class="radio-style">职场精英套餐（男）</span>
          </label>
        </li>
        <li>
          <label class="radio-box">
            <input type="radio" @click="choseMeal(2)" name="group">
            <span class="radio-style">职场精英套餐（男）</span>
          </label>
        </li>
        <li>
          <label class="radio-box">
            <input type="radio" @click="choseMeal(2)" name="group">
            <span class="radio-style">职场精英套餐（男）</span>
          </label>
        </li>
      </div>
    </section>
    <button class="sub_button" @click="goNext()">下一步</button>
  </div>
</template>

<script>
  export default {
    name: "setMeal",
    data(){
      return{
        choseArr:[]
      }
    },
    components:{
    },
    methods:{
      choseMeal(val){
        // this.choseArr.push(val);
        console.log(this.choseArr);
      },
      goNext(){
        this.$router.push('/branchTime');
      }
    },
    created(){},
  }
</script>

<style scoped>
  .container{
    /*background-color:#F4F7F9;*/
    padding:.1rem .2rem .2rem .2rem;
  }
  .top-head{
    font-size:.32rem;
    color:#333333;
    height:1.2rem;
    line-height:1.2rem;
    padding-left:.2rem;
    display: flex;
  }
  .top-head li:first-child{
    font-weight: bold;
  }
  .line{
    border-bottom:.3rem solid #f4f7f9;
    margin-left:-.195rem;
    margin-right:-.195rem;
  }
  .top-head li:last-child{
    flex: 1;
    text-align: right;
    margin-right:.2rem;
  }
  .content{
    font-size:.3rem;
    color:#333333;
    margin:auto .2rem;
  }
  .content .c-head{
    height:1.2rem;
    line-height:1.2rem;
    border-bottom:0.01rem solid #f3f3f3;
    font-size:.3rem;
    color:#333333;
    font-weight: bold;
  }
  .content li{
    height:1.1rem;
    line-height:1.1rem;
    border-bottom:.01rem solid #f3f3f3;
    /*display: flex;*/
    /*flex: 1;*/
  }
  .content li label{
    margin-left:.2rem;
    vertical-align: middle;
  }
  .content input[type="radio"] {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .radio-style::before {
    display: inline-block;
    width: .34rem;
    height: .34rem;
    border-radius: 50%;
    border: .01rem solid #c9c9c9;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    content: "";
    position: relative;
    top: .07rem;
    right: .25rem;
  }
  .content input[type="radio"]:checked + .radio-style::before{
    background:url("../../static/image/checked.png") no-repeat;
    background-size:.34rem .34rem;
  }
</style>
