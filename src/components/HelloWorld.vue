<template>
  <div class="container">
    <!-- agoDayHide='1517483961' -->
    <!-- futureDayHide="1526054400" -->
    <div class="date">日历</div>
    <Calendar ref="Calendar" :sundayStart="false" :markDateMore="arr"
              :markDate="arr2" v-on:isToday="clickToday" agoDayHide="test"
              v-on:choseDay="clickDay" v-on:changeMonth="changeDate"></Calendar>
    <br/>
    <h3 @click="demo">markDateMore标记不同风格：：1号2号一种风格====13号另一种风格</h3>
    <br>
    <h3>markDate 标记23号 单一风格 更简单</h3>
    <div class="div" @click="demo ">
      点击跳到2018-12-12
    </div>
  </div>
</template>

<script>
  import Calendar from './vue-calendar-component/index';
  // import Calendar from 'vue-calendar-component';
  export default {
    data() {
      return {
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
        test:'',
      };
    },
    components: {
      Calendar
    },
    methods: {
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
      }
    },
    created() {
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

    }
  };
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
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
</style>
