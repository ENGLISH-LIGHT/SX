// 图片的当前位置
var curPos = 0;
// 显示的大图片集合
var $imgs = $(".showImg img");

$(".picList img").click(function (params) {
    curPos = 0;
    // 获取当前点击的图片下标
    var i = 1;
    var index = $(this).index();
    for (var i = 1; i <= 5; i++) {
        $imgs[i - 1].src = `./img/show/${index}/${i}.jpg`;
        console.log($imgs[i - 1].src);
    }
    var gs = document.querySelector(".showImg img");
    // 显示大图
    $(".show").fadeIn(500);
    $(".pan").fadeIn(500);
});

$(".pan").click(function () {
    $(".show").fadeOut(500);
    $(this).fadeOut(500);
});

$(".prev").click(function (param) {
    curPos++
    $imgs.css({ zIndex: "0" });
    $($imgs[(curPos)%5 - 1 === -1 ? 4:(curPos)%5 - 1]).css({ zIndex: "20" });
    $($imgs[curPos % 5]).animate({
        zIndex: "40",
        // transfrom: "translateX(-400px)"
        left:"-650px"
    }, {
            duration: 500, complete: function () {
                $($imgs[curPos % 5]).animate({
                    // transfrom: "translateX(0)"
                    left:"0px"
                }, { duration: 500 });
            }
        });
});

$(".next").click(function (param) {
    curPos++
    $imgs.css({ zIndex: "0" });
    $($imgs[(curPos)%5 - 1 === -1 ? 4:(curPos)%5 - 1]).css({ zIndex: "20" });
    $($imgs[curPos % 5]).animate({
        zIndex: "40",
        // transfrom: "translateX(-400px)"
        right:"-650px"
    }, {
            duration: 500, complete: function () {
                $($imgs[curPos % 5]).animate({
                    // transfrom: "translateX(0)"
                    right:"0px"
                }, { duration: 500 });
            }
        });
});