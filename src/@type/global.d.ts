type TBucketItem = {
  name: string
  status: 'done' | 'todo'
  imgs?: string[]
  date?: string
}

type TBlogItem = {
  title: string
  desc: string
  avatar: string
  url: string
  date: string
}

type TPortfolioItem = {
  title: string
  desc: string
  url: string
  github: string
  languages: string[]
  stars: number
}

type TMenuItem = {
  route: string
  label: string
  icon: string
}
