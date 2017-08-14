<template>
  <form class="form">
    <div class="form-group clearfix">
      <label class="label fl">姓名:</label>
      <p :class="{ 'control': true,fl: true }">
        <input v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('name'),fl: true  }" name="name" type="text">
        <span v-show="errors.has('name')" class="help is-danger fl">{{ errors.first('name') }}</span>
      </p>
    </div>

    <div class="form-group clearfix">
      <label class="label fl">密码:</label>
      <p :class="{ 'control': true,fl: true }">
        <input v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('password') ,fl: true }" name="password" type="password">
        <span v-show="errors.has('password')" class="help is-danger fl">{{ errors.first('password') }}</span>
      </p>
    </div>
    <div class="form-group clearfix">
      <a class="submit" @click="logHandle" href="javascript:void (0)">登录</a>
    </div>

  </form>
</template>

<script>
export default {
  name: 'logform',
  props:['type'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    logHandle() {
      let _this = this
      this.$http({
        method: "POST",
        url: '/api/log',
        data: {
          id: 123
        }
      }).then(function (response) {
        alert('登陆成功')
        _this.$emit('clocseDialog', _this.type)
      }).catch(function (error) {

      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  font-size: 14px;
}
.form-group {
  margin: 10px 0;
  padding-left: 40px;
}
.control {
  width: 340px;
}
label {
  width: 60px;
  text-align: justify;
  line-height: 24px;
}
.input {
  color: #333;
  height: 24px;
  line-height: 24px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-indent: 1em;
  outline: none;
  width: 100%;
}
.is-danger {
  color: red;
  width: 100%;
}
.submit {
  display: block;
  width: 80px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  background: deepskyblue;
  margin: 10px auto 0;
}
</style>
