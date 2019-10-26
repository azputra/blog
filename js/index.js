// //div = wrap
// var body = document.body;
// var wrapDiv = document.createElement('div')
// var wrapDivAttrId = document.createAttribute('class')
// wrapDivAttrId.value = "wrap"
// wrapDiv.setAttributeNode(wrapDivAttrId)
// body.appendChild(wrapDiv)

// // aside = sidebar
// var sidebarAside = document.createElement('aside')
// sidebarAside.setAttribute('class', 'sidebar')
// wrapDiv.appendChild(sidebarAside)

// // about me
// var widgetDiv = document.createElement('div')
// widgetDiv.setAttribute('class', 'widget')
// sidebarAside.appendChild(widgetDiv)

// var h2 = document.createElement('h2')
// h2.setAttribute('id', 'me?')
// var h2Text = document.createTextNode('About Me?')
// h2.appendChild(h2Text)
// widgetDiv.appendChild(h2)

// var img = document.createElement('img')
// img.setAttribute('src', "./img/me.jpg")
// img.setAttribute('alt', " ")
// img.setAttribute('style', "height: 400px; width: 250px;")
// widgetDiv.appendChild(img)

// var h4 = document.createElement('h4')
// var h4Text = document.createTextNode('A Z Putra')
// h4.appendChild(h4Text)
// widgetDiv.appendChild(h4)

// var p = document.createElement('p')
// var pText = document.createTextNode('Kesibukan saat ini sedang belajar di Hacktiv8')
// p.appendChild(pText)
// widgetDiv.appendChild(p)

// // social media
// var widgetDiv1 = document.createElement('div')
// widgetDiv1.setAttribute('class', 'widget')
// sidebarAside.appendChild(widgetDiv1)

// var h2 = document.createElement('h2')
// var h2Text = document.createTextNode('Social Media')
// h2.appendChild(h2Text)
// widgetDiv1.appendChild(h2)

// var pSocial = document.createElement('p')
// var pSocialText = document.createTextNode('ingin mengenal saya lebih jauh ?')
// pSocial.appendChild(pSocialText)
// widgetDiv1.appendChild(pSocial)

// var aSocial = document.createElement('a')
// aSocial.setAttribute('target', "_blank")
// aSocial.setAttribute('alt', " ")
// aSocial.setAttribute('href', "https://web.facebook.com/uta102")
// aSocialText = document.createTextNode('klik di sini')
// aSocial.appendChild(aSocialText)
// widgetDiv1.appendChild(aSocial)

// //social media
// var widgetDiv2 = document.createElement('div')
// widgetDiv2.setAttribute('class', 'widget')
// sidebarAside.appendChild(widgetDiv2)

// var h2 = document.createElement('h2')
// var h2Text = document.createTextNode('Social Media')
// h2.appendChild(h2Text)
// widgetDiv2.appendChild(h2)

// var pSocial = document.createElement('p')
// var pSocialText = document.createTextNode('Saya juga memiliki instagram')
// pSocial.appendChild(pSocialText)
// widgetDiv2.appendChild(pSocial)

// var aSocial = document.createElement('a')
// aSocial.setAttribute('target', "_blank")
// aSocial.setAttribute('alt', " ")
// aSocial.setAttribute('href', "https://www.instagram.com/ahmadzuliansyahp/?hl=en")
// aSocialText = document.createTextNode('klik di sini')
// aSocial.appendChild(aSocialText)
// widgetDiv2.appendChild(aSocial)

// // konten blog
// var blogDiv = document.createElement('div')
// blogDiv.setAttribute('class', 'blog')
// wrapDiv.appendChild(blogDiv)

// var conteudoDiv = document.createElement('div')
// conteudoDiv.setAttribute('class', 'conteudo')
// blogDiv.appendChild(conteudoDiv)

// // postingan
// var postInfoDiv = document.createElement('div')
// postInfoDiv.setAttribute('class', 'post-info')
// conteudoDiv.appendChild(postInfoDiv)

// // info posting
// var postInfoText = document.createTextNode('Di Posting Oleh: ')
// postInfoDiv.appendChild(postInfoText)
// var namePostInfo = document.createElement('b')
// var namePostInfoText = document.createTextNode('Ahmad Zuliansyah Putra')
// namePostInfo.appendChild(namePostInfoText)
// postInfoDiv.appendChild(namePostInfo)

// // image posting
// var imgBlogPost1 = document.createElement('img')
// imgBlogPost1.setAttribute('src', '../img/html.jpg')
// conteudoDiv.appendChild(imgBlogPost1)

