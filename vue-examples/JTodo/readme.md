# JTodo

基于 webpack 4.41.2 开发

## 下载源码
```
git clone https://github.com/lmmqxyx-zwp/xiceos-vue.git
```

## 安装依赖

```$xslt
npm install
```

```$xslt
E:\opt\vue\xiceos-vue\vue-examples\JTodo>npm install

> core-js@2.6.10 postinstall E:\opt\vue\xiceos-vue\vue-examples\JTodo\node_modules\core-js
> node postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)

npm WARN vue-ssr-tech@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","ar
ch":"any"} (current: {"os":"win32","arch":"x64"})

added 794 packages from 415 contributors and audited 11395 packages in 30.994s
found 0 vulnerabilities
```

## 运行项目

```$xslt
npm run dev
```

```$xslt
> JTodo@1.0.0 dev E:\opt\vue\xiceos-vue\vue-examples\JTodo
> cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js

i ｢wds｣: Project is running at http://0.0.0.0:8000/
i ｢wds｣: webpack output is served from /
i ｢wds｣: Content not from webpack is served from E:\opt\vue\xiceos-vue\vue-examples\JTodo
i ｢wdm｣: Hash: 8453aed30b0967ed3b2c
Version: webpack 4.41.2
Time: 3953ms
Built at: 2019-11-01 6:08:02 PM
             Asset       Size  Chunks                         Chunk Names
bundle.8453aed3.js   2.01 MiB    path  [emitted] [immutable]  path
        index.html  191 bytes          [emitted]
Entrypoint path = bundle.8453aed3.js
[0] multi (webpack)-dev-server/client?http://0.0.0.0:8000 (webpack)/hot/dev-server.js ./src/index.js 52 bytes {path} [built]
[./node_modules/vue/dist/vue.runtime.esm.js] 222 KiB {path} [built]
[./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8000] (webpack)-dev-server/client?http://0.0.0.0:8000 4.29 KiB {path} [built]
[./node_modules/webpack-dev-server/client/overlay.js] (webpack)-dev-server/client/overlay.js 3.51 KiB {path} [built]
[./node_modules/webpack-dev-server/client/socket.js] (webpack)-dev-server/client/socket.js 1.53 KiB {path} [built]
[./node_modules/webpack-dev-server/client/utils/createSocketUrl.js] (webpack)-dev-server/client/utils/createSocketUrl.js 2.89 KiB {path} [built]
[./node_modules/webpack-dev-server/client/utils/log.js] (webpack)-dev-server/client/utils/log.js 964 bytes {path} [built]
[./node_modules/webpack-dev-server/client/utils/reloadApp.js] (webpack)-dev-server/client/utils/reloadApp.js 1.59 KiB {path} [built]
[./node_modules/webpack-dev-server/client/utils/sendMessage.js] (webpack)-dev-server/client/utils/sendMessage.js 402 bytes {path} [built]
[./node_modules/webpack-dev-server/node_modules/strip-ansi/index.js] (webpack)-dev-server/node_modules/strip-ansi/index.js 161 bytes {path} [built]
[./node_modules/webpack/hot sync ^\.\/log$] (webpack)/hot sync nonrecursive ^\.\/log$ 170 bytes {path} [built]
[./node_modules/webpack/hot/dev-server.js] (webpack)/hot/dev-server.js 1.59 KiB {path} [built]
[./node_modules/webpack/hot/emitter.js] (webpack)/hot/emitter.js 75 bytes {path} [built]
[./node_modules/webpack/hot/log-apply-result.js] (webpack)/hot/log-apply-result.js 1.27 KiB {path} [built]
[./src/index.js] 259 bytes {path} [built]
    + 77 hidden modules
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    [./node_modules/html-webpack-plugin/lib/loader.js!./node_modules/html-webpack-plugin/default_index.ejs] 376 bytes {0} [built]
    [./node_modules/lodash/lodash.js] 528 KiB {0} [built]
    [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {0} [built]
    [./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {0} [built]
i ｢wdm｣: Compiled successfully.
```

## 项目打包
```$xslt
npm run build
```

