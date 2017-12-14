<template>
  <div class="mtr-cards" :style="{background: 'url('+ imgUrl + ') no-repeat'}"
       @click="emitClick($event)">
      <h3>{{ title }}</h3>
      <p>地点：{{ location }}</p>
      <span class="icon icon-me">可容纳人数：{{ capacity }}</span>
      <div class="cards-radio">
        <input type="radio" name="cards" :id="title">
        <label :for="title"></label>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'MtrCard',
    props:{
      title:'',
      location: '',
      capacity: '',
      imgUrl:''
    },
    data() {
        return {

        }
    },
    methods: {
        emitClick(event){
            let tag = event.target.nodeName
            this.$emit('click-event',tag, this.title)
        }
    }
  }
</script>

<style scoped>
  .mtr-cards{
    position: relative;
    padding-left: 120px;
    padding-top: 20px;
    min-height: 100px;
    margin: 1.5rem;
    box-shadow: 0.05rem 0.05rem 0.2rem rgba(0, 0, 0, 0.3), -0.05rem 0.05rem 0.2rem rgba(0, 0, 0, 0.3);
    text-align: left;
  }
  .mtr-cards h3{
    font-size: 1rem;
  }
  .mtr-cards p{
    font-size: 0.8rem;
    margin: 0.5rem 0;
  }
  .mtr-cards span{
    font-size: 0.7rem;
  }
  .cards-radio {
    position: absolute;
    right: 2rem;
    top: 40%;
    width: 1rem;
    height: 1rem;
    line-height: 30px;
  }

  .cards-radio input {
    width: 20px;
    height: 20px;
    opacity: 0;
  }

  .cards-radio label {
    position: absolute;
    left: 5px;
    top: 3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #999;
  }
  /*设置选中的input的样式*/
  /* + 是兄弟选择器,获取选中后的label元素*/
  input:checked+label {
    background-color: #3f51b5;
    border: 1px solid #3f51b5;
  }
  input:checked+label::after {
    position: absolute;
    content: "";
    width: 5px;
    height: 10px;
    top: 3px;
    left: 6px;
    border: 2px solid #fff;
    border-top: none;
    border-left: none;
    transform: rotate(45deg)
  }
</style>
