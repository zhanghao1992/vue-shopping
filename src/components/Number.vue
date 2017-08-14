<template>
  <div class="select-num">
    <span @click="reduceHandle">-</span>
    <input type="text" v-model="num" @keyup="fixHandle">
    <span @click="addHandle">+</span>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: 10
    },
    min: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      num: this.min
    }
  },
  watch: {
    num() {
      this.$emit('changeNumber', this.num)
    }
  },
  methods: {
    addHandle() {
      if (this.num >= this.max) {
        return
      }
      this.num++
    },
    reduceHandle() {
      if (this.num <= this.min) {
        return
      }
      this.num >= 1 ? this.num-- : 0
    },
    fixHandle() {
      let fix
      if (typeof this.num === 'string') {
        fix = Number(this.num.replace(/\D/g, ''))
      } else {
        fix = this.num
      }
      if (fix > this.max || fix < this.min) {
        fix = this.num
      }
      this.num = fix
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select-num {
  display: inline-block;
}
.select-num span, .select-num input {
  height: 22px;
  line-height: 22px;
  display: inline-block;
  text-align: center;
}
.select-num span {
  border: 1px solid #000;
  width: 20px;
}
.select-num input {
  width: 40px;
}
</style>
