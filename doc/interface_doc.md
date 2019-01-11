# Interface Specification

所有前后端接口的声明。 后端负责维护登录状态与返回对应的数据，不负责与切换页面有关的路由。

请求全部使用POST方式，需要声明传入的键-值对（放在POST请求的BODY里）。 返回结果是json。

*请求需要指明 content-type 吗？*

每个返回值包括一项状态码 state ， state 为 0 表示后端操作失败， state 为 1 则成功。 后面不再赘述。

**接口完成情况**:

- [x] `/gethouselist`
- [x] `/getrentallist`
- [x] `/data/user-info`
- [x] `/data/user-published`
- [ ] `/data/user-asked`
- [x] `/query/user-exist`
- [x] `/operation/login`
- [x] `/operation/register`
- [x] `/modify/password`
- [x] `/modify/phone`
- [x] `/query/apply-notification`
- [ ] `/query/provide-notification`
- [ ] `/action/accept-notification`
- [ ] `/action/reject-notification`
- [x] `/data/house-info`
- [x] `/data/rental-info`
- [x] `/data/addhouse`
- [x] `/data/addrental`
- [x] `/modify/house` 与addhouse相同
- [x] `/modify/rental` 与addrental相同
- [ ] `/data/deal-details/`
- [ ] `/data/city-statistics/`
- [x] `/operation/apply-house/`
- [x] `/data/uploadfile/`
- [ ] `/delete/house/`
- [ ] `/delete/demand/`
- [x] `/test`


接口声明样例：

URL: `/operation/login`

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>username</td><td>username</td></tr>
<tr><td>password</td><td>password</td></tr>
</table>

**Response**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>success</td><td>true / false</td></tr>
</table>

---

URL: `/gethouselist`

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>seq</td><td>表示当前页码的序号 (0, 1, 2...)</td></tr>
<tr><td>district</td><td>筛选地区</td></tr>
<tr><td>range_of_floor</td><td>楼层条件</td></tr>
<tr><td>range_of_prices</td><td>价格条件</td></tr>
<tr><td>range_of_area</td><td>面积条件</td></tr>
<tr><td>orderby</td><td>

排序方式 (0 - 4)

- 0：不排序
- 1：按价格升序
- 2：按价格降序
- 3：按面积升序
- 4：按面积降序

</td></tr>
<tr><td>house_type</td><td>

房屋类型 (0 - 4)

- 0: 不限
- 1：一居
- 2：二居
- 3：三居
- 4：其他

</td></tr>
<tr><td>elevator</td><td>

是否有电梯 (0 - 2)

- 0：不限
- 1：有
- 2：没有

</td></tr>
</table>

**Response**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>houses</td><td>

一个房屋的json数组，每一个房屋包含

- house_id: 房屋id，作为房屋的主键
- img: 房屋图片的url
- name: 房屋名字
- description: 房屋描述
- tag：标签，以下划线_隔开
- area：房屋面积
- price：房屋价格
- house_type: 房屋类型
- elevator：是否有甲醛

</td></tr>
</table>

**Request example**:

```json
{
    "seq":1,
    "orderby":0,
    "district":"山东省青岛市崂山区五一街道",
    "range_of_prices":[0,10000], 
    "range_of_area":[0,10000], 
    "range_of_floor":[0,5], 
    "house_type":2,
    "elevator":1
}
```

**Response example**:

```json
[{
    "id": 1,
    "img": "http://www.pronhub.com/sporthouse.jpg",
    "name": "紫禁城西部湖中央超豪华2居室",
    "description": "长者故居，你值得拥有",
    "tag": ["独卫","集体供暖","独立阳台"],
    "area": 200,
    "price": 30000,
    "house_type":2,
    "elevator": 1
}, {
    "id": 2,
    "img": "http://www.pronhub.com/sporthouse.jpg",
    "name": "秦城1居室",
    "description": "7x24小时专人守护",
    "tag": ["独卫","集体供暖","独立阳台"],
    "area": 10,
    "price": 1000,
    "house_type":2,
    "elevator": 1
}]
```

---

URL: `/getrentallist`

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>seq</td><td>表示当前页码的序号 (0, 1, 2...)</td></tr>
<tr><td>district</td><td>筛选地区</td></tr>
<tr><td>range_of_floor</td><td>楼层条件</td></tr>
<tr><td>orderby</td><td>

排序方式 (0 - 2)

- 0：不排序
- 1：按价格升序
- 2：按价格降序


</td></tr>
<tr><td>house_type</td><td>

房屋类型 (0 - 4)

