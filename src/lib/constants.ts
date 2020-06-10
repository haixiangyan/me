export const githubImgBaseUrl = 'https://raw.githubusercontent.com/Haixiang6123/pic-bed/master/blog'
export const giteeImgBaseUrl = 'https://gitee.com/Haixiang6123/pic-bed/raw/master/blog'

export const getImageUrl = (fileName: string) =>
  `${isChina() ? giteeImgBaseUrl : githubImgBaseUrl}/${fileName}`

export const isChina = () => window.location.href.includes('.cn')
