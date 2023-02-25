<template>
  <!-- 头部组件 -->
  <Header></Header>
  <!-- 主体内容 -->
  <main>
    <!-- 页面加载过渡 -->
    <div class="close-bg" :class="[showObj.closeShow ? '' : 'cloBgAni']"></div>
    <div class="loading" v-if="showObj.loadingShow"></div>
    <!-- Swiper 轮播 -->
    <div class="swiper-container" ref="swiperItem">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, i) in swiperImgs" :key="i">
          <img class="swiper-img" :src="item.pic" />
          <div class="wen">
            <h1>{{ item.txtZh }}</h1>
            <h2>{{ item.txtEn }}</h2>
            <img
                class="playIcon"
                @click="playBtn(i)"
                src="/images/homeImg/play.png"
                alt=""
            />
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 遮罩层 -->
    <div class="hh-act" v-show="videoShow" @click="videoShow = false"></div>
    <!-- 视频 -->
    <div class="hh-video" v-show="videoShow">
      <a class="close-btn" href="javascript:;" @click="videoShow = false">x</a>
      <video :src="swiperImgs[videoNum].videoPath"
             autoplay="autoplay" loop="loop" muted="muted"></video>
    </div>
    <!-- 公司介绍 -->
    <div class="ind-intr">
      <a href="">
        <img :src="inTrData.leftImg" alt="" />
      </a>
      <div class="intr-box">
        <div class="intr-container">
          <div class="intr-title">
            <p>{{inTrData.primaryTitle}}</p>
            <p>{{inTrData.secondaryTitle}}</p>
            <a href="">{{inTrData.title}}</a>
          </div>
          <div class="intr-text">
            <p v-for="i in 3" :key="i">
              {{inTrData.txtArr[i-1]}}
            </p>
          </div>
          <div class="intr-number">
          <!-- 数字滚动 -->
            <CountTo></CountTo>
          </div>
        </div>
      </div>
    </div>
    <!-- 四大块 -->
    <div class="ind-industry" ref="industry">
      <div class="ind" v-for="(item, index) in industryData" :key="index">
        <a :href="item.routerPaht">
          <div class="d-img"
               :style="{
                   background: `url('${item.imgPath}') center center / cover no-repeat`,
                   transform: `translateX(${item.translateX}px)`
                  }"
          ></div>
          <div class="conta com-in-blo">
            <div class="blo-box">{{item.title}}</div>
          </div>
        </a>
      </div>
    </div>
    <!--企业文化-->
    <div class="ind-cultu">
      <div class="pagination">
        <span
            v-for="(item, index) in indCultuData"
            :key="index"
            :class="indCultNum === index ? 'swiper-active-switch' : ''"
        >
          {{item.title}}
        </span>
      </div>
      <div class="cul-swiper-container" @mousemove="inCulSetInterval(0)" @mouseleave="inCulSetInterval(1)">
        <div class="cul-swiper-wrapper">
          <div class="cul-swiper-slide">
            <div class="cul-d-tu">
              <div class="cul-d-img">
                <a href="">
                  <img
                      v-for="(v, i) in indCultuData"
                      :src="indCultuData[indCultNum].imgPath"
                      alt=""
                      v-show="i === indCultNum"
                  >
                </a>
              </div>
              <div class="cul-wen">
                <div class="cul-wen-n">
                  <div class="cul-dn1">
                    {{indCultuData[indCultNum].enTitle}}
                  </div>
                  <div class="cul-dn2"><a href=""> {{indCultuData[indCultNum].title}}</a></div>
                  <div class="cul-dn3">
                    <p v-for="(item, index) in indCultuData[indCultNum].txtArr" :key="index">{{item}}</p>
                  </div>
                </div>
                <div class="com-btn clearfix">
                  <a class="btnleft btn fl" @click="indCulBtn(-1)" href="javascript:;">
                    <i class="iconfont icon-arrow-right"></i>
                  </a>
                  <a class="btnright btn fr" @click="indCulBtn(1)" href="javascript:;">
                    <i class="iconfont icon-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 几块切换 -->
    <div class="ind-swiper" @mousemove="on_top_enter" @mouseleave="on_top_leave">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in indSwitchData">
          <img :src="item.imgPath" alt="">
          <div class="wen">
            <div class="dn1">
              {{item.title.ent}}
            </div>
            <div class="dn2">{{item.title.zht}}</div>
            <div class="dn3">{{item.txt}}</div>
            <div class="a-more">Learn More<i
                class="iconfont icon-iconset0416"></i>
            </div>
          </div>
          <div class="d-bg"></div>
        </div>
      </div>
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
    </div>
    <!-- 新闻中心   -->
    <div class="ind-news">
      <div class="conta2">
        <div class="d-title1 clearfix">
          <span class="s1">新闻中心</span>
          <a href="" class="a2">了解更多 <i class="iconfont icon-icon"></i></a>
        </div>
        <div class="switch-top com-in-blo">
          <a href="javascript:;" class="ac blo-box">集团新闻</a>
          <a href="javascript:;" class="blo-box">项目新闻</a>
        </div>
        <div class="switch-box">
          <div class="switch-bot clearfix">
            <div class="dfl">
              <div class="ind-new-sw ind-new-sw1" @mousemove="indNews1.autoplay.stop()" @mouseleave="indNews1.autoplay.start()">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="d-tu">
                      <img src="/images/new/5e1452f1db981.jpg" alt="" class="img-box">
                    </div>
                    <div class="wen">
                      <div class="dp1">新源国际控股集团2019年度高管总结研讨...</div>
                      <div class="dp2 text-justify">
                        <a href="">[查看详情]</a>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                  <div class="d-tu">
                    <img src="/images/new/5ddb455c5131b.jpg" alt="" class="img-box">
                  </div>
                  <div class="wen">
                    <div class="dp1">新源国际控股集团成立十九周年</div>
                    <div class="dp2 text-justify">
                      不畏困难   只为前行<a href="">[查看详情]</a>
                    </div>
                  </div>
                </div>
                </div>
                <div class="pagination"></div>
              </div>
            </div>
            <div class="dfr">
              <div class="fr-tit1 clearfix">
                <span class="s1"><b>集团新闻</b> / Group news</span>
                <a href="" class="a2 text-upp">more +</a>
              </div>
              <div class="d-link">
                <a href="" class="clearfix">
                  <span class="s1">11月20日 新源生日快乐</span>
                  <span class="s2">2018-11-20</span>
                </a>
                <a href="" class="clearfix">
                  <span class="s1">承前启后，继往开来——2018年中共新源...</span>
                  <span class="s2">2018-11-06</span>
                </a>
                <a href="" class="clearfix">
                  <span class="s1">“沟通从心开始”——新源集团基层员工职业...</span>
                  <span class="s2">2018-10-26</span>
                </a>
                <a href="" class="clearfix">
                  <span class="s1">新源集团员工风采展示——李俊硕</span>
                  <span class="s2">2018-09-18</span>
                </a>
                <a href="" class="clearfix">
                  <span class="s1">聚力凝心，携手同行——公司召开2018年...</span>
                  <span class="s2">2018-09-14</span>
                </a>
                <a href="" class="clearfix">
                  <span class="s1">新目标 新征程 携手前行---新源集团2...</span>
                  <span class="s2">2018-09-09</span>
                </a>
                <a href="" class="clearfix">
                  <span class="s1">“巅峰筑梦，弄潮石门”新源蜂巢购物中心招...</span>
                  <span class="s2">2018-08-10</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--快速入口-->
    <div class="ind-entrance">
      <div class="conta ">
        <div class="d-link clearfix">
          <a href="javascript:;">
            <div class="dn1"><img src="/images/homeImg/iconlogo.png" alt=""></div>
            <div class="dn2">快速入口</div>
            <div class="dn3">FAST ENTRANCE</div>
          </a>
          <a href="">
            <div class="dn1"><i class="iconfont icon-heilongjiangtubiao11-copy-copy-copy"></i></div>
            <div class="dn2">管理团队</div>
            <div class="dn3"> MANAGEMENT TEAM</div>
          </a>
          <a href="">
            <div class="dn1"><i class="iconfont icon-iconset0396"></i></div>
            <div class="dn2">战略规划</div>
            <div class="dn3">STRATEGIC PLANNING</div>
          </a>
          <a href="">
            <div class="dn1"><i class="iconfont icon-bangongdalou"></i></div>
            <div class="dn2">新源出品</div>
            <div class="dn3">XINYUAN PRODUCE</div>
          </a>
          <a href="">
            <div class="dn1"><i class="iconfont icon-wendang"></i></div>
            <div class="dn2">新闻中心</div>
            <div class="dn3">NEWS CENTER</div>
          </a>
          <a href="">
            <div class="dn1"><i class="iconfont icon-jiarutuandui"></i></div>
            <div class="dn2">加入我们</div>
            <div class="dn3">JOIN US</div>
          </a>
        </div>
      </div>
    </div>
  </main>
  <!-- 底部 -->
  <Footer></Footer>
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
// 避免使用$ref报出警告
import { $ref } from 'vue/macros'
// 原生方法
import native from '@/utils/native'
import Header from '@/components/Header.vue'
import CountTo from '@/components/CountTo.vue'
import Footer from '@/components/Footer.vue'
import Swiper from 'swiper' // 引入库
import 'swiper/css/swiper.css' // 引入样式文件，注意5和6版本的样式文件不一致
import { useStore } from 'vuex' // 引入useStore 方法
const store = useStore()  // 该方法用于返回store 实例

