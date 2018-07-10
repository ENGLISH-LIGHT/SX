//定义数组
var musicModels = [];

//创建player对象
var player = new Player();

getData();

function Player() {
    this.audio = document.getElementById("myaudio");
    this.playIndex = 0;
    // 监听音乐播放完毕
    this.audio.loop = false;
    this.audio.addEventListener("ended", function () {
        player.next();
    }, false)
    // 定义一个播放音乐的方法
    this.playMusic = function () {
        $(this.audio).attr("src", musicModels[this.playIndex].src)
        this.audio.play();
        $(".pic img").attr("src", musicModels[this.playIndex].img)
        this.rangeUp();
    };
    this.playPause = function () {
        var $pause = document.querySelector(".pause img");
        if (this.audio.paused) {
            this.audio.play();
            $pause.src = "../img/stop.png";
            $(".pic img").css("animation-play-state", "running");
        } else {
            this.audio.pause();
            $pause.src = "../img/play.png";
            $(".pic img").css("animation-play-state", "paused");
        }
    };
    this.rangeUp = function () {
        this.audio.ontimeupdate = function () {
            $("#range").attr("max", this.duration)
                .val(this.currentTime);
        };
    };
    this.next = function () {
        player.playIndex++;
        if (player.playIndex > musicModels.length - 1) {
            player.playIndex = 0;
        }
        player.playMusic();
        // console.log(`.musicbox div:nth-child(${playIndex+1})`)
        $(`.musicbox div:nth-child(${player.playIndex+1})`).addClass("playBg").siblings().removeClass("playBg");
    };
    this.prev = function () {
        player.playIndex--;
        if (player.playIndex < 0) {
            player.playIndex = musicModels.length - 1;
        }
        player.playMusic();
        $(`.musicbox div:nth-child(${player.playIndex+1})`).addClass("playBg").siblings().removeClass("playBg");
    }
}

//定义一个读取数据的函数
function getData() {
    //	访问数据 $.getJSON(解析的json文件,处理的函数)
    $.getJSON("../pbl.json", function (data) {
        //		当数据请求成功,会调用这个function
        //		data就是我们解析成功后拿到的数据
        for (var i = 0; i < data.length; i++) {
            //			解析的字段
            var music = new Music(data[i].img, data[i].musicName, data[i].name, data[i].num, data[i].src);
            //			得到的数据存入数组
            musicModels.push(music);
        }
        //		向页面插入数据
        inserData();
        // 第一次播放
        player.playMusic();
    })
}

//封装向页面插入数据
function inserData() {
    //	循环插入数据
    for (var i = 0; i < musicModels.length; i++) {
        //		创建元素,插入在页面
        var $div = `<div class='music' data-index=${i}><img src='${musicModels[i].img}'/><p>${musicModels[i].musicName}——${musicModels[i].name}</p></div>`;
        //		将$div插入在musicbox
        $(".page .musicbox").append($div);
        // 创建一个图片元素
        // var $img = $(`<img src=${musicModels[i].img}/>`);
        // var musicName = ``;
        if (i === 0) {
            $(".page .musicbox div:first-child").addClass("playBg").siblings().removeClass("playBg");
        }
        $(".page .musicbox div").click(function () {
            player.playIndex = $(this).data("index");
            player.playMusic();
            $(this).addClass("playBg").siblings().removeClass("playBg");
        })
    }
}
$(".prev").click(player.prev);

$(".next").click(player.next);
// 播放 暂停

$(".pause").click(function () {
    player.playPause();
})

//封装用于描述数据，里面具体的字段
function Music(img, musicName, name, num, src) {
    this.img = img;
    this.musicName = musicName;
    this.name = name;
    this.num = num;
    this.src = src;
}
