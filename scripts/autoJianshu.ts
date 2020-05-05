import * as fs from 'fs'
import * as cheerio from 'cheerio'
import axios from 'axios'

type TArticle = {
  title: string
  desc: string
  avatar: string
  url: string
}

const dbPath = 'db/jianshu-db.json'
const getArticlesRoute = `https://www.jianshu.com/u/0340be4082b5?order_by=shared_at&page=`

// 读取文件
const getDB = (): TArticle[] => {
  console.log('读取简书DB')
  let rawDb = fs.readFileSync(dbPath).toString()

  return JSON.parse(rawDb) as TArticle[]
}

// 获取对应页数的文章
const getArticles = async (page: number = 1): Promise<TArticle[]> => {
  console.log('获取文章, page=' + page)
  const response = await axios.get(`${getArticlesRoute}${page}`)

  const $ = cheerio.load(response.data)

  return $('.note-list > li').map(function () {
    const $el = $(this)

    const title = $el.find('.title').text().trim()
    const desc = $el.find('.abstract').text().trim()
    const avatar = $el.find('img').length > 0 ? $el.find('img').attr('src') : ''
    const url = `https://www.jianshu.com${$el.find('.title').attr('href')}`

    return {title, desc, avatar, url}
  }).get()
}

// 获取新的 DB
const updateDB = async (): Promise<TArticle[]> => {
  console.log('更新数据')
  const db = getDB()
  let prevLatestTitle = db[0].title
  console.log('最新的文章标题是: ' + prevLatestTitle)
  let curtLatestArticles: TArticle[] = []

  let page = 1
  let found = false
  while (!found) {
    const articles = await getArticles(page)
    if (articles.length === 0) {
      break
    }

    for (let i = 0; i < articles.length; i++) {
      if (articles[i].title !== prevLatestTitle) {
        curtLatestArticles.push(articles[i])
      } else {
        found = true
      }
    }
    page += 1
  }

  return curtLatestArticles.concat(db)
}

// 写入新DB
const writeNewDB = (newDB: string) => {
  console.log('存入新数据')
  fs.writeFileSync(dbPath, newDB, 'utf8')
}

const start = async () => {
  const newDB = await updateDB()

  writeNewDB(JSON.stringify(newDB))
}

start().then()
