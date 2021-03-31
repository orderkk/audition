function showTime() {
    var nowTime = new Date()
    var h = nowTime.getHours()
    var m = nowTime.getMinutes()
    var s = nowTime.getSeconds()

    h = checkTime(h)
    m = checkTime(m)
    s = checkTime(s)

    return h + ':' + m + ':' + s
}

function checkTime(x) {
    if (x < 10) {
        x = "0" + x
    }
    return x
}

var d1 = document.querySelectorAll('text')
setInterval(() => {
    d1.forEach((item, index) => {
        item.innerHTML = showTime()
    })
}, 1000);