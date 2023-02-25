<template>
  <header class="clearfix">
    <div class="logo fl">
      <img :src="$store.state.logoPath" />
    </div>
    <!-- 导航栏 -->
    <nav class="fl">
      <ul class="fnav">
        <li :class="[pageNum === index ? 'tit' : '']" v-for="(item, index) in navData" :key="index" @mouseover="childNavShow = index"  @mouseleave ="childNavShow = -1">
          <a class="fa" :href="item.routerPath">{{ item.title }}</a>
          <div class="childNav"
               :style="{
                 left: `-${4.6875 * index}rem`,
                 display: index === childNavShow ? 'block' : 'none',
                 animation: index === childNavShow ? 'childNavShow .6s' : ''
                }"
          >
            <ul class="cnav">
              <li v-for="(val, j) in item.childRouter" :key="j">
                <a :href="val.routerPath">{{val.title}}</a>
              </li>
            </ul>
            <img :src="item.childImg" alt="">
          </div>
        </li>
      </ul>
    </nav>
    <!-- 搜索框 -->
    <div class="search-box">
      <input type="text" placeholder="Search" />
      <!-- <img src="/images/header/search.png" alt="" /> -->
      <input type="submit" class="inp2" value=" " />
    </div>
  </header>
</template>

<script setup>
import { ref, reactive, defineProps } from 'vue'
import { useStore } from 'vuex' // 引入useStore 方法
const store = useStore()  // 该方法用于返回store 实例

// console.log(store)
// logo 图片地址
// const logoPath = ref(store.state.logoPath)

// 导航栏
const navData = reactive([
  { 
    title: '走进环汇', 
    routerPath: '/group_introduction',
    childRouter: [
      {
        title: '集团简介',
        routerPath: '',
      },
      {
        title: '管理团队',
        routerPath: '',
      },
      {
        title: '战略规划',
        routerPath: '',
      },
      {
        title: '发展历程',
        routerPath: '',
      },
      {
        title: '集团荣誉',
        routerPath: '',
      },
      {
        title: '企业文化',
        routerPath: '',
      }
    ],
    childImg: '/images/header/c-1.jpg'
  },
  { 
    title: '环汇出品', 
    routerPath: '',
    childRouter: [
      {
        title: '地产开发',
        routerPath: '',
      },
      {
        title: '商业运营',
        routerPath: '',
      },
      {
        title: '科创产业',
        routerPath: '',
      },
      {
        title: '投资金融',
        routerPath: '',
      }
    ],
    childImg: '/images/header/c-2.jpg'
  },
  { 
    title: '新闻中心',
    routerPath: '',
    childRouter: [
      {
        title: '集团新闻',
        routerPath: '',
      },
      {
        title: '项目新闻',
        routerPath: '',
      },
    ],
    childImg: '/images/header/c-3.jpg'
  },
  { 
    title: '加入我们',
    routerPath: '',
    childRouter: [
      {
        title: '人才理念',
        routerPath: '',
      },
      {
        title: '福利与培训',
        routerPath: '',
      },
      {
        title: '海纳百川',
        routerPath: '',
      },
      {
        title: '员工风采',
        routerPath: '',
      }
    ],
    childImg: '/images/header/c-4.jpg'
  },
  {
    title: '社会责任', 
    routerPath: '',
    childRouter: [
      {
        title: '社会责任理念',
        routerPath: '',
      },
      {
        title: '社会责任实践活动',
        routerPath: '',
      }
    ],
    childImg: '/images/header/c-5.jpg'
  },
])
const childNavShow = ref(-1)
const props = defineProps({
  pageNum: {
    type: Number,
    default: -1
  }
})
</script>

<style lang="scss" scoped>

header {
  // width: calc(100% - 8px);
  width: 100%;
  padding: 0 3%;
  height: 5rem;
  background-color: #04080d;
  border-bottom: 1px solid #393d41;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 102;

  .logo {
    line-height: 5rem;
    img {
      vertical-align: middle;
    }
  }
  nav {
    margin-left: 7%;
    .fnav {
      line-height: 5rem;
      zoom: 1;
      display: block;
      list-style-type: disc;
      //   margin-block-start: 0em;
      //   margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      text-align: center;
      //   padding-inline-start: 40px;
      li {
        position: relative;
        float: left;
        border-left: 1px solid #393d41;
        height: 100%;
        width: 7.625rem;

        a {
          display: block;
          color: #aad1d1;
          position: relative;
          box-sizing: border-box;
        }
        a:before {
          position: absolute;
          content: '';
          width: 0;
          left: 0;
          height: 2px;
          background-color: #de9810;
          bottom: 0;
          left: 50%;
        }
        .childNav {
          width: 45rem;
          position: absolute;
          top: 100%;
          background-color: #363636;
          padding: .9375rem;
          .cnav {
            width: 30rem;
            padding-left: 5%;
            li {
              width: 50%;
              border: none;
              line-height: 2.5rem;
              text-align: left;
            a {
              font-size: 0.9rem;
              transition: all .3s ease;
            }
            a:before {
              display: none;
            }
            a:hover {
              color: white;
            }
            }
          }
        }
        @keyframes childNavShow {
          0% {
            display: none;
            opacity: 0;
          }
          100% {
            display: block;
            opacity: 1;
          }
        }
      }
      li:hover .fa:before {
          width: 100%;
          left: 0;
      }
      li:hover .fa {
          color: #de9810;
      }
      li:last-child {
        border-right: 1px solid #393d41;
      }
      .tit:before {
        position: absolute;
        content: '';
        width: 100%;
        height: 2px;
        background-color: #DE9810;
        bottom: 0;
        left: 0;
        transition: all .3s ease;
      }
      .tit {
        a {
          color: #D98A0C;
        }
      }
    }
  }

  .search-box {
    float: right;
    border: 1px solid #393d41;
    border-radius: 1.25rem;
    margin: 1.3125rem 0 0;
    width: 15rem;
    height: 2.5rem;
    border: 1px solid #393d41;
    border-radius: 1.25rem;
    margin: 1.3125rem 0 0;

    input {
      border: none;
      outline: none;
      width: 11rem;
      height: 100%;
      float: left;
      background-color: transparent;
      color: #ffffff;
      padding: 0 0 0 1.125rem;
    }
    .inp2 {
      width: 60px;
      float: right;
      border: none;
      outline: none;
      height: 100%;
      background: url(/images/header/search.png) no-repeat center;
      cursor: pointer;
    }
  }
}
</style>
