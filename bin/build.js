const fs = require('fs')
const fm = require('front-matter')
const { Liquid } = require('liquidjs')
const md = require('markdown-it')();
const ncp = require('ncp').ncp;
const textsDir = 'src/texts/'
const assetsDir = 'src/assets/'
const htmlDir = 'html/'
const assets = ['css', 'img', 'favicon.ico']

const engine = new Liquid({
  root: 'src/views/',
  extname: '.tpl'
})

fs.rmdirSync(htmlDir, { recursive: true })
fs.mkdirSync(htmlDir, { recursive: true })

fs.readdir(textsDir, (err, files) => {
  if (err) throw err

  let texts = []

  files.forEach((file) => {
    const data = fs.readFileSync(textsDir + file, 'utf-8')

    const content = fm(data)
    const url = content.attributes.title.split(' ').join('-').toLowerCase()
    const body = md.render(content.body)
    const attr = {
      ...content.attributes,
      content: body,
      url: url
    }

    texts.push(attr)

    engine
      .renderFile(content.attributes.type, attr)
      .then(data => writeFile(data, url))
  })

  texts.sort((a, b) => new Date(b.date) - new Date(a.date))

  writeIndex(texts)
})

assets.forEach((asset) => {
  ncp(assetsDir + asset, htmlDir + asset)
})

function writeFile(data, url) {
  fs.mkdir(htmlDir + url, { recursive: true }, (err, _) => {
    if (err) throw err

    fs.writeFile(`./${htmlDir}${url}/index.html`, data, () => {
      if (err) throw err
    })
  })
}

function writeIndex(texts) {
  engine
    .renderFile('index', {texts: texts})
    .then(data => {
      fs.writeFile(`./${htmlDir}index.html`, data, (err) => {
        if (err) throw err
      })
    })
}
