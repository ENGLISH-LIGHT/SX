// 粒子显示函数
animates();

function animates() {
    // 创建一个canvas
    var canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.backgroundColor = "black";
    document.body.appendChild(canvas);

    // 画笔
    var context = canvas.getContext("2d");

    // 创建数组，用于存储粒子坐标
    var particles = [];
    loop();
    // 定义一个随机产生粒子的方法
    function loop() {
        // 计时器
        var timer = null;
        timer = setInterval(function () {
            // 清空画布
            context.clearRect(0, 0, canvas.width, canvas.height);
            // 出粒子的中心点
            var part = new Particle(canvas.width / 2, canvas.height / 2)
            //将坐标存入数组

            particles.push(part);
            // 循环遍历数组
            for (let i = 0, l = particles.length; i < l; i++) {
                // 更新粒子位置
                particles[i].upDate();
            }
        }, 30)
    }
    // 封装一个函数，随机产生粒子坐标
    function Particle(xPos, yPos) {
        // 定义私有属性
        // 粒子圆点坐标
        this.xPos = xPos;
        this.yPos = yPos;
        //y方向变化
        this.yVal = -7;
        // 产生随机数，x轴改变
        this.xVal = (Math.random() * 3 + 3) + ((Math.random() * 3 - 12)*Math.round(Math.random()); + );
        // 把画圆的代码封装成对象方法
        this.draw = function () {
            context.beginPath();
            context.arc(this.xPos, this.yPos, 5, 0, 2 * Math.PI, false);
            context.closePath();
            context.fillStyle = getColor();
            context.fill();
        };
        // 更新坐标
        this.weight = 0.1;//up
        this.upDate = function () {
            this.yPos = this.yPos +  this.yVal;
            this.xPos = this.xPos + this.xVal;
            this.yVal +- 0.1;
            this.draw();
        };
        // 随机颜色
        function getColor() {
            var a = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var c = Math.floor(Math.random() * 256);
            var o = Math.random();
            return `rgba(${a},${b},${c},${o})`;
        }
        // console.log(getColor());
    }
}
