<template>
  <div>
    <div class="container">
      <i-input v-model="search_key" size="large" class="sreach" placeholder="输入你想查找的商品">
        <Button slot="append" icon="ios-search" @click="sreach"></Button>
      </i-input>
      <Tag v-for="(item, index) in promotionTags" :key="index" closable  @on-close="closeTags(index)"><span @click="selectTags(index)">{{item}}</span></Tag>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sreach',
  data () {
    return {
      promotionTags: ['地铁近', '楼层低', '环境优美', '安全', '比北邮好']
    };
  },
  methods: {
    closeTags (index) {
      this.promotionTags.splice(index, 1);
    },
    selectTags (index) {
      this.search_key = this.promotionTags[index];
    },
    sreach () {
      this.$router.push({path: this.$route.path, query: {search_key: this.search_key}});
    }
  },
  mounted: function () {
    if (typeof (this.$route.query.search_key) != "undefined") {
      this.search_key = this.$route.query.search_key;
    }
    ;
  }
};
</script>

<style scoped>
.container {
  padding-top: 15px;
  margin: 0px auto;
  margin-bottom: 15px;
  width: 460px;
}
.sreach {
  margin: 5px 0px;
}
</style>
