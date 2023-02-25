<template>
    <footer ref="footer">
            <div :class="['scroll-top', toTop ? 'ac' : '', colorAc ? 'ac1' : '']" @click="clickToTop">
                <i class="iconfont icon-xiangshangjiantouarrowup"></i>
            </div>
            <div class="conta">
                <div class="foot-top clearfix">
                    <div class="done fl">
                        <a href="" class="a-logo"><img :src="$store.state.logoPath" alt=""></a>
                        <div class="d-dh">
                            <i class="iconfont icon-dianhua1"></i>
                            <span class="s2">{{$store.state.footer.tel}}</span>
                        </div>
                        <div class="wen">
                            <p v-for="(item, index) in $store.state.footer.txtArr" :key="index">{{item}}</p>
                        </div>
                    </div>
                    <div class="dthree fr">
                        <div class="dn1">微信公众号</div>
                        <div class="dn-ewm text-center bg-bai"><img :src="$store.state.footer.wxAccount" alt=""></div>
                        <div class="dn2">扫一扫，关注新源</div>
                    </div>
                </div>
                <div class="foot-bot clearfix">
                    <div class="dfl fl">
                        <span>{{$store.state.footer.info.copyright}}</span>
                        <span><a target='_blank'  href=''> {{$store.state.footer.info.record}}</a></span>
                        <span>Powered By：<a href="" target="_blank">{{$store.state.footer.info.pby}}</a></span>
                    </div>
                    <div class="dfr fr">
                        <span>友情链接：</span>
                        <div class="Friendship-link">
                            <h1><a :href="$store.state.footer.link[0].path">{{$store.state.footer.link[0].title}}</a></h1>
                            <div class="Friendship-link-a" v-for="(val, index) in linkArr" :key="index">
                                <a :href="val.path" target="_blank">{{val.title}}</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
</template>

<script setup>
import {ref, reactive, computed, onMounted, onBeforeUnmount} from 'vue'
// 过滤友情链接
import { useStore } from 'vuex' // 引入useStore 方法
const store = useStore()  // 该方法用于返回store 实例
// 原生方法
import native from '@/utils/native'

const linkArr = computed(() => {
  return store.state.footer.link.filter((v, i) => {
    return i > 0
  })
})
const footer = ref(null)
let toTop = ref(false)
let colorAc = ref(false)
let scrollTop = null, viewHeight = null
const scrollToTop = () => {
  scrollTop = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop
  viewHeight = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight
  if (scrollTop > 10) {
    toTop.value = true
  } else {
    toTop.value = false
  }

  if (scrollTop > native.offset(footer.value).top - viewHeight) {
    colorAc.value = true
  } else {
    colorAc.value = false
  }

}

const clickToTop = () => {
  let topNum = scrollTop
  let time = setInterval(() => {
    topNum -= 100
    document.documentElement.scrollTop = topNum
    if (topNum <= 0) {
      clearInterval(time)
    }
  }, 10)
}

onMounted(() => {
  window.addEventListener('scroll', scrollToTop, false)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollToTop, false)
})

</script>

<style lang="scss" scoped>

/*底部*/

footer {
    background-color: #0C0C0C;
    z-index: 2;
    position: relative;
    width: 100%;
    /* 回顶部 */
    .scroll-top {
        width: 2.5rem;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
        border-radius: 0.3125rem;
        position: fixed;
        bottom: 10%;
        right: -10%;
        //right: 2%;
        opacity: 0;
        filter: alpha(opacity=0);
        z-index: 13;
        color: #ffffff;
        cursor: pointer;
        background-color: #0F0F0F;
        transition: all .8s ease;
        i {
          font-size: 1.875rem;
        }
    }
    .ac {
      right: 1.5625rem !important;
      opacity: 1;
      filter: alpha(opacity=100);

    }
    .ac1 {
      color: #0F0F0F;
      background-color: #ffffff;

    }


    .conta {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .foot-top {
            width: 80%;
            margin: 0 auto;
            padding: 5rem 0;
            color: #999999;
            .done {
                .d-dh {
                    margin: 1.875rem 0 2.1875rem;
                    color: #de9811;
                    font-size: 2rem;
                    /*font-family: 'noto';*/
                    font-style: italic;
                    i {
                        font-size: 2rem;
                        margin: 0 0.625rem 0 0;
                    }
                }
                .wen {
                    line-height: 1.625rem;
                }
            }
            .dthree {
                .dn-ewm {
                    width: 8rem;
                    height: 8rem;
                    line-height: 7.875rem;
                    margin: 0.8125rem 0 0.625rem;
                    img {
                        width: 93.75%;
                        height: 93.75%;
                        vertical-align: middle;
                    }
                }
            }
        }
        .foot-bot {
          width: 80%;
          border-top: 1px solid #292929;
          padding: 1.25rem 0;
          color: #ffffff;
          z-index: 0;
            a {
                color: #ffffff;
            }
            .dfl {
                margin: 0.375rem 0 0;
                span {
                    margin: 0 1.5625rem 0 0;
                }
            }
            .Friendship-link {
                width: 12.5rem;
                height: 1.875rem;
                background-color: #3A3A3A;
                position: relative;
                text-align: left;
                display: inline-block;
                font-size: 0.75rem;
                h1 {
                  font-size: 0.75rem;
                  line-height: 1.875rem;
                  cursor: pointer;
                  padding: 0 0 0 10%;
                  background: url("/images/footer/xiasanjiao_03.jpg") no-repeat right center; color: #ffffff;
                }
                .Friendship-link-a {
                  position: absolute;
                  /*top: 30px;*/
                  bottom: 1.875rem;
                  left: 0;
                  width: 100%;
                  background-color: #3A3A3A;
                  display: none;
                  /*border-bottom: 1px solid #CCCCCC;*/
                  z-index: -1;
                    a {
                        display: block;
                        line-height: 1.875rem;
                        border-bottom: 1px dashed #cccccc;
                        text-align: center;
                    }
                }
              @keyframes link {
                0% {
                  transform: translateY(calc(100% - 1px));
                }
                100% {
                  transform: translateY(0);
                }
              }
            }
          .Friendship-link:hover {
            .Friendship-link-a {
              display: block;
              animation: link 1s forwards;
            }
          }
        }
    }

}
</style>