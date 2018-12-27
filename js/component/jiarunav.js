Vue.component('jiarunav', {
    template: '<div class="ui menu">\
    <div class="header item"></div>\
    <a class="item">我要租房</a>\
    <a class="item">我要出租</a>\
      <div class="right menu">\
      <a class="item">个人面板</a>\
    </div>\
    </div>',
    data: function () {
        return {
            //data
        }
    },  
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
});