var musicClick = document.querySelector(".musicno");
var music = document.querySelector("audio");
musicClick.onclick = function(){
        if(music.paused){
            music.play();
            musicClick.src = "./img/musicBtn.png";
        }else{
            music.pause();
            musicClick.src = "./img/musicBtnOff.png"
        }
}