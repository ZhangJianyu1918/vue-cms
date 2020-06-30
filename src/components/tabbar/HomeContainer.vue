<template>
  <div>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <img src="../../images/1.jpg" alt="">
          <div class="mui-media-body">Home</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <img src="../../images/2.jpg" alt="">
          <div class="mui-media-body">Email</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <img src="../../images/3.jpg" alt="">
          <div class="mui-media-body">Chat</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <img src="../../images/4.jpg" alt="">
          <div class="mui-media-body">location</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <img src="../../images/5.jpg" alt="">
          <div class="mui-media-body">Search</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
          <img src="../../images/6.jpg" alt="">
          <div class="mui-media-body">Phone</div></a></li>
      </ul> 
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      radio_list: [],
    }
  },
  created() {
    this.getradio()
  },
  methods: {
    getradio() {
      // 获取轮播台的数据
      axios
      .get('https://tva3.sinaimg.cn/large/0072Vf1pgy1foxkijia91j31kw0w0e6g.jpg')
      .then(result => {console.log('get成功')})
      .catch(result => {console.log('catch失败')})
    }
  }
}
</script>

<style scoped>
  .img{
    width: 60px;
    height: 60px;
  }
  .ul{
    border: none;
  }
  .li{
    border: none;
  }
</style>