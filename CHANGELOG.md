### 2023-3-7(v: 0.0.0)
#### vite-plugin-vue-setup-extend
> 解决vue3下 script setup语法糖 下 ，手动设置组件name不方便的问题
```shell
npm i vite-plugin-vue-setup-extend -D
```
> 在文件vite.config.ts中
```Typescript
import setupExtend from 'vite-plugin-vue-setup-extend';
export default defineConfig({
  plugins: [
    ...
    setupExtend()
  ],
});

```

#### element-plus
> 下载element-plus
```shell
npm install element-plus --save
```
<!-- #### unplugin-auto-import -->

#### 自动导入
> 首先你需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件
```shell
npm install -D unplugin-vue-components unplugin-auto-import
```
> 在文件vite.config.ts中
```Typescript
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})

```
#### Volar 支持
> 如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型。（自动识别，组件变色，ts生效）
```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global"]
  }
}
```
#### 配置eslint和typescript-eslint
+ 根目录新增 .eslintignore
+ 根目录新增 .eslintrc.js

### 2023-3-8(v: 0.0.0)
#### vite中使用scss
```shell
  npm i sass-loader sass -D
```
```Typescript
  // vite.config.ts
  export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: { // 使用引擎
        additionalData: `@import "@/style/test.scss";`
      }
    }
  }
})
```