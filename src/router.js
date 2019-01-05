const routers = [
    {
        path: '/',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/allhouse',
        meta: {
            title: '我要求租'
        },
        component: (resolve) => require(['./views/allhouse.vue'], resolve)
        //component: (resolve) => require(['./components/GoodsList.vue'], resolve)
    },
    {
        path: '/house',
        meta: {
            title: '房屋'
        },
        component: (resolve) => require(['./views/house.vue'], resolve)
    },
    {
        path: '/login',
        name: 'login',
        meta: {
          title: 'Login - 登录',
          hideInMenu: true
        },
        component: (resolve) => require(['./views/login.vue'], resolve)
    }
];
export default routers;