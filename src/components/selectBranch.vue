<template>
  <div class="container">
    <section>
      <div class="top-head">
        <li>套餐名称</li><li>职场精英套餐（男）</li>
      </div>
      <div class="line"></div>
      <div class="chose-branch">
        <p>选择体检分院</p>
        <div class="">
          <p>送检机构：</p>
          <li><label>北京市朝阳区潘家园9号濠景阁大厦1-2层（肿瘤医院北200米路口）</label><img class="icon_right" src="../../static/image/icon_right.png"/></li>

        </div>
        <li>套餐名称</li><li>职场精英套餐（男）</li>
      </div>
      <div class="line"></div>
      <div class="content">
        <div class="c-head">选择套餐</div>
        <li>
          <input type="checkbox" @click="choseMeal(1)"/><label>职场精英套餐（男）</label>
        </li>
        <li>
          <input type="checkbox" @click="choseMeal(2)"/><label>职场精英套餐（男）</label>
        </li>
        <li>
          <input type="checkbox" @click="choseMeal(3)"/><label>职场精英套餐（男）</label>
        </li>
        <li>
          <input type="checkbox" @click="choseMeal(4)"/><label>职场精英套餐（男）</label>
        </li>
        <li>
          <input type="checkbox" @click="choseMeal(5)"/><label>职场精英套餐（男）</label>
          <!--<input type="radio" @click="choseMeal(5)"/><label>职场精英套餐（男）</label>-->
        </li>
      </div>
    </section>
    <button class="sub_button" @click="goNext()">下一步</button>
  </div>
</template>

<script>
  export default {
    name: "selectBranch",
    data(){
      return{
        choseArr:[]
      }
    },
    components:{
    },
    methods:{
      choseMeal(val){
        this.choseArr.push(val);
        console.log(this.choseArr);
      },
      goNext(){
        this.$router.push('/branch');
      }
    },
    created(){},
  }
</script>

<style scoped>
  .top-head{
    font-size:.32rem;
    color:#333333;
    height:1.2rem;
    line-height:1.2rem;
    padding-left:.2rem;
    display: flex;
  }
  .line{
    border-bottom:.3rem solid #f4f7f9;
    margin-left:-.2rem;
    margin-right:-.2rem;
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
  }
  .content li{
    height:1.1rem;
    line-height:1.1rem;
    border-bottom:.01rem solid #f3f3f3;
  }
  .content li label{
    margin-left:.2rem;
    vertical-align: middle;
  }
  .content li input[type=checkbox]{
    width:.34rem;
    height:.34rem;
    border:.01rem solid #c9c9c9;
    border-radius: .5rem;
    -webkit-appearance: none;
    outline: none;
    margin-right:.1rem;
    vertical-align: middle;
  }
  .content input[type=checkbox]:checked{
    background:url("../../static/image/checked.png") no-repeat;
    background-size:.34rem .34rem;
  }
  /*.content li input[type=radio]{*/
  /*width:.34rem;*/
  /*height:.34rem;*/
  /*border:.01rem solid #c9c9c9;*/
  /*border-radius: .5rem;*/
  /*-webkit-appearance: none;*/
  /*outline: none;*/
  /*margin-right:.1rem;*/
  /*vertical-align: middle;*/
  /*}*/
  /*.content input[type=radio]:checked{*/
  /*background:url("../../static/image/checked.png") no-repeat;*/
  /*background-size:.34rem .34rem;*/
  /*}*/
</style>
