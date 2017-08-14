<template>
  <div class="banner" @mouseover="cleInv" @mouseout="runInv">
    <a class="imgBox clearfix" :href="sliders[activeIndex].href">
      <transition name="slider-trans">
        <img v-if="isShow" v-bind:src="sliders[activeIndex].src">
      </transition>
      <transition name="slider-trans-old">
        <img v-if="!isShow" v-bind:src="sliders[activeIndex].src">
      </transition>
    </a>


    <nav class="tabBot clearfix">
      <a class="fl previous" @click="tabHandle(preIndex)">&lt;</a>
      <template v-for="(intem, index) in sliders">
        <a v-bind:class="{active: index === activeIndex}" class="fl" @click="tabHandle(index)" href="javascript:void (0);">{{ index + 1 }}</a>
      </template>
      <a class="fl next" @click="tabHandle(nextIndex)">&gt;</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'slider',
//  props: ['sliders', 'invTime'],
  props: {
    sliders: {
      type: Array
    },
    invTime: {
      type: Number
    }
  },
  data () {
    return {
      activeIndex: 0,
      isShow: true
    }
  },
  computed: {
    preIndex () {
      if (this.activeIndex == 0) {
        return this.sliders.length - 1;
      } else {
        return this.activeIndex - 1;
      }
    },
    nextIndex () {
      if (this.activeIndex == this.sliders.length - 1) {
        return 0;
      } else {
        return this.activeIndex + 1;
      }
    }
  },
  methods: {
    tabHandle(index)
    {
//      console.log(index)
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.activeIndex = index
      }, 10)
      this.$emit('change', index)
    },
    runInv () {
      var _this = this;
      this.invId = setInterval(function () {
        _this.tabHandle(_this.nextIndex);
      }, this.invTime)
    },
    cleInv () {
      clearInterval(this.invId);
    }
  },
  mounted () {
    this.runInv();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  width: 100%;
  height: 100%;
  position: relative;
}
.imgBox {
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.banner img {
  float: left;
  width: 100%;
  height: 100%;
}
.tabBot {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  background: rgba(0, 0, 0, .8);
}
.tabBot a {
  color: #fff;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border: 1px solid #fff;
  color: #f60;
  border-radius: 50%;
  margin: 5px;
}
.tabBot .active {
  background: #f60;
  color: #fff;
}
.tabBot .next, .tabBot .previous {
  color: #fff;
  width: 30px;
  border-radius: 0;
  border: none;
}
.slider-trans-enter-active {
  transition: all .5s;
}
.slider-trans-enter {
  transform: translateX(960px);
}
.slider-trans-old-leave-active {
  transition: all .5s;
}
.slider-trans-old-leave {
  transform: translateX(-960px);
}
</style>
