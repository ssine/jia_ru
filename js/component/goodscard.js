Vue.component('jiarunav', {
  template: '<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">\
  <el-menu-item index="1">首页</el-menu-item>\
  <el-menu-item index="2">我要租房</el-menu-item>\
  <el-menu-item index="3">我要求租</el-menu-item>\
  <el-menu-item index="4">个人中心</a></el-menu-item>\
  </el-menu>',
  data: function () {
      return {
          activeIndex: '1',
          activeIndex2: '1'
      }
  },  
  methods: {
      handleSelect(key, keyPath) {
          console.log(key, keyPath);
      }
  }
});