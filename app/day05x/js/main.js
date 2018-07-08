// 获取屏幕宽高

var wd = window.innerWidth;
var he = window.innerHeight;

// 最外层最大的宽和高

var $content = $(".content")
    .width(wd)
    .height(he * 4)
    .css({
        backgroundColor: "pink"
    });


$(".page1")
    .width(wd)
    .height(he);
$(".page2")
    .width(wd)
    .height(he);
$(".page3")
    .width(wd)
    .height(he);
$(".page4")
    .width(wd)
    .height(he);
$(".page5")
    .width(wd)
    .height(he);
$(".page6")
    .width(wd)
    .height(he);
// 当前页面
var nowpage = 0;

$content.swipe({
    swipe: function (event, direction, distance, duration, fingerCount) {
        // 判断滑动方向
        if (direction == "up") {
            nowpage++;
        } else if (direction == "down") {
            nowpage--;
        }
        // 判断是否为最后一页
        if (nowpage < 0) {
            nowpage = 0;
        } else if (nowpage > 5) {
            nowpage = 5;
        }
        // 滑动动画
        $content.animate({
            top: nowpage * (-100) + "%"
        }, {
            duration: 100,
            complete: start()
        });
    }
});

function start() {
    // 第二页动画开始
    // 判断只能滑到第二页
    if (nowpage === 1) {
        var $page2Bg = $(".page2-bg")
            .fadeIn(2000, function () {
                $(".page2-farm").fadeIn(1000, function () {
                    $(".page2-IT").fadeIn(1000);
                });
            });
    } else if (nowpage === 2) {
        // 车跑
        $(".page3-bus").animate({
            left: "-100%"
        }, {
            duration: 3000
        });
        // 人追
        $(".page3-avatar").animate({
            right: "50%"
        }, {
            duration: 4000,
            complete: function () {
                $(".page3-station,.page3-avatar,.page3-title,.page3-last")
                    .hide("slow", function () {
                        $(".page3-wall").fadeIn(1000, function () {
                            $(".page3-teamavatar").fadeIn(1000, function () {
                                $(".page3-space").animate({
                                    width: "30%"
                                }, {
                                    duration: 1000,
                                    complete: function () {
                                        $(".page3-where").animate({
                                            width: "40%"
                                        }, {
                                            duration: 1000
                                        })
                                    }
                                });
                            });
                        })
                    });
            }
        });
        $(".page3-title").fadeIn(2000, function () {
            $(".page3-last").fadeIn(2000);
        });
    } else if(nowpage === 4){
        $(".page5-fly").fadeIn(5000,function(){
            $(".page5-light").animate({
                width:"20%"
            },{duration:2000})
        });
    }else if(nowpage === 5){
        $(".page6-avatar").animate({
            opacity:"1",
            top:"50%",
            right:"40%"
        },{duration:5000})
    }
}

var $build = $(".page1-building")
    .fadeIn(5000, function () {
        // 小人变大
        $(".page1-avatar").animate({
            width: "70%"
        }, {
            duration: 2000
        });
        // alert("a");
    });
// console.log($build);

// 点灯事件
var $onLamp = $("#btn").click(function (e) {
    $("#btn").attr("src", "./img/lightOn.png");
    $(".page4_on_bg,.arrow_up").fadeIn(2000, function () {
        $(".page4_know_you").fadeIn("slow");
    });
});

$(".arrow_up").click(function () {
    if (nowpage > 0) nowpage--;
    // 滑动动画
    $content.animate({
        top: nowpage * (-100) + "%"
    }, {
        duration: 100,
        complete: start()
    });
});

// var play = false;
$("#musicOn").click(function(){

    var $mp3 = $("#mp3")[0];
    if($mp3.paused){
        $mp3.play();
        $("#musicOn").attr("src","./img/musicBtn.png");
    }else{
        // play = false;
        $mp3.pause();
        $("#musicOn").attr("src","./img/musicBtnOff.png");
    }
})