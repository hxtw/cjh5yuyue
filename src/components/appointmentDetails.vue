<template>
  <div class="container">
    <div class="information">
      <div class="top-head">体检项目信息<i>已预约</i></div>
      <div>体检套餐名称：职场精英体检套餐</div>
      <div>送检机构（工作单位）：北京慈铭体检公司</div>
    </div>
    <div class="information">
      <div class="top-head">受检人信息</div>
      <div>受检人：沈鸿</div>
      <div>手机号码：135*****7798</div>
      <div>证件号码：1105367868789891873</div>
      <div>年龄：61</div>
    </div>
    <div class="information">
      <div  class="top-head">体检项目信息</div>
      <div>预约时间：2018-12-20</div>
      <div>预约城市：北京</div>
      <div>预约分院：北京潘家园分院</div>
      <div>分院地址：北京市朝阳区潘家园9号濠景阁大厦1-2层（肿瘤医院北200米路口）</div>
      <div class="in-button">
        <p class="ss">取消预约</p>
        <p class="edit">修改预约</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "appointmentDetails",
    data(){
      return{
        isShow:false,
      }
    },
  }
</script>

<style scoped>
  .container{
    background-color:#F4F7F9;
    padding:0 .2rem;
  }
  .information{
    font-size:.28rem;
    color:#666666;
    background-color:#ffffff;
    border-radius: .2rem;
    margin-top:.4rem;
    padding:0 .4rem .4rem .4rem;
  }
  .information i{
    font-style: normal;
    font-size:.3rem;
    font-weight: normal;
    color:#4873D2;
    flex: 1;
    text-align: right;
  }
  .information .top-head{
    font-size:.3rem;
    color:#333333;
    font-weight: bold;
    height:1.2rem;
    line-height:1.2rem;
    border-bottom:.01rem solid #f3f3f3;
    padding-top:-.1rem;
  }
  .information div{
    padding-top:.2rem;
    font-size:.28rem;
    color:#666666;
  }
  .information .in-branch{
    display: flex;
    flex: 1;
  }
  .information .in-branch img{
    width:.16rem;
    height:.3rem;
  }
  .information .in-branch p{
    flex: 1;
    text-align: right;
  }
  .information div:first-child{
    font-size: .3rem;
    color:#333333;
    display: flex;
  }
  .information .in-branch{
    display:flex;
    flex: 1;
  }
  .in-button{
    border-top:.01rem solid #f3f3f3;
    display:flex;
    flex: 1;
    margin-top:.3rem;
    color:#4873D2;
    font-size:.26rem;
  }
  .in-button .ss,.in-button .edit{
    border-radius: .4rem;
    border:.01rem solid #4873D2;
    padding:.1rem .25rem;
    margin-left:.2rem;
  }
</style>
