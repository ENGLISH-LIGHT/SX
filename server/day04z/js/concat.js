(function () {
    // var font1 = document.getElementsByClassName("font");
    // font1[0].innerHTML = "light";
    // font1[0].style.width = "1000px";
    // font1[0].style.height = "200px";
    // console.log(font1);
    // var num1 =document.getElementById("num1");
    // var num2 =document.getElementById("num2");
    // var r = document.getElementsByClassName("result")[0];
    // var btn = document.getElementById("btn");
    // btn.onclick = function(){
    //      r.innerHTML = ""+ (parseFloat(num1.value) + parseFloat(num2.value));
    // }

})();

// {
//     var box = document.getElementsByClassName("box")[0];
//     var c = 0;
//     var base = 50;
//     var timer = null;
//     timer = setInterval(function(){
//        base += 50;
//        box.style.width = base + "px";
//        box.style.height = base + "px";
//     if(base >= 200){
//         clearInterval(timer);
//     }
// },1000);

// }

{
    var b = document.getElementById("btn");
    var gameDiv = document.getElementsByClassName("gameDiv")[0];
    var imgs = gameDiv.children;
    // 记录上一次的随机数
    var lasttmp = 0;
    // tmp-记录随机数
    var tmp;
    var dao = document.querySelector(".lasttime");
    var lt = 10;
    var click = false;
    var count = 0;
    b.onclick = function () {
        if (click == true) {
            return;
        }
        count = 0;
        click = true;
        gameDiv.style.visibility = "visible";
        var timer = null;
        timer = setInterval(function () {

            // 倒计时
            if (lt === 0) {
                lt = 10;
                count = 0;

                click = false;
                clearInterval(timer);
                gameDiv.style.visibility = "hidden";
                score.innerHTML = "" + count;

            } else {
                lt--;
                dao.innerHTML = "" + lt;
            }
            tmp = Math.floor(Math.random() * 9);
            if (lasttmp !== tmp) {
                imgs[lasttmp].src = "../img/3.png";
                imgs[tmp].src = "../img/bear.png";
            }
            lasttmp = tmp;
        }, 1000);
    }
    var a = document.querySelector(".gameDiv");
    var score = document.querySelector(".score");
    function beat(obj) {
        // alert("1")
        var src = obj.src;
        // alert(src)
        var a = src.charAt(src.length - 5);
        if (a !== "3") {
            count++;
            score.innerHTML = "" + count;
        } else {
        }
        // alert(a);
    }

}

