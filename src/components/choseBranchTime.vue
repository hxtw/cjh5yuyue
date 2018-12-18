<template>
  <div class="container">
    <section class="content">
      <div class="top-head">
        <li style="font-weight: bold">套餐名称</li><li>职场精英套餐（男）</li>
      </div>
      <div class="line"></div>
      <div class="chose-branch">
        <p class="chose-head">选择体检分院</p>
        <div class="chose-address" @click="choseBranch()">
          <p>北京潘家园分院</p>
          <li><label>北京市朝阳区潘家园9号濠景阁大厦1-2层（肿瘤医院北200米路口）</label>
            <p><img class="icon_right" src="../../static/image/icon_right.png"/></p></li>
        </div>
      </div>
      <div class="line"></div>
      <div class="chose-date">
        <div class="date-head">选择日期</div>
        <Calendar ref="Calendar" :sundayStart="false" :markDateMore="arr" :endMonth="endMonth"
                  :markDate="arr2" v-on:choseDay="clickDay" v-on:changeMonth="changeDate"></Calendar>
      </div>
    </section>
    <button class="sub_button" @click="goNext(1)">提交</button>
    <div class="alert" v-if="showAlert">
      <div class="cont">
        <div class="success"><img src="../../static/image/icon_suc.png"/><p>您已成功预约体检</p></div>
        <div class="close_icon" @click="goNext(5)"><img src="../../static/image/in_close.png"/></div>
        <button class="suc_button" @click="goNext(2)">查看我的预约</button>
        <button class="suc_button" @click="goNext(3)">返回预约体检首页</button>
        <button class="suc_button" @click="goNext(4)">其它...</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Calendar from './vue-calendar-component/index';
  import {getTime} from '@/api/index'
  export default {
    name: "selectBranch",
    data(){
      return{
        choseArr:[],
        timestamp:"",
        arr2: [],
        arr: [],
        showAlert:false,
        endMonth:'',
      }
    },
    components:{
      Calendar
    },
    methods:{
      getList(){
        let mark1 = {},mark2 = {},lastMonth="";
        let that = this;
        getTime().then(res=>{
          console.log(res)
          let dateList = res.data.jjk_result.dateList;
          $.each(dateList,function(index,val){
            if(val.resType == 2){ //已约满
              mark1={date:val.date,className:'mark1'};
              that.arr.push(mark1);
            }else if(val.resType == 3){ //休息日
              mark2 = {date:val.date,className:'mark2'};
              that.arr.push(mark2);
            }
          });
          lastMonth = dateList[dateList.length-1].date;
          lastMonth = lastMonth.split("-");
          that.endMonth = `${lastMonth[0]}/${lastMonth[1]}`;
        });
      },
      clickDay(data) {
        console.log('选中了', data); //选中某天
      },
      changeDate(data) {
        // this.$toast('切换到的月份为' + data);
      },
      choseBranch(){
        this.$router.push('/selectBranch')
      },
      goNext(val){
        let that = this;
        switch (val){
          case 1:
            that.showAlert = true;
            break;
          case 2:
            that.$router.push('/myApp');
            break;
          case 3:
            that.$router.push('/');
            break;
          case 4:
            console.log('其它');
            break;
          case 5:
            that.showAlert = false;
            break;
          default:
        }
      }
    },
    created(){
    },
    mounted(){
      // this.$ref.Calendar.agoDayHide = new Date().getTime();
      this.getList();
      this.timestamp=new Date().getTime();
    },
  }
</script>

<style scoped>
  .container{
    margin:auto .1rem;
  }
  .content{
    margin-bottom:2rem;
  }
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
    margin-left:-.1rem;
    margin-right:-.1rem;
  }
  .top-head li:last-child{
    flex: 1;
    text-align: right;
    margin-right:.2rem;
  }
  .chose-branch{
    margin:auto .2rem;
  }
  .chose-branch .chose-head{
    font-size:.3rem;
    color:#333333;
    font-weight: bold;
    height:1.2rem;
    line-height:1.2rem;
    border-bottom:.01rem solid #f3f3f3;
  }
  .chose-branch .chose-address p{
    font-size:.28rem;
    color:#333333;
    padding-top:.2rem;
  }
  .chose-branch .chose-address li{
    display: flex;
    flex: 1;
  }
  .chose-branch .chose-address li label{
    font-size:.28rem;
    color:#666666;
    padding-top:.2rem;
    padding-bottom:.3rem;
    width:6.2rem;
  }
  .chose-branch .chose-address li p{
    flex: 1;
    text-align: right;
    padding-right:.2rem;
  }
  .chose-branch .chose-address li img{
    width:.16rem;
    height:.3rem;
  }
  .date-head{
    font-size:.3rem;
    color:#333333;
    font-weight: bold;
    height:1rem;
    line-height:1rem;
    border-bottom:.01rem solid #f3f3f3;
    margin-left:.2rem;
  }

  /*==============日历==========================*/
  h3 {
    text-align: center;
    width: 90%;
    margin: auto;
  }

  .wh_container >>> .mark1 {
    background:url("../../static/image/full.png") no-repeat .46rem 0rem;
    background-size:.32rem .32rem;
  }

  .wh_container >>> .mark2 {
    background:url("../../static/image/rest.png") no-repeat .46rem 0rem;
    background-size:.32rem .32rem;
  }
  .wh_content_item > .wh_isMark {
    background: orange;
  }
  .wh_container >>> .wh_content_all {
    background-color: white;
  }
  /*==============弹窗==============================*/
.alert{
  background:rgba(0,0,0,0.3);
  z-index:999;
  width:100%;
  height:100%;
  position:absolute;left:0px;top:0px;
}
  .cont{
    width:6.4rem;
    height:6.98rem;
    background-color:#ffffff;
    border-radius: .2rem;
    text-align: center;
    vertical-align: middle;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  .close_icon img{
    width:.2rem;
    height:.2rem;
    position:absolute;
    top:4%;
    right:5%;
  }
  .cont .success img{
    width:1.02rem;
    height:1.02rem;
    margin-top:.5rem;
  }
  .cont .success p{
    font-size:.32rem;
    color:#333333;
  }
  .suc_button {
    background: linear-gradient(to right, #7EABEB, #4873D2);
    width: 4.9rem;
    height: .8rem;
    line-height: .8rem;
    border-radius: 5rem;
    border: none;
    color: #ffffff;
    font-size:.3rem;
  }
</style>
