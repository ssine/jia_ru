<template>
  <div>
    <footer class="footer">
      <div class="clearfix"></div>
      <div class="icon-row">
        <div class="footer-icon">
          <h5 class="footer-icon-child"></h5>
            <span class="footer-icon-text">房源齐全，轻松租房</span>
        </div>
        <div class="footer-icon">
          <h5 class="footer-icon-child footer-icon-child-2"></h5>
            <span class="footer-icon-text">消息直发，极速租房</span>
        </div>
        <div class="footer-icon">
          <h5 class="footer-icon-child footer-icon-child-3"></h5>
            <span class="footer-icon-text">质量保证，精致租房</span>
        </div>
        <div class="footer-icon">
          <h5 class="footer-icon-child footer-icon-child-4"></h5>
            <span class="footer-icon-text">天天低价，畅选租房</span>
        </div>
      </div>
      <div class="service-intro">
        <div class="servece-type">
          <div class="servece-type-info" v-for="(guide, index) in guideArr" :key="index">
            <ul>
              <li v-for="(item, index) in guide" :key="index">{{item}}</li>
            </ul>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="friend-link">
          <div class="friend-link-item">
            <ul>
              <li v-for="(link, index) in moreLink" :key="index">
                <span :class="[linkItemClass, {'link-last-item': index === 9}]">{{link}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="copyright">
            <p>Copyright © 2018 by 308 <a href="https://github.com/PowerDos">
                <Icon type="social-github"></Icon>
            </a> <span>本项目仅供学习参考</span></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      linkItemClass: 'link-item',
      guideArr: [
          ['关于我们', '关于甲如', '联系甲如', '加入甲如'],
          ['甲如业务', '业务体系', '甲如产品', '甲如服务', '甲如采购'],
          ['关注甲如', '甲如微信', '期待app']
      ],
      moreLink: [
          '关于我们', '联系我们', '联系客服', '合作招商', '中介帮助', '校园社区', '风险监测', '隐私政策'
      ]
    };
  }
};
</script>

<style scoped>

    .footer {
  width: 100%;
  height: 390px;
  margin-top: 30px;
  background-color: #eaeaea;
}
.icon-row {
  margin: 15px auto;
  padding-top: 8px;
  width: 1000px;
  height: 64px;
}
.footer-icon {
  margin-left: 17px;
  margin-right: 17px;
  float: left;
}
.footer-icon-child {
  margin-top: 10px;
  overflow: hidden;
  position: absolute;
  width: 36px;
  height: 42px;
  background-image: url("../../../static/img/footer/ico_service.png");
  text-indent: -999px;
}
.footer-icon-child-2 {
  background-position: 0 -43px;
}
.footer-icon-child-3 {
  background-position: 0 -86px;
}
.footer-icon-child-4 {
  background-position: 0 -129px;
}
.footer-icon-text {
  margin-left: 45px;
  color: #444444;
  font-size: 18px;
  font-weight: bold;
  line-height: 64px;
}
.service-intro {
  width: 100%;
  border-top: 1px solid #b2dfdb;
}
.servece-type {
  margin: 15px auto;
  height: 200px;
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.servece-type-info {
  color: #666666;
}
.servece-type-info ul {
  list-style: none;
}
.servece-type-info li {
  font-size: 14px;
  cursor: pointer;
  line-height: 26px;
}
.servece-type-info li:first-child {
  font-size: 16px;
  line-height: 28px;
  font-weight: bold;
}
.friend-link {
  display: flex;
  align-items: center;
  width: 908px;
  height: 30px;
  margin: 0px auto;
  color: #666;
  border-top: 1px solid #b2dfdb;
}
.friend-link-item {
  margin: 0px auto;
}
.friend-link-item ul {
  list-style: none;
}
.friend-link-item li {
  padding: 5px 0px;
  float: left;
}
.link-item {
  padding: 0px 8px;
  cursor: pointer;
  border-right: 1px solid #ccc;
}
.link-last-item {
  border: none;
}
.copyright {
  width: 100%;
  color: #666;
  line-height: 30px;
  text-align: center;
}
.copyright a{
  color: #232323;
  font-size: 20px;
}
</style>
