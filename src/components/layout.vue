<template>
  <div >
    <!--头部导航条-->
    <div class="app-header">
      <div class="app-header-inner">
        <router-link :to="{path:'/'}">
        <img src="../assets/logo.png"/>
        </router-link>
        <div class="header-nav">
          <ul class="nav-list">
            <li> {{ username }}</li>
            <li v-if="username!== ''" class="nav-pile">|</li>
            <li v-if="username!== ''" @click="quit">退出</li>
            <li v-if="username=== ''" @click="logClick">登录</li>
            <li class="nav-pile">|</li>
            <li v-if="username=== ''" @click="regClick">注册</li>
            <li v-if="username=== ''" class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>
          </ul>
        </div>
      </div>
    </div>

<!--中间内容-->

    <div class="app-content">
      <router-view></router-view>
    </div>
<!--底部内容-->

    <div class="app-footer">
     <keep-alive>
      <p>@ 2016 fishnal MIT</p>
     </keep-alive>
    </div>

   <!--弹窗-->
    <!--登录 表单-->
    <my-dialog :isShow="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
     <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>

    <!--注册 表单-->
    <my-dialog :isShow="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form></reg-form>
    </my-dialog>

    <!--关于-->
    <my-dialog :isShow="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>从前从前有个人爱你很久，但偏偏风渐渐把距离吹得好远</p>
    </my-dialog>
  </div>
</template>

<script>
import Dialog from './dialog'
import LogForm from './logform'
import RegForm from './regform'
export default {
  components:{
    MyDialog:Dialog,
    LogForm,
    RegForm

  },
methods:{
  aboutClick(){
      this.isShowAboutDialog = true
  },
  logClick(){

    this.isShowLogDialog=true
  },
  regClick(){

    this.isShowRegDialog=true
  },
  closeDialog(attr){

    this[attr]=false
  },
  onSuccessLog (data) {
    console.log(data)
    this.closeDialog ('isShowLogDialog')
    this.username = data.username
  }
},
  data () {
    return {
      isShowAboutDialog:false,
      isShowLogDialog:false,
      isShowRegDialog:false,
      username:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
    line-height: 1;/*高度为1倍，自适应*/
  }

  ol, ul {
    list-style: none;
  }

  .app-header {/*头部整体*/
    background: #363636;
    color: #b2b2b2;/*字体颜色*/
    height: 90px;
    line-height: 90px;/*使文字内容居中*/
    width: 100%;
  }
  .app-header-inner {/*头部内容部分*/
    width: 1200px;/*讲头部内容放在一起布局，可以达到对称效果*/
    margin: 0 auto;
  }

  .app-header-inner img {
    width: 60px;
    height: 70px;
    margin-top: 10px;
  }
  .header-nav {/*无序列表整体部分*/
    float: right;
  }
  .header-nav ul {
    overflow: hidden;
  }
  .header-nav li {
    cursor: pointer;
    float: left;
  }
  .nav-pile {
    padding: 0 10px;
  }
  .app-footer {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;/*使文字水平垂直居中*/
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
  }

  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .container {
    width: 1200px;
    margin: 0 auto;
  }
  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }
  .button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
  .button:hover {
    background: #4fc08d;
  }
  .g-form {

  }
  .g-form-line {
    padding: 15px 0;
  }
  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }
  .g-form-input {
    display: inline-block;
  }
  .g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }
  .g-form-btn {
    padding-left: 100px;
  }
  .g-form-error {
    color: red;
    padding-left: 15px;
  }

</style>
