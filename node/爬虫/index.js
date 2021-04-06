// https://movie.douban.com/top250

const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')
https.get('https://movie.douban.com/top250', (res) => {
    let html = '';

    res.on('data', (chunk) => {
        html += chunk
    })

    res.on('end', () => {
        // console.log(html)
        const $ = cheerio.load(html);
        let allFilms = []

        $('li .item').each(function () {
            // this 循环时 指向当前这个电影
            // 当前这个电影下面的title
            // 相当于this.querySelector 
            const title = $('.title', this).text();
            const star = $('.rating_num', this).text();
            const pic = $('.pic img', this).attr('src');
            // console.log(title,star,pic);
            // 存 数据库
            // 没有数据库存成一个json文件 fs
            allFilms.push({
                title, star, pic
            })
        })


        fs.writeFile('./films.json', JSON.stringify(allFilms), (err) => {
            if (err)
                console.log(err)
            console.log('文件写入完成！')
        })

        downloadImage(allFilms)
    })
})



function downloadImage(allFilms) {
    for (let i = 0; i < allFilms.length; i++) {
        const picUrl = allFilms[i].pic
        https.get(picUrl, (res) => {
            res.setEncoding('binary')
            let str = ''
            res.on('data', (chunk) => {
                str += chunk
            })
            res.on('end', () => {
                fs.writeFile(`./images/${i}.png`, str, 'binary', (err) => {
                    if (err)
                        console.log(err)
                    console.log(`第${i}张图片下载成功！`)
                })
            })
        })
    }
}