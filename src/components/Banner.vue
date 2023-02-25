<template>
  <div class="com-banner">
    <div class="d-tu"
         style="background: url('/images/ind-intr/5b0fa3bb3be02.jpg') no-repeat center;
         background-size: cover;">
    </div>
    <div class="wen">
      <div class="p1 wow fadeInUp">创意城市 创意建筑</div>
      <div class="p2 wow fadeInUp" data-wow-delay=".1s">Creative City Creative Architecture
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const comBanner = reactive({

})
</script>

<style lang="scss" scoped>
.com-banner {
  position: relative;
  width: 100%;
  overflow: hidden;
  .d-tu {
    width: 100%;
    min-height: 24.1875rem;
    transform: scale(1);
    animation: scale 8s infinite;
    animation-direction: alternate;
  }
  .wen {
    position: absolute;
    text-align: center;
    font-size: 0.9375rem;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    .p1 {
      font-size: 3rem;
      margin: 0 0 0.625rem;
    }
  }
}
</style>