/* 页面内容加载过渡 */
let showObj = reactive({
  closeShow: true,
  loadingShow: true,
})

/* Swiper 轮播 */
const swiperImgs = reactive([
  {
    pic: '/images/homeImg/swiper-1.jpg',
    txtZh: '',
    txtEn: '',
    videoPath: '/video/5b28c01454790.mp4',
  },
  {
    pic: '/images/homeImg/swiper-2.jpg',
    txtZh: '改变世界 享受生活',
    txtEn: 'Change the world to enjoy life',
    videoPath: '/video/5b28c01454790.mp4',
  },
])
// swiper 播放按钮
let videoShow = $ref(false)
let videoNum = $ref(0)
const playBtn = (i) => {
  videoShow = true
  videoNum = i
}

// 公司简介 内容数据
const inTrData = reactive(store.state.inTrData)

// 四大块
const industryData = reactive([
  {
    title: '地产开发',
    imgPath: '/images/homeImg/d-img1.jpg',
    routerPaht: '',
    translateX: 0
  },
  {
    title: '商业运营',
    imgPath: '/images/homeImg/d-img2.jpg',
    routerPaht: '',
    translateX: 0
  },
  {
    title: '科创产业',
    imgPath: '/images/homeImg/d-img3.jpg',
    routerPaht: '',
    translateX: 0
  },
  {
    title: '投资金融',
    imgPath: '/images/homeImg/d-img4.jpg',
    routerPaht: '',
    translateX: 0
  },
])
const industry = $ref(null)

