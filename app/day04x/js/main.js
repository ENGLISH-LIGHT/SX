function getIndex(index) {
    if (index < 10) {
        return "0" + index;
    } else {
        return index;
    }
}

function getImage(name,index){

    return `./img/Animations/${name}/${name}_${getIndex(index)}.jpg`;
}

//alert(getImage("angry",1));

var timer = null;

function start(name,count){
    var index = 0;
    clearInterval(timer);
    var cat = document.getElementById("img1"); 
    timer = setInterval(function(){
        if(++index < count){
            cat.src = getImage(name,index);
            alert(cat.src);
        }else{
            clearInterval(timer);
        }
    },80);
}

var cymbal = document.getElementById("img2");
cymbal.onclick = function(){
    start("cymbal",13);
}
var drink = document.getElementById("img3");
drink.onclick = function(){
    start("drink",81);
}
var eat = document.getElementById("img4");
eat.onclick = function(){
    start("eat",40);
}
var fart = document.getElementById("img5");
fart.onclick = function(){
    start("fart",28);
}
var pie = document.getElementById("img6");
pie.onclick = function(){
    start("pie",24);
}
var scratch = document.getElementById("img7");
scratch.onclick = function(){
    start("scratch",56);
}

var str = "jfsdlk";