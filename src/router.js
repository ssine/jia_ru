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
    }
];
export default routers;