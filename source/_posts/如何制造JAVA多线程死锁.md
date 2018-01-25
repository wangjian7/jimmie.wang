---
title: 如何制造JAVA多线程死锁
date: 2017-05-24 23:06:03
tags:
  - 如何失败
  - JAVA
---

<font size=12>制</font>造JAVA多线程的死锁只需要两步:
- 生成两个对象（objectA和objectB），起两个线程(thread1和thread2)

- thread1先后给objectA和objectB加同步锁，thread2先后给objectB和objectA加同步锁，关键是让thread1在获得objectB的锁之前不会释放objectA的锁，而thread2在获得objectA的锁之后才会释放objectB的锁
  - code：
<script src="https://pastebin.com/embed_js/AaEWWFpw"></script>

  - 输出：

```
Thread-0 started
Thread-1 started
```