// // var h1 = document.createElement('h1')
// // var h1Text = document.createTextNode(' Minggu Pertama Hari Senin Belajar HTML ')
// // h1.appendChild(h1Text)
// // conteudoDiv.appendChild(h1)
// // var hr = document.createElement('hr')
// // conteudoDiv.appendChild(hr)
// // var h2 = document.createElement('h2')
// // var h2TextPost1 = document.createTextNode('Belajar Di Hacktiv')
// // h2.appendChild(h2TextPost1)
// // conteudoDiv.appendChild(h2)
// // var paragraf1 = document.createElement('p')
// // var paragraf1Text = document.createTextNode('Hai ini adalah cerita pertama saya saat belajar di hacktiv8')
// // paragraf1.appendChild(paragraf1Text)
// // conteudoDiv.appendChild(paragraf1)
// // var paragraf2Post1 = document.createElement('p')
// // var paragraf2Post1Text = document.createTextNode('aya masuk ke hacktiv8 Tanggal 16 September 2019 kebetulan saya berada di batch 37 yaitu King Fox di hari pertama saya masuk saya dan teman teman batch 37 di kumpulkan di aula hacktiv8 untuk di breefing oleh')
// // paragraf2Post1.appendChild(paragraf2Post1Text)
// // conteudoDiv.appendChild(paragraf2Post1)

// // // selanjutnya Post 1
// // var bacaSelengkapnya = document.createElement('a')
// // bacaSelengkapnya.setAttribute('href', 'reviewHtml.html')
// // bacaSelengkapnya.setAttribute('class', 'continue-lendo')
// // bacaSelengkapnyaText = document.createTextNode('Selengkapnya →')
// // bacaSelengkapnya.appendChild(bacaSelengkapnyaText)
// // conteudoDiv.appendChild(bacaSelengkapnya)

// // //posting kedua
// // var conteudoDivPost2 = document.createElement('div')
// // conteudoDivPost2.setAttribute('class', 'conteudo')
// // blogDiv.appendChild(conteudoDivPost2)

// // // postingan
// // var postInfoDivPost2 = document.createElement('div')
// // postInfoDivPost2.setAttribute('class', 'post-info')
// // conteudoDivPost2.appendChild(postInfoDivPost2)

// // // info posting
// // var postInfoTextPost2 = document.createTextNode('Di Posting Oleh: ')
// // postInfoDivPost2.appendChild(postInfoTextPost2)
// // var namePostInfoPost2 = document.createElement('b')
// // var namePostInfoText = document.createTextNode('Ahmad Zuliansyah Putra')
// // namePostInfoPost2.appendChild(namePostInfoText)
// // postInfoDivPost2.appendChild(namePostInfoPost2)

// // // image posting
// // var imgBlogPost2 = document.createElement('img')
// // imgBlogPost2.setAttribute('src', '../img/css.jpg')
// // conteudoDivPost2.appendChild(imgBlogPost2)

// // var h1 = document.createElement('h1')
// // var h1Text = document.createTextNode(' Minggu Pertama Hari Selasa Belajar CSS ')
// // h1.appendChild(h1Text)
// // conteudoDivPost2.appendChild(h1)
// // var hr = document.createElement('hr')
// // conteudoDivPost2.appendChild(hr)
// // var h2 = document.createElement('h2')
// // var h2TextPost1 = document.createTextNode('Belajar Di Hacktiv')
// // h2.appendChild(h2TextPost1)
// // conteudoDivPost2.appendChild(h2)
// // var paragraf1 = document.createElement('p')
// // var paragraf1Text = document.createTextNode('Hai ini adalah cerita pertama saya saat belajar di hacktiv8')
// // paragraf1.appendChild(paragraf1Text)
// // conteudoDivPost2.appendChild(paragraf1)
// // var paragraf2Post1 = document.createElement('p')
// // var paragraf2Post1Text = document.createTextNode('Di hari pertama saya telah berhasil membuat website pertama dengan memanfaatkan beberapa tag sederhana di HTML. Hari ini, mari saya akan percantik tampilan website dengan Cascading Style Sheet, atau disingkat menjadi CSS. Akan sangat menyenangkan pada saat saya bisa mulai membuat website lebih menarik!')
// // paragraf2Post1.appendChild(paragraf2Post1Text)
// // conteudoDivPost2.appendChild(paragraf2Post1)

// // // selanjutnya Post 1
// // var bacaSelengkapnya = document.createElement('a')
// // bacaSelengkapnya.setAttribute('href', 'reviewHtml.html')
// // bacaSelengkapnya.setAttribute('class', 'continue-lendo')
// // bacaSelengkapnyaText = document.createTextNode('Selengkapnya →')
// // bacaSelengkapnya.appendChild(bacaSelengkapnyaText)
// // conteudoDivPost2.appendChild(bacaSelengkapnya)