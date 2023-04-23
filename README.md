## Electron + Express + 前端使用 Vite + 前端使用 Amis(Vue、React)同理 + Typescript

当你看到这个项目使用了 Amis 低代码框架时，就应该猜到了，这个项目的维护者并不是专业的程序员，是的，但是它的确可以运行。

这个项目改自[electron-with-express
](https://github.com/frankhale/electron-with-express)和，如果你发现任何问题，应该能从那得到更多的帮助。

这本质上是一个套娃工程，即`web`是前端项目，由`express`伺服，最后由`electron`包装，项目结构如下

```
---web              前端项目(原来叫app，但是会冲突)
    +---index.html  前端入口html
    +---public      前端静态文件
    +---src         前端TS文件
---dist             总构建目录
---src              electron、express配置及后端程序
---index.html       electron入口html
```

### 如何运行

```
pnpm i
cd web
pnpm i
cd ../
pnpm start
```
