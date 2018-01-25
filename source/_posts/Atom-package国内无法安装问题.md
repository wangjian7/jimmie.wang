---
title: 天朝安装Atom package方法
date: 2017-05-16 17:49:20
tags:
  - Atom
---

<font size=12>今</font>天尝试在代理模式下通过Atom内部的package manager来安装几个插件，然而一直卡在install状态，也就是说，即使挂代理也可能装不了atom package，之后Google了一下发现是由于Atom通过自带的apm工具来安装npm包，而apm工具不会走系统默认代理导致。

于是自己手动安装，以安装Markdown Preview Enhanced package为例子，3个步骤如下：

1. [到这里搜索需要的插件](https://atom.io/packages), 然后找到插件的Github地址；
2. 进入atom的包管理目录~/.atom/packages，git clone https://github.com/shd101wyy/markdown-preview-enhanced.git;
3. cd markdown-preview-enhanced,安装插件sudo npm install
