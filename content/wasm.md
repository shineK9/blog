---
description: 'WebAssembly 的前世今生(笔记)'
title: "WebAssembly 的前世今生(笔记)"
draft: true
tags: "wasm,笔记"
createOn: '2023-3-4'
---

> 原视频: [WebAssembly 的前世今生--Java 的野望与Docker 的魔咒 | Qcon Beijing 2023 分享](https://www.bilibili.com/video/BV1Ze4y1w732/?share_source=copy_web&vd_source=31bfa38069b8528bc2e5a0da5ccb0146)

Web Assembly 最初是为了解决 C/C++ 无法跑在浏览器上运行而产生的。

摩尔定律生效期间，人们对于编程软件和语言的性能要求不是那么高。每隔一个周期，
芯片算力就翻倍，之前做的各种性能优化可能会显得微不足道。在这期间脱颖而出的
技术就是 Java/JavaScript，它们在语言设计阶段就不是把性能放在第一位，
所以它们在计算机上的执行效率并不高。

但是现在摩尔定律不生效了，芯片的性能上升开始变缓，为了满足大量的计算需求，人们
又开始考虑如何让自己的程序跑的更快。

```Card{title="个人观点"}
似乎上面的说法完美解释了近几年开始流行 AOT，云原生的底层逻辑。
```

Wasm 在服务器端的优势:

- 比 LXC Images 更小的体积
- 1000倍以上的启动速度优势
- 接近原生的性能
- 默认安全的运行环境
- 跨平台
- K8S 支持

权衡:

- 不是一个通用 OS 的程序运行时
- 需要学习相应的 SDKs
- 公共库不通用

一些 Web Assembly 运行时：

- wasmer: 社区流行度最高，Github 上有1.4w的 star 数量
- WasmEdge: 与 Docker 有很好的集成，性能不错。
- WAMR: 微软出品，必属精品？。

```Card{title="吐槽"}
微软的技术给我的感觉真的很不可靠，作为一名老 .NET 程序员，用过的很多 .NET 技术都不更新了，
那么你花大成本迁移到新的技术，那么被老技术折磨。比如 WPF 现在还不支持比较好的热更新，
每次一点小的修改都要重新编译，浪费好多时间。或者比较时髦的技术 Blazor 这种，刚开始推出
感觉微软还挺重视的，后来搞着搞着就没啥声音了。
```
