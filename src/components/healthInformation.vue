<template>
  <div class="container">
    <section>
      <p>为了找到更适合您的体检项目，请填写该信息</p>
      <div class="s-input">
        <li>
          <p>送检机构：</p><input type="text" @click="toShow(1)" :value="formData.institution" readonly placeholder="请选择送检机构" />
          <img class="icon_right" src="../../static/image/icon_right.png"/>
        </li>
        <li>
          <p>出生日期：</p><input type="text" @click="toShow(2)" :value="formData.birthData" readonly placeholder="请选择日期" />
          <img class="icon_right" src="../../static/image/icon_right.png"/>
        </li>
        <li>
          <p>性别：</p><input type="text" @click="toShow(3)" :value="formData.sex" readonly placeholder="请选择性别" />
          <img class="icon_right" src="../../static/image/icon_right.png"/>
        </li>
        <li>
          <p>婚否：</p><input type="text" @click="toShow(4)" :value="formData.marriage" readonly placeholder="请选择婚姻状况" />
          <img class="icon_right" src="../../static/image/icon_right.png"/>
        </li>
        <li>
          <p>人种：</p><input type="text" @click="toShow(5)" :value="formData.race" readonly placeholder="请选择人种" />
          <img class="icon_right" src="../../static/image/icon_right.png"/>
        </li>
      </div>
      <vue-pickers
        :show="show"
        :columns="columns"
        :defaultData="defaultData"
        :selectData="pickData"
        @cancel="close"
        @confirm="confirmFn"></vue-pickers>
    </section>
    <button class="sub_button" @click="goNext()">下一步</button>
  </div>
</template>

<script>
  import vuePickers from 'vue-pickers';
  export default {
    name: "healthInformation",
    data(){
      return{
        show: false,
        columns: 1,
        defaultData:[{
          text:14,
          value:14
        }],
        pickData:{},
        formData:{
          institution:'',
          birthData:'',
          sex:'',
          marriage:'',
          race:'',
        },
        typeIs:0
      }
    },
    components:{
      vuePickers
    },
    methods:{
      close() {
        this.show = false
      },
      confirmFn(val) {
        let that = this;
        that.show = false;
        switch(that.typeIs)
        {
          case 1:
            that.formData.institution = val.select1.text;
            break;
          case 2:
            that.formData.birthData = val.select1.text;
            break;
          case 3:
            that.formData.sex = val.select1.text;
            break;
          case 4:
            that.formData.marriage = val.select1.text;
            break;
          case 5:
            that.formData.race = val.select1.text;
            break;
          default:
        }
        that.defaultData = [val.select1];
        console.log(that.defaultData)
      },
      toShow(type) {
        let that = this;
        this.show = true;
        that.typeIs = type;
        if(type == 1) {
          that.pickData = {
            data1: [
              {
                text: '测试1',
                value: '1-1'
              },
              {
                text: '测试2',
                value: '1-2'
              },
              {
                text: '测试3',
                value: '1-3'
              },
              {
                text: '测试4',
                value: '1-4'
              },
            ]
          }
        }else{
          that.pickData={
            data1: [
              {
                text:14,
                value:14
              },
              {
                text:18,
                value:18
              },
              {
                text:22,
                value:22
              },
              {
                text:30,
                value:30
              },
            ]
          }
        }
      },
      goNext(){
        this.$router.push('/setMeal');
      }
    },
    created(){},
  }
</script>

<style scoped>
  section p{
    font-size:.3rem;
    color:#333333;
    border-bottom:0.01rem solid #ebebeb;
    height:1.2rem;
    line-height:1.2rem;
    padding-left:.2rem;
  }
  .s-input li{
    display: flex;
    border-bottom:0.01rem solid #ebebeb;/*f3*/
    height:1rem;
    line-height:1rem;
    position:relative;
  }
  .s-input .icon_right{
    width:.16rem;
    height:.3rem;
    position:absolute;
    right:.1rem;
    top:.35rem;
  }
  .s-input li p{
    /*height:.8rem;*/
    font-size:.32rem;
    border:none;
    line-height:1rem;
    width:2.5rem;
  }
  .s-input li input {
    border:none;
    outline: none;
    vertical-align: middle;
    height:1rem;
    text-align: right;
    width:100%;
    margin-right:.4rem;
    font-size:.32rem;
  }
</style>