// 企业文化
let indCultNum = $ref(0)
const indCultuData = reactive([
  {
    title: '价值观',
    enTitle: 'values',
    txtArr: ['你我双赢', '共同发展'],
    imgPath: '/images/ind-cultu/ind-cultu1.jpg',
  },
  {
    title: '精神',
    enTitle: 'spirit',
    txtArr: ['勤奋、严谨', '务实、创新'],
    imgPath: '/images/ind-cultu/ind-cultu2.jpg',
  },
  {
    title: '理念',
    enTitle: 'idea',
    txtArr: ['创意建筑', '创新城市'],
    imgPath: '/images/ind-cultu/ind-cultu3.jpg',
  },
])
const indCulBtn = (type) => {
  // console.log(type)
  indCultNum += type
  if (indCultNum < 0) {
    indCultNum = indCultuData.length - 1
  } else if (indCultNum > 2) {
    indCultNum = 0
  }
}
let inCulTime = setInterval(() => {
  indCultNum < 3 && indCultNum++
  if (indCultNum === 3) {
    indCultNum = 0
  }
}, 3000)
const inCulSetInterval = (i) => {
  switch (i) {
    case 0:
      clearInterval(inCulTime)
          break
    case 1:
      inCulTime = setInterval(() => {
        indCultNum < 3 && indCultNum++
        if (indCultNum === 3) {
          indCultNum = 0
        }
      }, 3000)
          break
  }
}

