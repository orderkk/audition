// array.filter + object.hasownproperty
// 这个方法莫名其妙的 啥啊都是些
function fn(arr) {

    let obj = {}
    let array = arr.filter(item => {
            // console.log(item + ' - ' + typeof item + item)
            obj.hasOwnProperty(typeof item + item) ?
                false :
                (obj[typeof item + item] = true)
        }

    )

    return array
}