- 0: 不限
- 1：一居
- 2：二居
- 3：三居
- 4：其他

</td></tr>
<tr><td>elevator</td><td>

是否有电梯 (0 - 2)

- 0：不限
- 1：有
- 2：没有

</td></tr>
</table>

**Response**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>houses</td><td>

一个求租信息的json数组，每一个求租信息包含

- rental_id: 求租信息id，作为求租信息的主键
- name: 求租信息名字
- description: 求租信息描述
- area：房屋面积
- price：房屋价格
- house_type: 房屋类型
- elevator：是否有电梯

</td></tr>
</table>

**Request example**:

```json
{
    "seq":1,
    "orderby":0,
    "district":"山东省青岛市崂山区五一街道",
    "range_of_floor":[0,5], 
    "house_type":2,
    "elevator":1
}
```

**Response example**:

```json
[{
    "id": 1,
    "name": "紫禁城西部湖中央超豪华2居室",
    "description": "长者故居，你值得拥有",
    "tag": ["独卫","集体供暖","独立阳台"],
    "area": 200,
    "price": 30000,
    "house_type":2,
    "elevator": 1
}, {
    "id": 2,
    "name": "秦城1居室",
    "description": "7x24小时专人守护",
    "tag": ["独卫","集体供暖","独立阳台"],
    "area": 10,
    "price": 1000,
    "house_type":2,
    "elevator": 0
}]
```

---

URL: `/data/user-info`

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>无参数</td><td>-</td></tr>
</table>

**Response**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>username</td><td>用户名</td></tr>
<tr><td>password</td><td>密码（明文）</td></tr>
<tr><td>name</td><td>姓名</td></tr>
<tr><td>id_type</td><td>证件类型</td></tr>
<tr><td>id_number</td><td>证件号码</td></tr>
<tr><td>phone</td><td>11位手机号码</td></tr>
<tr><td>grade</td><td>用户等级</td></tr>
<tr><td>register_city</td><td>注册城市</td></tr>
<tr><td>register_time</td><td>注册时间 (YYYY/MM/DD)</td></tr>
</table>

**Response Example**:

```json
{
    "username": "六小龄童",
    "name": "章金莱",
    "id_type": "身份证号",
    "id_number": "233233233323232333",
    "phone": "12345678910",
    "grade": "普通用户",
    "register_city": "浙江绍兴",
    "register_time": "1959/4/12"
}
```

---

URL: `/data/user-published`

查询当前用户发布的所有房源

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>无参数</td><td>-</td></tr>
</table>

**Response**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>data</td><td>

一个房屋的json数组，每一个房屋包含

- house_id: 房屋id
- location: 房屋地理位置
- rental: 租金
- state: 房屋状态(待租、已租)

</td></tr>
</table>

---

URL: `/data/user-asked`

查询当前用户发布的所有求租需求

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>无参数</td><td>-</td></tr>
</table>

**Response**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>data</td><td>

一个租房需求的json数组，每一个需求包含

- id: 需求的id
- location: 房屋地理位置
- description: 房屋描述
- rental: 租金
- state: 求租信息状态(已成交/未成交)

</td></tr>
</table>

---

URL: `/query/user-exist`

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>username</td><td>用户名</td></tr>
</table>

**Response**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>exist</td><td>该用户名是否已存在（true / false）</td></tr>
</table>

---

URL: `/operation/login`

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>username</td><td>username</td></tr>
<tr><td>password</td><td>password</td></tr>
</table>

**Response**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>success</td><td>true / false</td></tr>
<tr><td>error_msg</td><td>登录失败时，返回失败原因</td></tr>
</table>

---

URL: `/operation/register`

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>username</td><td>用户名</td></tr>
<tr><td>password</td><td>密码（明文）</td></tr>
<tr><td>name</td><td>姓名</td></tr>
<tr><td>id_type</td><td>证件类型</td></tr>
<tr><td>id_number</td><td>证件号码</td></tr>
<tr><td>phone</td><td>11位手机号码</td></tr>
<tr><td>city</td><td>所在城市（参见login.html里那一长串）</td></tr>
</table>

**Response**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>success</td><td>true / false</td></tr>
<tr><td>error_msg</td><td>注册失败时，返回失败原因</td></tr>
</table>

---

URL: `/modify/password`

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>password</td><td>新密码（明文）</td></tr>
</table>

**Response**:

state

---

URL: `/modify/phone`

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>phone</td><td>新手机号码</td></tr>
</table>

**Response**:

state

---

URL: `/query/apply-notification`

