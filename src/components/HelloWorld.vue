<script setup>
import{Map,View}from 'ol'//地图实例/视图方法
import Tile from 'ol/layer/Tile'//瓦片渲染方法
import OSM from 'ol/source/OSM'//osm瓦片(中国地图可能有问题)
import 'ol/ol.css'
import { onMounted,ref } from 'vue'
defineProps({
  msg: {
    type: String,
    required: true
  }
})
const map=ref(null)
function initMap(){
  map.value=new Map({
    target:'map',
    layers:[//图层
      new Tile({//使用瓦片渲染方法
        source:new OSM()//图层数据源
      })
    ],
    view:new View({//地图视图
      projection:"EPSG:4326",//坐标系EPSG:4326和EPSG3857
      center:[114.064839,22.548857],//地图中心坐标，此为深圳
      minZoom:10,//最小缩放级别
      zoom:12//默认缩放级别
    })
  })
}

onMounted(()=>{
  initMap()
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <div id="map" class="map-layer"></div>
  </div>
</template>

<style scoped>
.map-layer{
  width: 500px;
  height: 500px;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
