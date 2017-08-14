<template>
  <div id="layout">
    <div class="header clearfix">
      <div class="innerHead">
        <div class="logo fl">
          <img src="../assets/logo.png" height="200" width="200" alt="">
        </div>
        <nav class="nav fr">
          <a class="fl" @click="loginClick" href="javascript:void(0);">登陆</a>
          <a class="fl" @click="regClick" href="javascript:void(0);">注册</a>
          <a class="fl" @click="aboutClick" href="javascript:void(0);">关于</a>
        </nav>
      </div>
    </div>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="footer">
      <p>&#169;2014-2017www.imasa.cn all rights reserved.国家体育总局棋牌运动管理中心版权所有</p>
      <p>ICP经营许可证：京ICP备16019604</p>
    </div>


    <base-dialog @clocseDialog="clossD" type="isLoginDialog" v-show="isLoginDialog">
      <h3 slot="header">请登录</h3>
      <div slot="content">
        <log-form @clocseDialog="clossD" type="isLoginDialog"></log-form>
      </div>
      <!--<template slot="footer">-->
        <!--<a href="javascript:void (0)">登录</a>-->
      <!--</template>-->
    </base-dialog>


    <base-dialog @clocseDialog="clossD" type="isRegDialog" v-show="isRegDialog">
      <h3 slot="header">填写注册信息</h3>
      <div slot="content">
        <reg-form></reg-form>
      </div>
      <template slot="footer">

      </template>
    </base-dialog>


    <base-dialog @clocseDialog="clossD" type="isAboutDialog" v-show="isAboutDialog">
      <h3 slot="header">关于我们</h3>
      <div slot="content">
        <p style="text-indent: 2em;">暗杀计划单萨的痕迹按时短时暗杀计划单萨的痕迹按时短时暗杀计划单萨的痕迹按时短时暗杀计划单萨的痕迹按时短时暗杀计划单萨的痕迹按时短时暗杀计划单萨的痕迹按时短时暗杀计划单萨的痕迹按时短时暗杀计划单萨的痕迹按时短时暗杀计划单萨的痕迹按时短时</p>
      </div>
    </base-dialog>
  </div>
</template>

<script>
import BaseDialog from '@/components/BaseDialog'
import RegForm from '@/components/RegForm'
import LogForm from '@/components/LogForm'
export default {
  name: 'layout',
  data () {
    return {
      isLoginDialog: false,
      isRegDialog: false,
      isAboutDialog: false,
      currentDialog: null
    }
  },
  components: {
    BaseDialog,
    RegForm,
    LogForm
  },
  methods: {
    loginClick () {
      this.isLoginDialog = true
    },
    regClick () {
      this.isRegDialog = true
    },
    aboutClick () {
      this.isAboutDialog = true
    },
    clossD (type) {
        this[type] = false;
    }
  }
}
</script>


<style>
/* --------------------------------------------------[Reset] */
body, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, p, blockquote, pre, form, fieldset, legend, button, input, textarea, th, td { margin: 0; padding: 0; font-family: '微软雅黑'; }
ul, ol { list-style: outside none; }
fieldset, img { border: 0; }
table { border-collapse: collapse; border-spacing: 0; }
body, small, sup, sub, button, input, textarea, select { font: 12px/1 Arial, Helvetica, Verdana, SimSun, sans-serif; }
body { line-height: 1.5; }
h1, h2, h3, h4, h5, h6 { font-size: 100%; }
address, cite, dfn, em, var { font-style: normal; }
code, kbd, pre, samp { font-family: Consolas, "Lucida Console", Courier, SimSun, monospace; }
sup, sub { position: relative; vertical-align: baseline; }
sup { top: -3px; }
sub { bottom: -3px; }
button { padding: 5px 10px; overflow: visible; }
a { text-decoration: none; }
.fl { float: left; }
.fr { float: right; }
body {
  background: #eee;
}
#layout {
  padding-bottom: 88px;
}
/* 清除浮动 */
.clearfix {
  *zoom: 1;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.header {
  height: 120px;
  background: rgba(0, 0, 0, .8);
}
.innerHead {
  width: 1200px;
  margin: 0 auto;
}
.header .logo {
  vertical-align: middle;
  margin-top: 20px;
}
.header img {
  width: 80px;
  height: 80px;
}
.header nav {
  margin-top: 40px;
}
.header nav a {
  color: #fff;
  margin: 10px;
  font-size: 14px;
}
.header nav a:hover {
  text-decoration: underline;
  color: #ccc;
}
.footer {
  width: 100%;
  background: #ccc;
  padding: 26px 0;
  color: #333;
  position: absolute;
  left: 0;
  bottom: 0;
}
.footer p {
  font-family: "Adobe 黑体 Std R";
  text-align: center;
  line-height: 18px;
}
</style>
