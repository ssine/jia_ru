<template>
  <div>
    <jiarunav></jiarunav>
    <div class="header-image">
      <h1 class="title">甲如</h1>
      <h2 class="subtitle">深呼吸 放心住</h2>
    </div>
    <div class="ui center aligned container function-entry">
      <div class="ui two bottom attached buttons">
        <div class="ui huge olive button" onclick="window.open('./allhouse.html', '_self')">租房</div>
        <div class="ui huge olive button" onclick="window.open('./house.html', '_self')">出租</div>
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
  methods: {}
};
</script>

<style>
.column {
    max-width: 450px;
}

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
    padding-top: 2em;
    color: black;
    font-size: 4em;
}

.subtitle {
    color: black;
}

.function-entry {
    margin: 0 auto;
    margin-top: 30vw;
    width: 400px !important;
}
</style>



