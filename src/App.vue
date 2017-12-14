<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
  import Layout from './components/layout'
  export default {
    name: 'app',
    components: {
        Layout
    }
  }
</script>

<style>
/*@import './assets/css/layout.css';*/
@font-face {
  font-family: "iconfont";
  src: url('./assets/fonts/iconfont.woff') format('woff'), url('./assets/fonts/iconfont.ttf') format('truetype'), url('./assets/fonts/iconfont.svg') format('svg');
}
.icon {
  font-family: "iconfont" !important;
  font-style: normal;
  display: inline-block;
  vertical-align: middle;
  background-size: 100% auto;
  background-position: center;
  /*-webkit-font-smoothing: asntialiased;*/
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.icon-profile:before {
  content: "\e600";
}
.icon-tasks:before {
  content: "\e601";
}
.icon-me:before {
  content: "\e602";
}
.icon-shouyimingxi:before {
  content: "\e603";
}
.icon-mytask:before {
  content: "\e604";
}
.icon-more:before {
  content: "\e605";
}
.icon-task:before {
  content: "\e606";
}
.icon-guide:before {
  content: "\e607";
}
.icon-invite:before {
  content: "\e608";
}
.icon-left:before {
  content: "\e609";
}
.icon-shouyi:before {
  content: "\e60a";
}
.icon-home:before {
  content: "\e60b";
}
.icon-withdraw:before {
  content: "\e60c";
}
.icon-invitefriend:before {
  content: "\e60d";
}
.icon-rank:before {
  content: "\e60e";
}
.icon-dianji:before {
  content: "\e60f";
}
.icon-end:before {
  content: "\e610";
}
.icon-zhuyi:before {
  content: "\e611";
}
.icon-accept:before {
  content: "\e612";
}
.icon-preview:before {
  content: "\e613";
}
.icon-zhuyi2:before {
  content: "\e614";
}
.icon-get:before {
  content: "\e615";
}
.icon-next {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2015%2015'%3E%3Cg%3E%3Cpath%20fill%3D'%23007aff'%20d%3D'M1%2C1.6l11.8%2C5.8L1%2C13.4V1.6%20M0%2C0v15l15-7.6L0%2C0L0%2C0z'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}
.icon-prev {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2015%2015'%3E%3Cg%3E%3Cpath%20fill%3D'%23007aff'%20d%3D'M14%2C1.6v11.8L2.2%2C7.6L14%2C1.6%20M15%2C0L0%2C7.6L15%2C15V0L15%2C0z'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
