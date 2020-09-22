const jianshuDB: TBlogItem[] = [
  {
    title: '以前我没得选，现在只想用 Array.reduce',
    desc: '代码仓库：https://github.com/Haixiang6123/learn-reduce 前言 第一眼看 Array.reduce 这...',
    avatar: 'https://upload-images.jianshu.io/upload_images/2979799-b9aac0219bbc719c.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    url: 'https://www.jianshu.com/p/9a168b12eac6',
    date: '2020-9-13'
  },
  {
    title: 'redux 文档到底说了什么（下）',
    desc: '完整代码请看这里 上一篇文章主要介绍了 redux 文档里所用到的基本优化方案，但是很多都是手工实现的，不够自动化。这篇文章主要讲的是怎么用 r...',
    avatar: '',
    url: 'https://www.jianshu.com/p/dacd871843d4',
    date: '2020-8-31'
  },
  {
    title: 'redux 文档到底说了什么（上）',
    desc: '前言 最近又认真重读了一遍 redux 的文档，不出意料，还是一样的晦涩难懂。 虽然文档写得不怎么样，但是里面确实给了很多比较好的代码组织方式...',
    avatar: 'https://upload-images.jianshu.io/upload_images/2979799-6b300202646ebdf9.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    url: 'https://www.jianshu.com/p/49aa25353c2e',
    date: '2020-8-30'
  },
  {
    title: 'IoC 控制反转',
    desc: '第一次听到这个名词的时候，我就在想到底是哪个“天才”想出来这么丑陋的名字的？当时看了一些博客知道是解决依赖关系的，但是“控制”和“反转”一直没有...',
    avatar: '',
    url: 'https://www.jianshu.com/p/229b0d92858e',
    date: '2020-7-3'
  },
  {
    title: '面向切面编程',
    desc: '听到这个名字的时候，我真的一头雾水。其实面向切面编程（AOP）是相对面向对象编程（OOP）来说的。Emmm，还是不懂。下面就用一个事例来说明面向...',
    avatar: '',
    url: 'https://www.jianshu.com/p/f0ce3ef48dec',
    date: '2020-7-1'
  },
  {
    title: '注解',
    desc: '在写 Java 的时候，一看到注解就另我很兴奋，因为这代表可以让我少写很多代码，如 @Select()，那就不用在 Mapper.xml 去配 ...',
    avatar: '',
    url: 'https://www.jianshu.com/p/f0ce3ef48dec',
    date: '2020-7-1'
  },
  {
    title: '类型与反射',
    desc: '对于类型与反射，我的理解是在运行时可以动态地对类进行一些操作。 比如：XXX x = new XXX() 这个 XXX 我是可以外部输入的，输入...',
    avatar: '',
    url: 'https://www.jianshu.com/p/c9135f570e60',
    date: '2020-7-1'
  },
  {
    title: '生产者/消费者模型',
    desc: '需求 当容器没有东西的时候，生产者生产一个东西；当容器有东西的时候，消费者去消费这个东西。 synchronized 版 ReentrantLo...',
    avatar: '',
    url: 'https://www.jianshu.com/p/03d5fdba155c',
    date: '2020-6-17'
  },
  {
    title: '初探多线程',
    desc: '为什么需要多线程 对于一些密集型的 IO 操作如，网络 IO，文件 IO，我们很想当他们做 IO 操作的时候让 CPU 处理别的事情。这就需要多..',
    avatar: '',
    url: 'https://www.jianshu.com/p/5bd65af984d0',
    date: '2020-6-16'
  },
  {
    title: '初探 Java Collections',
    desc: '以前学了很多 ArrayList, List, Set 啥的，他们的爹都是 Collection，Collection 是一个接口，里面提供了很...',
    avatar: '',
    url: 'https://www.jianshu.com/p/005336ab4e3c',
    date: '2020-6-9'
  },
  {
    title: 'Maven 包管理',
    desc: 'Maven 包管理和前端的 Webpack 差不多，都有下面的特点： 从中央仓库下载第三方包 自动化构建 历史 以前使用手动编译 Jar 包，然...',
    avatar: '',
    url: 'https://www.jianshu.com/p/fd9a24448ae3',
    date: '2020-6-8'
  },
  {
    title: 'Vue 热更新成功，但浏览器不刷新',
    desc: '最近在更新个人主页，这个主题看够了，就想换另一个。但是今天突然发现我的 Vue 不能热更新？费了一会劲才搞明白怎么回事。下面就分享一下我的入坑，...',
    avatar: 'https://upload-images.jianshu.io/upload_images/2979799-511444bc77a14a95.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    url: 'https://www.jianshu.com/p/13c442392cd5',
    date: '2020-5-26'
  },
  {
    "title": "React Hooks 用法",
    "desc": "刚学了一下 React Hooks 的用法，就写篇博客记录一下。因为学得也比较浅，所以这篇博客只讲怎么用。 useState 普通用法 就是用来...",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-af0c75ef1b34472f.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "url": "https://www.jianshu.com/p/4541b1642c36",
    "date": "2020-5-25"
  },
  {
    "title": "我是怎么学前端的",
    "desc": "前言 从大三（三年前了吧）开始学的前端，市面上各类视频，收费，免费，正版，盗版的都看过，平台看极客学院，慕课网，腾讯课堂。后来出国了，就看 Yo...",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-4b617451c4d7dbb4.png?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "url": "https://www.jianshu.com/p/2ab9f0868ff3",
    "date": "2020-05-14"
  },
  {
    "title": "Certbot 添加新域名",
    "desc": "如果你已经使用 Certbot 生成了证书，并想在新添别的域名，比如，你已经有一张域名是 baidu.com 的 SSL 证书，想添加 www....",
    "avatar": "",
    "url": "https://www.jianshu.com/p/0a48b198ee76",
    "date": "2020-05-08"
  },
  {
    "title": "ts-node 的那些坑",
    "desc": "从 JS 到 TS，我们一开始还会用 Webpack 配置来运行我们应用，后面发现了 ts-node，直接 ts-node index.ts 就...",
    "avatar": "",
    "url": "https://www.jianshu.com/p/cbd3bcdbb60b",
    "date": "2020-05-04"
  },
  {
    "title": "Express 创建 HTTPS 服务器",
    "desc": "在还没真正部署 Express 应用的时候，我们希望先在本地将 HTTPS 跑起来。下面就来实现一下本地创建 HTTPS 服务器吧。 HTTPS...",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-e3c0ff7a7c0bf512.png?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "url": "https://www.jianshu.com/p/db06029aeff7",
    "date": "2020-05-03"
  },
  {
    "title": "让你的 Express 应用跑在 80 端口上",
    "desc": "在部署我的 Express 应用后，可以正常用 xxxIP:4000 去访问我的 Express 应用，所以就想能不能直接 xxxIP 访问，毕...",
    "avatar": "",
    "url": "https://www.jianshu.com/p/dafcd8dbb4bf",
    "date": "2020-05-03"
  },
  {
    "title": "React 受控与非受控组件",
    "desc": "需求 这次来对比一下受控组件和非受控组件的用法。这里的需求就是实现一个 input 元素。 受控组件 刚开始写 React 的时候，可能最使用的...",
    "avatar": "",
    "url": "https://www.jianshu.com/p/a874cdcd110a",
    "date": "2020-05-02"
  },
  {
    "title": "ts-node TSError: ⨯ Unable to compile TypeScript 错误",
    "desc": "今天用 ts-node 跑我的 Express 应用的时候发现不能通过编译。运行下面命令： 报错如下： 但是我明明定义好了 xxx.d.ts 文...",
    "avatar": "",
    "url": "https://www.jianshu.com/p/24c42377d4a9",
    "date": "2020-04-30"
  },
  {
    "title": "Travis CI 上的 Express x ORM 单元测试",
    "desc": "今天写后端的时候遇到一个问题，就是怎么在 Traivs CI 上搞 ORM 单元测试。搜了一圈，发现中文说这个的博客很少，那就在这里分享一下我的...",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-64d4209efa26e63f.png?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "url": "https://www.jianshu.com/p/8c48dd22c023",
    "date": "2020-04-19"
  },
  {
    "title": "pm2 执行后马上 stopped 的问题",
    "desc": "今天遇到一个问题，写了一个很简单的脚本，使用 pm2 去挂起的时候，出现 打下 log 是样的 这里注意到问题是 too many unstab...",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-d296959f49fec1fb.png?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "url": "https://www.jianshu.com/p/7c05485ecb77",
    "date": "2020-04-17"
  },
  {
    "title": "Vue x Coveralls 辛辛苦苦写完测试也要秀一下",
    "desc": "我们有时看别人的库，比如 Element UI，他们都会放一个测试覆盖率的 badge ，像这样。 虽然是一个小小的东西，但是放在 README...",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-0ac6a9e16ec29dee.png?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "url": "https://www.jianshu.com/p/23c53fed5800",
    "date": "2020-04-11"
  },
  {
    "title": "Certbot 添加新域名",
    "desc": "如果你已经使用 Certbot 生成了证书，并想在新添别的域名，比如，你已经有一张域名是 baidu.com 的 SSL 证书，想添加 www....",
    "avatar": "",
    "url": "https://www.jianshu.com/p/0a48b198ee76",
    "date": "2020-04-11"
  },
  {
    "title": "Vue x Coveralls 辛辛苦苦写完测试也要秀一下",
    "desc": "我们有时看别人的库，比如 Element UI，他们都会放一个测试覆盖率的 badge ，像这样。 虽然是一个小小的东西，但是放在 README...",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-0ac6a9e16ec29dee.png?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "url": "https://www.jianshu.com/p/23c53fed5800",
    "date": "2019-06-27"
  },
  {
    "title": "Docker x Mysql 刚进新手村就踩坑",
    "desc": "好久都没有更新了，最近在写一个小项目，遇到的问题还是挺多的，就分享一下吧。今天刚学怎么用 Docker Mysql 就踩了一个坑。 起因 “怎么...",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-e31ee5c2649c9188.png?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "url": "https://www.jianshu.com/p/4919860e9c87",
    "date": "2019-06-15"
  },
  {
    "title": "Vim 真的那么难吗？",
    "desc": "如果玩过知乎都会被那些大 V 洗脑说 Vim 好用，Vim 牛逼，也是因为这个原因才开始用 Vim 的，也想着总有一天会变成 Vim 高级玩家。...",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-d30777d221e20c9f.png?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "url": "https://www.jianshu.com/p/919c4c3f70dc",
    "date": "2019-04-05"
  },
  {
    "title": "你们这些阿猫🐱阿狗🐶，做只猫🐱做只狗🐶不要做情人啊",
    "desc": "缘起 考完 Final 又是一个 Spring Break，10 天很无聊啊，人一无聊就想写代码，但是前面写守望 UI  CSS 的时候写伤了，...",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-786bc806f4741190.png?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "url": "https://www.jianshu.com/p/707b0699b8a7",
    "date": "2019-03-17"
  },
  {
    "title": "对象扩展运算符的 7 种技巧",
    "desc": "翻译 7 Tricks with Resting and Spreading JavaScript Objects 扩展运算符不仅仅是用来解构参...",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-fbe8d78ed0e89436.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "url": "https://www.jianshu.com/p/8ec8ca63c12b",
    "date": "2019-03-16"
  },
  {
    "title": "TS: 高级类型",
    "desc": "TS 文档是有一章叫高级类型，其实并不是真的“高级”，他实际的意思是将普通的类型用“某种方式”组合起来形成一个“组合类型”，这个组合类型叫高级类...",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-710d9fed7469fd0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "url": "https://www.jianshu.com/p/828c731d8694",
    "date": "2019-03-15"
  },
  {
    "title": "守望先锋 UI 库",
    "desc": "缘起 去年 12 月玩守望等匹配的时候就无聊萌生出做一套守望 UI 的想法，因为觉得守望的 UI 比较简洁，而且对于那些小组件的实现都有个大概的...",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-d2d5932e21951bd2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "url": "https://www.jianshu.com/p/d15feff5e445",
    "date": "2019-03-14"
  },
  {
    "title": "TS: 泛型",
    "desc": "学 Java 的时候总会提到泛型，现在 TS 也有了，他们的用法都差不太多。泛型可以理解为广泛的类型。 为什么要用泛型 先来了解下泛型有什么用。...",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-d4327380f2d593af.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "url": "https://www.jianshu.com/p/2f55befa1b00",
    "date": "2019-03-13"
  },
  {
    "title": "TS: 函数",
    "desc": "函数是一种特殊的对象，可以被调用。TS 里的函数和原生，ES 6 里的函数差不太多，只是多了一些其他功能。 基础 先来看一个简单的函数例子。 函...",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-5e3d652a96c7b5b2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "url": "https://www.jianshu.com/p/ca91e1805a6a",
    "date": "2019-03-12"
  },
  {
    "title": "配一个好用的终端",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-43ebfa217420f851.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "其实网上有很多文章教怎么去配一个好看的终端，但是大部分我觉得只是教你怎么装个 oh-my-zsh 而已，再加点丑陋的配色，而且说一堆用都用不到的...",
    "url": "https://www.jianshu.com/p/13a2328e7c5e",
    "date": "2019-03-11"
  },
  {
    "title": "Vim 真的那么难吗？",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-d30777d221e20c9f.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "如果玩过知乎都会被那些大 V 洗脑说 Vim 好用，Vim 牛逼，也是因为这个原因才开始用 Vim 的，也想着总有一天会变成 Vim 高级玩家。...",
    "url": "https://www.jianshu.com/p/919c4c3f70dc",
    "date": "2019-03-10"
  },
  {
    "title": "你们这些阿猫🐱阿狗🐶，做只猫🐱做只狗🐶不要做情人啊",
    "avatar": "//upload-images.jianshu.io/upload_images/2979799-786bc806f4741190.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "缘起 考完 Final 又是一个 Spring Break，10 天很无聊啊，人一无聊就想写代码，但是前面写守望 UI  CSS 的时候写伤了，...",
    "url": "https://www.jianshu.com/p/707b0699b8a7",
    "date": "2019-03-09"
  },
  {
    "title": "对象扩展运算符的 7 种技巧",
    "avatar": "//upload-images.jianshu.io/upload_images/2979799-fbe8d78ed0e89436.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "翻译 7 Tricks with Resting and Spreading JavaScript Objects 扩展运算符不仅仅是用来解构参...",
    "url": "https://www.jianshu.com/p/8ec8ca63c12b",
    "date": "2019-03-08"
  },
  {
    "title": "守望先锋 UI 库",
    "avatar": "//upload-images.jianshu.io/upload_images/2979799-d2d5932e21951bd2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "缘起 去年 12 月玩守望等匹配的时候就无聊萌生出做一套守望 UI 的想法，因为觉得守望的 UI 比较简洁，而且对于那些小组件的实现都有个大概的...",
    "url": "https://www.jianshu.com/p/d15feff5e445",
    "date": "2019-03-07"
  },
  {
    "title": "TS: 泛型",
    "avatar": "//upload-images.jianshu.io/upload_images/2979799-d4327380f2d593af.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "学 Java 的时候总会提到泛型，现在 TS 也有了，他们的用法都差不太多。泛型可以理解为广泛的类型。 为什么要用泛型 先来了解下泛型有什么用。...",
    "url": "https://www.jianshu.com/p/2f55befa1b00",
    "date": "2019-03-06"
  },
  {
    "title": "TS: 函数",
    "avatar": "//upload-images.jianshu.io/upload_images/2979799-5e3d652a96c7b5b2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "函数是一种特殊的对象，可以被调用。TS 里的函数和原生，ES 6 里的函数差不太多，只是多了一些其他功能。 基础 先来看一个简单的函数例子。 函...",
    "url": "https://www.jianshu.com/p/ca91e1805a6a",
    "date": "2019-03-06"
  },
  {
    "title": "计算机网络: FAQ",
    "avatar": "//upload-images.jianshu.io/upload_images/2979799-6c3d19dc2faac4be.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "计算网络 IP Address 问 写出下面给定 IP 168.56.128.0/18 的 Lowest, Highest 以及 Broadca...",
    "url": "https://www.jianshu.com/p/1002fece84b4",
    "date": "2019-03-05"
  },
  {
    "title": "TS: 类",
    "avatar": "//upload-images.jianshu.io/upload_images/2979799-40a3d166d2178e96.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "TS 的类其实和 ES6 里的类差不多，只不过 TS 加多了一些功能。这篇文章会介绍 TS 类的常用功能与接口的对比，以及抽象类。 入门 还是先...",
    "url": "https://www.jianshu.com/p/0b54dc837570",
    "date": "2019-03-04"
  },
  {
    "title": "JS 里的函数",
    "avatar": "//upload-images.jianshu.io/upload_images/2979799-8c3e345279dad2f6.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "五种声明 具名函数 匿名函数 两边都有名字 和上面的方法有不一致性 window.Function 函数对象 箭头函数 函数的name属性 体系...",
    "url": "https://www.jianshu.com/p/380420e736f3",
    "date": "2019-03-04"
  },
  {
    "title": "脚本",
    "avatar": "",
    "desc": "Path 在 .zshrc 里添加路径，命令行就会自动在那个路径下找文件，如 一共要找三个路径 macvim的路径 ~/local 下的路径 系...",
    "url": "https://www.jianshu.com/p/200d26d7b80f",
    "date": "2019-03-04"
  },
  {
    "title": "TS: 接口",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-40a3d166d2178e96.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "接口算是官方文档里的第一个知识点了，这篇文章会简单介绍 TypeScrip 里的接口。 类型 在说接口之前我们先来了解下 TypeScript ...",
    "url": "https://www.jianshu.com/p/6d6b6972182f",
    "date": "2019-03-03"
  },
  {
    "title": "算法: Vertex Cover & Independent Set",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-938326d2ca259a90.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "这两个东西其实是互斥的关系，而这两个东西的应用也是十分有趣的。 Vertex Cover 先来说说什么是 Vertex Cover，其实就是节点...",
    "url": "https://www.jianshu.com/p/f90bb4013f46",
    "date": "2019-03-02"
  },
  {
    "title": "算法: Perfect Matching",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-ee6dc7e7c0126fe5.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "问题描述 这个问题也叫做 Perfect Marriage 问题，是用来相亲时候怎么配对男女都好，比如非诚勿扰里的每个男嘉宾会对女嘉宾排一个自己...",
    "url": "https://www.jianshu.com/p/8d2e448233dd",
    "date": "2019-03-01"
  },
  {
    "title": "算法: 最大流与最小割",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-977be3bb239663fb.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "什么是最大流 最大流要解决的问题是从 S 到 T 怎么才能最大地将数据运到另一边。这个“数据”可以是水，或者网络数据包。举个例子 在上面这个图中...",
    "url": "https://www.jianshu.com/p/79f045056e65",
    "date": "2019-02-28"
  },
  {
    "title": "抄了个在线吉他谱编辑器",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-c8f9409542c4ecaa.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "这个项目其实是去年期末考复习的时候写的，因为实在不想复习所以无聊参照 有谱么 用 React 写的一个在线吉他谱编辑器。我还将项目里的和弦组件和...",
    "url": "https://www.jianshu.com/p/653eff663f5d",
    "date": "2019-02-27"
  },
  {
    "title": "计算机网络: Lab5",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-c17c604605c74525.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "发送 TCP 配置如下图所示 Router 里有一个接口是 Serial3/0，可以用以下命令来配置 先在 PC2 开始监听 然后用以下命令发包...",
    "url": "https://www.jianshu.com/p/6f4c58aea7c2",
    "date": "2019-02-26"
  },
  {
    "title": "计算机网络: Lab 4",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-f53cd85b22a79d36.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "配置 OSPF OSPF 可以在一个 Autonomous System 里帮助 Router 构建到别的 Router 最短路径。以下图为例。...",
    "url": "https://www.jianshu.com/p/c438d5f95bdf",
    "date": "2019-02-25"
  },
  {
    "title": "计算机网络: Lab3",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-627bb359fce4df91.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "将路由器配置成 Bridge 假设现在有 Router 1 ，要将这个 Router 1 配置成 Bridge，步骤分别为： 停止使用 Rout...",
    "url": "https://www.jianshu.com/p/de2cf5b0a20f",
    "date": "2019-02-24"
  },
  {
    "title": "计算机网络: 传输层",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-fb76c2486abd818c.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "TCP 和 UDP 大家应该都听说过，也是面试中比较常见的内容，这两个协议都是在传输层的。这篇文章会讲述 TCP 和 UDP 里面实现的内容。 ...",
    "url": "https://www.jianshu.com/p/f7a752b4835f",
    "date": "2019-02-23"
  },
  {
    "title": "计算机网络: 网络层(Control Plane)",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-c1b00912da8ce452.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "网络层里分为两层: Control Plane 和 Data Plane，之前我有篇博客是写 Data Plane 的，这篇就写写 Contro...",
    "url": "https://www.jianshu.com/p/6f4491e4a534",
    "date": "2019-02-22"
  },
  {
    "title": "由守望先锋英雄血槽引发的思考",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-6388ecc1bac79995.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "最近到了赛季末了，输赢也不怎么在乎了，开始关注守望先锋的设计。在我看来，守望先锋的 UI 还是很好看的，不仅设计得十分简洁，而且用户体验很友好。...",
    "url": "https://www.jianshu.com/p/2f1040a0ea16",
    "date": "2019-02-21"
  },
  {
    "title": "计算机网络: Lab 2",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-79d4bbfe6a0f4114.png?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "desc": "初始化路由器 初始化如下图的路由器。 显示配置好的信息 配置路由器里的路由表 路由的配置重要参数有三个：目的地 IP，目的地 IP 的子网掩码以...",
    "url": "https://www.jianshu.com/p/afb61e7de6c4",
    "date": "2019-02-20"
  },
  {
    "title": "计算机网络: Lab 1",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-5ce6ac0b01c02ee2.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "ARP 入门 对于下图我们要模拟一下 ARP 的请求和响应。 ARP 的操作命令 模拟 当弄出上面的图后，所有设备的 ARP 表都是空的。假设现...",
    "url": "https://www.jianshu.com/p/42dbe7a89290",
    "date": "2019-02-19"
  },
  {
    "title": "机器学习: SVM",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-0aa8e48d39db33c5.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "为什么要有 SVM SVM (Support Vector Machine）即支持向量机，主要用于解决数据的分类问题的。还记得线性分类的问题么？...",
    "url": "https://www.jianshu.com/p/9080dc0a16f2",
    "date": "2019-02-18"
  },
  {
    "title": "机器学习: 线性分类器",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-1500b8142fb727b2.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "之前说过线性回归可以帮我们在给定特征值后预测对应的结果，而在分类上线性回归也是可以的。 Perceptron Classifier Percep...",
    "url": "https://www.jianshu.com/p/5041c2e077fa",
    "date": "2019-02-17"
  },
  {
    "title": "机器学习: 线性回归",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-eeaf1e064903f53f.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "第一次基础线性回归这个概念的时候是在高中，当时也就做做题对XX大厂做销售预测，没想到会在机器学习里再次见到。一说到回归就是对给定的 X 值做预测...",
    "url": "https://www.jianshu.com/p/a67a067ac3fd",
    "date": "2019-02-16"
  },
  {
    "title": "机器学习: KNN",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-8157161c4549b620.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "KNN (K Nearest Neighbor) 是比较常见的种监督算法。它的主要思想是看这个数据距离最近的 K 个节点中，这些节点哪个类占最多...",
    "url": "https://www.jianshu.com/p/a958a5a44b65",
    "date": "2019-02-15"
  },
  {
    "title": "机器学习: 数据与过拟合",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-cc5356b62f3161e4.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "机器学习里的回归函数就是通过不断去拟合数据集里的数据来生成的，如果太简单会出现偏差，太复杂又会出现过拟合现象。 过拟合 下面就是一个过拟合的例子...",
    "url": "https://www.jianshu.com/p/e024a2dd4277",
    "date": "2019-02-14"
  },
  {
    "title": "机器学习: 贝叶斯分类器",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-e03b540bddf938ad.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "在机器学习的监督学习里，贝叶斯分类器算是很有名的一个方法了，而且这个方法效果还不错。 贝叶斯方程 我们先来复习一下大学里高数的贝叶斯方程 只要记...",
    "url": "https://www.jianshu.com/p/65dfab3d45a4",
    "date": "2019-02-13"
  },
  {
    "title": "机器学习: 入门",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-5b371798501a3936.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "现在机器学习是十分火爆，这也带起了 Python 的潮流，这篇文章将简要概括机器学习里的一些重要概念，作为机器学习的入门博文。 问题类型 机器学...",
    "url": "https://www.jianshu.com/p/8e010d3d342c",
    "date": "2019-02-12"
  },
  {
    "title": "算法: 选举机制里的 Schulze 方法",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-bbc1fd0b4fe28fe7.png?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "desc": "简介 Schulze 方法是选举机制里比较出名的算法。假设有 n 个候选人，选民们都为它们打分进行选举，在选民打分完后就形成了该选民心中的候选人...",
    "url": "https://www.jianshu.com/p/6f02f770890a",
    "date": "2019-02-11"
  },
  {
    "title": "算法: Johnson 算法",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-8c34bb52f6264e3e.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "Johnson 算法是用来解决在有负权重边图里的最短路径问题的，它主要了结合 Dijkstra 算法和 Bellman-Ford 算法。其实负数...",
    "url": "https://www.jianshu.com/p/36bbe0e86765",
    "date": "2019-02-10"
  },
  {
    "title": "算法: TSP 问题",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-8f349fcff18ceb39.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "简介 TSP (Traveling Salesman Problem) 问题是一个经典的最短路径问题，它和我们平时看到的最短路径不同点是最短路径...",
    "url": "https://www.jianshu.com/p/66d949472889",
    "date": "2019-02-10"
  },
  {
    "title": "算法: 聪明的 A* 算法",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-22e94de3b1f6846f.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "问题 当说到求最短路径我们可能首先想到的是用 Dijkstra 算法去做，而使用 Dijkstra 算法基本是以开始节点往外扩散，直到找到终点的...",
    "url": "https://www.jianshu.com/p/16fc0d62eaa4",
    "date": "2019-02-09"
  },
  {
    "title": "算法: 最长路径与任务规划",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-eccec18a2c38633d.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "我们通常听得最多的就是最短路径的应用了，但是最长路径却很少听说过，今天就跟大家说说一个最长路径应用的例子。你可能会说不就是将最短路径求法变成最长...",
    "url": "https://www.jianshu.com/p/a798858028ac",
    "date": "2019-02-08"
  },
  {
    "title": "算法: 拓扑排序与后序遍历",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-615c403b77db6561.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "简介 拓扑排序在我们生活中有很多的应用，最简单的就是任务的安排表，使用拓扑排序可以帮助你更容易分清哪个任务应该先做，哪个后做，以及它们之间的依赖...",
    "url": "https://www.jianshu.com/p/c41f0b419d61",
    "date": "2019-02-07"
  },
  {
    "title": "算法: 最小生成树",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-851685d5f65f84da.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "简介 最小生成树 (Minimum Spanning Tree) 应该大家都不陌生，当然还有最大生成树啦，这篇文章就简单总结一下算法里的生成树。...",
    "url": "https://www.jianshu.com/p/c046fcaa190c",
    "date": "2019-02-06"
  },
  {
    "title": "算法: 寻找图里的强连通组件",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-befd33d1cc11e2e0.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "强连通图 先说说图里的强连通组件是什么鬼，在说这个东西之前我们先理解一下强连通图。下面就是一张强连通图。 在强连通图里，每个节点都能通过某条路径...",
    "url": "https://www.jianshu.com/p/d931becbe61a",
    "date": "2019-02-05"
  },
  {
    "title": "算法: 图的搜索算法",
    "avatar": "",
    "desc": "节点个数: n，边数: m 图的表现形式 我们先从一个简单的例子入手。 人类很容易就知道这个图的结构，但是计算机来表示这个图还是需要一些特定的数...",
    "url": "https://www.jianshu.com/p/5cdd02e976d6",
    "date": "2019-02-04"
  },
  {
    "title": "算法: 搜索引擎里的排名算法",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-066d0da1e764653f.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "我们经常使用的 Google 在以前就是使用排名算法来计算搜索结果的，当然这个算法不太好，而且漏洞很多，容易被别人利用。不过，我们还是可以了解一...",
    "url": "https://www.jianshu.com/p/380c8b098672",
    "date": "2019-02-03"
  },
  {
    "title": "HTTP: GET 和 POST",
    "avatar": "",
    "desc": "GET 和 POST 请求总是会在面试过程中被问到，虽然方方总是说这两者没啥区别，但是作为面试题，还是写篇文章总结下吧。 注意：以上我都用了“一...",
    "url": "https://www.jianshu.com/p/ffefdb7e4755",
    "date": "2019-02-02"
  },
  {
    "title": "HTTP: Cookie 和 Session",
    "avatar": "",
    "desc": "当第一次请求的时候，服务器会生成一个 Session ID，放在 Response 的 header 里。以后再发相同请求就会带上这个 Sess...",
    "url": "https://www.jianshu.com/p/37708be73f3a",
    "date": "2019-02-01"
  },
  {
    "title": "HTTP: 跨域真的有这么难吗",
    "avatar": "",
    "desc": "前言 以前写前端小项目的时候就听说过跨域这个词，什么 JSONP啊，CORS啊。感觉很高级，但是无奈项目太小没机会用上。今天就写篇博客总结一下常...",
    "url": "https://www.jianshu.com/p/3d949918c4fd",
    "date": "2019-01-31"
  },
  {
    "title": "HTTP: 状态码",
    "avatar": "",
    "desc": "对于我这种写小项目的人来说，对于状态码的认识就只停留在 200 和 404。今天就写篇博客总结一下其他的状态码。 成功响应 200 成功响应了请...",
    "url": "https://www.jianshu.com/p/8cd8615a36ae",
    "date": "2019-01-30"
  },
  {
    "title": "计算机网络: 链路层里的 Switch/Bridge",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-2f76e108be789f70.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "图解 首先我们来看看链路层+网络层的结构 Repeater 一般用于连接多个以太网络（如下图），还有一个功能就是放大信号的作用，包括错误信号和冲...",
    "url": "https://www.jianshu.com/p/690b542d8884",
    "date": "2019-01-29"
  },
  {
    "title": "JS: 用 Promise 写一个 axios",
    "avatar": "",
    "desc": "只要用过 Vue，没人会不知道 axios 这个库，他基乎取代了 jQuery 发 ajax 的功能了。今天我就用 Promise 来实现一个简...",
    "url": "https://www.jianshu.com/p/874350b5aee7",
    "date": "2019-01-28"
  },
  {
    "title": "JS: 数组去重",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-70064b0e40b7937c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "数组去重算是面试题里常见的考点了，之前在 Medium 上看到一篇文章用三种方法实现数组去重的，感觉十分简洁。主要用到的是 Set, Array...",
    "url": "https://www.jianshu.com/p/9ad53ecbe102",
    "date": "2019-01-28"
  },
  {
    "title": "计算机网络: 网络层(Data Plane)",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-9ea425844c023194.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "desc": "网络层算是计网里很重要的一层，里面有我们听了很多遍但是不知道是啥的 IP 协议，而这个 IP 协议就是网络高层和低层的沟通桥梁。 干什么的 在学...",
    "url": "https://www.jianshu.com/p/b83f234c1077",
    "date": "2019-01-28"
  },
  {
    "title": "计算机网络: 链路层(入门)",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-77c99546e621d6e8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "desc": "术语 Nodes：主机和路由器 Links: 负责连接相邻两个节点的连接有线网无线网局域网 Packets: frame（链路层对包的表述），它...",
    "url": "https://www.jianshu.com/p/0e2d800b1520",
    "date": "2019-01-28"
  },
  {
    "title": "计算机网络: 入门",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-73d579496184057a.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "这学期修了一门叫 Network Lab 的课，主要还是讲计算机网络部分的，对于学习前端的我来说还是很有帮助。这个文集将记录这门课的核心内容。 ...",
    "url": "https://www.jianshu.com/p/4e5bcc05bae9",
    "date": "2019-01-28"
  },
  {
    "title": "记一次错：bind() 和 call() 一起用就懵逼了",
    "avatar": "",
    "desc": "今天看到一篇博客是讲怎么用 bind() 的。大家都知道讲 bind() 嘛，不就是绑定 this 这个鬼东西嘛，然后在 setTimeout ...",
    "url": "https://www.jianshu.com/p/76fe07947109",
    "date": "2019-01-27"
  },
  {
    "title": "记一次错: 将 Vue 里异步请求封装得更优雅",
    "avatar": "",
    "desc": "前言 以前我一直是没想到这两个东西是可以联系起来的。因为一般来说异步请求数据都是放在 mounted 里，等拿到数据之后再去更新 Vuex 里的...",
    "url": "https://www.jianshu.com/p/63f7417f56f7",
    "date": "2019-01-26"
  },
  {
    "title": "JS: 事件委托",
    "avatar": "",
    "desc": "本文翻译：JavaScript Event Delegation, and event.target vs. event.currentTarg...",
    "url": "https://www.jianshu.com/p/223a14d6abca",
    "date": "2019-01-25"
  },
  {
    "title": "CSS: 清除浮动",
    "avatar": "",
    "desc": "为什么要清除浮动 虽然说现在 9102 年了应该不会再有人用 float 了，但是有些老网页还是会有 float 来布局的。float 带来的主...",
    "url": "https://www.jianshu.com/p/e8a3856dfffa",
    "date": "2019-01-24"
  },
  {
    "title": "CSS: 居中",
    "avatar": "",
    "desc": "水平居中 flex 布局 内联元素 margin position table 过时，放弃 垂直居中 flex 布局 内联元素 margin 必...",
    "url": "https://www.jianshu.com/p/5bfbb186a195",
    "date": "2019-01-23"
  },
  {
    "title": "CSS: 盒子模型",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-77a9aed8868ba62e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "CSS 盒子模型基本上是面试的必考题，因为实在是太重要了。以前写 CSS 总是感觉元素的宽高十分难调，其中一个很大的问题就是忽略了盒子模型的重要...",
    "url": "https://www.jianshu.com/p/5de9733da905",
    "date": "2019-01-22"
  },
  {
    "title": "HTML: viewport",
    "avatar": "",
    "desc": "死记 属性 width=device-width ：表示宽度是设备屏幕的宽度 initial-scale=1.0：表示初始的缩放比例 minim...",
    "url": "https://www.jianshu.com/p/a68efa927325",
    "date": "2019-01-21"
  },
  {
    "title": "HTML: 语义化",
    "avatar": "",
    "desc": "历史 最开始后面 PHP 程序员写前端布局的时候，只使用 table 来布局，但是 table 本应该被用来在表格里显示数据，这就违反了 HTM...",
    "url": "https://www.jianshu.com/p/8d15992bc8fa",
    "date": "2019-01-20"
  },
  {
    "title": "JS: DOM API",
    "avatar": "",
    "desc": "因为DOM本来是为XML设计的，而HTML也用这个API，所以很难用 分类 Node API Element API -> Node API (...",
    "url": "https://www.jianshu.com/p/6d2fdacea5a4",
    "date": "2019-01-19"
  },
  {
    "title": "记一次错：小数 em 引起的文字抖动问题",
    "avatar": "",
    "desc": "为了使网页适应手机端，现在很多程序员都开始偏向使用 em 或者 rem 了，但是 em 也会有一些坑，我今天就遇到了一个，特别奇怪，要不是使用折...",
    "url": "https://www.jianshu.com/p/1f28bff68778",
    "date": "2019-01-18"
  },
  {
    "title": "JS: 立即执行函数",
    "avatar": "",
    "desc": "在讨论前端的时候，我们总能听到立即执行函数。我第一次听到这个名字的时候总以为很高大上，每次都想以后有机会好好学一下。但其实立即执行函数是个很简单...",
    "url": "https://www.jianshu.com/p/2664a5d9cca3",
    "date": "2019-01-17"
  },
  {
    "title": "记一次错: 内联元素不能用 scale",
    "avatar": "",
    "desc": "今天遇到一个很奇怪的错误，我的元素在设置了 hover 时本应该放大，但是完全没有用。代码可以表示成这样吧。 CSS 是这样写的： 因为前面的元...",
    "url": "https://www.jianshu.com/p/4d2e12a82f46",
    "date": "2019-01-16"
  },
  {
    "title": "JS的类型转换",
    "avatar": "",
    "desc": "字符串转换 其实加个空字符串就好了 全局方法，和 + 的效果一样 布尔转换 Boolean 全局变量 两次取反就是 Boolean 自动转换布尔...",
    "url": "https://www.jianshu.com/p/2b4edacd2c7a",
    "date": "2019-01-15"
  },
  {
    "title": "Vue: EventHub 和 Vue 更配哦",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-1659965872187281.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "EventHub 是一个非常重要且常用的东西，在不相关组件通信方面有着很强大的作用。 EventHub 想想如果从最顶层组件传一个 data 给...",
    "url": "https://www.jianshu.com/p/40127e3d9905",
    "date": "2019-01-14"
  },
  {
    "title": "Vue: 插件",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-39c63d9d9d64c167.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "说到 Vue 的插件，大家会先想到什么呢，是那个状态管理的 Vuex 还是发 Ajax 请求的 axios 呢？今天就聊聊 Vue 插件。你说插...",
    "url": "https://www.jianshu.com/p/0b415d28d5f5",
    "date": "2019-01-13"
  },
  {
    "title": "记一次错：Vue 构建项目后使用 npm link 失败",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-463bb7ad4cf48cf0.PNG?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "不想看过程可以直接看最后的总结 :) 起因 前天的时候就遇到了一个非常棘手的问题，在高高兴兴写完 Vue 项目后，使用 npm link 在别的...",
    "url": "https://www.jianshu.com/p/ca252cd667df",
    "date": "2019-01-12"
  },
  {
    "title": "记一次错：循环中调用 Promise 的 resolve 的问题",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-5d90afa6a951574f.png?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "desc": "起因 最近在看方方的《造轮子》，我是直接上 vue-cli 3 的，所以在配置上真的下了很大功夫。今天就出现了在循环里调用 resolve 函数...",
    "url": "https://www.jianshu.com/p/350567545deb",
    "date": "2019-01-11"
  },
  {
    "title": "Vue: 如何引用全局 Sass",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-ed0b241f3052d089.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "现在都已经是 9102 年了，说起要在 Vue 里写样式，基本上都 Sass 起步。Sass 变量有很多好处，其中之一就是定义变量，在写类似 d...",
    "url": "https://www.jianshu.com/p/a0a19ae0c737",
    "date": "2019-01-08"
  },
  {
    "title": "Sass: 变量名中使用字符串模板",
    "avatar": "",
    "desc": "翻译：SASS: interpolation in a name of variable 问题 使用 Sass 的时候，我们可能在某些场景下使用...",
    "url": "https://www.jianshu.com/p/d41aa87dcbea",
    "date": "2019-01-07"
  },
  {
    "title": "自己实现 Ajax",
    "avatar": "",
    "desc": "用不同方法来实现 Ajax 基本是前端的经典考题了，这篇文章总结了2种常用的实现 Ajax 方法，分别是原生 JS 实现和Promise 实现。...",
    "url": "https://www.jianshu.com/p/90a629ab0284",
    "date": "2019-01-05"
  },
  {
    "title": "为什么我不用 React-Router",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-a46323ac3c8b34bf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "翻译Medium上的文章：Why I don't use React-Router。 React-Router 是目前 React 里最流行的路...",
    "url": "https://www.jianshu.com/p/a1237203f9a7",
    "date": "2019-01-05"
  },
  {
    "title": "Vue: 样式绑定",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-8bd886c20f29ca2c.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "学习 Vue 的时候觉得样式绑定很简单，但是使用的时候总是容易搞晕自己。因为 :class 和 :style 里的数组语法和对象语法和 data...",
    "url": "https://www.jianshu.com/p/1e0b974eb391",
    "date": "2019-01-03"
  },
  {
    "title": "Vue: 自定义指令",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-22c950529dd08c50.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "有人可能感觉自定义指令好像是个新东西，还要学自定义，一听就高大上不想学。其实指令可以简单地理解为组件的一个小弟，专门帮助组件做一些事情的人。一句...",
    "url": "https://www.jianshu.com/p/06c4f2005ddd",
    "date": "2019-01-03"
  },
  {
    "title": "嘿，我造了个代码高亮的插件",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-dee155229ceba080.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "源起 写这个插件的初衷是因为 Medium 总是不高亮作者的代码。当然也有人用 Codepen, CodeSandbox 或者 Gist 来嵌入...",
    "url": "https://www.jianshu.com/p/087d1b044136",
    "date": "2019-01-03"
  },
  {
    "title": "Vue: 过滤器",
    "avatar": "",
    "desc": "在学习 Vue 的过程中，总是会忘了有过滤器这回事，因为一般获取了数据后就直接用函数去处理数据了，所以今天就来补一下过滤器的知识。其实在数据上添...",
    "url": "https://www.jianshu.com/p/f9b8df86e73f",
    "date": "2018-12-21"
  },
  {
    "title": "秒懂<SVG/>里的viewbox",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-a6bd031de5cc78ee.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "desc": "今天学 SVG 的时候看到了 viewbox 属性，MDN 的描述是这样的： 这里定义的画布尺寸是200200px。但是，viewBox属性定义...",
    "url": "https://www.jianshu.com/p/4422c05ff0f2",
    "date": "2018-12-21"
  },
  {
    "title": "Sass: @mixin vs placeholder vs @function",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-e036a2c3f0dd6032.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "学习 Sass 的时候总会发现这三个东西很像，因为他们都是用来统一代码来达到复用的目的的。这篇文章将用一个小例子来对比他们的不同之处。 例子 我...",
    "url": "https://www.jianshu.com/p/9e58f753781d",
    "date": "2018-12-20"
  },
  {
    "title": "Sass: @media x @mixin x @content",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-ece1d1db89f3bdd2.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "说到媒体查询我想到的就是麻烦，要写很多代码，而且难懂。当 Sass 推出了 @mixin 和 @content 后一切就感觉很舒服了。 例子 我...",
    "url": "https://www.jianshu.com/p/1570a731b7e1",
    "date": "2018-12-20"
  },
  {
    "title": "巧用 getComputedStyle",
    "avatar": "",
    "desc": "之前学这个 API 的时候一直不知道时候才用得上这个函数，今天总算是被我用到了，也发现其有着很巧妙的功能。 简介 先说说用法吧。这个函数是 Wi...",
    "url": "https://www.jianshu.com/p/fbb615099af9",
    "date": "2018-12-19"
  },
  {
    "title": "Sass 入门实战",
    "avatar": "",
    "desc": "Sass 学习起来是很无趣的一件事，毕竟如果没有项目单单看文档是挺无聊的，还不如看政治课本有趣。这篇文章就从一个简单的例子入手，通过用 Sass...",
    "url": "https://www.jianshu.com/p/da33dd1bdffd",
    "date": "2018-12-19"
  },
  {
    "title": "Sass 基础用法（下）",
    "avatar": "",
    "desc": "BEM命名法 Block Element Modifier Block: 主要名字 -> user-card。 Element: 两个下划线表示...",
    "url": "https://www.jianshu.com/p/5c05ee0ce4ad",
    "date": "2018-12-18"
  },
  {
    "title": "Sass 基础用法（上）",
    "avatar": "",
    "desc": "嵌套 变量 Mixin（类似于函数） 两处地方用相同代码时可以用Mixin讲法，相当于机械地拷贝CSS代码到不同地方。 Placeholder（...",
    "url": "https://www.jianshu.com/p/8ff6a7d323ff",
    "date": "2018-12-18"
  },
  {
    "title": "深入了解 React Router 原理",
    "avatar": "",
    "desc": "说到 React 我们一定离不开和 Router 打交道。不管 Vue Router 和 React Router ，他们的原理都是差不多的。这...",
    "url": "https://www.jianshu.com/p/53dc287a8020",
    "date": "2018-12-16"
  },
  {
    "title": "10 分钟了解 Hooks API",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-37e250c2ce183d14.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "Hooks API 是 React 16.7.0-alpha.0 版本推出的 API，要注意的是只有这个版本才有，别的版本都没有，如果你在 16...",
    "url": "https://www.jianshu.com/p/9047d28218cd",
    "date": "2018-12-15"
  },
  {
    "title": "React: Context API 入门",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-8e794dfb7a307bb7.png?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120",
    "desc": "说到使用全局数据管理状态时，第一个想到的就是 Redux。但是 Redux 语法太过啰唆，React 使用者一直很不爽。所以 React 模仿 ...",
    "url": "https://www.jianshu.com/p/4aa68108d7d0",
    "date": "2018-12-05"
  },
  {
    "title": "Redux 入门",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-d447c921196cb0e1.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "学习 Redux 是个十分痛苦的过程，因为你有可能不知道 Redux 和 React-Redux 是两个不同的东西，而且一堆看起来很新的概念总能...",
    "url": "https://www.jianshu.com/p/733f0f664ee3",
    "date": "2018-12-05"
  },
  {
    "title": "React 的兄弟组件通信",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-c708fadd292873d2.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "React 文档对于组件通信一般只讲到了父子之间的通信，对于简单的应用来说已经是够用了。但是，对于大型应用来说就有点捉襟见肘了，如果还用简单的绑...",
    "url": "https://www.jianshu.com/p/c4d3e194a699",
    "date": "2018-11-12"
  },
  {
    "title": "React 的父子组件通信",
    "avatar": "",
    "desc": "通信 父元素传一个函数给子元素 子元素在恰当的时间调用这个函数 回调 爸爸组件 儿子组件 传入 爸爸组件 儿子组件 爷孙组件通信 爷爷组件将函数...",
    "url": "https://www.jianshu.com/p/f5b75a6e3105",
    "date": "2018-11-05"
  },
  {
    "title": "React 的函数组件和 Class 组件",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-8230ed2d406f2ce1.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "组件是 React 里非常重要的组成部分，其分为函数组件和 Class 组件。本文就简单说明这两种组件定义方式的由来。 例子 让我们先从一个简单...",
    "url": "https://www.jianshu.com/p/a6e70fd35674",
    "date": "2018-11-05"
  },
  {
    "title": "为什么要有React.js?",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-082a124643e0c57d.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "之前一直用 React.js 来写一个电影选购商城，对于刚上手的我来说感觉处处和 Vue.js 差不多呀，反正就是无脑使用数据绑定，然后 ren...",
    "url": "https://www.jianshu.com/p/55a55e271ebe",
    "date": "2018-11-04"
  },
  {
    "title": "你真的了解JS里的\"new\"吗？",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-6755086afbfb54b0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "前言 我们常常喜欢用new关键字去创建一些对象如new Vue()，但是这个关键字的背后究竟做了什么其实没太多人去关注。 想象我们是苹果公司，要...",
    "url": "https://www.jianshu.com/p/0b31c965f9ce",
    "date": "2018-10-23"
  },
  {
    "title": "let 和 const",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-cffba2f5da7c4fd1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "let 和 const 关键字是 ES6 的新语法，主要用来取代 var 来定义变量。ES6 出了这么一个简单的新语法其实足以说明JS有很多不好...",
    "url": "https://www.jianshu.com/p/1a49138ddbc9",
    "date": "2018-10-22"
  },
  {
    "title": "Web性能优化",
    "avatar": "",
    "desc": "使用CDN CDN全称是Content Delivery Network，就是把资源放在不同的地方，用户请求那个资源时，那么就把离用户最近的那个...",
    "url": "https://www.jianshu.com/p/ec913c02b14c",
    "date": "2018-10-16"
  },
  {
    "title": "JS继承",
    "avatar": "",
    "desc": "简介 JS的继承对于Java的继承其实不太是一回事，JS的继承的原理就是用原型链。 假设 假设我们有两个类: Human 和 Man。Human...",
    "url": "https://www.jianshu.com/p/df41173ee1aa",
    "date": "2018-10-13"
  },
  {
    "title": "jQuery不过如此",
    "avatar": "",
    "desc": "getSibiings() 定义一个伪数级，是一个对象，里面有length 遍历parentNode.children，如果不是自己，那么加入到...",
    "url": "https://www.jianshu.com/p/624a9281e186",
    "date": "2018-04-03"
  },
  {
    "title": "原型与原型链",
    "avatar": "",
    "desc": "原型的由来 考虑如下代码 直观上，我们很容易觉得s, n, obj都应该共享toString()函数，但是如果有很多个变量呢？那不是要每个变量都...",
    "url": "https://www.jianshu.com/p/011f60b39e5b",
    "date": "2018-03-06"
  },
  {
    "title": "JS 里的数据类型转换",
    "avatar": "",
    "desc": "虽然说JS是一门弱类型的语言，但是JS里的数据转换是不可忽视的。因为弱类型的转换会可能发生意想不到的事情。下面就简单简介一下JS里的数据转换吧。...",
    "url": "https://www.jianshu.com/p/08538fc08f13",
    "date": "2018-03-01"
  },
  {
    "title": "JS 里的数据类型",
    "avatar": "",
    "desc": "数据类型 简单数据类型 number, string, boolean, symbol, undefined, null 复杂数据类型 obje...",
    "url": "https://www.jianshu.com/p/76cd164bc44c",
    "date": "2018-02-07"
  },
  {
    "title": "CSS基础布局",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-e248c37ae4dc6502.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "简介 当我们刚刚学完CSS就去做静态页面的时候会出现难以下手的情况，因为看到了效果图，但是不知道这些元素要怎么摆放才显得合理。如果摆放不合理，那...",
    "url": "https://www.jianshu.com/p/db5fb5e9c7a6",
    "date": "2018-02-07"
  },
  {
    "title": "CSS - 阴阳图",
    "avatar": "",
    "desc": "简介 今天教大家用CSS属性做一个简单的阴阳图，效果如下 只需用简单的CSS样式就可以完成这个阴阳图，这个阴阳图就仅仅是一个div 起步 第一步...",
    "url": "https://www.jianshu.com/p/e724cab6d3d6",
    "date": "2018-02-07"
  },
  {
    "title": "HTML标签",
    "avatar": "",
    "desc": "介绍 说起HTML标签，很多人都觉得很简单，比如我刚开始学的时候就是写网页不会的就去W3C school里去查标签，属性。每次都是查完就忘了，而...",
    "url": "https://www.jianshu.com/p/e0941d5cc7ac",
    "date": "2018-02-07"
  },
  {
    "title": "HTTP",
    "avatar": "",
    "desc": "简介 HTTP是的数据通信的基础。设计HTTP最初的目的是为了提供一种发布和接收HTML页面的方法。想象一个场景，当两个电脑进行通信的时候（发送...",
    "url": "https://www.jianshu.com/p/d5d4f8582ca3",
    "date": "2018-02-07"
  },
  {
    "title": "印象笔记与马克飞象——双象合壁",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-0acb5dbb34dbcf08.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "相信大家一定都很熟悉印象笔记，当然了，喜欢用 Markdown 的同学肯定知道马克飞象了。最近我也迷上了用马克飞象来记笔记，但是不想会踩到很多的...",
    "url": "https://www.jianshu.com/p/04e415e6a1c2",
    "date": "2018-02-07"
  },
  {
    "title": "初学五笔心得",
    "avatar": "",
    "desc": "从2017年2月27日我就开始学五笔了，到了现在有些心得想分享给大家。其实五笔并没有想像中那么难。 对于很多使用拼音输入法的人，当然也包括学习五...",
    "url": "https://www.jianshu.com/p/00730be5fd25",
    "date": "2018-02-07"
  },
  {
    "title": "五笔输入法学习笔记",
    "avatar": "",
    "desc": "五笔键盘布局 五笔口决 横区 11 G王旁⻘青头五⼀一提 12 F⼟土⼠士⼆二⼲干⼗十⼨寸⾬雨 13 D⼤大三肆头古⽯石⼚厂 14 S⽊木丁⻄西...",
    "url": "https://www.jianshu.com/p/18a502e374fc",
    "date": "2018-02-07"
  },
  {
    "title": "Markdown的一些心得（适合初学者）",
    "avatar": "https://upload-images.jianshu.io/upload_images/2979799-d7b67243f6547db6.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    "desc": "孰能生巧 写在前面 简洁，是普罗大众所追求的一种精神。当我在编写文档的时候，当时还是用Windows系统，用Word编写文字觉得很不简洁。而现在...",
    "url": "https://www.jianshu.com/p/27886010fda0",
    "date": "2018-02-07"
  }
]

export default jianshuDB
