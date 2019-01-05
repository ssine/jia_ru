<template>
  <div>
    <jiarunav></jiarunav>

    <div class="login">
      <div class="login-con">
        <Card icon="log-in" title="欢迎登录" :bordered="true">
          <div class="form-con">
            <login-form></login-form>
            <p class="login-tip">输入任意用户名和密码即可</p>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/login-form.vue'
import jiarunav from '@/components/jiarunav.vue'
export default {
  components: {
    LoginForm,
    jiarunav
  },
  methods: {

  }
}
</script>

<style>
.login {
  width: 500px;
  margin: 0 auto;
  margin-top: 100px;
}
</style>
