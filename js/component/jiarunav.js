Vue.component('jiarunav', {
    template: '<div class="ui menu">\
    <div class="header item"></div>\
    <a class="item" onclick="window.open(\'./allhouse.html\', \'_self\')">我要租房</a>\
    <a class="item" onclick="window.open(\'./house.html\', \'_self\')">我要出租</a>\
      <div class="right menu">\
      <a class="item" onclick="window.open(\'./user-info.html\', \'_self\')">个人面板</a>\
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