<template>
  <div id="app">
    <jiarunav></jiarunav>
    <div class="ui middle aligned center aligned grid" id="login-form">
      <div class="column">
        <h2 class="ui violet header">
          <div class="content">请先登录</div>
        </h2>
        <form id="lgfm" class="ui large form">
          <div class="ui stacked segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input id="username" type="text" name="username" placeholder="用户名">
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input id="password" type="password" name="password" placeholder="密码">
              </div>
            </div>
            <div class="ui fluid large violet submit button" @click="login()">登录</div>
          </div>

          <div class="ui error message"></div>
        </form>

        <div class="ui message">
          还没有账号?
          <a href="#">注册</a>
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
  data: {},
  methods: {
    login: function() {
      $.post(
        "/operation/login",
        {
          username: username.value,
          password: password.value
        },
        function(res) {
          if (res.success) {
            window.location.href = "/index.html";
          }
        },
        "json"
      );
    }
  }
};
</script>

<style>
.column {
  max-width: 450px;
}

#login-form {
  height: 70%;
}

body {
  height: 100%;
}

#app {
  height: 100%;
}
</style>


