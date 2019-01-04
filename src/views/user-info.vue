<template>
  <div>
    <jiarunav></jiarunav>
    <div class="ui grid" style="margin-top:20px;">
      <div class="two column"></div>
      <div class="two wide column">
        <div class="ui vertical fluid tabular menu">
          <a class="item active" data-tab="account-setting">账户信息</a>
          <a class="item" data-tab="house-info">房屋信息</a>
        </div>
      </div>
      <div class="twelve wide column">
        <div class="ui tab active" data-tab="account-setting">
          <div class="ui two column grid container">
            <div class="row">
              <h2 class="ui header">
                <i class="settings icon"></i>
                <div class="content">账户信息
                  <div class="sub header">查看并修改您的资料</div>
                </div>
              </h2>
            </div>
            <div class="row">
              <div class="column">用户名</div>
              <div class="column">{{user.username}}</div>
            </div>
            <div class="row">
              <div class="column">新密码</div>
              <input class="column">
            </div>
            <div class="row">
              <div class="column">姓名</div>
              <div class="column">{{this.user.name}}</div>
            </div>
            <div class="row">
              <div class="column">证件类型</div>
              <div class="column">{{this.user.id_type}}</div>
            </div>
            <div class="row">
              <div class="column">证件号码</div>
              <div class="column">{{this.user.id_number}}</div>
            </div>
            <div class="row">
              <div class="column">手机号码</div>
              <input class="column" :value="this.user.phone">
            </div>
            <div class="row">
              <div class="column">级别</div>
              <div class="column">{{this.user.grade}}</div>
            </div>
            <div class="row">
              <div class="column">注册城市</div>
              <div class="column">{{this.user.register_city}}</div>
            </div>
            <div class="row">
              <div class="column">注册时间</div>
              <div class="column">{{this.user.register_time}}</div>
            </div>

            <div class="row">
              <div class="ui violet button">提交</div>
            </div>
          </div>
        </div>
        <div class="ui tab" data-tab="house-info">
          <div class="row">
            <h2 class="ui header">
              <i class="warehouse icon"></i>
              <div class="content">房屋信息
                <div class="sub header">相关出租与求租信息</div>
              </div>
            </h2>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jiarunav from "../components/jiarunav.vue";
export default {
  components: {
    jiarunav: jiarunav
  },
  data: {
    house_items: [],
    user: {
      "username": "六小龄童",
      name: "章金莱",
      id_type: "身份证号",
      id_number: "233233233323232333",
      phone: "12345678910",
      grade: "普通用户",
      register_city: "浙江绍兴",
      register_time: "1959-4-12"
    }
  },
  created: function() {
    // var da = g_ajax_post("/data/user-info");
    this.user = {
        "username": "六小龄童",
        "name": "章金莱",
        "id_type": "身份证号",
        "id_number": "233233233323232333",
        "phone": "12345678910",
        "grade": "普通用户",
        "register_city": "浙江绍兴",
        "register_time": "1959-4-12"
    };
    // var house_item = g_ajax_post("/house");
    // this.house_items = house_item;
  }
};
</script>

<style>
.column {
  max-width: 350px;
}
</style>


