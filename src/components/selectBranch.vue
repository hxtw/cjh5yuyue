<template>
  <div class="container">
    <section class="content">
      <li>
        <div class="checkbox"><input type="radio" @click="choseMeal($event)"/></div>
        <div class="chose-address">
          <p>北京潘家园分院<label>北京市朝阳区潘家园9号濠景阁大厦1-2层（肿瘤医院北200米路口）</label></p>
        </div>
      </li>
      <li>
        <div class="checkbox"><input type="radio" @click="choseMeal(2)"/></div>
        <div class="chose-address">
          <p>北京亚运村分院<label>北京市朝阳区北土城西路7号（国恒基业大厦二层)</label></p>
        </div>
      </li>
      <li>
        <div class="checkbox"><input type="radio" @click="choseMeal(3)"/></div>
        <div class="chose-address">
          <p>北京西直门分院<label>北京市西城区西直门外大街1号西环广场T1写字楼（南座）15层</label></p>
        </div>
      </li>
      <li>
        <div class="checkbox"><input type="radio" @click="choseMeal(3)"/></div>
        <div class="chose-address">
          <p>北京西直门分院<label>北京市西城区西直门外大街1号西环广场T1写字楼（南座）15层</label></p>
        </div>
      </li>
    </section>
    <button class="sub_button" @click="goNext()">下一步</button>
  </div>
</template>

<script>
  export default {
    name: "setMeal",
    data() {
      return {
        choseArr: [],
      }
    },
    components: {},
    methods: {
      choseMeal(event) {
        $(event.currentTarget).addClass('checked')
        console.log(event.currentTarget);
        // switch (val){
        //   case 1:
        //     console.log(this);
        //     break;
        //   default:
        // }
        // if(val == 1){
        //   this.isChecked = !this.isChecked;
        // }
        // this.choseArr.push(val);
        // console.log(this.choseArr);
      },
      goNext() {
        this.$router.push('/branchTime');
      }
    },
    created() {
    },
  }
</script>

<style scoped>
  .container{
    margin:auto .1rem;
  }
  .content {
    font-size: .3rem;
    color: #333333;
    margin: auto .2rem;
  }

  .content li {
    padding-bottom:.4rem;
    border-bottom: .01rem solid #f3f3f3;
    display: flex;
    flex: 1;
  }
  .content li .checkbox{
    margin-top:.4rem;
  }
  .content li .chose-address{
    margin-top:.4rem;
  }
  .content li .chose-address p{
    font-size:.3rem;
    color:#333333;
  }
  .content li .chose-address label{
    font-size:.28rem;
    color:#666666;
    display: block;
    margin-top:.1rem;
  }
  .content li input[type=radio] {
    width: .34rem;
    height: .34rem;
    border: .01rem solid #c9c9c9;
    border-radius: .5rem;
    -webkit-appearance: none;
    outline: none;
    margin-right: .2rem;
  }

  .checked{
    background: url("../../static/image/checked.png") no-repeat;
    background-size: .34rem .34rem;
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
