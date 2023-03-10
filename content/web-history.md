---
title: Web 技术发展史
draft: false
banner: '/banner-web.jpeg'
description: 如今各种形形色色的网页应用，最初是怎么什么样子的？又是如何发展成今天这个样子？本文将聊一聊主流 Web 技术的发展历史，梳理它们它们在你脑中的时间脉络，让你更清晰，更宏观的了解 Web 世界
tags: 'Web,历史'
createOn: '2023-2-27'
---

如今各种形形色色的网页应用，最初是怎么什么样子的？又是如何发展成今天这个样子？
本文将聊一聊主流 Web 技术的发展历史，梳理它们它们在你脑中的时间脉络，让你更清晰，更宏观的了解 Web 世界

## 一切的开始，万维网出现

1980 年，物理学家蒂姆·伯纳斯-李在欧洲核子研究中心（CERN）工作，为了解决 CERN 约一万名员工文档共享的问题，他开发了原型系统 ENQUIRE。
多年后的 1989 年，他结合 ENQUIRE 的开发经验，设计了一个更优秀的软件架构和实现，命名为万维网（World Side Web）。万维网的作用，就是解决文档在不同系统、设备、编码下的共享分发问题。万维网定义了超文本文档，和普通文档不同的地方是它们可以互相链接，进行跳转。

为了实现万维网所提供的服务，蒂姆定义了这样的一个软件架构：

- [HTML](https://zh.wikipedia.org/zh-hans/HTML): 超文本标记语言（HyperText Markup Language），万维网最基础的资源，它拓展了普通文档，提供了一系列特性，如：文档链接，创建表单，嵌入图片。
- [Web 服务器](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server):
  负责存储万维网上的资源，并通过 HTTP 协议传输给 Web 客户端。
- [Web 客户端](https://zh.wikipedia.org/wiki/网页浏览器):
  即浏览器，为用户提供请求 Web 服务器资源（HTML, 图片，文件）和渲染的能力。
- [HTTP](https://zh.wikipedia.org/zh-hans/HTTP):
  万维网网络传输的基础协议，它基于 TCP 协议提供了安全可靠的数据传输能力，让服务器上的资源可以分发到 Web 客户端。
- [URL](https://zh.wikipedia.org/zh-hans/URL):
  为万维网提供资源定位的系统。即我们常说的网址就是 URL。

下图是基于万维网架构，个人请求服务器上文档的案例。个人电脑上的浏览器客户端通过 HTTP 协议将请求的资源信息告诉服务器，服务器定位到指定的资源后，将其传输回给浏览器客户端。

![WWW arch](/www-arch.png){width="300"}

### 标准化和普及

因为万维网免费使用的属性加成，以及先驱式的提供文本图片混合式显示（1993 年推出的 Mosaic 网页浏览器），它在短短几年的时间内成为了最受欢迎的互联网技术。

1994 年，蒂姆·伯纳斯-李在麻省理工学院计算机科学实验室成立了万维网联盟（W3C）。
目的是负责万维网技术的标准制定，如：浏览器应该如何解析 HTML，HTTP 协议报文中各个字段的长度和位置。
这些都是需要有个一个官方组织来定义，才能避免不同开发者和平台差异导致不兼容。

### 总结
虽然技术在不断更新，但是 1989 年提出来的万维网架构，至今都没有改变。它已经成为现代互联网的基石，大到电商网站、搜索引擎，小到个人博客、企业官网，无一不是如此。

段落参考

- [万维网 Wikipedia](https://zh.wikipedia.org/wiki/%E4%B8%87%E7%BB%B4%E7%BD%91)
- [W3C Wikipedia](https://zh.wikipedia.org/wiki/W3C)
- [什么是网页服务器 MDN](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)


## JavaScript 的诞生及应用

### 诞生

随着万维网的使用越来越广，作为基础的 HTML 提供的功能开始满足不了一些用户的需求，比如：表单格式的验证，对话框提示，执行一些简单运算。
加上当时万维网技术的兴起，很多公司想从中分上一杯羹，开发了一系列 Web 浏览器产品，这个赛道变得越来越内卷，大家都急需打造自己产品的核心竞争力。
于是，浏览器公司开始在给浏览器集成脚本上下功夫，因为通过脚本的编程能力，动态的修改 HTML 内容，可以满足开发者的需求，提高用户网页的使用体验。

1995 年 5 月，Netscape 作为浏览器赛道上的领跑者，招募了原本从事 Unix 内核开发的 Brendan Eich 来开发自己公司的浏览器脚本语言。
经过一番公司内部商议之后，决定设计一个类似 Java 的脚本语言。1995 年 12 月份，Netscape 联合 Sun 公司发布了 JavaScript 这一轻量级，跨平台，面向对象的浏览器脚本语言。

### Ecma 组织

在自己的语言被开发者认可后，JavaScript 迫切需要有一个官方组织负责内部事务，可能你很容易联想到了 W3C，但是似乎这条路并走不通。

需要说明的是：万维网的创始者、W3C 的主理人蒂姆·伯纳斯-李并不赞同浏览器集成脚本的做法。他的助理曾在一次采访中表示

> 比如说，我很确信我们需要把一门编程语言内置进去。但是以 Tim（Berners-Lee）为代表的开发者们相当反对，认为它必须保持完全的声明式。

而且 W3C 主要工作还是放在协议和数据格式的制定，内部并无太多兴趣把工作重心放在一门脚本语言上。

1996 年，经过多方的不懈努力（主要是网景和微软），Ecma 国际组织得以成立，它的核心职责就是负责 JavaScript 这一编程语言的语法和规范制定。

在完成这一步之后，JavaScript 才算真的站稳了脚步。设计之初，JavaScript 有很多不完美的地方，遭到了很多质疑。
社区不断流入新鲜血液，Ecma 组织从来没有不思进取，JavaScript 经过一个个版本迭代：ES5、ES6、ES7+，人们也开始对其越来越满意。

> 事实上，《JavaScript 二十年》这本书已经把 JavaScript 的历史讲的很清楚了，
> 本文还是以介绍 Web 技术的主体脉络为主，就不继续深入 JavaScript 历史了，但是强烈建议大家自己去阅读一下这本书。
