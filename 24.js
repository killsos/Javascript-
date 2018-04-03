for (var i = 7; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    },1000);
}


for (var index = 0; index < 5; index++) {
    setTimeout((function (i) {
        return function () {
            console.log(i);
        }
    })(index),1000);
}

/**
 * 通过匿名自执行函数
 * 形成闭包
 * 每一个闭包中i会一个确定值
 * 所以会输出0 1 2 3 4
 */