```$xslt
> JTodo@1.0.0 build E:\opt\vue\xiceos-vue\vue-examples\JTodo
> cross-env NODE_ENV=production webpack --config webpack.config.js

Hash: 35957e07a73e1bfa457b
Version: webpack 4.41.2
Time: 3087ms
Built at: 2019-11-01 6:06:41 PM
                  Asset       Size  Chunks                         Chunk Names
        app.6401c0df.js    4.6 KiB       0  [emitted] [immutable]  app
             index.html  373 bytes          [emitted]
runtime~app.1776df8b.js   1.46 KiB       1  [emitted] [immutable]  runtime~app
    styles.6401c0df.css    109 KiB       0  [emitted]              app
     vendor.e70f9366.js   68.8 KiB       2  [emitted] [immutable]  vendor
Entrypoint app = runtime~app.1776df8b.js vendor.e70f9366.js app.6401c0df.js styles.6401c0df.css
 [1] (webpack)/buildin/global.js 472 bytes {2} [built]
 [8] ./src/App.vue?vue&type=style&index=0&id=7fc12b0a&lang=stylus&scoped=true& 922 bytes {0} [built]
[12] ./src/index.js + 25 modules 12.9 KiB {0} [built]
     | ./src/index.js 259 bytes [built]
     | ./src/App.vue 552 bytes [built]
     | ./src/App.vue?vue&type=template&id=7fc12b0a&scoped=true& 207 bytes [built]
     | ./src/App.vue?vue&type=script&lang=js& 248 bytes [built]
     | ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7fc12b0a&scoped=true& 297 bytes [built]
     | ./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& 269 bytes [built]
     |     + 20 hidden modules
[13] multi vue 28 bytes {2} [built]
[21] ./src/assets/images/round.svg 277 bytes [built]
[22] ./src/assets/images/done.svg 361 bytes [built]
[27] ./src/assets/styles/footer.styl 41 bytes [built]
[28] ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--3-3!./node_modules/stylus-loader!./src/assets/styles/footer.styl 288 bytes [built]
[29] ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--3-0!./node_modules/style-loader/dist!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-3!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7fc12b0a&lang=stylus&scoped=true& 41 bytes [built]
[30] ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-3!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7fc12b0a&lang=stylus&scoped=true& 402 bytes [built]
[31] ./src/assets/styles/global.styl 41 bytes [built]
[32] ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--3-3!./node_modules/stylus-loader!./src/assets/styles/global.styl 649 bytes [built]
[33] ./src/assets/images/bg.jpeg 105 KiB [built]
    + 21 hidden modules

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/dist/cjs.js!node_modules/postcss-loader/src/index.js??ref--3-3!node_modules/stylus-loader/index.js!src/assets/styles/footer.styl:
    Entrypoint undefined = extract-text-webpack-plugin-output-filename
    [0] ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--3-3!./node_modules/stylus-loader!./src/assets/styles/footer.styl 288 bytes {0} [built]
        + 1 hidden module
Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/dist/cjs.js!node_modules/postcss-loader/src/index.js??ref--3-3!node_modules/stylus-loader/index.js!src/assets/styles/global.styl:
    Entrypoint undefined = extract-text-webpack-plugin-output-filename
    [0] ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--3-3!./node_modules/stylus-loader!./src/assets/styles/global.styl 649 bytes {0} [built]
    [3] ./src/assets/images/bg.jpeg 105 KiB {0} [built]
        + 2 hidden modules
Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/dist/cjs.js!node_modules/vue-loader/lib/loaders/stylePostLoader.js!node_modules/postcss-loader/src/index.js??ref--3-3!node_modules/stylus-loader/index.js!node_modules/vue-loader/lib/index.js??vue-loader-options!src/App.vue?vue&type=style&index=0&id=7fc12b0a&lang=stylus&scoped=true&:
    Entrypoint undefined = extract-text-webpack-plugin-output-filename
    [0] ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-3!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7fc12b0a&lang=stylus&scoped=true& 402 bytes {0} [built]
        + 1 hidden module
Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/dist/cjs.js!node_modules/vue-loader/lib/loaders/stylePostLoader.js!node_modules/postcss-loader/src/index.js??ref--3-3!node_modules/stylus-loader/index.js!node_modules/vue-loader/lib/index.js??vue-loader-options!src/components/Header.vue?vue&type=style&index=0&id=1b090f35&lang=css&scoped=true&:
    Entrypoint undefined = extract-text-webpack-plugin-output-filename
       2 modules
Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/dist/cjs.js!node_modules/vue-loader/lib/loaders/stylePostLoader.js!node_modules/postcss-loader/src/index.js??ref--3-3!node_modules/stylus-loader/index.js!node_modules/vue-loader/lib/index.js??vue-loader-options!src/components/Item.vue?vue&type=style&index=0&id=f1d5e354&lang=stylus&scoped=true&:
    Entrypoint undefined = extract-text-webpack-plugin-output-filename
    [3] ./src/assets/images/round.svg 277 bytes {0} [built]
    [4] ./src/assets/images/done.svg 361 bytes {0} [built]
        + 3 hidden modules
Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/dist/cjs.js!node_modules/vue-loader/lib/loaders/stylePostLoader.js!node_modules/postcss-loader/src/index.js??ref--3-3!node_modules/stylus-loader/index.js!node_modules/vue-loader/lib/index.js??vue-loader-options!src/components/Tabs.vue?vue&type=style&index=0&id=47c3f289&lang=stylus&scoped=true&:
    Entrypoint undefined = extract-text-webpack-plugin-output-filename
       2 modules
Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/dist/cjs.js!node_modules/vue-loader/lib/loaders/stylePostLoader.js!node_modules/postcss-loader/src/index.js??ref--3-3!node_modules/stylus-loader/index.js!node_modules/vue-loader/lib/index.js??vue-loader-options!src/components/Todo.vue?vue&type=style&index=0&id=29541275&lang=stylus&scoped=true&:
    Entrypoint undefined = extract-text-webpack-plugin-output-filename
       2 modules
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    [2] (webpack)/buildin/global.js 472 bytes {0} [built]
    [3] (webpack)/buildin/module.js 497 bytes {0} [built]
        + 2 hidden modules
```
