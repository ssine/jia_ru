## allhouse.html
### /gethouselist
#### input: 

seq：序号

表示当前的页码：0，1，2，3，...

orderby: 排序方式

0：不排序

1：按价格升序

2：按价格降序

3：按面积升序

4：按面积降序

##### 筛选条件

district: 房屋所在的区域

0：不限

1：海淀区

2: 东城区

3：西城区

4：昌平区

注：其他地区待定

range_of_prices: 价格范围

0：不限

1：2000以下

2：2000~4000

3：4000以上

range_of_area: 面积范围

0: 不限

1：10平米以下

2：10-20

3：20-30

4：30以上

there_formaldehyde: 是否有甲醛

0：不限

1：有

2：没有

##### example
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
#### return

一个房屋的json数组
每一个房屋包含

house_id: 房屋id，作为房屋的主键

img: 房屋图片的url

name: 房屋名字

description: 房屋描述

tag：标签，以下划线_隔开

price：房屋价格

there_formaldehyde：是否有甲醛

##### example
```json
[{
	"id": 1,
	"img": "http://www.pronhub.com/sporthouse.jpg",
	"name": "紫禁城西部湖中央超豪华2居室",
	"description": "长者故居，你值得拥有",
	"tag": "独卫_集体供暖_独立阳台",
	"price": 30000,
	"there_formaldehyde": 0
}, {
	"id": 2,
	"img": "http://www.pronhub.com/sporthouse.jpg",
	"name": "秦城1居室",
	"description": "7x24小时专人守护",
	"tag": "独卫_集体供暖_独立阳台",
	"price": 1000,
	"there_formaldehyde": 0
}]
```