const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

const config = {
    target: "web",
    entry: {
        path: path.join(__dirname, 'src/index.js')
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                // css-loader不仅可以处理项目中的css文件
                // 还可以处理项目中的 .vue 组件中的css代码
                // 但是 .vue 文件中的代码需要使用 lang = css 进行执行
                // 不然的就会报错
                // 默认不写时是 css
                test:/\.css$/,
                use: [
                    'styles-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg|ico)$/,
                use: [
                    {
                        // 可以直接转换成BASE64代码
                        // url-loader是封装了file-loader
                        loader: "url-loader",
                        // options 可以的配置项可以传给loader
                        // 只有小于1024的图片才能转换成BASE64代码打包在代码中
                        // 其他的会生成相关的名称的文件，在name中进行了配置
                        options: {
                            limit: 1024,
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                // stylus
                // 一层一层网上处理，每个loader只处理自己关心的那块代码
                // stylus-loader只处理stylus文件
                // 需要注意的是在此处配置的test中必须把对应的vue组件中的lang中的也配置在里面
                // 否则会出错
                // 或者在vue组件中的style中配置lang=styl，但是这样有可能导致IDE不认识报错，但是运行没有问题
                test: /\.(styl|stylus)$/,
                use: [
                    'styles-loader',
                    'css-loader',
                    // 编译效率增高
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    'stylus-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        // 在使用vue react等框架看开发的时候需要使用
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin(),
    ]
}

// 这个配置文件是要在正式环境和开发环境使用
// 需要进行标识
// 需要设置环境变量
// 但是在不同的平台上面设置环境的方式是不同的，所以需要安装一个cross-env
if (isDev) {
    // 为了映射编译之后的代码，方便页面调试
    config.devtool = '#cheap-module-eval-source-map';

    // webpack 2 之后加入
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
        // 配置后在开发报错的时候会出现在页面上，便于调式
        overlay: {
            errors: true
        },
        // 会自动打开浏览器窗口，如果开启了之后在修改了配置项之后会自动打开
        // open: true,
        // 渲染当前组件，不会整个页面更新
        hot: true
    };

    // 开启hot热加载功能需要加入一些webpack的插件
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config;
