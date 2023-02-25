<template>
  <div class="com-Crumbs text-center">
    <div class="conta">
      <a href="" class="ac blo-box">集团简介</a>
      <a href=""  class="blo-box">管理团队</a>
      <a href="" class="blo-box">战略规划</a>
      <a href="" class="blo-box">发展历程</a>
      <a href="" class="blo-box">集团荣誉</a>
      <a href="" class="blo-box">企业文化</a>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.com-Crumbs {
  background-color: #E9E9E9;
  .conta {
     width: 90%;
    position: relative;
    height: 100%;
    margin: 0 auto;
    .blo-box {
      width: 12.5%;
      height: 3.125rem;
      line-height: 3.125rem;
      color: #333333;
      position: relative;
      transition: all .4s ease;
      border-right: 1px solid #ffffff;
      /* min-width: 90px; */
      display: inline-block;
      vertical-align: top;
      font-size: 0.875rem;
      a {
        display: inline-block;
        vertical-align: top;
        font-size: 0.875rem;
      }
    }
    .ac {
      position: relative;
    }
    .ac, .blo-box:hover {
      background-color: #ffffff;
      color: #de9811;
    }
    .ac:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      background-color: #de9811;
    }
  }
}
</style>