let scrollTop = null
let viewHeight = null
let viewWidth = null
const scrollToTop = () => {
  // 数字滚动
  scrollTop = window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop
  viewHeight = window.innerHeight
          || document.documentElement.clientHeight
          || document.body.clientHeight
  viewWidth = window.innerWidth
          || document.documentElement.clientWidth
          || document.body.clientWidth
  // 四大块
  // console.log(industry.querySelectorAll('.ind'))
  if (viewWidth > 640) {
    if (native.offset(industry).top < scrollTop + viewHeight) {
      industry.querySelectorAll('.ind').forEach((item, index) => {
        // console.log(index)
        if (index % 2 === 0) {  // 奇数
          let dang = scrollTop - native.offset(item).top
          // console.log(item.childNodes[0].childNodes[0])
          industryData[index].translateX = dang / 5
        } else {
          let dang2 = native.offset(item).top - scrollTop
          industryData[index].translateX = dang2 / 5
        }
      })
    }
  } else {
    if (native.offset(industry).top < scrollTop + viewHeight) {
      industry.querySelectorAll('.ind').forEach((item, index) => {
        // console.log(index)
        if (index % 2 === 0) {
          let dang = scrollTop - native.offset(item).top
          // console.log(item.childNodes[0].childNodes[0])
          industryData[index].translateX = dang / 10
        } else {
          let dang2 = native.offset(item).top - scrollTop
          industryData[index].translateX = dang2 / 10
        }
      })
    }
  }
}
// 几块切换
const indSwitchData = computed(() => {
  const indSwitchArr = []
  store.state.industrialData.tabBar.forEach((item) => {
    item.proArr.map(v => {
      if (indSwitchArr.length < 6) {
        indSwitchArr.push(v)
      } else {
        return
      }
    })
  })
  return indSwitchArr
})

let indSwitch = null
const on_top_enter = () => {
  indSwitch.autoplay.stop()
}
const on_top_leave = () => {
  indSwitch.autoplay.start()
}

// 新闻中心
let indNews1 = null

onMounted(() => {
  // 模拟异步操作
  setTimeout(() => {
    showObj.closeShow = false
    setTimeout(() => {
      showObj.loadingShow = false
    }, 1000)
  }, 1000)
// swiper 配置
  const mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    speed: 150, // 切换速度
    // 小圆点
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // 自动切换
    autoplay: {
      delay: 10000, // 10秒切换一次
      disableOnInteraction: false, // 用户操作swiper之后自动切换是否停止
    },
    // 切换效果
    effect: 'fade',
    centeredSlides: true,
    on: {
      // 当图片进行切换时执行
      slideChange: function () {},
      // swiper从当前slide开始过渡到另一个slide时执行(包含自动切换)
      slideChangeTransitionStart: function () {},
      // 当Swiper切换到最后一个Slide时执行
      reachEnd: function () {},
    },
  })
  indSwitch = new Swiper('.ind-swiper', {
    slidesPerView: 4,
    touchRatio: 0,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    on: {
      resize: function () {
        // 窗口发生变化时...
      },
    },
  });
  //新闻中心
  indNews1 = new Swiper('.ind-new-sw1', {
    loop: true,
    pagination: {
      el: '.ind-new-sw1 .pagination',
      clickable: true,
    },
    autoplayDisableOnInteraction: false,
    autoplay: {
      delay: 3000,
    },
  });

  window.addEventListener('scroll', scrollToTop, false)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollToTop, false)
})


</script>

