<template>
  <div class="dialog-filter">
    <div class="dialog">
      <div class="dialog-header clearfix">
        <slot name="header">
        </slot>
        <span class="fr" @click="closeH">X</span>
      </div>
      <div class="dialog-content">
        <slot name="content"></slot>
      </div>
      <div class="dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dialog',
  props:['type'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    closeH () {
        this.$emit('clocseDialog', this.type)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dialog-filter {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .6);
}
.dialog-filter .dialog {
  position: fixed;
  left: 50%;
  top: 20%;
  width: 500px;
  background: #fff;
  margin-left: -250px;
}
.dialog-header {
  font-size: 14px;
  color: coral;
  text-indent: 1em;
  height: 30px;
  line-height: 30px;
  position: relative;
}
.dialog-header span {
  position: absolute;
  right: 10px;
  top: 0;
  text-align: center;
  width: 30px;
  cursor: pointer;
  font-weight: 700;
  color: #000;
}
.dialog-content {
  padding: 10px;
}

</style>
