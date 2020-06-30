## 首页的app组件
1. Header是用了Element-UI
2. 底部是用了MUI的Tabbar
    + 修改底部图标时，需要把额外的css和ttf文件导入到main.js里
    + 然后再修改span里的class
3. 中间是自定义的路由
    + 先在main.js文件里导入vue-router
    + 创建与main.js平齐的router.js文件，再里面也导入vue-router，完成router的配置，最后用export default向外面暴露出router对象
    + 在mian.js文件里导入router.js文件，且把路由挂载到vue实例上
    + 把tabbar改造成router-link

4. 设置路由高亮
    + 在router.js文件里添加routerlinkactive属性，并使用已用的类

5. 加载首页轮播图数据
    + 使用 axios

## 组件
1. 在src下创建一个components文件夹，里面专门存放组件