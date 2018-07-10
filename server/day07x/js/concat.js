var timer = null;
var index = 0;
var nextIndex = 0;
//滑动函数
function scrollPlay() {
    if (index < nextIndex) {
        $(".imgbox img")
            .eq(index)
            .stop(true, true)
            .animate({
                "left": "-720px"
            });

        $(".imgbox img")
            .eq(nextIndex)
            .css({
                "left": "720px"
            })
            .stop(true, true)
            .animate({
                "left": "0px"
            });
        $("li")
            .eq(index)
            .addClass("styleFill")
            .siblings()
            .removeClass("styleFill");

    } else if (index > nextIndex) {
        $(".imgbox img")
            .eq(index)
            .stop(true, true)
            .animate({
                "left": "720px"
            });

        $(".imgbox img")
            .eq(nextIndex)
            .css({
                "left": "-720px"
            })
            .stop(true, true)
            .animate({
                "left": "0px"
            });
        $("li")
            .eq(index)
            .addClass("styleFill")
            .siblings()
            .removeClass("styleFill");
    }
}
// 自动滑动
function autoPlay() {
    timer = setInterval(function () {
        nextIndex++;
        if (nextIndex > 7) {
            nextIndex = 0;
        }
        scrollPlay();
        index = nextIndex;
    }, 2000);
}

autoPlay();

// $("li").toggleClass(".styleFill")

$("li").mouseover(function () {
    clearInterval(timer);
    index = $(this).index();
    scrollPlay();
    index = nextIndex;
}).mouseout(function () {
    autoPlay();
});

$(".btnleft").click(function (param) {
    clearInterval(timer);
    nextIndex++;
    if(nextIndex>7){
        nextIndex = 0;
    }
    scrollPlay();
    index = nextIndex;
    autoPlay();
  })