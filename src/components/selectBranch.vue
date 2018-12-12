<template>
  <div class="container">
    <section class="content">
      <div class="msg-box">
        <label class="radio-box">
          <input type="radio" @click="choseMeal(1)" name="group">
          <span class="radio-style">
            <p>北京潘家园分院</p>
            <p>北京市朝阳区潘家园9号濠景阁大厦1-2层（肿瘤医院北200米路口）</p>
        </span>
        </label>
      </div>
      <div class="msg-box">
        <label class="radio-box">
          <input type="radio" @click="choseMeal(2)" name="group">
          <span class="radio-style">
            <p>北京亚运村分院</p>
            <p>北京市朝阳区北土城西路7号（国恒基业大厦二层)</p>
        </span>
        </label>
      </div>
      <div class="msg-box">
        <label class="radio-box">
          <input type="radio" @click="choseMeal(3)" name="group">
          <span class="radio-style">
            <p>北京西直门分院</p>
            <p>北京市西城区西直门外大街1号西环广场T1写字楼（南座）15层</p>
        </span>
        </label>
      </div>
    </section>
    <button class="sub_button" @click="goNext()">下一步</button>
  </div>
</template>

<script>
  import units from '../tool/units'
  export default {
    name: "setMeal",
    data() {
      return {
        choseArr: [],
      }
    },
    components: {},
    methods: {
      getList(){
        let that = this;
        this.$axios.post(units.host('writeGroup'),
          this.qs.stringify({
            "sglcheckId":"R\\/GzmryKAg0nc52cxFJ4T0iN4iY\\/J+pkpFOAM1aNZHw=",
            'checkCityId':'110100',
            'groupCode':'1803088774',
            'personCode':'1803088774',
          }),{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(function(res){
          console.log(res.data);
        });
      },
      choseMeal(id) {
        console.log(id)
      },
      goNext() {
        this.$router.push('/branchTime');
      }
    },
    created() {
      this.getList();
    },
  }
</script>

<style scoped>
  .container {
    margin: auto .2rem;
  }

  .content {
    font-size: .3rem;
    color: #333333;
  }

  .msg-box {
    padding: 0 .4rem .4rem .4rem;
    border-bottom: .01rem solid #f3f3f3;
  }

  .msg-box label {
    display: flex;
  }

  .content .radio-box .radio-style p:first-child {
    font-size: .3rem;
    color: #333333;
  }

  .content .radio-box .radio-style p {
    font-size: .28rem;
    color: #666666;
    margin-left: .2rem;
  }

  .radio-style {
    position: relative;
  }

  .radio-box input[type="radio"] {
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
    top: .45rem;
    right: .25rem;
  }

  input[type="radio"]:checked + .radio-style::before {
    background: url("../../static/image/checked.png") no-repeat;
    background-size: .34rem .34rem;
  }
</style>
