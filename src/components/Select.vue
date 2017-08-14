<template>
  <div @click="showHandle" class="select-down">
    <p>{{list[activeIndex].name}}</p>
    <ul v-show="showSeletc">
      <li v-for="(item,index) in list"
        :value="item.code"
        @click="clickHandle(index)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data() {
    return {
      showSeletc: false,
      activeIndex: 0
    }
  },
  watch: {
    activeIndex() {
      this.$emit('changeCity', this.activeIndex)
    }
  },
  methods: {
    showHandle() {
      this.showSeletc = !this.showSeletc
    },
    clickHandle(index) {
      this.activeIndex = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select-down {
  position: relative;
  display: inline-block;
  width: 100px;
  line-height: 22px;
  height: 22px;
  border: 1px solid #000;
  vertical-align: middle;
  text-indent: 1em;
}
.select-down ul {
  background: #fff;
  border: 1px solid #000;
}
.select-down ul li:hover {
  color: #f60;
}
</style>
