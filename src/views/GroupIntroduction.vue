<template>
<!--  公司简介-->
  <Header :pageNum="0"></Header>
  <main>
    <Banner></Banner>
    <TabBar></TabBar>
    <div class="gor-int-bot">
      <div class="conta">
        <div class="int-box1">
          <div class="dfl">
            <div class="intr-title">
              <p>{{inTrData.primaryTitle}}</p>
              <p>{{inTrData.secondaryTitle}}</p>
              <a href="">{{inTrData.title}}</a>
            </div>
            <div class="intr-text">
              <p v-for="(v, i) in inTrData.txtArr" :key="i">
                {{v}}
              </p>
            </div>
          </div>
          <div class="dfr">
            <div class="d-tu">
              <img :src="inTrData.rightImg " alt="">
            </div>
          </div>
        </div>
        <div class="int-box2">
          <div class="dfl">
            <img :src="inTrData.leftImg" alt="">
          </div>
          <div class="dfr">
            <CountTo></CountTo>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import TabBar from '@/components/TabBar.vue'
import CountTo from '@/components/CountTo.vue'
import Footer from '@/components/Footer.vue'
import {
  ref,
  reactive,
  onMounted,
  computed,
  nextTick,
  onBeforeUnmount,
} from 'vue'
// 避免使用$ref报出警告
import { $ref } from 'vue/macros'
import { useStore } from 'vuex' // 引入useStore 方法
import UILib from "../components/ui-lib";
const store = useStore()  // 该方法用于返回store 实例

// 公司简介 内容数据
const inTrData = reactive(store.state.inTrData)
const countTo = $ref([])

onMounted(() => {

})
</script>

<style lang="scss" scoped>
.gor-int-bot {
  .conta {
    .int-box1 {
      padding: 6.875rem 0 2.1875rem;
      width: 96%;
      position: relative;
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .dfl {
        width: 58%;
        .intr-title {
          p {
            font-size: 3.75rem;
            text-transform: uppercase;
          }
          a {
            color: #de9811;
            font-size: 2rem;
            line-height: 6rem;
            user-select: none;
          }
        }
        .intr-text {
          p {
            line-height: 24px;
            font-size: 14px;
            color: #666666;
            margin-block-start: 1em;
            margin-block-end: 1em;
          }
        }
      }
      .dfr {
        width: 31.25rem;
        height: 37.5rem;
        position: relative;
        .d-tu {
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .dfr:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: -1.125rem;
        right: -1.125rem;
        background-color: #E9E9E9;
        z-index: -1;
      }
    }
    .int-box2 {
      width: 96%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      .dfl {
        width: 50%;
        height: 22.5rem;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .dfr {
        width: 50%;
        display: flex;
        align-items: center;
        .container {
          width: 80%;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>