<template>
  <div>
    <jiarunav></jiarunav>

    <div class="login">
      <div class="login-con">
        <Card icon="log-in" title="请注册" :bordered="true">
          <div class="form-con">
            <register-form></register-form>
            <p class="login-tip"></p>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from '@/components/register-form.vue'
import jiarunav from '@/components/jiarunav.vue'
export default {
  components: {
    RegisterForm,
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
