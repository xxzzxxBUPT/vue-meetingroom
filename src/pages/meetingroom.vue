<template>
  <div class="wrap" >
    <div class="select-time">
      <label for="myDate">开始时间:</label>
      <datetime v-model="startTime"
                type="datetime"
                input-format="YYYY-MM-DD HH:mm"
                wrapper-class="my-wrapper-class"
                input-class="my-input-class"
                placeholder="请选择时间"
                auto-continue
                auto-close
                required></datetime>
    </div>
    <div class="select-time">
      <label for="myDate">结束时间:</label>
      <datetime v-model="endTime"
                type="datetime"
                input-format="YYYY-MM-DD HH:mm"
                wrapper-class="my-wrapper-class"
                input-class="my-input-class"
                placeholder="请选择时间"
                auto-continue
                auto-close
                required></datetime>
    </div>

    <div class="divide-line">
      <label>可用会议室</label>
      <div class="blank"></div>
    </div>

    <div>
      <mtr-card v-for="item in mtrList"
                :title="item.title" :location="item.location" :capacity="item.capaicty" :imgUrl="item.imgUrl"
                @click-event="judgeClick">
      </mtr-card>
    </div>

  </div>
</template>

<script>
//  import DatePicker from 'vue-datepicker-simple/datepicker-2.vue'
  import MtrCard from '../components/MtrCard'
  export default {
    name: 'MeetingRoom',
    data () {
        return {
            msg: 'this is meetingroom page',
            startTime:'',
            endTime:'',
            mtrList: [
              {
                'title': '会议室1',
                'location': '新科研楼737',
                'capaicty':20,
                'imgUrl': require('../assets/imgs/1.png')
              },
              {
                'title': '会议室2',
                'location': '新科研楼637',
                'capaicty':30,
                'imgUrl': require('../assets/imgs/2.png')
              },
              {
                'title': '会议室3',
                'location': '新科研楼537',
                'capaicty':50,
                'imgUrl': require('../assets/imgs/3.png')
              }
            ]
        }
    },
    components: {
        MtrCard
    },
    methods: {
        judgeClick (tag, title) {
          if(tag === 'INPUT'){
            return
          }else if(tag === 'LABEL'){
            console.log('触发了input事件'+title)
          }else{
            console.log('dasdsdas')
          }
        }
    }
  }
</script>

<style>
  .wrap{

  }
  .select-time{
    margin-top: 30px;
    padding-bottom: 5px;
    border-bottom: 1px solid lightgrey;

  }
  .select-time label, .divide-line label {
    display: inline-block;
    width: 30%;
    text-align: left;
    padding-left: 20px;
  }
  .divide-line label{
    font-size: 14px;
  }
  .select-time .my-wrapper-class, .divide-line .blank{
    display: inline-block;
    width: 60%;
  }
  .select-time input{
    border: none;
  }
  .divide-line{
    margin-top: 30px;
  }

</style>
