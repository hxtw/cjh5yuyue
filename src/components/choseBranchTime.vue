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
        <Calendar ref="Calendar" :sundayStart="false" :markDateMore="arr"
                  :markDate="arr2" v-on:isToday="clickToday" agoDayHide="test"
                  v-on:choseDay="clickDay" v-on:changeMonth="changeDate"></Calendar>
      </div>
    </section>
    <button class="sub_button" @click="goNext(1)">提交</button>
    <div class="alert" v-if="showAlert">
      <div class="cont">
        <div class="success"><img src="../../static/image/duigou.png"/><p>您已成功预约体检</p></div>
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
  export default {
    name: "selectBranch",
    data(){
      return{
        choseArr:[],
        // arr2: ['2018/6/23'],
        arr2: [],
        arr: [
          {
            date: '2018/8/1',
            className: 'mark1'
          },
          {
            date: '2018/8/13',
            className: 'mark2'
          }
        ],
        showAlert:false,
      }
    },
    components:{
      Calendar
    },
    methods:{
      clickDay(data) {
        console.log('选中了', data); //选中某天
        this.$toast('选中了' + data);
      },
      clickToday(data) {
        console.log('跳到了本月今天', data); //跳到了本月
      },
      changeDate(data) {
        this.$toast('切换到的月份为' + data);
        console.log('左右点击切换月份', data); //左右点击切换月份
      },
      demo() {
        this.$refs.Calendar.ChoseMonth('2018-12-13'); //跳到12月12日选中12月12日
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
      let that = this;
      function format(date, index) {
        date = new Date(date);
        that.test = Date.parse(date);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${index}`;
      }
      setTimeout(() => {
        this.arr = [
          {
            date: format(new Date(), 3),
            className: 'mark1'
          },
          {
            date: format(new Date(), 12),
            className: 'mark2'
          }
        ];
        this.arr.push({
          date: format(new Date(), 15),
          className: 'mark1'
        })
      }, 1000)
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
    background-color: orange;
  }

  .wh_container >>> .mark2 {
    background-color: blue;
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
    width:.98rem;
    height:.98rem;
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
