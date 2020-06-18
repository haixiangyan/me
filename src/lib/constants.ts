export const githubImgBaseUrl = 'https://raw.githubusercontent.com/Haixiang6123/pic-bed/master/blog'
export const giteeImgBaseUrl = 'https://gitee.com/Haixiang6123/pic-bed/raw/master/blog'

export const githubResBaseUrl = 'https://haixiang6123.github.io'
export const giteeResBaseUrl = 'https://haixiang6123.gitee.io'

export const getImageUrl = (fileName: string) =>
  `${isChina() ? giteeImgBaseUrl : githubImgBaseUrl}/${fileName}`

export const getRepoUrl = (repo: string) =>
  `${isChina() ? giteeResBaseUrl : githubResBaseUrl}/${repo}`

export const isChina = () => window.location.href.includes('.cn')
