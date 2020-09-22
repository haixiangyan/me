import {getRepoUrl} from '@/lib/constants'

const portfolioDB: TPortfolioItem[] = [
  {
    title: 'tenet',
    desc: '一个用来"逆向思维"写代码的 VsCode 插件',
    url: 'https://marketplace.visualstudio.com/items?itemName=HaixiangYan.tenet',
    github: 'https://github.com/Haixiang6123/tenet',
    languages: ['TypeScript'],
    stars: 4
  },
  {
    title: '沙雕的《爱与诚》',
    desc: '一个测试你应该做猫还是狗还是做情人的沙雕网站。使用原生 JavaScript 实现。',
    url: getRepoUrl('cat-dog-lover'),
    github: 'https://github.com/Haixiang6123/cat-dog-lover',
    languages: ['JavaScript'],
    stars: 12
  },
  {
    title: '仿微信记账本',
    desc: '一个基于 React.ts 开发的仿微信记账本，全程使用函数组件和 React Hooks。',
    url: getRepoUrl('weixin-cash'),
    github: 'https://github.com/Haixiang6123/weixin-cash',
    languages: ['React', 'TypeScript'],
    stars: 0
  },
  {
    title: '易推',
    desc: '一个基于 Vue.ts + Express.ts 开发的内推系统。包含设计，前后端开发，安全，鉴权，测试，数据库，部署等基本的全栈流程。',
    url: 'https://easy-refer.com',
    github: 'https://github.com/Haixiang6123/easy-refer',
    languages: ['React', 'TypeScript'],
    stars: 5
  },
  {
    title: '守望先锋 UI 库',
    desc: '一个基于 Vue.js 开发的守望先锋主题 UI 库。纪念当年通宵打守望先锋的大学时光。',
    url: getRepoUrl('overwatch-ui-doc'),
    github: 'https://github.com/Haixiang6123/overwatch-ui',
    languages: ['Vue'],
    stars: 361
  },
  {
    title: '代码美化 Chrome 插件',
    desc: '一个可以一键美化网页中的代码块的 Chrome 插件。',
    url: 'https://chrome.google.com/webstore/detail/code-block-beautifier/gpcjjddhdnilcbddlonlfgdbejfboonn',
    github: 'https://github.com/Haixiang6123/codeblock-beautifier',
    languages: ['Chrome'],
    stars: 108
  },
  {
    title: '在线吉他谱编辑器',
    desc: '一个基于 React.js 开发的在线吉他谱编辑器。',
    url: getRepoUrl('guitar-editor'),
    github: 'https://github.com/Haixiang6123/guitar-editor',
    languages: ['React'],
    stars: 66
  },
  {
    title: 'Leetcode Python版本',
    desc: '难受一批的 Leetcode 题解，使用 Python 解题。',
    url: 'https://github.com/Haixiang6123/leetcode-python',
    github: 'https://github.com/Haixiang6123/leetcode-python',
    languages: ['Python'],
    stars: 14
  },
  {
    title: '猫狗探探',
    desc: '一个显示宠物图片的网页应用。分别使用 React.js, Vue.js 和 Angular 实现一遍。',
    url: 'https://yanhaixiang.com/awesome-a-cat-a-dog/',
    github: 'https://github.com/Haixiang6123/awesome-a-cat-a-dog',
    languages: ['Vue', 'React', 'Angular'],
    stars: 8
  },
  {
    title: 'wtf-cli',
    desc: '一个查询英文缩写的命令行工具。',
    url: 'https://www.npmjs.com/package/wtf-cli',
    github: 'https://github.com/Haixiang6123/wtf-cli',
    languages: ['JavaScript'],
    stars: 25
  },

  {
    title: '吉他和弦生成器',
    desc: '基于 React.js 和 SVG 开发的吉他和弦生成器。输入和弦名字就会得到对应和弦的 SVG。',
    url: 'https://github.com/Haixiang6123/react-chord-generator',
    github: 'https://github.com/Haixiang6123/react-chord-generator',
    languages: ['React'],
    stars: 13
  },
  {
    title: '灭霸',
    desc: '一个模拟灭霸响指的命令行工具。一行命令将会随机选中该目录下一半的文件进行删除 :)。',
    url: 'https://www.npmjs.com/package/thanos-snap-cli',
    github: 'https://github.com/Haixiang6123/thanos-snap-cli',
    languages: ['JavaScript'],
    stars: 0
  },
  {
    title: 'UCI命令行课表',
    desc: '一个查询 UCI 的命令行工具。主要使用 cheerio 来爬取网上的课程信息，服务已部署在 Heroku 上。',
    url: 'https://www.npmjs.com/package/uci-reg-cli',
    github: 'https://github.com/Haixiang6123/uci-reg-cli',
    languages: ['JavaScript'],
    stars: 0
  },
  {
    title: '在线画图工具',
    desc: '一个在线画图 App。使用原生 JavaScript 来实现画图功能。',
    url: 'https://haixiang6123.gitee.io/sketch-book/',
    github: 'https://github.com/Haixiang6123/sketch-book',
    languages: ['JavaScript'],
    stars: 2
  }
]

export default portfolioDB
