# Parcel-Tsx-Boilerplate

> 一个使用 [Parcel](https://github.com/parcel-bundler/parcel) 进行打包，集成了 `React` 和 `TypeScript` 的 **SPA** 模板。
>
> 仍处于完善阶段。

## 已集成

- React + React Router
- TypeScript
- Antd
- Less
- Babel
- ESLint
- Jest + Enzyme

## 起步

```bash
# dev
npm run dev / yarn dev

# prod
npm run build / yarn build
```

（Tips：你可以试试不 `npm install` 或者 `yarn add` 就直接执行上面的代码，希望这会让你惊喜。）

## 简介

> 你可以查看[文档](https://parceljs.org/)来获取更详细的说明。

### 为什么是 Parcel？

- 🚀 超快打包/编译速度，多核杠杠的！（官网数据，在不启用缓存的情况下比`webpack`快 50%，启用后快 90%~）

- 🔥 自带 HMR，省心省力。

- 🐠 零配置！妈妈再也不用担心我被配置折磨了！

- 📦 开箱即用/自动转换，Parcel 能够开箱即用的对一些文件提供支持，如果在编译过程中发现缺失会自动安装。

- 🚨 友好的错误日志，让你立刻定位到错误！

### 基本使用

> 使用`Parcel`打包并不意味着你需要适应全新的配置、目录结构，它真的太友好了。你需要做的大部分事情和在`webpack`下使用一样。

- HTML 模板与入口文件

  ```html
  <script src="../src/index.tsx"></script>
  ```

  你可以在 `package.json` 中看到，我们并不是把 `index.js` 作为入口文件，而是 `index.html`，同时我们直接引入了`tsx`文件！带劲吧！

  然后配置 `index.tsx`:

  ```tsx
  import * as React from "react";
  import * as ReactDOM from "react-dom";

  import App from "./page/app";

  ReactDOM.render(<App name="Budu" />, document.getElementById("root"));
  ```

  然后呢？然后就没了！`Parcel`使你可以更专注于这个应用而不是环境配置如何如何，不需要像使用`webpack`时你需要 `webpack.dev/.prod/.common.js`（当然这也意味着灵活性的不足哦）。

  `Parcel`内置了一个开发服务器。

- 热模块重载

  关于 HMR 的优势这里不再赘述，需要注意的是`parcel`同样支持通过`module.hot`对 HMR 进行 hook，`module.hot.accept` 函数会在模块/依赖被更新前执行，`module.hot.dispose`会在模块即将被替换前执行。

- 生产环境

  生产环境下，`Watch`选项与`HMR`会被关闭，并且会使用`minifier`来压缩代码。它内置了[terser](https://github.com/fabiosantoscode/terser) [cssnano](http://cssnano.co/) [htmlnano](https://github.com/posthtml/htmlnano)来完成这项工作。

  同时，`Parcel`会自动注入环境变量`NODE_ENV=production`。

  如果你有需要，你也可以在开发环境下启用单次构建（即没有监听和热重载）

  ```bash
  NODE_ENV=development parcel build <entrypoint> --no-minify
  ```

- CLI 命令

  因为没有配置文件，所以我们能做的就是在执行 `parcel` 或是 `parcel build` 时传入一些参数，

  - `parcel watch index.html`，类似于`parcel index.html`，但不会启动一个服务器。

  - `parcel help` 帮助信息

  - `parcel version` 版本号

- 选项

  - 设置输出目录

  ```BASH
  parcel build entry.js --out-dir build/output
  # 或者
  parcel build entry.js -d build/output
  ```

  - 资源公共目录

  ```bash
  parcel entry.js --public-url ./dist/
  ```

  输出结果:

  ```html
  <link rel="stylesheet" type="text/css" href="/dist/entry.1a2b3c.css" />
  <!-- 或者 -->
  <script src="/dist/entry.e5f6g7.js"></script>
  ```

  - 编译目标，默认为`browser`

  ```bash
  parcel build entry.js --target node
  ```

  - 缓存目录

  ```bash
  parcel build entry.js --cache-dir build/cache
  ```

  - 端口号

  ```bash
  parcel serve entry.js --port 1111
  ```

  - 更改日志级别，从 0~3 分别对应：

    - 禁用日志
    - 只记录错误
    - 记录错误和警告
    - 记录所有

  - 输出文件名

  ```bash
  parcel build entry.js --out-file output.html
  ```

  - 在浏览器中自动打开

  ```bash
  parcel entry.js --open
  ```

  - 禁用 source-map

  ```bash
  parcel build entry.js --no-source-maps
  ```

  - 禁用根据文件内容生成 hash 值

  ```bash
  parcel build entry.js --no-content-hash
  ```

  - 禁用自动安装依赖/HMR/压缩/文件系统缓存

  ```bash
  parcel entry.js --no-autoinstall

  parcel entry.js --no-hmr

  parcel build entry.js --no-minify

  parcel build entry.js --no-cache
  ```

  - 开启仍处于实验性的作用域提升与摇树优化

  ```bash
  parcel build entry.js --experimental-scope-hoisting
  ```

  更多信息，请查看 [Devon Govett's post on Parcel 1.9 Tree Shaking section](https://medium.com/@devongovett/parcel-v1-9-0-tree-shaking-2x-faster-watcher-and-more-87f2e1a70f79#4ed3)