所有申请租用当前用户房源的请求

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>none</td><td>-</td></tr>
</table>

**Response**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>data</td><td>

一个请求的json数组，每一个请求包含

- id: 请求的唯一编号
- username: 发出请求的用户名
- location: 请求的房屋位置

</td></tr>
</table>

---

URL: `/query/provide-notification`

所有向当前用户发布的需求提供房屋的请求

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>none</td><td>-</td></tr>
</table>

**Response**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>data</td><td>

一个请求的json数组，每一个请求包含

- id: 请求的唯一编号
- username: 发出请求的用户名
- location: 提供的房屋位置

</td></tr>
</table>

---

URL: `/action/accept-notification`

当前用户接受某个请求

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>id</td><td>请求id</td></tr>
</table>

**Response**:

state

---

URL: `/action/reject-notification`

当前用户拒绝某个请求

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>id</td><td>请求id</td></tr>
</table>

**Response**:

state

---

URL: `/data/house-info`

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>house_id</td><td>房屋的id</td></tr>
</table>

**Response**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>user_id</td><td>发布用户id</td></tr>
<tr><td>district</td><td>地区</td></tr>
<tr><td>community</td><td>小区名</td></tr>
<tr><td>unit</td><td>具体楼门号</td></tr>
<tr><td>type</td><td>房屋类型</td></tr>
<tr><td>area</td><td>房屋面积</td></tr>
<tr><td>floor</td><td>房屋楼层</td></tr>
<tr><td>elevator</td><td>是否有电梯</td></tr>
<tr><td>description</td><td>房屋描述</td></tr>
<tr><td>imgs</td><td>房屋照片数组</td></tr>
<tr><td>deposit</td><td>押金</td></tr>
<tr><td>pay_method</td><td>租金支付方式（月、季、年）</td></tr>
<tr><td>cost</td><td>租金</td></tr>
<tr><td>house_state</td><td>状态（已租、待租）</td></tr>
<tr><td>register_time</td><td>注册时间 (YYYY/MM/DD)</td></tr>
<tr><td>modify_time</td><td>修改时间 (YYYY/MM/DD)</td></tr>
</table>

**Response Example**:

```json
{
    "user_id": 567,
    "district": "北京市海淀区西土城路",
    "community": "金典小区",
    "unit": "8单元",
    "type": "五居",
    "area": 20,
    "floor": 8,
    "elevator": 1,
    "description": "这房豪华",
    "imgs": [
    "a.jpg",
    "b.jpg"
    ],
    "deposit": 2000,
    "pay_method": "月",
    "cost": 2500,
    "house_state": "已租",
    "register_time": "1959/4/12",
    "modify_time": "1959/6/12"
    
}
```

---

URL: `/data/addhouse`

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>district</td><td>地区</td></tr>
<tr><td>community</td><td>小区名</td></tr>
<tr><td>unit</td><td>具体楼门号</td></tr>
<tr><td>type</td><td>房屋类型</td></tr>
<tr><td>area</td><td>房屋面积</td></tr>
<tr><td>floor</td><td>房屋楼层</td></tr>
<tr><td>elevator</td><td>是否有电梯</td></tr>
<tr><td>description</td><td>房屋描述</td></tr>
<tr><td>imgs</td><td>房屋照片数组</td></tr>
<tr><td>deposit</td><td>押金</td></tr>
<tr><td>pay_method</td><td>租金支付方式（月、季、年）</td></tr>
<tr><td>cost</td><td>租金</td></tr>
</table>


**Response**:

state

**Request Example**:

```json
{
    "district": "北京市海淀区西土城路",
    "community": "金典小区",
    "unit": "8单元",
    "type": "五居",
    "area": 20,
    "floor": 8,
    "elevator": 1,
    "description": "这房豪华",
    "imgs": [
    "a.jpg",
    "b.jpg"
    ],
    "deposit": 2000,
    "pay_method": "月",
    "cost": 2500
}
```

---

URL: `/data/rental-info`

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>rental_id</td><td>求租信息的id</td></tr>
</table>

**Response**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>user_id</td><td>发布用户id</td></tr>
<tr><td>district</td><td>地区</td></tr>
<tr><td>community</td><td>小区名</td></tr>
<tr><td>type</td><td>房屋类型</td></tr>
<tr><td>floor</td><td>房屋楼层</td></tr>
<tr><td>elevator</td><td>是否有电梯</td></tr>
<tr><td>description</td><td>房屋描述</td></tr>
<tr><td>deposit</td><td>押金</td></tr>
<tr><td>pay_method</td><td>租金支付方式（月、季、年）</td></tr>
<tr><td>cost</td><td>租金</td></tr>
<tr><td>register_time</td><td>注册时间 (YYYY/MM/DD)</td></tr>
<tr><td>modify_time</td><td>修改时间 (YYYY/MM/DD)</td></tr>
</table>

