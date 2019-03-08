const noteList = document.querySelector('.note-list')
const liElems = Array.from(noteList.querySelectorAll('li'))

const httpsRoot = 'https:'
const webRoot = 'https://www.jianshu.com'
const results = []

liElems.forEach((liElem) => {
    const imgEl = liElem.querySelector('.wrap-img > img')
    let avatar = ''
    if (imgEl) {
        avatar = httpsRoot + imgEl.getAttribute('src')
    }

    const url = webRoot + liElem.querySelector('.title').getAttribute('href')
    const title = liElem.querySelector('.title').innerText
    const desc = liElem.querySelector('.abstract').innerText
    results.push({
        title,
        avatar,
        desc,
        url
    })
})

console.log(JSON.stringify(results))
