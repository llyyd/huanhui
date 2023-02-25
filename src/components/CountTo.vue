<template>
 <div class="container">
   <div class="number-box" v-for="(item, key, index) in inTrData.numberArr" :key="index">
     <div class="count-to">
       <CountTo
           ref="countTo"
           :start="0"
           :end="item"
           prefix=""
           suffix=""
           :autoPlay="true"
           :duration="1000"
           separator=""
       />
       {{index == 0 ? '年' : index == 1 ? '+' : '亿'}}
     </div>
     <p>{{index == 0 ? '成立' : index == 1 ? '员工' : '总资产'}}</p>
   </div>
 </div>
</template>

<script setup>
import {
  ref,
  reactive,
  onMounted,
  computed,
  nextTick,
  onBeforeUnmount,
} from 'vue'
import {$ref} from "vue/macros"
import UILib from "@/components/ui-lib"
// 原生方法
import native from '@/utils/native'
import { useStore } from 'vuex' // 引入useStore 方法
const store = useStore()  // 该方法用于返回store 实例

const inTrData = reactive(store.state.inTrData)
const countTo = $ref([])

let scrollTop = null
let viewHeight = null
const scrollToTop = () => {
  // 数字滚动
  scrollTop = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop
  viewHeight = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight
  // console.log('scrollTop：' + scrollTop)
  // console.log(native.offset(countTo[0].$el).top)
  if (native.offset(countTo[0].$el).top < scrollTop + viewHeight) {
    inTrData.numberArr.estYears = 2000
    inTrData.numberArr.employeeSum = 600
    inTrData.numberArr.totalAssets = 65
  } else {
    inTrData.numberArr.estYears = inTrData.numberArr.employeeSum = inTrData.numberArr.totalAssets = 0
  }
}
onMounted(() => {
window.addEventListener('scroll', scrollToTop, false)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollToTop, false)
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  .number-box {
    width: 33.333%;
    position: relative;
    .count-to {
      text-align: center;
      font-size: 0.875rem;
      span {
        font-size: 4.5rem;
        text-align: center;
        color: #333333;
        font-family: 'trum';
      }
    }
    p {
      text-align: center;
      font-size: 1.25rem;
      color: #999999;
    }
  }
  .number-box:before{
    content: '';
    position: absolute;
    height: 60px;
    border-left: 1px solid #E0E0E0;
    right: 0;
    top: 28%;
  }
}

</style>