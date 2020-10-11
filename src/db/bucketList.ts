import {getImageUrl} from '@/lib/constants'

const bucketList: TBucketItem[] = [
  {
    name: '体验一次滑翔伞',
    status: 'done',
    date: '2020-10-11',
    imgs: [
      getImageUrl('fly1.jpeg'),
      getImageUrl('fly2.jpeg'),
      getImageUrl('fly3.jpeg'),
      getImageUrl('fly4.jpeg'),
      getImageUrl('fly5.jpeg'),
    ]
  },
  {
    name: '玩一次射箭',
    status: 'done',
    date: '2020-10-7',
    imgs: [
      getImageUrl('arrow1.jpeg'),
      getImageUrl('arrow2.jpeg'),
    ]
  },
  {
    name: '打个保龄球',
    status: 'done',
    date: '2020-10-7',
    imgs: [
      getImageUrl('baolingqiu1.jpeg'),
      getImageUrl('baolingqiu3.jpeg'),
      getImageUrl('baolingqiu2.jpeg'),
      getImageUrl('baolingqiu4.jpeg')
    ]
  },
  {
    name: '去一次按摩店',
    status: 'done',
    imgs: [
      getImageUrl('massage.jpeg')
    ],
    date: '2020-9-20'
  },
  {
    name: '尝试一次女装？！',
    status: 'done',
    imgs: [
      getImageUrl('girl.jpeg'),
    ],
    date: '2020-9-19'
  },
  {
    name: '开一次卡丁车',
    status: 'done',
    imgs: [
      getImageUrl('karting1.jpeg'),
      getImageUrl('karting2.jpeg'),
      getImageUrl('karting3.jpeg'),
    ],
    date: '2020-9-19'
  },
  {
    name: '玩一次唱吧',
    status: 'done',
    imgs: [
      getImageUrl('sing.jpeg'),
    ],
    date: '2020-9-13'
  },
  {
    name: '参加一次技术大会',
    status: 'done',
    imgs: [
      getImageUrl('tlc1.jpeg'),
      getImageUrl('tlc2.jpeg'),
      getImageUrl('tlc3.jpeg'),
      getImageUrl('tlc4.jpeg'),
      getImageUrl('tlc5.jpeg'),
      getImageUrl('tlc6.jpeg'),
    ],
    date: '2020-9-5'
  },
  {
    name: '打一次豪华车',
    status: 'done',
    imgs: [
      getImageUrl('didi1.jpeg'),
      getImageUrl('didi2.jpeg')
    ],
    date: '2020-8-21',
  },
  {
    name: '做一次抽烟喝酒烫头',
    status: 'done',
    imgs: [
      getImageUrl('cht.jpeg'),
      getImageUrl('cht2.jpeg'),
      getImageUrl('cht3.jpeg'),
    ],
    date: '2020-8-20'
  },
  {
    name: '挑战1000片《纯白地狱》',
    status: 'done',
    imgs: [
      getImageUrl('纯白地狱1.jpeg'),
      getImageUrl('纯白地狱2.jpeg'),
      getImageUrl('纯白地狱3.jpeg'),
    ],
    date: '2020-6-2'
  },
  {
    name: '挑战1000片《彩色地狱》',
    status: 'done',
    imgs: [
      getImageUrl('彩色地狱1.jpeg'),
      getImageUrl('彩色地狱2.jpeg'),
      getImageUrl('彩色地狱3.jpeg'),
      getImageUrl('彩色地狱4.jpeg'),
    ],
    date: '2020-5-22'
  },
  {
    name: '爬加州最高峰',
    status: 'done',
    imgs: [
      getImageUrl('LA最高峰1.jpeg'),
      getImageUrl('LA最高峰2.jpeg'),
      getImageUrl('LA最高峰3.jpeg'),
      getImageUrl('LA最高峰4.jpeg'),
    ],
    date: '2020-5-4'
  },
  {
    name: '窥探富二代',
    status: 'done',
    imgs: [
      getImageUrl('富二代.jpeg')
    ],
    date: '2020-3-24'
  },
  {
    name: 'CS硕士毕业',
    status: 'done',
    imgs: [
      getImageUrl('硕士1.jpeg'),
      getImageUrl('硕士2.jpeg'),
      getImageUrl('硕士3.jpeg'),
      getImageUrl('硕士4.jpeg'),
    ],
    date: '2020-3-21'
  },
  {
    name: '爬Mt. Powell',
    status: 'done',
    imgs: [
      getImageUrl('powell1.jpeg'),
      getImageUrl('powell2.jpeg'),
      getImageUrl('powell3.jpeg'),
      getImageUrl('powell4.jpeg'),
    ],
    date: '2020-2-14'
  },
  {
    name: '去看San Diego的航母',
    status: 'done',
    imgs: [
      getImageUrl('SD航母1.jpeg'),
      getImageUrl('SD航母3.jpeg'),
    ],
    date: '2020-1-25'
  },
  {
    name: '和东方明珠合影',
    status: 'done',
    imgs: [
      getImageUrl('东明1.jpeg'),
      getImageUrl('东明2.jpeg'),
      getImageUrl('东明3.jpeg'),
    ],
    date: '2020-1-4'
  },
  {
    name: '去Las Vegas豪赌一把',
    status: 'done',
    imgs: [
      getImageUrl('LV1.jpeg'),
      getImageUrl('LV2.jpeg'),
      getImageUrl('LV3.jpeg'),
    ],
    date: '2019-12-22'
  },
  {
    name: '做大哥',
    status: 'done',
    imgs: [
      getImageUrl('大哥.jpeg'),
    ],
    date: '2019-12-20'
  },
  {
    name: '去大峡谷',
    status: 'done',
    imgs: [
      getImageUrl('大峡谷1.jpeg'),
      getImageUrl('大峡谷2.jpeg'),
    ],
    date: '2019-12-21'
  },
  {
    name: '开66号公路',
    status: 'done',
    imgs: [
      getImageUrl('66号公路2.jpeg'),
      getImageUrl('66号公路1.jpeg'),
    ],
    date: '2019-12-19'
  },
  {
    name: '开一场美东拉力赛',
    status: 'done',
    imgs: [
      getImageUrl('东部接力赛1.jpeg'),
      getImageUrl('东部接力赛2.jpeg'),
      getImageUrl('东部接力赛3.jpeg'),
      getImageUrl('东部接力赛4.jpeg'),
    ],
    date: '2019-11-29'
  },
  {
    name: '去西雅图',
    status: 'done',
    imgs: [
      getImageUrl('seattle3.jpeg'),
      getImageUrl('seattle2.jpeg'),
      getImageUrl('seattle1.jpeg'),
      getImageUrl('seattle4.jpeg'),
    ],
    date: '2019-11-30'
  },
  {
    name: '去优胜美地',
    status: 'done',
    imgs: [
      getImageUrl('yo3.jpeg'),
      getImageUrl('yo2.jpeg'),
      getImageUrl('yo1.jpeg'),
      getImageUrl('yo4.jpeg'),
    ],
    date: '2019-11-28'
  },
  {
    name: '去滑雪',
    status: 'done',
    imgs: [
      getImageUrl('滑雪1.jpeg'),
      getImageUrl('滑雪2.jpeg'),
      getImageUrl('滑雪3.jpeg'),
    ],
    date: '2019-11-23'
  },
  {
    name: '去死亡谷',
    status: 'done',
    imgs: [
      getImageUrl('死谷1.jpeg'),
      getImageUrl('死谷2.jpeg'),
      getImageUrl('死谷3.jpeg'),
      getImageUrl('死谷4.jpeg'),
      getImageUrl('死谷5.jpeg'),
      getImageUrl('死谷6.jpeg'),
    ],
    date: '2019-11-10'
  },
  {
    name: '开房车',
    status: 'done',
    imgs: [
      getImageUrl('rv2.jpeg'),
      getImageUrl('rv1.jpeg'),
      getImageUrl('rv3.jpeg'),
      getImageUrl('rv4.jpeg'),
      getImageUrl('rv5.jpeg'),
    ],
    date: '2019-11-8'
  },
  {
    name: '去六旗坐过山车',
    status: 'done',
    imgs: [
      getImageUrl('6flags1.jpeg'),
      getImageUrl('6flags2.jpeg'),
      getImageUrl('6flags3.jpeg'),
      getImageUrl('6flags4.jpeg'),
    ],
    date: '2019-10-21'
  },
  {
    name: '考持枪证',
    status: 'done',
    imgs: [
      getImageUrl('考持枪证.jpeg'),
      getImageUrl('考持枪证2.jpeg')
    ],
    date: '2019-8-18'
  },
  {
    name: '用无人机拍加州',
    status: 'done',
    imgs: [
      getImageUrl('drone1.jpeg'),
      getImageUrl('drone2.jpeg'),
      getImageUrl('drone3.jpeg'),
    ],
    date: '2019-8-1'
  },
  {
    name: '逛斯坦福',
    status: 'done',
    imgs: [
      getImageUrl('standford1.jpeg'),
      getImageUrl('standford2.jpeg'),
      getImageUrl('standford3.jpeg'),
    ],
    date: '2019-6-25'
  },
  {
    name: '开始人生第一份实习',
    status: 'done',
    imgs: [
      getImageUrl('dji1.jpeg'),
      getImageUrl('dji2.jpeg'),
      getImageUrl('dji3.jpeg'),
      getImageUrl('dji4.jpeg'),
      getImageUrl('dji5.jpeg'),
      getImageUrl('dji6.jpeg'),
    ],
    date: '2019-6-24'
  },
  {
    name: '去三番',
    status: 'done',
    imgs: [
      getImageUrl('sf1.jpeg'),
      getImageUrl('sf2.jpeg'),
      getImageUrl('sf3.jpeg'),
      getImageUrl('sf4.jpeg'),
      getImageUrl('sf5.jpeg'),
      getImageUrl('sf6.jpeg'),
      getImageUrl('sf7.jpeg'),
    ],
    date: '2019-6-22'
  },
  {
    name: '去丹麦小镇',
    status: 'done',
    imgs: [
      getImageUrl('丹麦小镇1.jpeg'),
      getImageUrl('丹麦小镇2.jpeg'),
      getImageUrl('丹麦小镇3.jpeg'),
      getImageUrl('丹麦小镇4.jpeg'),
      getImageUrl('丹麦小镇5.jpeg'),
    ],
    date: '2019-6-20'
  },
  {
    name: '开1号公路',
    status: 'done',
    imgs: [
      getImageUrl('1号公路1.jpeg'),
      getImageUrl('1号公路2.jpeg'),
      getImageUrl('1号公路3.jpeg'),
      getImageUrl('1号公路5.jpeg'),
      getImageUrl('1号公路6.jpeg'),
      getImageUrl('1号公路4.jpeg'),
    ],
    date: '2019-6-20'
  },
  {
    name: '打枪',
    status: 'done',
    imgs: [
      getImageUrl('打枪1.jpeg'),
      getImageUrl('打枪2.jpeg'),
      getImageUrl('打枪3.jpeg'),
      getImageUrl('打枪4.jpeg'),
      getImageUrl('打枪5.jpeg'),
    ],
    date: '2019-6-17'
  },
  {
    name: '去LA刷网红点',
    status: 'done',
    imgs: [
      getImageUrl('la1.jpeg'),
      getImageUrl('la2.jpeg'),
      getImageUrl('la3.jpeg'),
      getImageUrl('la4.jpeg'),
      getImageUrl('la5.jpeg'),
      getImageUrl('la6.jpeg'),
      getImageUrl('la7.jpeg'),
      getImageUrl('la8.jpeg'),
    ],
    date: '2019-6-17'
  },
  {
    name: '开UHAUL',
    status: 'done',
    imgs: [
      getImageUrl('uhaul1.jpeg'),
      getImageUrl('uhaul2.jpeg'),
      getImageUrl('uhaul3.jpeg'),
    ],
    date: '2019-5-29'
  },
  {
    name: '爬Mt. Whitney',
    status: 'done',
    imgs: [
      getImageUrl('whitney1.jpeg'),
      getImageUrl('whitney2.jpeg'),
      getImageUrl('whitney3.jpeg'),
      getImageUrl('whitney4.jpeg'),
      getImageUrl('whitney5.jpeg'),
      getImageUrl('whitney6.jpeg'),
    ],
    date: '2019-5-20'
  },
  {
    name: 'Hiking in Crystal Cove',
    status: 'done',
    imgs: [
      getImageUrl('CrystalCove1.jpeg'),
      getImageUrl('CrystalCove2.jpeg'),
      getImageUrl('CrystalCove3.jpeg'),
      getImageUrl('CrystalCove4.jpeg'),
      getImageUrl('CrystalCove5.jpeg'),
    ],
    date: '2019-4-26'
  },
  {
    name: 'Hiking in Lake Perris',
    status: 'done',
    imgs: [
      getImageUrl('Lake Perris1.jpeg'),
      getImageUrl('Lake Perris2.jpeg'),
      getImageUrl('Lake Perris3.jpeg'),
      getImageUrl('Lake Perris4.jpeg'),
      getImageUrl('Lake Perris5.jpeg'),
    ],
    date: '2019-4-12'
  },
  {
    name: '去UCLA',
    status: 'done',
    imgs: [
      getImageUrl('ucla1.jpeg'),
      getImageUrl('ucla2.jpeg'),
      getImageUrl('ucla3.jpeg'),
      getImageUrl('ucla4.jpeg'),
      getImageUrl('ucla5.jpeg'),
    ],
    date: '2019-3-27'
  },
  {
    name: '玩猪',
    status: 'done',
    imgs: [
      getImageUrl('pig1.jpeg'),
      getImageUrl('pig2.jpeg'),
    ],
    date: '2018-12-28'
  },
  {
    name: '去巴哈马',
    status: 'done',
    imgs: [
      getImageUrl('bahamas1.jpeg'),
      getImageUrl('bahamas2.jpeg'),
      getImageUrl('bahamas3.jpeg'),
      getImageUrl('bahamas4.jpeg'),
      getImageUrl('bahamas5.jpeg'),
    ],
    date: '2018-12-26'
  },
  {
    name: '狂吃一顿自助寿司',
    status: 'done',
    imgs: [
      getImageUrl('sushi1.jpeg'),
      getImageUrl('sushi2.jpeg'),
    ],
    date: '2018-4-21'
  },
  {
    name: '玩一次短骑行',
    status: 'done',
    imgs: [
      getImageUrl('短骑1.jpeg'),
      getImageUrl('短骑2.jpeg'),
    ],
    date: '2018-4-1'
  },
  {
    name: '跳伞',
    status: 'done',
    imgs: [
      getImageUrl('跳伞4.png'),
      getImageUrl('跳伞5.jpeg'),
      getImageUrl('跳伞6.jpeg'),
      getImageUrl('跳伞3.png'),
      getImageUrl('跳伞1.jpeg'),
      getImageUrl('跳伞2.jpeg'),
    ],
    date: '2018-3-30'
  },
  {
    name: '玩一次长骑行',
    status: 'done',
    imgs: [
      getImageUrl('长骑1.jpeg'),
      getImageUrl('长骑2.jpeg'),
      getImageUrl('长骑3.jpeg'),
    ],
    date: '2018-3-3'
  },
  {
    name: '考过 CFA',
    status: 'todo',
  },
  {
    name: '学一次木工雕刻',
    status: 'todo'
  },
  {
    name: '体验一次模拟飞行',
    status: 'todo'
  },
  {
    name: '玩一次蹦床',
    status: 'todo'
  },
  {
    name: '开一次游艇，出一次海',
    status: 'todo'
  },
  {
    name: '听一次演奏会',
    status: 'todo'
  },
  {
    name: '看一次话剧',
    status: 'todo'
  },
  {
    name: '打场高尔夫',
    status: 'todo'
  },
  {
    name: '开一次摩托',
    status: 'todo'
  },
  {
    name: '去一次平安中心最高层',
    status: 'todo'
  },
  {
    name: '去听 Taylor Swift 演唱会',
    status: 'todo'
  },
  {
    name: '环台湾岛骑行',
    status: 'todo'
  },
  {
    name: '考飞行员证',
    status: 'todo'
  },
  {
    name: '考潜水证',
    status: 'todo'
  },
  {
    name: '去 Apple Park 参观',
    status: 'todo'
  },
  {
    name: '冲个浪',
    status: 'todo'
  },
  {
    name: '去漂流',
    status: 'todo'
  },
  {
    name: '在山顶做个倒立',
    status: 'todo'
  },
  {
    name: '尝试做个 Vlog',
    status: 'todo'
  },
  {
    name: '在沙漠过夜',
    status: 'todo'
  },
  {
    name: '坐纽约的破地铁',
    status: 'todo'
  },
  {
    name: '坐美国的火车',
    status: 'todo'
  },
  {
    name: '坐直升飞机',
    status: 'todo'
  },
  {
    name: '划橡皮艇',
    status: 'todo'
  },
  {
    name: '钓一条大鱼',
    status: 'todo'
  },
  {
    name: '打场高尔夫',
    status: 'todo'
  },
  {
    name: '出一篇前端教程',
    status: 'todo'
  },
  {
    name: '学一下平面设计，sketch, ps',
    status: 'todo'
  },
  {
    name: '学一下摄影',
    status: 'todo'
  },
]

export default bucketList
