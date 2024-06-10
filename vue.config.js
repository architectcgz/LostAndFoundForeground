module.exports = {
    publicPath: './',  // 基本路径
    outputDir: 'dist', // 构建时的输出目录
    assetsDir: 'static', // 放置静态资源的目录
    indexPath: 'index.html', // html 的输出路径
    filenameHashing: true, // 文件名哈希值
    lintOnSave: false, // 是否在保存的时候使用 `eslint-loader` 进行检查。
    // 组件是如何被渲染到页面中的？ （ast：抽象语法树；vDom：虚拟DOM）
    // template ---> ast ---> render ---> vDom ---> 真实的Dom ---> 页面
    // runtime-only：将template在打包的时候，就已经编译为render函数
    // runtime-compiler：在运行的时候才去编译template
    runtimeCompiler: false,

    transpileDependencies: [], // babel-loader 默认会跳过 node_modules 依赖。
    productionSourceMap: false, // 是否为生产环境构建生成 source map

    //调整内部的 webpack 配置
    configureWebpack: () => { },

    chainWebpack: () => { },

    // 配置 webpack-dev-server 行为。
    devServer: {
        open: true, // 编译后默认打开浏览器
        host: '0.0.0.0',  // 域名
        port: 8080,  // 端口
        https: false,  // 是否https
        // 显示警告和错误
        overlay: {
            warnings: false,
            errors: true
        },
    }
}
const path = require('path') //必须引入
const resolve = dir => path.join(__dirname, dir)//必须引入
module.exports = {
    //配置代理
    devServer: {},
    // 配置svg
    chainWebpack: config => {
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons')) //放置svg的路径
            .end();

        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons')) //放置svg的路径
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            });
    }
}