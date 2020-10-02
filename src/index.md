---
group:
  title: PageContext
  path: /page-context
---

# page-context

## 是什么？

page-context 是一个基于 React Context 的 **页面级** 状态管理器（类似 Redux），用于解决多层组件嵌套传值的问题，同时又能完美支持使用 hook 处理 effects

咱不支持 class 语法

## 为什么？

当我们建立起基于**物料**的开发模式的时候，就不可避免的遇到一个数据需要传过 2~3 层组件以上才能真正起作用的情况，这样中间层的组件就需要写一些必须的 props，影响代码可读性，期望能有一个类似 Redux 的状态管理器，但又能兼顾 hook 对于 effects 的支持。

### 物料 概念解释（来自飞冰）

物料分为组件（component）、区块（block）和项目（scaffold）三种类型：

组件（component）：组件是组成页面的基本单元，通过对组件的拆分和抽象，我们能根据组件快速搭建页面；从业务维度去看，组件也可分为基础组件和业务组件两种：

基础组件：与业务无关的组件，基础组件保持统一的视觉规范，考虑高内聚低耦合的设计思想，例如 Button、Input 等；

业务组件：面向业务的组件，一般功能比较确定同时复杂度较高，例如用户选择器、内容面板等。

区块（block）：区块可以理解为更复杂的组件，是由多种组件组合而成的，在一个页面中，一般会包含一个或多个区块，开发者可以快速把某个区块的代码添加到自身项目里，然后再做改动或二次加工；

项目（scaffold）：项目的样板工程，包含了完成前端项目所有组成部份，包括布局、常用页面、工程配置等，用户只需完成新页面的业务开发即可，用于项目初始化。

基于以上三种不同粒度的物料，开发者可以快速开始前端项目开发。

## 怎么用？

```javascript
import createPageContext from '@dragon/page-context';

const useXxx = () => {};

const [withProvider, useXxxContext] = createPageContext(useXxx);

// 页面组件用withProvider包起来
withProvider()(Page);

// 在page的children中可以这么获取pageContext的值
const { xxx } = useXxxContext();
```

## 需要注意！

- 为避免嵌套产生不可预知的 bug，**必须**在**Page**层使用
- **不要盲目用** ，简单的功能还是用普通的 props 传值好了。

## API

| API               | 说明                       | 类型                                  | 参数          |
| ----------------- | -------------------------- | ------------------------------------- | ------------- |
| createPageContext | 创建一个 page-context 实例 | (hook) => [withProvider, contextHook] | 自定义的 hook |

### withProvider

| 参数               | 说明                                                           | 类型                                             | 参数                      |
| ------------------ | -------------------------------------------------------------- | ------------------------------------------------ | ------------------------- |
| withProvider       | 用于包裹 Page 的 React HOC                                     | (mapPropsToProvider) => WrappedComponent => Page | mapPropsToProvider 见下方 |
| mapPropsToProvider | 可以把 Page props 里面的值如 match path 等传到 page-context 中 | (props) => object                                | Page 的 props             |

### contextHook

| 参数        | 说明                                 | 类型                  |
| ----------- | ------------------------------------ | --------------------- |
| contextHook | 获取 context 的 hook                 | (selector) => context |
| selector    | 自定义获取想要的值，默认获取全部的值 | (value) => newVal     |

## Demo1:

<code src="./demo/demo1.jsx" />

## Demo2

模拟多详情页

<code src="./demo/demo2/index.jsx" />