<style lang="scss" scoped>
main {
  width: 100%;
  /* 轮播 */
  .swiper-container {
    background-color: #04080d;
    width: 100%;
    height: calc(100vh - 5rem);
    position: relative;
    .swiper-slide {
      width: 100%;
      overflow: hidden;
      .swiper-img {
        position: absolute;
        width: 100%;
        z-index: -1;
        transition-duration: 0.5s;
        height: calc(100vh - 5rem);
        object-fit: cover;
        animation: scale 10s linear infinite;
      }
      .wen {
        height: calc(100vh - 5rem);
        overflow: hidden;
        padding-left: 5%;
        transition-duration: 0.5s;
        object-fit: cover;
        color: white;
        display: flex;
        justify-content: center;
        flex-direction: column;
        h1 {
          font-size: 3.375rem;
          margin-bottom: 0.625rem;
        }
        h2 {
          font-size: 2.625rem;
        }
        .playIcon {
          width: 3.125rem;
          height: auto;
          margin-top: 3.125rem;
          cursor: pointer;
        }
      }
    }
    .swiper-pagination {
      position: absolute;
      left: 98%;
      top: 45%;
      /*span {
        width: 0.7rem;
        height: 0.7rem;
        display: block;
        margin: 0.5rem 0 !important;
        background-color: #eeeeee;
      }*/
    }
  }
  /* 遮罩层 */
  .hh-act  {
    position: fixed;
    top: 0;
    z-index: 102;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.8;
  }
  /* 视频 */
  .hh-video {
    width: 50%;
    height: 45%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0.6rem;
    background-color: white;
    border-radius: 0.9375rem;
    z-index: 200;
    .close-btn {
      width: 1.5rem;
      height: 1.5rem;
      text-align: center;
      border-radius: 50%;
      position: absolute;
      font-size: 1.125rem;
      right: -0.6rem;
      top: -0.6rem;
      background-color: #777777;
      color: white;
      border: 0.1875rem solid white;
    }
    video {
      width: 100%;
      height: 100%;
    }
  }
  /* 公司介绍 */
  .ind-intr {
    width: 100%;
    margin-top: 6.25rem;
    height: 45rem;
    position: relative;
    color: #333333;
    a {
      img {
        height: 100%;
        width: 100%;
        float: left;
      }
    }
    .intr-box {
      padding-top: 40px;
      padding-right: 6%;
      padding-left: 6%;
      width: 960px;
      height: 100%;
      background: rgba(255, 255, 255, 0.95);
      position: absolute;
      top: 0;
      right: 6%;
    }
    .intr-container {
      display: flex;
      flex-flow: column;
      .intr-title {
        p {
          font-size: 3.75rem;
          text-transform: uppercase;
        }
        a {
          color: #de9811;
          font-size: 2rem;
          line-height: 6rem;
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
      .intr-number {
        margin-top: 4.0625rem;
        display: flex;
        .container {
          width: 100%;
        }
      }
    }
  }
  /* 四大块 */
  .ind-industry {
    width: 100%;
    margin: 6.25rem auto;
    overflow: hidden;
    .ind {
      position: relative;
      .d-img {
        width: 115%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background-size: cover;
      }
      .conta {
        width: 75%;
        margin: 0 auto;
        padding: 8% 0;
        .blo-box {
          font-size: 2.625rem;
          width: 19.375rem;
          text-align: center;
          display: inline-block;
          vertical-align: middle;
          text-shadow: 1px 1px 0.625rem #333;
          font-weight: bold;
          color: white;
        }
      }
    }
    .ind:nth-child(odd) {
      .d-img {
        left: -5%;
      }
    }
    .ind:nth-child(even) {
      .d-img {
        margin: 0 0 0 -15%;
      }
    }
  }
  /* 企业文化 */
  .ind-cultu {
    width: 100%;
    margin: 6.25rem 0;
    padding: 8.75rem 0;
    background-color: #FBFBFB;
    display: flex;
    .pagination {
      width: 3.75rem;
      background-color: #FFFFFF;
      z-index: 5;
      color: #999999;
      padding:  1.25rem 1.25rem 0;
      line-height: 1.0625rem;
      span {
        display: block;
        text-align: center;
        cursor: pointer;
        margin: 0 0 3.75rem;
        position: relative;
      }

      span:before {
        content: '';
        position: absolute;
        width: 1px;
        height: 1.25rem;
        background-color: #AAAAAA;
        bottom: -2.375rem;
        left: 50%;
      }

      span:last-child:before {
        display: none;
      }

     .swiper-active-switch {
        color: #D98A0C;
      }
    }
    .cul-swiper-container {
      width: calc(100% - 3.75rem);
      max-height: 28.765625rem;
      .cul-swiper-wrapper {
        height: 100%;
        .cul-swiper-slide {
          width: 100%;
          height: 100%;
          position: relative;
          .cul-d-tu {
            height: 100%;
            .cul-d-img {
              height: 100%;
              a {
                height: 100%;
                img {
                  user-select: none;
                  height: 100%;
                  width: 100%;
                  animation: scaleImg 1s ease 0s;
                }
                @keyframes scaleImg {
                  0% {
                    transform: scale(0.95);
                    opacity: 0;
                  }
                  100% {
                    transform: scale(1);
                    opacity: 1;
                  }
                }
              }
            }
          }
          .cul-wen {
            position: absolute;
            height: 100%;
            width: 47.5rem;
            z-index: 2;
            top: 0;
            left: 10%;
            background-color: #FBFBFB;
            padding: 3% 7% 0;
            .cul-dn1 {
              color: #333333;
              line-height: 60px;
              font-size: 60px;
              font-weight: bold;
              text-transform: uppercase;
            }
            .cul-dn2 {
              font-size: 2rem;
              margin: 3% 0 6%;
              a{
                color: #de9811;
              }
            }
            .cul-dn3 {
              color: #333333;
              font-size: 1.25rem;
              line-height: 1.5rem;
              margin: 0 0 3%;
            }

            .com-btn {
              width: 5.375rem;
              height: 2.5rem;
              position: absolute;
              left: 14%;
              bottom: 22%;
              z-index: 4;
            }
            .btn {
              display: block;
              width: 2.5rem;
              height: 2.5rem;
              line-height: 2.5rem;
              text-align: center;
              background-color: #CBCDCE;
              transition: all .4s ease;
              color: #FFFFFF;
              i {
                font-size: 1.25rem;
              }
            }
            .btn:hover {
              background-color: #D98A0C;
            }
          }
        }
      }
    }
  }
  /* 几块切换 */
  .ind-swiper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    .swiper-slide {
      width: 23.2375rem;
      height: 34.875rem;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      img {
        z-index: -1;
        transition: all .4s ease;
      }
      .wen {
        position: absolute;
        width: 100%;
        bottom: 10%;
        color: #ffffff;
        padding: 0 8%;
        z-index: 3;
        text-align: left;
        /*opacity:0; filter: alpha(opacity=0);*/
        .dn1 {
          font-size: 2.5rem;
          font-weight: bold;
          transition: all .4s ease;
          /*font-family: 'cent';*/
          text-transform: uppercase;
        }
        .dn1, .dn2, .dn3, .a-more {
          opacity: 0;
          filter: alpha(opacity=0);
          transform: translate(0, 1.875rem);
          /*font-family: 'futu';*/
        }
        .dn2 {
          font-size: 1.25rem;
          margin: 0.9375rem 0 0.625rem;
          transition: all .4s ease .1s;
        }
        .dn3 {
          line-height: 1.625rem;
          margin: 0 0 1.5625rem;
          transition: all .4s ease .1s;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .a-more {
          display: block;
          width: 10.625rem;
          height: 2.5rem;
          line-height: 38px;

          border: 1px solid #ffffff;
          color: #ffffff;
          padding: 0 0 0 1.25rem;
          transition: all .4s ease .2s;
          i {
            font-size: 1.4375rem;
            vertical-align: middle;
            margin: -0.125rem 0 0 1.25rem;
            display: inline-block;
          }
        }
        .a-more:hover {
          background-color: #de9811;
          border: 1px solid #de9811;
          i {

            animation: fadeInLeft1 .4s;

          }
        }
      }
    }
    .swiper-slide:hover .wen {
      /*animation: fadeInUp .4s;*/
      /*opacity:1; filter: alpha(opacity=100);*/
      .dn1, .dn2, .dn3, .a-more {
        opacity: 1;
        filter: alpha(opacity=100);
        transform: translate(0);
      }
    }
    .swiper-slide:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, .3);
      transition: all .4s ease;
    }
    .d-bg {
      width: 100%;
      height: 50%;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: all .4s ease;
      background: linear-gradient(to bottom, transparent, #000000);
      z-index: 2;
      opacity: 0;
      filter: alpha(opacity=0);
    }
    .swiper-slide:hover .d-bg {
      opacity: 1;
      filter: alpha(opacity=100);
    }

    .swiper-slide:hover img {
      transform: scale(1.05);
    }

    .swiper-slide:hover:before {
      background: transparent;
    }

    .swiper-button-prev, .swiper-button-next {
      width: 3.5rem;
      height: 100%;
      position: absolute;
      top: 1.4rem;
      z-index: 1 !important;
    }
    .swiper-button-prev {
      left: 0;
    }
    .swiper-button-next {
      right: 0;
    }
    .swiper-button-prev:hover, .swiper-button-next:hover {
      animation: .5s btn forwards;
    }

    @keyframes btn {
      0% {
        background-color: transparent;
      }
      100% {
        background-color: #D98A0C;
      }
    }
    .swiper-button-prev:after, .swiper-button-next:after {
      font-size: 1.25rem;
    }
  }
  /*新闻中心*/
  .ind-news {
    padding: 0 0 5.9375rem;
    width: 80%;
    margin: 0 auto;
    .d-title1 {
      border-bottom: 1px solid #EDEDED;
      padding: 5rem 0 1.5rem;
      color: #333333;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .s1 {
        font-size: 2.25rem;
      }
      .a2 {
        font-size: 1rem;
      }
    }
    .switch-top {
      margin: 2.1875rem 0 1rem;
      a {
        display: inline-block;
        width: 9rem;
        text-align: center;
        color: #333333;
        line-height: 2.125rem;
        background-color: #E5E5E5;
        transition: all .4s ease;
        margin: 0 1px 0 0;
      }
      .ac {
        background-color: #D98A0D;
        color: #FFFFFF;
      }
      a:hover {
        background-color: #D98A0D;
        color: #FFFFFF;
      }
    }
    .switch-box {
      .switch-bot {
        width: 100%;
        height: auto;
        padding: 1.6875rem;
        box-shadow: 1px 1px 0.5rem #ccc;
        display: flex;
        justify-content: space-between;
        .dfl {
          width: 48%;
          .ind-new-sw {
            overflow: hidden;
            position: relative;
            .d-tu {
              width: 100%;
              max-height: 17.8125rem;
              margin: 0 0 3.4375rem;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .wen {
              .dp1 {
                color: #333333;
                font-size: 1.25rem;
                margin: 0 0 0.625rem;
              }
              .dp2 {
                line-height: 1.5rem;
              }
              a {
                color: #DC9520;
              }
            }
            .pagination {
              width: 100%;
              text-align: right;
              position: absolute;
              left: 0;
              top: 72%;
              z-index: 1;
              height: 2.5rem;
              //background-color: #D98A0C;
              line-height: 2.5rem;
              padding: 0 1.125rem 0 0;
              /*span {
                display: inline-block;
                width: 0.5rem;
                height: 0.5rem;
                background-color: #D98A0C;
                vertical-align: middle;
                cursor: pointer;
                transition: all .4s ease;
                margin: 0 0 0 0.625rem;
                border-radius: inherit;
              }*/
            }
          }
        }
        .dfr {
          width: 48%;
          .fr-tit1 {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #DBDBDB;
            padding-bottom: 0.6rem;
            .s1 {
              color: #c0c0c0;
              b {
                color: #de9811;
                font-size: 1.5rem;
              }
            }
            .a2 {
              text-transform: uppercase;
              color: #999999;
              font-size: 1.5rem;
            }
          }
          .d-link {
            padding-bottom: 2rem;
            a {
              display: block;
              border-bottom: 1px dashed #DBDBDB;
              padding: 1.125rem 0;

              color: #333333;
              .s2 {
                float: right;
                color: #999999;
              }
            }
            a:hover {
              color: #de9811;
            }
          }
        }
      }
    }
  }
  /*快速入口*/
  .ind-entrance {
    border-top: 1px solid #EDEDED;
    padding: 6.25rem 0;
    .d-link {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .conta {
      width: 100%;
      a {
        width: 12%;
        display: block;
        float: left;
        height: 11.25rem;
        background-color: #F2F0F0;
        border-radius: 0.3125rem;
        text-align: center;
        margin: 0 .842% 0.3125rem;
        transition: all .4s ease;
        border: 2px solid #F2F0F0;
        .dn1 {
          height: 4.125rem;
          line-height: 4.125rem;
          margin: 1.5625rem 0 0.625rem;
          i {
            vertical-align: middle;
          }
          .iconfont {
            font-size: 44px;
          }
        }
        .dn2 {
          font-size: 18px;
          margin: 0 0 6px;
        }
        .dn3 {
          font-size: 12px;
          text-transform: uppercase;
        }
      }
      a:first-child {
        color: #333;
      }
      a:hover {
        border: 2px solid #E8B760;
        background-color: transparent;
        color: #E8B760;
      }
    }
  }
  /* 页面加载过渡 */
  .close-bg {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000000;
    z-index: 999;
  }
  .cloBgAni {
    animation: cloBg 1s forwards;
  }
  @keyframes cloBg {
    0% {
      left: 0;
    }
    100% {
      left: 100%;
      display: none;
    }
  }
  .loading {
    z-index: 999;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border-top: 3px solid #959595;
    border-right: 3px solid #959595;
    border-left: 3px solid #eeeeee;
    border-bottom: 3px solid #eeeeee;
    animation: loadingAnimation 1s linear infinite;
  }
  @keyframes loadingAnimation {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}


</style>