**Response Example**:

```json
{
    "user_id": 567,
    "district": "北京市海淀区西土城路",
    "community": "金典小区",
    "type": "五居",
    "floor": 8,
    "elevator": 1,
    "description": "这房豪华",
    "deposit": 2000,
    "pay_method": "月",
    "cost": 2500,
    "register_time": "1959/4/12",
    "modify_time": "1959/6/12"
}
```

---

URL: `/data/addrental`

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>district</td><td>地区</td></tr>
<tr><td>community</td><td>小区名</td></tr>
<tr><td>type</td><td>房屋类型</td></tr>
<tr><td>floor</td><td>房屋楼层</td></tr>
<tr><td>elevator</td><td>是否有电梯</td></tr>
<tr><td>description</td><td>房屋描述</td></tr>
<tr><td>deposit</td><td>押金</td></tr>
<tr><td>pay_method</td><td>租金支付方式（月、季、年）</td></tr>
<tr><td>cost</td><td>租金</td></tr>
</table>

**Response**:

state

**Request Example**:

```json
{
    "district": "北京市海淀区西土城路",
    "community": "金典小区",
    "type": "五居",
    "floor": 8,
    "elevator": 1,
    "description": "这房豪华",
    "deposit": 2000,
    "pay_method": "月",
    "cost": 2500,
}
```

---

URL: `/data/deal-details/`

查询某个时间段里某个位置的交易记录明细

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>start_date</td><td>查询日期左区间 (mm/dd/yyyy)</td></tr>
<tr><td>end_date</td><td>查询日期右区间 (mm/dd/yyyy)</td></tr>
<tr><td>location</td><td>地址要求 (房屋地址包含该字符串即符合要求)</td></tr>
</table>

**Response**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>data</td><td>

交易记录的列表。 交易记录包含的属性：

- owner 房东用户名
- user 租客用户名
- location 房屋位置
- date 成交日期 (mm/dd/yyyy)
- rental 每月租金
- commission 中介费

</td></tr>
</table>

**Request Example**:

```json
{
    "start_date": "1/1/1970",
    "end_date": "1/7/2019",
    "location": "北京市"
}
```

**Response Example**:

```json
{
    "data": [
        {
            "owner": "关云长",
            "user": "张翼德",
            "location": "北京市海淀区金典小区",
            "date": "8/9/1964",
            "rental": 9999,
            "commission": 100
        },
        {
            "owner": "关云长",
            "user": "张翼德",
            "location": "北京市海淀区金典小区",
            "date": "9/8/1964",
            "rental": 6666,
            "commission": 999
        }
    ]
}
```

---

URL: `/data/city-statistics/`

查询所有城市的统计信息

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>none</td><td>-</td></tr>
</table>

**Response**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>data</td><td>

城市统计信息的列表，每个城市一项。 每项包含的属性：

- city_name 城市名
- total_count 累计成交笔数
- total_commission 租客用户名

</td></tr>
</table>

**Response Example**:

```json
{
    "data": [
        {
            "city_name": "北京",
            "total_count": 3,
            "total_commission": 100
        },
        {
            "city_name": "青岛",
            "total_count": 3,
            "total_commission": 100
        }
    ]
}
```

---

URL: `/operation/apply-house/`

发起申请租房请求

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>house_id</td><td>所要申请的房屋id</td></tr>
<tr><td>period</td><td>租期(月)</td></tr>
<tr><td>start_date</td><td>开始日期 (mm/dd/yyyy)</td></tr>
<tr><td>end_date</td><td>结束日期 (mm/dd/yyyy)</td></tr>
</table>

**Request Example**:

```json
{
    "house_id": 21,
    "period": 3,
    "start_date": "1/1/1970",
    "end_date": "4/1/2019",
}
```

**Response**:

state

---

URL: `/data/uploadfile/`

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>file</td><td>二进制文件</td></tr>
</table>

**Response**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>url</td><td>文件url</td></tr>
</table>

---

URL: `/delete/house/`

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>id</td><td>房屋id</td></tr>
</table>

**Response**:

state

---

URL: `/delete/demand/`

**Request**:

<table>
<tr><th>key name</th><th>value description</th></tr>
<tr><td>id</td><td>需求id</td></tr>
</table>

**Response**:

state
