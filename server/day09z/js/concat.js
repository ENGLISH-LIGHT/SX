// 设置动画画布
// Phaser.Game(width, height,渲染环境, divId);
var game = new Phaser.Game(900, 420, Phaser.AUTO, "gameDiv");

// 用户信息存储类
var gameState = {};

// 限制跳跃次数为2次
var JUMP_TIME = 2;

// 出现障碍物种类
var OBSTACLE = 0;

// 创建一个新的js状态，js里面将包含游戏
gameState.dogGame = function () {
};

// 原型
gameState.dogGame.prototype = {
    // 首先调用函数，加载所有资源
    preload: function () {
        // 加载背景图片,键值对
        this.game.load.image("bg", "img/bkg.png");
        this.game.load.image("dog", "img/dog.png");
        this.game.load.image("line", "img/line.PNG");
        this.game.load.image("dogLeft", "img/dogleft.png");
        this.game.load.image("master", "img/master.png");
        this.game.load.image("wood", "img/wood.png");
    },
    // 设置游戏
    create: function () {
        // 从(0, 0)点开始加载背景
        this.game.add.sprite(0, 0, "bg");
        this.dog = this.game.add.sprite(100, 256, "dog");
        this.line = this.game.add.sprite(0, 313, "line");

        // 给狗添加重力
        this.dog.body.gravity.y = 1000;

        // 调用右箭头，小狗向右移动
        var rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        rightKey.onDown.add(this.right, this);

        // 调用左箭头，小狗向左移动
        var leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        leftKey.onDown.add(this.left, this);

        // 调用空格
        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);

        // 两组20个障碍物
        this.masters = game.add.group();
        this.masters.createMultiple(20, "master");
        this.woods = game.add.group();
        this.woods.createMultiple(20, "wood");
    },
    // 小狗落地
    land: function () {
        this.dog.body.velocity.y = -500;
        JUMP_TIME = 2;
    },
    // 碰撞检测，每秒检测60次
    update: function () {
        // 检测狗和木板的碰撞
        this.game.physics.overlap(this.dog, this.line, this.land, null, this);
    },
    // 向左移动
    left: function () {
        this.dog.body.velocity.x = -150;
        this.dog.loadTexture("dogLeft", 0);
    },
    // 向右移动
    right: function () {
        this.dog.body.velocity.x = 150;
        this.dog.loadTexture("dog", 0);
    },
    // 点击空格跳跃
    jump: function () {
        if (JUMP_TIME > 0) {
            JUMP_TIME--;
            this.dog.body.velocity.y = -320;
        }
    },
    // 添加障碍物
    addObstacles: function (x, y) {
        var obstacle = OBSTACLE === 0 ? this.masters.getFirstDead() : this.woods.getFirstDead();
        OBSTACLE = OBSTACLE === 0 ? 1 : 0;
        obstacle.reset(x, y);
        obstacle.body.velocity.x = -200;
        // 滚出屏幕，自动消失
        obstacle.outOfBoundsKill = true;
    }
};

// 调用方法，显示背景，第一个参数为js
game.state.add("index", gameState.dogGame);
game.state.start("index");