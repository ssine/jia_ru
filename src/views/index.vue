<template>
  <div class="index">
    <jiarunav></jiarunav>
    <div class="header-image">
      <h1 class="title">甲如</h1>
      <h2 class="subtitle">深呼吸 放心住</h2>
    </div>
    <div class="function-entry">
      <ButtonGroup>
        <Button type="primary" size="large" onclick="window.open('./allhouse', '_self')">
          <Icon type="ios-arrow-back"></Icon>
          我要租房
        </Button>
        <Button type="primary" size="large" onclick="window.open('./house', '_self')">
          我要出租
          <Icon type="ios-arrow-forward"></Icon>
        </Button>
      </ButtonGroup>
    </div>
  </div>
</template>

<script>
import jiarunav from '@/components/jiarunav.vue';

export default {
  components: {
    jiarunav
  },
  name: "index",
  methods: {
    handleStart () {
      this.$Modal.info({
        title: 'Bravo',
        content: 'Now, enjoy the convenience of iView.'
      });
    }
  }
}

</script>

<style>
.header-image {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: url(../images/banner.jpg);
    background-position: bottom center;
    background-size: cover;
    text-align: center;
}

.title {
  padding-top: 3em;
  color: black;
  font-size: 4em;
}

.subtitle {
  padding-top: 1em;
  color: black;
}

.function-entry {
  margin: 0 auto;
  margin-top: 30vw;
  text-align: center;
  width: 400px;
}

</style>