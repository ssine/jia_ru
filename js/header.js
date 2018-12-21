var css_cdn = [
    "https://cdn.bootcss.com/element-ui/2.4.11/index.js",
    "https://cdn.bootcss.com/element-ui/2.4.11/theme-chalk/index.css",
    "https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",

];
var js_cdn = [
    "https://unpkg.com/vue/dist/vue.js",
    //element-ui
    "https://unpkg.com/element-ui/lib/index.js",
    "https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js",
    "https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"
];

for(var i in css_cdn){
    link_label = '<link rel="stylesheet" href=\"' +  css_cdn[i] + '\">';
    document.write(link_label)
}

for(var i in js_cdn){
    link_label = '<script src=\"' +  js_cdn[i] + '\"></script>';
    document.write(link_label)
}