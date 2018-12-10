<template>
  <div class="container">
    <div class="information" @click="goNext()">
      <div>受检人：沈鸿<i>已预约</i></div>
      <div>预约时间：2018-12-20</div>
      <div class="in-branch">预约分院：北京潘家园分院
      <p class="icon_right"><img  src="../../static/image/icon_right.png"/></p></div>
      <div>体检项目：慈铭体检套餐</div>
      <div v-if="isShow" class="in-button">
        <p class="ss" @click="changeAppoint('',1)">取消预约</p>
        <p class="edit" @click="changeAppoint('',2)">修改预约</p>
      </div>
    </div>
    <div class="information">
      <div>受检人：沈鸿<i>已预约</i></div>
      <div>预约时间：2018-12-20</div>
      <div class="in-branch">预约分院：北京潘家园分院
        <p class="icon_right"><img  src="../../static/image/icon_right.png"/></p></div>
      <div>体检项目：慈铭体检套餐</div>
      <div class="in-button">
        <p class="ss" @click="changeAppoint('',1)">取消预约</p>
        <p class="edit" @click="changeAppoint('',2)">修改预约</p>
      </div>
    </div>
    <!--<div class="information">-->
      <!--<div>受检人：沈鸿<i>已预约</i></div>-->
      <!--<div>预约时间：2018-12-20</div>-->
      <!--<div class="in-branch">预约分院：北京潘家园分院-->
        <!--<p class="icon_right"><img  src="../../static/image/icon_right.png"/></p></div>-->
      <!--<div>体检项目：慈铭体检套餐</div>-->
      <!--<div class="in-button">-->
        <!--<p class="ss" @click="changeAppoint('',1)">取消预约</p>-->
        <!--<p class="edit" @click="changeAppoint('',2)">修改预约</p>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="information">-->
      <!--<div>受检人：沈鸿<i>已预约</i></div>-->
      <!--<div>预约时间：2018-12-20</div>-->
      <!--<div class="in-branch">预约分院：北京潘家园分院-->
        <!--<p class="icon_right"><img  src="../../static/image/icon_right.png"/></p></div>-->
      <!--<div>体检项目：慈铭体检套餐</div>-->
      <!--<div class="in-button">-->
        <!--<p class="ss" @click="changeAppoint('',1)">取消预约</p>-->
        <!--<p class="edit" @click="changeAppoint('',2)">修改预约</p>-->
      <!--</div>-->
    <!--</div>  -->
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
      methods:{
        changeAppoint(id,type){
          let that = this;
          switch (type){//1：取消预约，2：修改预约，3：重新预约
            case 1:
              layer.open({
                content: '您确定要取消预约吗？'
                ,btn: ['确认','取消']
                ,yes: function(index){
                  layer.close(index);
                },no:function(){
                  console.log(111)
                }
              });
              break;
            case 2:
              layer.open({
                content: '若要修改预约需要先取消预约，您确定要先取消预约吗？'
                ,btn: ['确认','取消']
                ,yes: function(index){
                  layer.close(index);
                },no:function(){
                  that.$router.push('/information');
                }
              });
              break;
            case 3:
              that.$router.push('/information');
              break;
            default:
          }

        },
        goNext(){
          this.$router.push('/appDetails');
        },
      },
      created(){},
    }
</script>

<style scoped>
  .container{
    background-color:#F4F7F9;
    padding:.1rem .2rem .2rem .2rem;
  }
.information{
  font-size:.28rem;
  color:#666666;
  background-color:#ffffff;
  border-radius: .2rem;
  margin-top:.2rem;
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
    justify-content: flex-end;
    /*flex: 1;*/
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
