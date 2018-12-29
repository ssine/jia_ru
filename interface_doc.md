# Interface Specification

所有前后端接口的声明。 后端负责维护登录状态与返回对应的数据，不负责与切换页面有关的路由。

请求全部使用POST方式，需要声明传入的键-值对（放在POST请求的BODY里）。 返回结果是json。

*请求需要指明 content-type 吗？*

每个返回值包括一项状态码 state ， state 为 0 表示后端操作失败， state 为 1 则成功。 后面不再赘述。

**接口完成情况**:

- [ ] `/operation/login`
- [ ] `/data/user`
- [ ] `/gethouselist`
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
<tr><td>orderby</td><td>

排序方式 (0 - 4)

- 0：不排序
- 1：按价格升序
- 2：按价格降序
- 3：按面积升序
- 4：按面积降序

</td></tr>
<tr><td>district</td><td>

房屋所在的区域 (0 - 4)

- 0：不限
- 1：海淀区
- 2: 东城区
- 3：西城区
- 4：昌平区
- 其他地区待定

</td></tr>
<tr><td>range_of_prices</td><td>

价格范围 (0 - 3)

- 0：不限
- 1：2000以下
- 2：2000~4000
- 3：4000以上

</td></tr>
<tr><td>range_of_area</td><td>

面积范围 (0 - 4)

- 0: 不限
- 1：10平米以下
- 2：10-20
- 3：20-30
- 4：30以上

</td></tr>
<tr><td>there_formaldehyde</td><td>

是否有甲醛 (0 - 2)

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
- there_formaldehyde：是否有甲醛

</td></tr>
</table>



**request example**:

```json
{
    "seq":1,
    "orderby":0,
    "district":2,
    "range_of_prices":0,
    "range_of_area":4,
    "there_formaldehyde":1
}
```

**response example**:

```json
[{
    "id": 1,
    "img": "http://www.pronhub.com/sporthouse.jpg",
    "name": "紫禁城西部湖中央超豪华2居室",
    "description": "长者故居，你值得拥有",
    "tag": "独卫_集体供暖_独立阳台",
    "area": 200,
    "price": 30000,
    "there_formaldehyde": 0
}, {
    "id": 2,
    "img": "http://www.pronhub.com/sporthouse.jpg",
    "name": "秦城1居室",
    "description": "7x24小时专人守护",
    "tag": "独卫_集体供暖_独立阳台",
    "area": 10,
    "price": 1000,
    "there_formaldehyde": 0
}]
```

---

## login.html

**input**:

username, password

**return**:


