# 管控台样板项目
--------

开箱即用的管控台前端应用，搭配Beatle框架和Antd组件库，完成前端管控台应用的开发与设计解决方案。
样板库项目可以访问[在线地址](http://groups.alidemo.cn/bigdata-node/beatle-boilerplate-practice/dist/)体验一下

> 先前技术
> 1. [React组件框架](https://facebook.github.io/react/docs/tutorial.html)，构建应用界面所需的任何组件。可以通过Beatle教程快速学习，[地址](introduce)
> 2. [Antd组件库](https://ant.design/docs/react/introduce-cn)，提供应用构建最常用的React组件。
> 3. [Beatle应用框架](beatle)，串通应用构建各个模块，让开发变得简单。

### 目录结构

![image.png | center | 290x438](https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/skylark/png/7b873a37-954c-4610-b926-07db015b7e3a.png "")

| File文件 | Purpose用途 |
| :--- | :--- |
| app.{jsx, less} | 应用代码入口，把界面根容器挂到具体的页面DOM |
| scenes/index.{jsx, less} | 应用界面中的容器组件 |
| scenes/*/index.{jsx, less} | 路由页面的容器组件。 |
| models/*.js | 描述状态数据的数据模型类 |
| resources/*.js | 接口资源文件 |
| component/*/index.{jsx, less} | 组件 |
| index.html | 应用启动html文件 |

### 随意搭配的布局

构建前端应用，换个角度说明，实际上是组合所有页面路由，不同的路由触达不同的视图，每个视图都可能需要先定义好布局，在填充页面功能。
而我们设计把布局和路由视图分开，任何路由视图只需要在定义的时候声明选择某种布局，在路由响应时会自动吧路由视图插入到指定布局中。

#### 三大布局

1. 控制台布局 - consoleLayout
   包括标准页头和左侧导航，空白区域填充路由视图。应用的例子，一般登陆后操作的详情页都在控制台布局中。

   ![image.png | center | 505x393](https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/skylark/png/5436b19a-57fd-4c5a-afad-719b7a9a7c08.png "")
2. 落地页布局 - landingLayout

包括标准页尾，空白区域填充路由视图，并且整个内容页面居中显示。应用的例子有登陆、注册等会可选择落地页布局。

![image.png | center | 384x308](https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/skylark/png/a9896afc-c984-46c0-96a5-aff9ac6bd278.png "")
3. 内容页布局 - contentLayout

包括面包屑和标准页尾，控台区域填充视图。

![image.png | center | 398x322](https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/skylark/png/a561893c-867b-4a73-b8b7-a088d8b53892.png "")
实际上操作的详情页一般来说需要`控制台布局`搭配`内容布局`来完成。

![image.png | center | 479x351](https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/skylark/png/37d4b2f6-e5f4-4f66-adb2-7e870ffaf4e2.png "")

#### 布局使用

路由视图组件配置exenstion#layout属性，即可应用指定布局

![image.png | center | 364x154](https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/skylark/png/36cee443-ccb6-4f29-916e-ae84d1548b91.png "")
这里RouteScene是一个路由视图（React组件）layout是一个数组，说明先把路由视图套在contentLayout，然后再整体套在consoleLayout下。
> 更多布局敬请期待

### 自动化的路由配置

`scenes`目录下的子目录都会自动扫描，并组装成路由。
比如`scenes/test/index.jsx`，通过自动化路由配置后，通过`/test`可以访问到该组件。而`scenes/test/demo/index.jsx`可以通过`/test/demo` 访问。

> 实际上样板库中已经帮你自动加载应用构建需要的模块。


![image.png | center | 704x252](https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/skylark/png/d14770f3-1c58-4eb5-9b71-edaf6e8b9978.png "")
1. 路由访问：`scenes/` 目录下按照目录层级组合成路径，即可访问到具体的路由视图。
2. 获取路由配置：`Beatle.route('/test/demo')`同样，通过目录层级组合成路径，可以获取到路由配置。


