<template>
  <div class="container">
    <div class="information">
      <div>受检人：沈鸿<i>已预约</i></div>
      <div>预约时间：2018-12-20</div>
      <div class="in-branch">预约分院：北京潘家园分院
      <p class="icon_right"><img  src="../../static/image/icon_right.png"/></p></div>
      <div>体检项目：慈铭体检套餐</div>
      <div v-if="isShow" class="in-button">
        <p class="ss">取消预约</p>
        <p class="edit">修改预约</p>
      </div>
    </div>
    <div class="information">
      <div>受检人：沈鸿<i>已预约</i></div>
      <div>预约时间：2018-12-20</div>
      <div class="in-branch">预约分院：北京潘家园分院
        <p class="icon_right"><img  src="../../static/image/icon_right.png"/></p></div>
      <div>体检项目：慈铭体检套餐</div>
      <div class="in-button">
        <p class="ss">取消预约</p>
        <p class="edit">修改预约</p>
      </div>
    </div>
    <div class="information">
      <div>受检人：沈鸿<i>已预约</i></div>
      <div>预约时间：2018-12-20</div>
      <div class="in-branch">预约分院：北京潘家园分院
        <p class="icon_right"><img  src="../../static/image/icon_right.png"/></p></div>
      <div>体检项目：慈铭体检套餐</div>
      <div class="in-button">
        <p class="ss">取消预约</p>
        <p class="edit">修改预约</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "myAppointment",
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
  padding:.4rem;
}
  .information i{
    font-style: normal;
    font-size:.3rem;
    color:#4873D2;
    flex: 1;
    text-align: right;
  }
  .information div{
    padding-top:.1rem;
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
