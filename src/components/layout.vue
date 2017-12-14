<template>
  <div class="layout">
    <div>
    <div class="header">
      <p>会议预订</p>
    </div>
    </div>
    <div class="content">
      <meeting-room></meeting-room>
    </div>
    <div class="footer">
      <div class="icon-inline">
        <span class="icon icon-home"></span>
        <p>查询</p>
      </div>
      <div class="icon-inline">
        <span class="icon icon-task"></span>
        <p>会议</p>
      </div>
      <div class="icon-inline">
        <span class="icon icon-me"></span>
        <p>我的</p>
      </div>
    </div>
  </div>
</template>

<script>
  import MeetingRoom from '../pages/meetingroom'
  export default {
    name: 'LayOut',
    components: {
        MeetingRoom
    }
  }
</script>

<style>
  .layout{
    width: 100%;
    height: 100%;
  }
  .content{
    position: absolute;
    top: 50px;
    bottom: 50px;
    width: 100%;
    overflow: scroll;
  }
  .header{
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    background: #3f51b5;
    color: #fff;
    font-size: 16px;
    overflow: hidden;
  }
  .header p{
    line-height: 50px;
  }
  .footer{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .icon-inline{
    display: inline-block;
    position: relative;
    width: 32%;
    text-align: center;
    padding-top: 10px;
  }
  .icon-inline p{
    margin-top: 0;
    font-size: 10px;
  }
</style>
