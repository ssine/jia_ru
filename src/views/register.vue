<template>
    <div id="app">
    <jiarunav></jiarunav>

    <div class="ui center aligned container grid" style="margin-top:100px;">
      <div class="left aligned column">

        <form class="ui form segment">
          <p>欢迎加入甲如！</p>

          <div class="two fields">
            <div class="field">
              <label>用户名</label>
              <input id="username" type="text" placeholder="用户名">
            </div>
            <div class="field">
              <label>姓名</label>
              <input id="name" type="text" placeholder="姓名">
            </div>
          </div>

          <div class="two fields">
            <div class="field">
              <label>登陆密码</label>
              <input id="password" type="password" placeholder="登陆密码">
            </div>
            <div class="field">
              <label>重复密码</label>
              <input id="password_rep" type="password" placeholder="重复密码">
            </div>
          </div>

          <div class="two fields">
            <div class="field">
              <label>证件类型</label>
              <select class="ui fluid dropdown" id="id_type">
                <option value="id">身份证号</option>
                <option value="student-id">学生证号</option>
                <option value="passport">护照</option>
              </select>
            </div>
            <div class="field">
              <label>证件号码</label>
              <input id="id_number" type="text" placeholder="证件号码">
            </div>
          </div>

          <div class="two fields">
            <div class="field">
              <label>手机号码</label>
              <input id="phone" type="text" placeholder="手机号码">
            </div>
            <div class="field">
              <label>所在城市</label>
              <div class="ui fluid search selection dropdown" id="city">
                <input id="register_city" type="hidden" class="dropdown icon"></i>
                <div class="default text">选择城市</div>
                <div class="menu">
                  <div class="item" data-value="北京市">
                    北京市
                  </div>
                  <div class="item" data-value="天津市">
                    天津市
                  </div>
                  <div class="item" data-value="辽宁省沈阳市">
                    辽宁省沈阳市
                  </div>
                  <div class="item" data-value="吉林省长春市">
                    吉林省长春市
                  </div>
                  <div class="item" data-value="黑龙江省哈尔滨市">
                    黑龙江省哈尔滨市
                  </div>
                  <div class="item" data-value="上海市">
                    上海市
                  </div>
                  <div class="item" data-value="江苏省南京市">
                    江苏省南京市
                  </div>
                  <div class="item" data-value="湖北省武汉市">
                    湖北省武汉市
                  </div>
                  <div class="item" data-value="广东省广州市">
                    广东省广州市
                  </div>
                  <div class="item" data-value="重庆市">
                    重庆市
                  </div>
                  <div class="item" data-value="四川省成都市">
                    四川省成都市
                  </div>
                  <div class="item" data-value="陕西省西安市">
                    陕西省西安市
                  </div>
                  <div class="item" data-value="河北省石家庄市">
                    河北省石家庄市
                  </div>
                  <div class="item" data-value="河北省唐山市">
                    河北省唐山市
                  </div>
                  <div class="item" data-value="山西省太原市">
                    山西省太原市
                  </div>
                  <div class="item" data-value="内蒙包头市">
                    内蒙包头市
                  </div>
                  <div class="item" data-value="辽宁省大连市">
                    辽宁省大连市
                  </div>
                  <div class="item" data-value="辽宁省鞍山市">
                    辽宁省鞍山市
                  </div>
                  <div class="item" data-value="辽宁省抚顺市">
                    辽宁省抚顺市
                  </div>
                  <div class="item" data-value="吉林省吉林市">
                    吉林省吉林市
                  </div>
                  <div class="item" data-value="黑龙江省齐齐哈尔市">
                    黑龙江省齐齐哈尔市
                  </div>
                  <div class="item" data-value="江苏省徐州市">
                    江苏省徐州市
                  </div>
                  <div class="item" data-value="浙江省杭州市">
                    浙江省杭州市
                  </div>
                  <div class="item" data-value="福建省福州市">
                    福建省福州市
                  </div>
                  <div class="item" data-value="江西省南昌市">
                    江西省南昌市
                  </div>
                  <div class="item" data-value="山东省济南市">
                    山东省济南市
                  </div>
                  <div class="item" data-value="山东省青岛市">
                    山东省青岛市
                  </div>
                  <div class="item" data-value="山东省淄博市">
                    山东省淄博市
                  </div>
                  <div class="item" data-value="河南省郑州市">
                    河南省郑州市
                  </div>
                  <div class="item" data-value="湖南省长沙市">
                    湖南省长沙市
                  </div>
                  <div class="item" data-value="贵州省贵阳市">
                    贵州省贵阳市
                  </div>
                  <div class="item" data-value="云南省昆明市">
                    云南省昆明市
                  </div>
                  <div class="item" data-value="甘肃省兰州市">
                    甘肃省兰州市
                  </div>
                  <div class="item" data-value="新疆乌鲁木齐市">
                    新疆乌鲁木齐市
                  </div>
                  <div class="item" data-value="河北省邯郸市">
                    河北省邯郸市
                  </div>
                  <div class="item" data-value="河北省保定市">
                    河北省保定市
                  </div>
                  <div class="item" data-value="河北省张家口市">
                    河北省张家口市
                  </div>
                  <div class="item" data-value="山西省大同市">
                    山西省大同市
                  </div>
                  <div class="item" data-value="内蒙呼和浩特市">
                    内蒙呼和浩特市
                  </div>
                  <div class="item" data-value="辽宁省本溪市">
                    辽宁省本溪市
                  </div>
                  <div class="item" data-value="辽宁省丹东市">
                    辽宁省丹东市
                  </div>
                  <div class="item" data-value="辽宁省锦州市">
                    辽宁省锦州市
                  </div>
                  <div class="item" data-value="辽宁省阜新市">
                    辽宁省阜新市
                  </div>
                  <div class="item" data-value="辽宁省辽阳市">
                    辽宁省辽阳市
                  </div>
                  <div class="item" data-value="黑龙江省鸡西市">
                    黑龙江省鸡西市
                  </div>
                  <div class="item" data-value="黑龙江省鹤岗市">
                    黑龙江省鹤岗市
                  </div>
                  <div class="item" data-value="黑龙江省大庆市">
                    黑龙江省大庆市
                  </div>
                  <div class="item" data-value="黑龙江省伊春市">
                    黑龙江省伊春市
                  </div>
                  <div class="item" data-value="黑龙江省佳木斯市">
                    黑龙江省佳木斯市
                  </div>
                  <div class="item" data-value="黑龙江省牡丹江市">
                    黑龙江省牡丹江市
                  </div>
                  <div class="item" data-value="江苏省无锡市">
                    江苏省无锡市
                  </div>
                  <div class="item" data-value="江苏省常州市">
                    江苏省常州市
                  </div>
                  <div class="item" data-value="江苏省苏州市">
                    江苏省苏州市
                  </div>
                  <div class="item" data-value="浙江省宁波市">
                    浙江省宁波市
                  </div>
                  <div class="item" data-value="安徽省合肥市">
                    安徽省合肥市
                  </div>
                  <div class="item" data-value="安徽省淮南市">
                    安徽省淮南市
                  </div>
                  <div class="item" data-value="安徽省淮北市">
                    安徽省淮北市
                  </div>
                  <div class="item" data-value="福建省厦门市">
                    福建省厦门市
                  </div>
                  <div class="item" data-value="山东省枣庄市">
                    山东省枣庄市
                  </div>
                  <div class="item" data-value="山东省烟台市">
                    山东省烟台市
                  </div>
                  <div class="item" data-value="山东省潍坊市">
                    山东省潍坊市
                  </div>
                  <div class="item" data-value="山东省泰安市">
                    山东省泰安市
                  </div>
                  <div class="item" data-value="山东省临沂市">
                    山东省临沂市
                  </div>
                  <div class="item" data-value="河南省开封市">
                    河南省开封市
                  </div>
                  <div class="item" data-value="河南省洛阳市">
                    河南省洛阳市
                  </div>
                  <div class="item" data-value="河南省平顶山市">
                    河南省平顶山市
                  </div>
                  <div class="item" data-value="河南省安阳市">
                    河南省安阳市
                  </div>
                  <div class="item" data-value="河南省新乡市">
                    河南省新乡市
                  </div>
                  <div class="item" data-value="河南省焦作市">
                    河南省焦作市
                  </div>
                  <div class="item" data-value="湖北省黄石市">
                    湖北省黄石市
                  </div>
                  <div class="item" data-value="湖北省襄樊市">
                    湖北省襄樊市
                  </div>
                  <div class="item" data-value="湖北省荆州市">
                    湖北省荆州市
                  </div>
                  <div class="item" data-value="湖南省株洲市">
                    湖南省株洲市
                  </div>
                  <div class="item" data-value="湖南省湘潭市">
                    湖南省湘潭市
                  </div>
                  <div class="item" data-value="湖南省衡阳市">
                    湖南省衡阳市
                  </div>
                  <div class="item" data-value="广东省深圳市">
                    广东省深圳市
                  </div>
                  <div class="item" data-value="广东省汕头市">
                    广东省汕头市
                  </div>
                  <div class="item" data-value="广东省湛江市">
                    广东省湛江市
                  </div>
                  <div class="item" data-value="广西南宁市">
                    广西南宁市
                  </div>
                  <div class="item" data-value="广西柳州市">
                    广西柳州市
                  </div>
                  <div class="item" data-value="青海省西宁市">
                    青海省西宁市
                  </div>
                  <div class="item" data-value="河北省秦皇岛市">
                    河北省秦皇岛市
                  </div>
                  <div class="item" data-value="河北省邢台市">
                    河北省邢台市
                  </div>
                  <div class="item" data-value="河北省承德市">
                    河北省承德市
                  </div>
                  <div class="item" data-value="河北省沧州市">
                    河北省沧州市
                  </div>
                  <div class="item" data-value="河北省廊坊市">
                    河北省廊坊市
                  </div>
                  <div class="item" data-value="河北省衡水市">
                    河北省衡水市
                  </div>
                  <div class="item" data-value="山西省阳泉市">
                    山西省阳泉市
                  </div>
                  <div class="item" data-value="山西省长治市">
                    山西省长治市
                  </div>
                  <div class="item" data-value="内蒙乌海市">
                    内蒙乌海市
                  </div>
                  <div class="item" data-value="内蒙赤峰市">
                    内蒙赤峰市
                  </div>
                  <div class="item" data-value="辽宁省营口市">
                    辽宁省营口市
                  </div>
                  <div class="item" data-value="辽宁省盘锦市">
                    辽宁省盘锦市
                  </div>
                  <div class="item" data-value="辽宁省铁岭市">
                    辽宁省铁岭市
                  </div>
                  <div class="item" data-value="辽宁省朝阳市">
                    辽宁省朝阳市
                  </div>
                  <div class="item" data-value="辽宁省葫芦岛市">
                    辽宁省葫芦岛市
                  </div>
                  <div class="item" data-value="吉林省四平市">
                    吉林省四平市
                  </div>
                  <div class="item" data-value="吉林省辽源市">
                    吉林省辽源市
                  </div>
                  <div class="item" data-value="吉林省通化市">
                    吉林省通化市
                  </div>
                  <div class="item" data-value="吉林省白山市">
                    吉林省白山市
                  </div>
                  <div class="item" data-value="吉林省松原市">
                    吉林省松原市
                  </div>
                  <div class="item" data-value="吉林省白城市">
                    吉林省白城市
                  </div>
                  <div class="item" data-value="黑龙江省双鸭山市">
                    黑龙江省双鸭山市
                  </div>
                  <div class="item" data-value="黑龙江省七台河市">
                    黑龙江省七台河市
                  </div>
                  <div class="item" data-value="江苏省南通市">
                    江苏省南通市
                  </div>
                  <div class="item" data-value="江苏省连云港市">
                    江苏省连云港市
                  </div>
                  <div class="item" data-value="江苏省淮阴市">
                    江苏省淮阴市
                  </div>
                  <div class="item" data-value="江苏省盐城市">
                    江苏省盐城市
                  </div>
                  <div class="item" data-value="江苏省扬州市">
                    江苏省扬州市
                  </div>
                  <div class="item" data-value="江苏省镇江市">
                    江苏省镇江市
                  </div>
                  <div class="item" data-value="江苏省泰州市">
                    江苏省泰州市
                  </div>
                  <div class="item" data-value="浙江省温州市">
                    浙江省温州市
                  </div>
                  <div class="item" data-value="浙江省嘉兴市">
                    浙江省嘉兴市
                  </div>
                  <div class="item" data-value="浙江省湖州市">
                    浙江省湖州市
                  </div>
                  <div class="item" data-value="浙江省绍兴市">
                    浙江省绍兴市
                  </div>
                  <div class="item" data-value="浙江省台州市">
                    浙江省台州市
                  </div>
                  <div class="item" data-value="安徽省芜湖市">
                    安徽省芜湖市
                  </div>
                  <div class="item" data-value="安徽省蚌埠市">
                    安徽省蚌埠市
                  </div>
                  <div class="item" data-value="安徽省马鞍山市">
                    安徽省马鞍山市
                  </div>
                  <div class="item" data-value="安徽省铜陵市">
                    安徽省铜陵市
                  </div>
                  <div class="item" data-value="安徽省安庆市">
                    安徽省安庆市
                  </div>
                  <div class="item" data-value="安徽省阜阳市">
                    安徽省阜阳市
                  </div>
                  <div class="item" data-value="福建省泉州市">
                    福建省泉州市
                  </div>
                  <div class="item" data-value="福建省漳州市">
                    福建省漳州市
                  </div>
                  <div class="item" data-value="福建省南平市">
                    福建省南平市
                  </div>
                  <div class="item" data-value="福建省龙岩市">
                    福建省龙岩市
                  </div>
                  <div class="item" data-value="江西省景德镇市">
                    江西省景德镇市
                  </div>
                  <div class="item" data-value="江西省萍乡市">
                    江西省萍乡市
                  </div>
                  <div class="item" data-value="江西省九江市">
                    江西省九江市
                  </div>
                  <div class="item" data-value="江西省新余市">
                    江西省新余市
                  </div>
                  <div class="item" data-value="山东省东营市">
                    山东省东营市
                  </div>
                  <div class="item" data-value="山东省济宁市">
                    山东省济宁市
                  </div>
                  <div class="item" data-value="山东省威海市">
                    山东省威海市
                  </div>
                  <div class="item" data-value="山东省日照市">
                    山东省日照市
                  </div>
                  <div class="item" data-value="山东省莱芜市">
                    山东省莱芜市
                  </div>
                  <div class="item" data-value="山东省德州市">
                    山东省德州市
                  </div>
                  <div class="item" data-value="河南省鹤壁市">
                    河南省鹤壁市
                  </div>
                  <div class="item" data-value="河南省濮阳市">
                    河南省濮阳市
                  </div>
                  <div class="item" data-value="河南省许昌市">
                    河南省许昌市
                  </div>
                  <div class="item" data-value="河南省漯河市">
                    河南省漯河市
                  </div>
                  <div class="item" data-value="河南省南阳市">
                    河南省南阳市
                  </div>
                  <div class="item" data-value="河南省商丘市">
                    河南省商丘市
                  </div>
                  <div class="item" data-value="湖北省十堰市">
                    湖北省十堰市
                  </div>
                  <div class="item" data-value="湖北省宜昌市">
                    湖北省宜昌市
                  </div>
                  <div class="item" data-value="湖北省鄂州市">
                    湖北省鄂州市
                  </div>
                  <div class="item" data-value="湖北省荆门市">
                    湖北省荆门市
                  </div>
                  <div class="item" data-value="湖北省孝感市">
                    湖北省孝感市
                  </div>
                  <div class="item" data-value="湖北省黄冈市">
                    湖北省黄冈市
                  </div>
                  <div class="item" data-value="湖南省邵阳市">
                    湖南省邵阳市
                  </div>
                  <div class="item" data-value="湖南省岳阳市">
                    湖南省岳阳市
                  </div>
                  <div class="item" data-value="湖南省常德市">
                    湖南省常德市
                  </div>
                  <div class="item" data-value="湖南省益阳市">
                    湖南省益阳市
                  </div>
                  <div class="item" data-value="湖南省郴州市">
                    湖南省郴州市
                  </div>
                  <div class="item" data-value="湖南省永州市">
                    湖南省永州市
                  </div>
                  <div class="item" data-value="湖南省怀化市">
                    湖南省怀化市
                  </div>
                  <div class="item" data-value="广东省韶关市">
                    广东省韶关市
                  </div>
                  <div class="item" data-value="广东省珠海市">
                    广东省珠海市
                  </div>
                  <div class="item" data-value="广东省佛山市">
                    广东省佛山市
                  </div>
                  <div class="item" data-value="广东省江门市">
                    广东省江门市
                  </div>
                  <div class="item" data-value="广东省茂名市">
                    广东省茂名市
                  </div>
                  <div class="item" data-value="广东省肇庆市">
                    广东省肇庆市
                  </div>
                  <div class="item" data-value="广东省惠州市">
                    广东省惠州市
                  </div>
                  <div class="item" data-value="广东省梅州市">
                    广东省梅州市
                  </div>
                  <div class="item" data-value="广东省阳江市">
                    广东省阳江市
                  </div>
                  <div class="item" data-value="广东省东莞市">
                    广东省东莞市
                  </div>
                  <div class="item" data-value="广东省中山市">
                    广东省中山市
                  </div>
                  <div class="item" data-value="广东省潮州市">
                    广东省潮州市
                  </div>
                  <div class="item" data-value="广西桂林市">
                    广西桂林市
                  </div>
                  <div class="item" data-value="广西梧州市">
                    广西梧州市
                  </div>
                  <div class="item" data-value="广西贵港市">
                    广西贵港市
                  </div>
                  <div class="item" data-value="海南省海口市">
                    海南省海口市
                  </div>
                  <div class="item" data-value="四川省自贡市">
                    四川省自贡市
                  </div>
                  <div class="item" data-value="四川省攀枝花市">
                    四川省攀枝花市
                  </div>
                  <div class="item" data-value="四川省泸州市">
                    四川省泸州市
                  </div>
                  <div class="item" data-value="四川省德阳市">
                    四川省德阳市
                  </div>
                  <div class="item" data-value="四川省绵阳市">
                    四川省绵阳市
                  </div>
                  <div class="item" data-value="四川省广元市">
                    四川省广元市
                  </div>
                  <div class="item" data-value="四川省遂宁市">
                    四川省遂宁市
                  </div>
                  <div class="item" data-value="四川省内江市">
                    四川省内江市
                  </div>
                  <div class="item" data-value="四川省乐山市">
                    四川省乐山市
                  </div>
                  <div class="item" data-value="四川省南充市">
                    四川省南充市
                  </div>
                  <div class="item" data-value="四川省宜宾市">
                    四川省宜宾市
                  </div>
                  <div class="item" data-value="贵州省六盘水市">
                    贵州省六盘水市
                  </div>
                  <div class="item" data-value="贵州省遵义市">
                    贵州省遵义市
                  </div>
                  <div class="item" data-value="云南省曲靖市">
                    云南省曲靖市
                  </div>
                  <div class="item" data-value="陕西省铜川市">
                    陕西省铜川市
                  </div>
                  <div class="item" data-value="陕西省宝鸡市">
                    陕西省宝鸡市
                  </div>
                  <div class="item" data-value="陕西省咸阳市">
                    陕西省咸阳市
                  </div>
                  <div class="item" data-value="陕西省汉中市">
                    陕西省汉中市
                  </div>
                  <div class="item" data-value="甘肃省白银市">
                    甘肃省白银市
                  </div>
                  <div class="item" data-value="甘肃省天水市">
                    甘肃省天水市
                  </div>
                  <div class="item" data-value="宁夏银川市">
                    宁夏银川市
                  </div>
                  <div class="item" data-value="宁夏石嘴山市">
                    宁夏石嘴山市
                  </div>
                  <div class="item" data-value="新疆克拉玛依市">
                    新疆克拉玛依市
                  </div>
                  <div class="item" data-value="山西省晋城市">
                    山西省晋城市
                  </div>
                  <div class="item" data-value="山西省朔州市">
                    山西省朔州市
                  </div>
                  <div class="item" data-value="内蒙通辽市">
                    内蒙通辽市
                  </div>
                  <div class="item" data-value="黑龙江省黑河市">
                    黑龙江省黑河市
                  </div>
                  <div class="item" data-value="江苏省宿迁市">
                    江苏省宿迁市
                  </div>
                  <div class="item" data-value="浙江省金华市">
                    浙江省金华市
                  </div>
                  <div class="item" data-value="浙江省衢州市">
                    浙江省衢州市
                  </div>
                  <div class="item" data-value="浙江省舟山市">
                    浙江省舟山市
                  </div>
                  <div class="item" data-value="安徽省黄山市">
                    安徽省黄山市
                  </div>
                  <div class="item" data-value="安徽省滁州市">
                    安徽省滁州市
                  </div>
                  <div class="item" data-value="安徽省宿州市">
                    安徽省宿州市
                  </div>
                  <div class="item" data-value="安徽省巢湖市">
                    安徽省巢湖市
                  </div>
                  <div class="item" data-value="安徽省六安市">
                    安徽省六安市
                  </div>
                  <div class="item" data-value="福建省莆田市">
                    福建省莆田市
                  </div>
                  <div class="item" data-value="福建省三明市">
                    福建省三明市
                  </div>
                  <div class="item" data-value="江西省鹰潭市">
                    江西省鹰潭市
                  </div>
                  <div class="item" data-value="江西省赣州市">
                    江西省赣州市
                  </div>
                  <div class="item" data-value="山东省聊城市">
                    山东省聊城市
                  </div>
                  <div class="item" data-value="河南省三门峡市">
                    河南省三门峡市
                  </div>
                  <div class="item" data-value="河南省信阳市">
                    河南省信阳市
                  </div>
                  <div class="item" data-value="湖北省咸宁市">
                    湖北省咸宁市
                  </div>
                  <div class="item" data-value="湖南省张家界市">
                    湖南省张家界市
                  </div>
                  <div class="item" data-value="湖南省娄底市">
                    湖南省娄底市
                  </div>
                  <div class="item" data-value="广东省汕尾市">
                    广东省汕尾市
                  </div>
                  <div class="item" data-value="广东省河源市">
                    广东省河源市
                  </div>
                  <div class="item" data-value="广东省清远市">
                    广东省清远市
                  </div>
                  <div class="item" data-value="广东省揭阳市">
                    广东省揭阳市
                  </div>
                  <div class="item" data-value="广东省云浮市">
                    广东省云浮市
                  </div>
                  <div class="item" data-value="广西北海市">
                    广西北海市
                  </div>
                  <div class="item" data-value="广西防城港市">
                    广西防城港市
                  </div>
                  <div class="item" data-value="广西钦州市">
                    广西钦州市
                  </div>
                  <div class="item" data-value="广西玉林市">
                    广西玉林市
                  </div>
                  <div class="item" data-value="海南省三亚市">
                    海南省三亚市
                  </div>
                  <div class="item" data-value="四川省达州市">
                    四川省达州市
                  </div>
                  <div class="item" data-value="云南省玉溪市">
                    云南省玉溪市
                  </div>
                  <div class="item" data-value="陕西省渭南市">
                    陕西省渭南市
                  </div>
                  <div class="item" data-value="陕西省延安市">
                    陕西省延安市
                  </div>
                  <div class="item" data-value="陕西省榆林市">
                    陕西省榆林市
                  </div>
                  <div class="item" data-value="甘肃省嘉峪关市">
                    甘肃省嘉峪关市
                  </div>
                  <div class="item" data-value="甘肃省金昌市">
                    甘肃省金昌市
                  </div>
                  <div class="item" data-value="宁夏吴忠市">
                    宁夏吴忠市
                  </div>
                  <div class="item" data-value="河北省辛集市">
                    河北省辛集市
                  </div>
                  <div class="item" data-value="河北省藁城市">
                    河北省藁城市
                  </div>
                  <div class="item" data-value="河北省晋州市">
                    河北省晋州市
                  </div>
                  <div class="item" data-value="河北省新乐市">
                    河北省新乐市
                  </div>
                  <div class="item" data-value="河北省鹿泉市">
                    河北省鹿泉市
                  </div>
                  <div class="item" data-value="河北省遵化市">
                    河北省遵化市
                  </div>
                  <div class="item" data-value="河北省丰南市">
                    河北省丰南市
                  </div>
                  <div class="item" data-value="河北省迁安市">
                    河北省迁安市
                  </div>
                  <div class="item" data-value="河北省武安市">
                    河北省武安市
                  </div>
                  <div class="item" data-value="河北省南宫市">
                    河北省南宫市
                  </div>
                  <div class="item" data-value="河北省沙河市">
                    河北省沙河市
                  </div>
                  <div class="item" data-value="河北省涿州市">
                    河北省涿州市
                  </div>
                  <div class="item" data-value="河北省定州市">
                    河北省定州市
                  </div>
                  <div class="item" data-value="河北省安国市">
                    河北省安国市
                  </div>
                  <div class="item" data-value="河北省高碑店市">
                    河北省高碑店市
                  </div>
                  <div class="item" data-value="河北省泊头市">
                    河北省泊头市
                  </div>
                  <div class="item" data-value="河北省任丘市">
                    河北省任丘市
                  </div>
                  <div class="item" data-value="河北省黄骅市">
                    河北省黄骅市
                  </div>
                  <div class="item" data-value="河北省河间市">
                    河北省河间市
                  </div>
                  <div class="item" data-value="河北省霸州市">
                    河北省霸州市
                  </div>
                  <div class="item" data-value="河北省三河市">
                    河北省三河市
                  </div>
                  <div class="item" data-value="河北省冀州市">
                    河北省冀州市
                  </div>
                  <div class="item" data-value="河北省深州市">
                    河北省深州市
                  </div>
                  <div class="item" data-value="山西省古交市">
                    山西省古交市
                  </div>
                  <div class="item" data-value="山西省潞城市">
                    山西省潞城市
                  </div>
                  <div class="item" data-value="山西省高平市">
                    山西省高平市
                  </div>
                  <div class="item" data-value="山西省忻州市">
                    山西省忻州市
                  </div>
                  <div class="item" data-value="山西省原平市">
                    山西省原平市
                  </div>
                  <div class="item" data-value="山西省孝义市">
                    山西省孝义市
                  </div>
                  <div class="item" data-value="山西省离石市">
                    山西省离石市
                  </div>
                  <div class="item" data-value="山西省汾阳市">
                    山西省汾阳市
                  </div>
                  <div class="item" data-value="山西省榆次市">
                    山西省榆次市
                  </div>
                  <div class="item" data-value="山西省介休市">
                    山西省介休市
                  </div>
                  <div class="item" data-value="山西省临汾市">
                    山西省临汾市
                  </div>
                  <div class="item" data-value="山西省侯马市">
                    山西省侯马市
                  </div>
                  <div class="item" data-value="山西省霍州市">
                    山西省霍州市
                  </div>
                  <div class="item" data-value="山西省运城市">
                    山西省运城市
                  </div>
                  <div class="item" data-value="山西省永济市">
                    山西省永济市
                  </div>
                  <div class="item" data-value="山西省河津市">
                    山西省河津市
                  </div>
                  <div class="item" data-value="内蒙霍林郭勒市">
                    内蒙霍林郭勒市
                  </div>
                  <div class="item" data-value="内蒙海拉尔市">
                    内蒙海拉尔市
                  </div>
                  <div class="item" data-value="内蒙满洲里市">
                    内蒙满洲里市
                  </div>
                  <div class="item" data-value="内蒙扎兰屯市">
                    内蒙扎兰屯市
                  </div>
                  <div class="item" data-value="内蒙牙克石市">
                    内蒙牙克石市
                  </div>
                  <div class="item" data-value="内蒙根河市">
                    内蒙根河市
                  </div>
                  <div class="item" data-value="内蒙额尔古纳市">
                    内蒙额尔古纳市
                  </div>
                  <div class="item" data-value="内蒙乌兰浩特市">
                    内蒙乌兰浩特市
                  </div>
                  <div class="item" data-value="内蒙二连浩特市">
                    内蒙二连浩特市
                  </div>
                  <div class="item" data-value="内蒙锡林浩特市">
                    内蒙锡林浩特市
                  </div>
                  <div class="item" data-value="内蒙集宁市">
                    内蒙集宁市
                  </div>
                  <div class="item" data-value="内蒙丰镇市">
                    内蒙丰镇市
                  </div>
                  <div class="item" data-value="内蒙东胜市">
                    内蒙东胜市
                  </div>
                  <div class="item" data-value="内蒙临河市">
                    内蒙临河市
                  </div>
                  <div class="item" data-value="辽宁省新民市">
                    辽宁省新民市
                  </div>
                  <div class="item" data-value="辽宁省瓦房店市">
                    辽宁省瓦房店市
                  </div>
                  <div class="item" data-value="辽宁省普兰店市">
                    辽宁省普兰店市
                  </div>
                  <div class="item" data-value="辽宁省庄河市">
                    辽宁省庄河市
                  </div>
                  <div class="item" data-value="辽宁省海城市">
                    辽宁省海城市
                  </div>
                  <div class="item" data-value="辽宁省东港市">
                    辽宁省东港市
                  </div>
                  <div class="item" data-value="辽宁省凤城市">
                    辽宁省凤城市
                  </div>
                  <div class="item" data-value="辽宁省凌海市">
                    辽宁省凌海市
                  </div>
                  <div class="item" data-value="辽宁省北宁市">
                    辽宁省北宁市
                  </div>
                  <div class="item" data-value="辽宁省盖州市">
                    辽宁省盖州市
                  </div>
                  <div class="item" data-value="辽宁省大石桥市">
                    辽宁省大石桥市
                  </div>
                  <div class="item" data-value="辽宁省灯塔市">
                    辽宁省灯塔市
                  </div>
                  <div class="item" data-value="辽宁省铁法市">
                    辽宁省铁法市
                  </div>
                  <div class="item" data-value="辽宁省开原市">
                    辽宁省开原市
                  </div>
                  <div class="item" data-value="辽宁省北票市">
                    辽宁省北票市
                  </div>
                  <div class="item" data-value="辽宁省凌源市">
                    辽宁省凌源市
                  </div>
                  <div class="item" data-value="辽宁省兴城市">
                    辽宁省兴城市
                  </div>
                  <div class="item" data-value="吉林省九台市">
                    吉林省九台市
                  </div>
                  <div class="item" data-value="吉林省榆树市">
                    吉林省榆树市
                  </div>
                  <div class="item" data-value="吉林省德惠市">
                    吉林省德惠市
                  </div>
                  <div class="item" data-value="吉林省蛟河市">
                    吉林省蛟河市
                  </div>
                  <div class="item" data-value="吉林省桦甸市">
                    吉林省桦甸市
                  </div>
                  <div class="item" data-value="吉林省舒兰市">
                    吉林省舒兰市
                  </div>
                  <div class="item" data-value="吉林省磐石市">
                    吉林省磐石市
                  </div>
                  <div class="item" data-value="吉林省公主岭市">
                    吉林省公主岭市
                  </div>
                  <div class="item" data-value="吉林省双辽市">
                    吉林省双辽市
                  </div>
                  <div class="item" data-value="吉林省梅河口市">
                    吉林省梅河口市
                  </div>
                  <div class="item" data-value="吉林省集安市">
                    吉林省集安市
                  </div>
                  <div class="item" data-value="吉林省临江市">
                    吉林省临江市
                  </div>
                  <div class="item" data-value="吉林省洮南市">
                    吉林省洮南市
                  </div>
                  <div class="item" data-value="吉林省大安市">
                    吉林省大安市
                  </div>
                  <div class="item" data-value="吉林省延吉市">
                    吉林省延吉市
                  </div>
                  <div class="item" data-value="吉林省图们市">
                    吉林省图们市
                  </div>
                  <div class="item" data-value="吉林省敦化市">
                    吉林省敦化市
                  </div>
                  <div class="item" data-value="吉林省珲春市">
                    吉林省珲春市
                  </div>
                  <div class="item" data-value="吉林省龙井市">
                    吉林省龙井市
                  </div>
                  <div class="item" data-value="吉林省和龙市">
                    吉林省和龙市
                  </div>
                  <div class="item" data-value="黑龙江省阿城市">
                    黑龙江省阿城市
                  </div>
                  <div class="item" data-value="黑龙江省双城市">
                    黑龙江省双城市
                  </div>
                  <div class="item" data-value="黑龙江省尚志市">
                    黑龙江省尚志市
                  </div>
                  <div class="item" data-value="黑龙江省五常市">
                    黑龙江省五常市
                  </div>
                  <div class="item" data-value="黑龙江省讷河市">
                    黑龙江省讷河市
                  </div>
                  <div class="item" data-value="黑龙江省虎林市">
                    黑龙江省虎林市
                  </div>
                  <div class="item" data-value="黑龙江省密山市">
                    黑龙江省密山市
                  </div>
                  <div class="item" data-value="黑龙江省铁力市">
                    黑龙江省铁力市
                  </div>
                  <div class="item" data-value="黑龙江省同江市">
                    黑龙江省同江市
                  </div>
                  <div class="item" data-value="黑龙江省富锦市">
                    黑龙江省富锦市
                  </div>
                  <div class="item" data-value="黑龙江省绥芬河市">
                    黑龙江省绥芬河市
                  </div>
                  <div class="item" data-value="黑龙江省海林市">
                    黑龙江省海林市
                  </div>
                  <div class="item" data-value="黑龙江省宁安市">
                    黑龙江省宁安市
                  </div>
                  <div class="item" data-value="黑龙江省穆棱市">
                    黑龙江省穆棱市
                  </div>
                  <div class="item" data-value="黑龙江省北安市">
                    黑龙江省北安市
                  </div>
                  <div class="item" data-value="黑龙江省五大连池市">
                    黑龙江省五大连池市
                  </div>
                  <div class="item" data-value="黑龙江省绥化市">
                    黑龙江省绥化市
                  </div>
                  <div class="item" data-value="黑龙江省安达市">
                    黑龙江省安达市
                  </div>
                  <div class="item" data-value="黑龙江省肇东市">
                    黑龙江省肇东市
                  </div>
                  <div class="item" data-value="黑龙江省海伦市">
                    黑龙江省海伦市
                  </div>
                  <div class="item" data-value="江苏省江阴市">
                    江苏省江阴市
                  </div>
                  <div class="item" data-value="江苏省宜兴市">
                    江苏省宜兴市
                  </div>
                  <div class="item" data-value="江苏省锡山市">
                    江苏省锡山市
                  </div>
                  <div class="item" data-value="江苏省新沂市">
                    江苏省新沂市
                  </div>
                  <div class="item" data-value="江苏省邳州市">
                    江苏省邳州市
                  </div>
                  <div class="item" data-value="江苏省溧阳市">
                    江苏省溧阳市
                  </div>
                  <div class="item" data-value="江苏省金坛市">
                    江苏省金坛市
                  </div>
                  <div class="item" data-value="江苏省武进市">
                    江苏省武进市
                  </div>
                  <div class="item" data-value="江苏省常熟市">
                    江苏省常熟市
                  </div>
                  <div class="item" data-value="江苏省张家港市">
                    江苏省张家港市
                  </div>
                  <div class="item" data-value="江苏省昆山市">
                    江苏省昆山市
                  </div>
                  <div class="item" data-value="江苏省吴江市">
                    江苏省吴江市
                  </div>
                  <div class="item" data-value="江苏省太仓市">
                    江苏省太仓市
                  </div>
                  <div class="item" data-value="江苏省吴县市">
                    江苏省吴县市
                  </div>
                  <div class="item" data-value="江苏省启东市">
                    江苏省启东市
                  </div>
                  <div class="item" data-value="江苏省如皋市">
                    江苏省如皋市
                  </div>
                  <div class="item" data-value="江苏省通州市">
                    江苏省通州市
                  </div>
                  <div class="item" data-value="江苏省海门市">
                    江苏省海门市
                  </div>
                  <div class="item" data-value="江苏省淮安市">
                    江苏省淮安市
                  </div>
                  <div class="item" data-value="江苏省东台市">
                    江苏省东台市
                  </div>
                  <div class="item" data-value="江苏省大丰市">
                    江苏省大丰市
                  </div>
                  <div class="item" data-value="江苏省仪征市">
                    江苏省仪征市
                  </div>
                  <div class="item" data-value="江苏省高邮市">
                    江苏省高邮市
                  </div>
                  <div class="item" data-value="江苏省江都市">
                    江苏省江都市
                  </div>
                  <div class="item" data-value="江苏省丹阳市">
                    江苏省丹阳市
                  </div>
                  <div class="item" data-value="江苏省扬中市">
                    江苏省扬中市
                  </div>
                  <div class="item" data-value="江苏省句容市">
                    江苏省句容市
                  </div>
                  <div class="item" data-value="江苏省兴化市">
                    江苏省兴化市
                  </div>
                  <div class="item" data-value="江苏省靖江市">
                    江苏省靖江市
                  </div>
                  <div class="item" data-value="江苏省泰兴市">
                    江苏省泰兴市
                  </div>
                  <div class="item" data-value="江苏省姜堰市">
                    江苏省姜堰市
                  </div>
                  <div class="item" data-value="浙江省萧山市">
                    浙江省萧山市
                  </div>
                  <div class="item" data-value="浙江省建德市">
                    浙江省建德市
                  </div>
                  <div class="item" data-value="浙江省富阳市">
                    浙江省富阳市
                  </div>
                  <div class="item" data-value="浙江省余杭市">
                    浙江省余杭市
                  </div>
                  <div class="item" data-value="浙江省临安市">
                    浙江省临安市
                  </div>
                  <div class="item" data-value="浙江省余姚市">
                    浙江省余姚市
                  </div>
                  <div class="item" data-value="浙江省慈溪市">
                    浙江省慈溪市
                  </div>
                  <div class="item" data-value="浙江省奉化市">
                    浙江省奉化市
                  </div>
                  <div class="item" data-value="浙江省瑞安市">
                    浙江省瑞安市
                  </div>
                  <div class="item" data-value="浙江省乐清市">
                    浙江省乐清市
                  </div>
                  <div class="item" data-value="浙江省海宁市">
                    浙江省海宁市
                  </div>
                  <div class="item" data-value="浙江省平湖市">
                    浙江省平湖市
                  </div>
                  <div class="item" data-value="浙江省桐乡市">
                    浙江省桐乡市
                  </div>
                  <div class="item" data-value="浙江省诸暨市">
                    浙江省诸暨市
                  </div>
                  <div class="item" data-value="浙江省上虞市">
                    浙江省上虞市
                  </div>
                  <div class="item" data-value="浙江省嵊州市">
                    浙江省嵊州市
                  </div>
                  <div class="item" data-value="浙江省兰溪市">
                    浙江省兰溪市
                  </div>
                  <div class="item" data-value="浙江省义乌市">
                    浙江省义乌市
                  </div>
                  <div class="item" data-value="浙江省东阳市">
                    浙江省东阳市
                  </div>
                  <div class="item" data-value="浙江省永康市">
                    浙江省永康市
                  </div>
                  <div class="item" data-value="浙江省江山市">
                    浙江省江山市
                  </div>
                  <div class="item" data-value="浙江省温岭市">
                    浙江省温岭市
                  </div>
                  <div class="item" data-value="浙江省临海市">
                    浙江省临海市
                  </div>
                  <div class="item" data-value="浙江省丽水市">
                    浙江省丽水市
                  </div>
                  <div class="item" data-value="浙江省龙泉市">
                    浙江省龙泉市
                  </div>
                  <div class="item" data-value="安徽省桐城市">
                    安徽省桐城市
                  </div>
                  <div class="item" data-value="安徽省天长市">
                    安徽省天长市
                  </div>
                  <div class="item" data-value="安徽省明光市">
                    安徽省明光市
                  </div>
                  <div class="item" data-value="安徽省亳州市">
                    安徽省亳州市
                  </div>
                  <div class="item" data-value="安徽省界首市">
                    安徽省界首市
                  </div>
                  <div class="item" data-value="安徽省宣州市">
                    安徽省宣州市
                  </div>
                  <div class="item" data-value="安徽省宁国市">
                    安徽省宁国市
                  </div>
                  <div class="item" data-value="安徽省贵池市">
                    安徽省贵池市
                  </div>
                  <div class="item" data-value="福建省福清市">
                    福建省福清市
                  </div>
                  <div class="item" data-value="福建省长乐市">
                    福建省长乐市
                  </div>
                  <div class="item" data-value="福建省永安市">
                    福建省永安市
                  </div>
                  <div class="item" data-value="福建省石狮市">
                    福建省石狮市
                  </div>
                  <div class="item" data-value="福建省晋江市">
                    福建省晋江市
                  </div>
                  <div class="item" data-value="福建省南安市">
                    福建省南安市
                  </div>
                  <div class="item" data-value="福建省龙海市">
                    福建省龙海市
                  </div>
                  <div class="item" data-value="福建省邵武市">
                    福建省邵武市
                  </div>
                  <div class="item" data-value="福建省武夷山市">
                    福建省武夷山市
                  </div>
                  <div class="item" data-value="福建省建瓯市">
                    福建省建瓯市
                  </div>
                  <div class="item" data-value="福建省建阳市">
                    福建省建阳市
                  </div>
                  <div class="item" data-value="福建省漳平市">
                    福建省漳平市
                  </div>
                  <div class="item" data-value="福建省宁德市">
                    福建省宁德市
                  </div>
                  <div class="item" data-value="福建省福安市">
                    福建省福安市
                  </div>
                  <div class="item" data-value="福建省福鼎市">
                    福建省福鼎市
                  </div>
                  <div class="item" data-value="江西省乐平市">
                    江西省乐平市
                  </div>
                  <div class="item" data-value="江西省瑞昌市">
                    江西省瑞昌市
                  </div>
                  <div class="item" data-value="江西省贵溪市">
                    江西省贵溪市
                  </div>
                  <div class="item" data-value="江西省瑞金市">
                    江西省瑞金市
                  </div>
                  <div class="item" data-value="江西省南康市">
                    江西省南康市
                  </div>
                  <div class="item" data-value="江西省宜春市">
                    江西省宜春市
                  </div>
                  <div class="item" data-value="江西省丰城市">
                    江西省丰城市
                  </div>
                  <div class="item" data-value="江西省樟树市">
                    江西省樟树市
                  </div>
                  <div class="item" data-value="江西省高安市">
                    江西省高安市
                  </div>
                  <div class="item" data-value="江西省上饶市">
                    江西省上饶市
                  </div>
                  <div class="item" data-value="江西省德兴市">
                    江西省德兴市
                  </div>
                  <div class="item" data-value="江西省吉安市">
                    江西省吉安市
                  </div>
                  <div class="item" data-value="江西省井冈山市">
                    江西省井冈山市
                  </div>
                  <div class="item" data-value="江西省临川市">
                    江西省临川市
                  </div>
                  <div class="item" data-value="山东省章丘市">
                    山东省章丘市
                  </div>
                  <div class="item" data-value="山东省胶州市">
                    山东省胶州市
                  </div>
                  <div class="item" data-value="山东省即墨市">
                    山东省即墨市
                  </div>
                  <div class="item" data-value="山东省平度市">
                    山东省平度市
                  </div>
                  <div class="item" data-value="山东省胶南市">
                    山东省胶南市
                  </div>
                  <div class="item" data-value="山东省莱西市">
                    山东省莱西市
                  </div>
                  <div class="item" data-value="山东省滕州市">
                    山东省滕州市
                  </div>
                  <div class="item" data-value="山东省龙口市">
                    山东省龙口市
                  </div>
                  <div class="item" data-value="山东省莱阳市">
                    山东省莱阳市
                  </div>
                  <div class="item" data-value="山东省莱州市">
                    山东省莱州市
                  </div>
                  <div class="item" data-value="山东省蓬莱市">
                    山东省蓬莱市
                  </div>
                  <div class="item" data-value="山东省招远市">
                    山东省招远市
                  </div>
                  <div class="item" data-value="山东省栖霞市">
                    山东省栖霞市
                  </div>
                  <div class="item" data-value="山东省海阳市">
                    山东省海阳市
                  </div>
                  <div class="item" data-value="山东省青州市">
                    山东省青州市
                  </div>
                  <div class="item" data-value="山东省诸城市">
                    山东省诸城市
                  </div>
                  <div class="item" data-value="山东省寿光市">
                    山东省寿光市
                  </div>
                  <div class="item" data-value="山东省安丘市">
                    山东省安丘市
                  </div>
                  <div class="item" data-value="山东省高密市">
                    山东省高密市
                  </div>
                  <div class="item" data-value="山东省昌邑市">
                    山东省昌邑市
                  </div>
                  <div class="item" data-value="山东省曲阜市">
                    山东省曲阜市
                  </div>
                  <div class="item" data-value="山东省兖州市">
                    山东省兖州市
                  </div>
                  <div class="item" data-value="山东省邹城市">
                    山东省邹城市
                  </div>
                  <div class="item" data-value="山东省新泰市">
                    山东省新泰市
                  </div>
                  <div class="item" data-value="山东省肥城市">
                    山东省肥城市
                  </div>
                  <div class="item" data-value="山东省文登市">
                    山东省文登市
                  </div>
                  <div class="item" data-value="山东省荣成市">
                    山东省荣成市
                  </div>
                  <div class="item" data-value="山东省乳山市">
                    山东省乳山市
                  </div>
                  <div class="item" data-value="山东省乐陵市">
                    山东省乐陵市
                  </div>
                  <div class="item" data-value="山东省禹城市">
                    山东省禹城市
                  </div>
                  <div class="item" data-value="山东省临清市">
                    山东省临清市
                  </div>
                  <div class="item" data-value="山东省滨州市">
                    山东省滨州市
                  </div>
                  <div class="item" data-value="山东省菏泽市">
                    山东省菏泽市
                  </div>
                  <div class="item" data-value="河南省巩义市">
                    河南省巩义市
                  </div>
                  <div class="item" data-value="河南省荥阳市">
                    河南省荥阳市
                  </div>
                  <div class="item" data-value="河南省新密市">
                    河南省新密市
                  </div>
                  <div class="item" data-value="河南省新郑市">
                    河南省新郑市
                  </div>
                  <div class="item" data-value="河南省登封市">
                    河南省登封市
                  </div>
                  <div class="item" data-value="河南省偃师市">
                    河南省偃师市
                  </div>
                  <div class="item" data-value="河南省舞钢市">
                    河南省舞钢市
                  </div>
                  <div class="item" data-value="河南省汝州市">
                    河南省汝州市
                  </div>
                  <div class="item" data-value="河南省林州市">
                    河南省林州市
                  </div>
                  <div class="item" data-value="河南省卫辉市">
                    河南省卫辉市
                  </div>
                  <div class="item" data-value="河南省辉县市">
                    河南省辉县市
                  </div>
                  <div class="item" data-value="河南省济源市">
                    河南省济源市
                  </div>
                  <div class="item" data-value="河南省沁阳市">
                    河南省沁阳市
                  </div>
                  <div class="item" data-value="河南省孟州市">
                    河南省孟州市
                  </div>
                  <div class="item" data-value="河南省禹州市">
                    河南省禹州市
                  </div>
                  <div class="item" data-value="河南省长葛市">
                    河南省长葛市
                  </div>
                  <div class="item" data-value="河南省义马市">
                    河南省义马市
                  </div>
                  <div class="item" data-value="河南省灵宝市">
                    河南省灵宝市
                  </div>
                  <div class="item" data-value="河南省邓州市">
                    河南省邓州市
                  </div>
                  <div class="item" data-value="河南省永城市">
                    河南省永城市
                  </div>
                  <div class="item" data-value="河南省周口市">
                    河南省周口市
                  </div>
                  <div class="item" data-value="河南省项城市">
                    河南省项城市
                  </div>
                  <div class="item" data-value="河南省驻马店市">
                    河南省驻马店市
                  </div>
                  <div class="item" data-value="湖北省大冶市">
                    湖北省大冶市
                  </div>
                  <div class="item" data-value="湖北省丹江口市">
                    湖北省丹江口市
                  </div>
                  <div class="item" data-value="湖北省枝城市">
                    湖北省枝城市
                  </div>
                  <div class="item" data-value="湖北省当阳市">
                    湖北省当阳市
                  </div>
                  <div class="item" data-value="湖北省枝江市">
                    湖北省枝江市
                  </div>
                  <div class="item" data-value="湖北省老河口市">
                    湖北省老河口市
                  </div>
                  <div class="item" data-value="湖北省枣阳市">
                    湖北省枣阳市
                  </div>
                  <div class="item" data-value="湖北省宜城市">
                    湖北省宜城市
                  </div>
                  <div class="item" data-value="湖北省钟祥市">
                    湖北省钟祥市
                  </div>
                  <div class="item" data-value="湖北省应城市">
                    湖北省应城市
                  </div>
                  <div class="item" data-value="湖北省安陆市">
                    湖北省安陆市
                  </div>
                  <div class="item" data-value="湖北省广水市">
                    湖北省广水市
                  </div>
                  <div class="item" data-value="湖北省汉川市">
                    湖北省汉川市
                  </div>
                  <div class="item" data-value="湖北省石首市">
                    湖北省石首市
                  </div>
                  <div class="item" data-value="湖北省洪湖市">
                    湖北省洪湖市
                  </div>
                  <div class="item" data-value="湖北省松滋市">
                    湖北省松滋市
                  </div>
                  <div class="item" data-value="湖北省麻城市">
                    湖北省麻城市
                  </div>
                  <div class="item" data-value="湖北省武穴市">
                    湖北省武穴市
                  </div>
                  <div class="item" data-value="湖北省恩施市">
                    湖北省恩施市
                  </div>
                  <div class="item" data-value="湖北省利川市">
                    湖北省利川市
                  </div>
                  <div class="item" data-value="湖北省随州市">
                    湖北省随州市
                  </div>
                  <div class="item" data-value="湖北省仙桃市">
                    湖北省仙桃市
                  </div>
                  <div class="item" data-value="湖北省潜江市">
                    湖北省潜江市
                  </div>
                  <div class="item" data-value="湖北省天门市">
                    湖北省天门市
                  </div>
                  <div class="item" data-value="湖南省浏阳市">
                    湖南省浏阳市
                  </div>
                  <div class="item" data-value="湖南省醴陵市">
                    湖南省醴陵市
                  </div>
                  <div class="item" data-value="湖南省湘乡市">
                    湖南省湘乡市
                  </div>
                  <div class="item" data-value="湖南省韶山市">
                    湖南省韶山市
                  </div>
                  <div class="item" data-value="湖南省耒阳市">
                    湖南省耒阳市
                  </div>
                  <div class="item" data-value="湖南省常宁市">
                    湖南省常宁市
                  </div>
                  <div class="item" data-value="湖南省武冈市">
                    湖南省武冈市
                  </div>
                  <div class="item" data-value="湖南省汩罗市">
                    湖南省汩罗市
                  </div>
                  <div class="item" data-value="湖南省临湘市">
                    湖南省临湘市
                  </div>
                  <div class="item" data-value="湖南省津市市">
                    湖南省津市市
                  </div>
                  <div class="item" data-value="湖南省沅江市">
                    湖南省沅江市
                  </div>
                  <div class="item" data-value="湖南省资兴市">
                    湖南省资兴市
                  </div>
                  <div class="item" data-value="湖南省洪江市">
                    湖南省洪江市
                  </div>
                  <div class="item" data-value="湖南省冷水江市">
                    湖南省冷水江市
                  </div>
                  <div class="item" data-value="湖南省涟源市">
                    湖南省涟源市
                  </div>
                  <div class="item" data-value="湖南省吉首市">
                    湖南省吉首市
                  </div>
                  <div class="item" data-value="广东省番禺市">
                    广东省番禺市
                  </div>
                  <div class="item" data-value="广东省花都市">
                    广东省花都市
                  </div>
                  <div class="item" data-value="广东省增城市">
                    广东省增城市
                  </div>
                  <div class="item" data-value="广东省从化市">
                    广东省从化市
                  </div>
                  <div class="item" data-value="广东省乐昌市">
                    广东省乐昌市
                  </div>
                  <div class="item" data-value="广东省南雄市">
                    广东省南雄市
                  </div>
                  <div class="item" data-value="广东省潮阳市">
                    广东省潮阳市
                  </div>
                  <div class="item" data-value="广东省澄海市">
                    广东省澄海市
                  </div>
                  <div class="item" data-value="广东省顺德市">
                    广东省顺德市
                  </div>
                  <div class="item" data-value="广东省南海市">
                    广东省南海市
                  </div>
                  <div class="item" data-value="广东省三水市">
                    广东省三水市
                  </div>
                  <div class="item" data-value="广东省高明市">
                    广东省高明市
                  </div>
                  <div class="item" data-value="广东省台山市">
                    广东省台山市
                  </div>
                  <div class="item" data-value="广东省新会市">
                    广东省新会市
                  </div>
                  <div class="item" data-value="广东省开平市">
                    广东省开平市
                  </div>
                  <div class="item" data-value="广东省鹤山市">
                    广东省鹤山市
                  </div>
                  <div class="item" data-value="广东省恩平市">
                    广东省恩平市
                  </div>
                  <div class="item" data-value="广东省廉江市">
                    广东省廉江市
                  </div>
                  <div class="item" data-value="广东省雷州市">
                    广东省雷州市
                  </div>
                  <div class="item" data-value="广东省吴川市">
                    广东省吴川市
                  </div>
                  <div class="item" data-value="广东省高州市">
                    广东省高州市
                  </div>
                  <div class="item" data-value="广东省化州市">
                    广东省化州市
                  </div>
                  <div class="item" data-value="广东省信宜市">
                    广东省信宜市
                  </div>
                  <div class="item" data-value="广东省高要市">
                    广东省高要市
                  </div>
                  <div class="item" data-value="广东省四会市">
                    广东省四会市
                  </div>
                  <div class="item" data-value="广东省惠阳市">
                    广东省惠阳市
                  </div>
                  <div class="item" data-value="广东省兴宁市">
                    广东省兴宁市
                  </div>
                  <div class="item" data-value="广东省陆丰市">
                    广东省陆丰市
                  </div>
                  <div class="item" data-value="广东省阳春市">
                    广东省阳春市
                  </div>
                  <div class="item" data-value="广东省英德市">
                    广东省英德市
                  </div>
                  <div class="item" data-value="广东省连州市">
                    广东省连州市
                  </div>
                  <div class="item" data-value="广东省普宁市">
                    广东省普宁市
                  </div>
                  <div class="item" data-value="广东省罗定市">
                    广东省罗定市
                  </div>
                  <div class="item" data-value="广西岑溪市">
                    广西岑溪市
                  </div>
                  <div class="item" data-value="广西东兴市">
                    广西东兴市
                  </div>
                  <div class="item" data-value="广西桂平市">
                    广西桂平市
                  </div>
                  <div class="item" data-value="广西北流市">
                    广西北流市
                  </div>
                  <div class="item" data-value="广西凭祥市">
                    广西凭祥市
                  </div>
                  <div class="item" data-value="广西合山市">
                    广西合山市
                  </div>
                  <div class="item" data-value="广西贺州市">
                    广西贺州市
                  </div>
                  <div class="item" data-value="广西百色市">
                    广西百色市
                  </div>
                  <div class="item" data-value="广西河池市">
                    广西河池市
                  </div>
                  <div class="item" data-value="广西宜州市">
                    广西宜州市
                  </div>
                  <div class="item" data-value="海南省通什市">
                    海南省通什市
                  </div>
                  <div class="item" data-value="海南省琼海市">
                    海南省琼海市
                  </div>
                  <div class="item" data-value="海南省儋州市">
                    海南省儋州市
                  </div>
                  <div class="item" data-value="海南省琼山市">
                    海南省琼山市
                  </div>
                  <div class="item" data-value="海南省文昌市">
                    海南省文昌市
                  </div>
                  <div class="item" data-value="海南省万宁市">
                    海南省万宁市
                  </div>
                  <div class="item" data-value="海南省东方市">
                    海南省东方市
                  </div>
                  <div class="item" data-value="重庆市江津市">
                    重庆市江津市
                  </div>
                  <div class="item" data-value="重庆市合川市">
                    重庆市合川市
                  </div>
                  <div class="item" data-value="重庆市永川市">
                    重庆市永川市
                  </div>
                  <div class="item" data-value="重庆市南川市">
                    重庆市南川市
                  </div>
                  <div class="item" data-value="四川省都江堰市">
                    四川省都江堰市
                  </div>
                  <div class="item" data-value="四川省彭州市">
                    四川省彭州市
                  </div>
                  <div class="item" data-value="四川省邛崃市">
                    四川省邛崃市
                  </div>
                  <div class="item" data-value="四川省崇州市">
                    四川省崇州市
                  </div>
                  <div class="item" data-value="四川省广汉市">
                    四川省广汉市
                  </div>
                  <div class="item" data-value="四川省什邡市">
                    四川省什邡市
                  </div>
                  <div class="item" data-value="四川省绵竹市">
                    四川省绵竹市
                  </div>
                  <div class="item" data-value="四川省江油市">
                    四川省江油市
                  </div>
                  <div class="item" data-value="四川省峨眉山市">
                    四川省峨眉山市
                  </div>
                  <div class="item" data-value="四川省阆中市">
                    四川省阆中市
                  </div>
                  <div class="item" data-value="四川省华蓥市">
                    四川省华蓥市
                  </div>
                  <div class="item" data-value="四川省万源市">
                    四川省万源市
                  </div>
                  <div class="item" data-value="四川省雅安市">
                    四川省雅安市
                  </div>
                  <div class="item" data-value="四川省西昌市">
                    四川省西昌市
                  </div>
                  <div class="item" data-value="四川省巴中市">
                    四川省巴中市
                  </div>
                  <div class="item" data-value="四川省资阳市">
                    四川省资阳市
                  </div>
                  <div class="item" data-value="四川省简阳市">
                    四川省简阳市
                  </div>
                  <div class="item" data-value="贵州省清镇市">
                    贵州省清镇市
                  </div>
                  <div class="item" data-value="贵州省赤水市">
                    贵州省赤水市
                  </div>
                  <div class="item" data-value="贵州省仁怀市">
                    贵州省仁怀市
                  </div>
                  <div class="item" data-value="贵州省铜仁市">
                    贵州省铜仁市
                  </div>
                  <div class="item" data-value="贵州省兴义市">
                    贵州省兴义市
                  </div>
                  <div class="item" data-value="贵州省毕节市">
                    贵州省毕节市
                  </div>
                  <div class="item" data-value="贵州省安顺市">
                    贵州省安顺市
                  </div>
                  <div class="item" data-value="贵州省凯里市">
                    贵州省凯里市
                  </div>
                  <div class="item" data-value="贵州省都匀市">
                    贵州省都匀市
                  </div>
                  <div class="item" data-value="贵州省福泉市">
                    贵州省福泉市
                  </div>
                  <div class="item" data-value="云南省安宁市">
                    云南省安宁市
                  </div>
                  <div class="item" data-value="云南省宣威市">
                    云南省宣威市
                  </div>
                  <div class="item" data-value="云南省昭通市">
                    云南省昭通市
                  </div>
                  <div class="item" data-value="云南省楚雄市">
                    云南省楚雄市
                  </div>
                  <div class="item" data-value="云南省个旧市">
                    云南省个旧市
                  </div>
                  <div class="item" data-value="云南省开远市">
                    云南省开远市
                  </div>
                  <div class="item" data-value="云南省思茅市">
                    云南省思茅市
                  </div>
                  <div class="item" data-value="云南省景洪市">
                    云南省景洪市
                  </div>
                  <div class="item" data-value="云南省大理市">
                    云南省大理市
                  </div>
                  <div class="item" data-value="云南省保山市">
                    云南省保山市
                  </div>
                  <div class="item" data-value="云南省瑞丽市">
                    云南省瑞丽市
                  </div>
                  <div class="item" data-value="云南省潞西市">
                    云南省潞西市
                  </div>
                  <div class="item" data-value="西藏日喀则市">
                    西藏日喀则市
                  </div>
                  <div class="item" data-value="陕西省兴平市">
                    陕西省兴平市
                  </div>
                  <div class="item" data-value="陕西省韩城市">
                    陕西省韩城市
                  </div>
                  <div class="item" data-value="陕西省华阴市">
                    陕西省华阴市
                  </div>
                  <div class="item" data-value="陕西省安康市">
                    陕西省安康市
                  </div>
                  <div class="item" data-value="陕西省商州市">
                    陕西省商州市
                  </div>
                  <div class="item" data-value="甘肃省玉门市">
                    甘肃省玉门市
                  </div>
                  <div class="item" data-value="甘肃省酒泉市">
                    甘肃省酒泉市
                  </div>
                  <div class="item" data-value="甘肃省敦煌市">
                    甘肃省敦煌市
                  </div>
                  <div class="item" data-value="甘肃省张掖市">
                    甘肃省张掖市
                  </div>
                  <div class="item" data-value="甘肃省武威市">
                    甘肃省武威市
                  </div>
                  <div class="item" data-value="甘肃省平凉市">
                    甘肃省平凉市
                  </div>
                  <div class="item" data-value="甘肃省西峰市">
                    甘肃省西峰市
                  </div>
                  <div class="item" data-value="甘肃省临夏市">
                    甘肃省临夏市
                  </div>
                  <div class="item" data-value="甘肃省合作市">
                    甘肃省合作市
                  </div>
                  <div class="item" data-value="青海省格尔木市">
                    青海省格尔木市
                  </div>
                  <div class="item" data-value="青海省德令哈市">
                    青海省德令哈市
                  </div>
                  <div class="item" data-value="宁夏青铜峡市">
                    宁夏青铜峡市
                  </div>
                  <div class="item" data-value="宁夏灵武市">
                    宁夏灵武市
                  </div>
                  <div class="item" data-value="新疆吐鲁番市">
                    新疆吐鲁番市
                  </div>
                  <div class="item" data-value="新疆哈密市">
                    新疆哈密市
                  </div>
                  <div class="item" data-value="新疆昌吉市">
                    新疆昌吉市
                  </div>
                  <div class="item" data-value="新疆阜康市">
                    新疆阜康市
                  </div>
                  <div class="item" data-value="新疆米泉市">
                    新疆米泉市
                  </div>
                  <div class="item" data-value="新疆博乐市">
                    新疆博乐市
                  </div>
                  <div class="item" data-value="新疆库尔勒市">
                    新疆库尔勒市
                  </div>
                  <div class="item" data-value="新疆阿克苏市">
                    新疆阿克苏市
                  </div>
                  <div class="item" data-value="新疆阿图什市">
                    新疆阿图什市
                  </div>
                  <div class="item" data-value="新疆喀什市">
                    新疆喀什市
                  </div>
                  <div class="item" data-value="新疆和田市">
                    新疆和田市
                  </div>
                  <div class="item" data-value="新疆奎屯市">
                    新疆奎屯市
                  </div>
                  <div class="item" data-value="新疆伊宁市">
                    新疆伊宁市
                  </div>
                  <div class="item" data-value="新疆塔城市">
                    新疆塔城市
                  </div>
                  <div class="item" data-value="新疆乌苏市">
                    新疆乌苏市
                  </div>
                  <div class="item" data-value="新疆阿勒泰市">
                  新疆阿勒泰市
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="inline field">
            <div class="ui checkbox">
              <input type="checkbox" name="terms">
              <label>I agree to the terms and conditions</label>
            </div>
          </div>
          <div class="ui violet submit button" onclick="regist();">注册</div>
          <div class="ui error message"></div>
        </form>

      </div>
    </div>
    <div class="ui small modal">
      <div class="header">Header</div>
      <div class="content">
        <p id="err_msg">错误信息</p>
      </div>
      <div class="actions">
        <div class="ui cancel button">关闭</div>
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
    mounted: function(){
        $('#identity').dropdown();
$('#city').dropdown();

$('.ui.form')
  .form({
    fields: {
      username: {
        identifier: 'username',
        rules: [
          {
            type   : 'empty',
            prompt : '请输入姓名'
          }
        ]
      },
      password: {
        identifier: 'password',
        rules: [
          {
            type   : 'empty',
            prompt : '请输入密码'
          }
        ]
      },
      name: {
        identifier: 'name',
        rules: [
          {
            type   : 'empty',
            prompt : '请输入用户名'
          }
        ]
      },
      id_type: {
        identifier: 'id_type',
        rules: [
          {
            type   : 'empty',
            prompt : '请选择证件类型'
          }
        ]
      },
      id_number: {
        identifier: 'id_number',
        rules: [
          {
            type   : 'empty',
            prompt : '请输入证件号'
          }
        ]
      },
      phone: {
        identifier: 'phone',
        rules: [
          {
            type   : 'empty',
            prompt : '请输入电话号码'
          }
        ]
      },
      register_city: {
        identifier: 'register_city',
        rules: [
          {
            type   : 'empty',
            prompt : '请选择注册城市'
          }
        ]
      }
    }
  });
    }
}

</script>

<style>

</style>


