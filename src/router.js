const routers = [
    {
        path: '/',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/index',
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
        path: '/allrental',
        meta: {
            title: '我要租房'
        },
        component: (resolve) => require(['./views/allrental.vue'], resolve)
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
        path: '/addhouse',
        meta: {
            title: '新增房屋'
        },
        component: (resolve) => require(['./views/addhouse.vue'], resolve)
    },
    {
        path: '/rental',
        meta: {
            title: '求租信息'
        },
        component: (resolve) => require(['./views/rental.vue'], resolve)
    },
    {
        path: '/addrental',
        meta: {
            title: '新增房屋'
        },
        component: (resolve) => require(['./views/addrental.vue'], resolve)
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login - 登录',
            hideInMenu: true
        },
        component: (resolve) => require(['./views/login.vue'], resolve)
    },
    {
        path: '/register',
        name: 'register',
        meta: {
          title: '注册',
          hideInMenu: true
        },
        component: (resolve) => require(['./views/register.vue'], resolve)
    }
];
export default routers;