//获取节点
var box=document.getElementsByClassName("box-a");// 首先取出这九个格子
var btnone=document.getElementById('a');//开始闪节点
var btntwo=document.getElementById('b');//结束闪

//赋予开始闪按钮点击事件
btnone.onclick=function () {
    f=setInterval(function () {//使用重复定时器
        start(); //函数事件
        },1000 //设置一秒时间
    )

};
//赋予结束闪按钮点击事件
btntwo.onclick=function () {//结束闪按钮
    clearInterval(f);
    for(var i = 0; i < box.length; i++){
        box[i].style.backgroundColor = '';
    }
};
//函数事件
function start() {//事件

    for(i=0;i<box.length;i++){//循环
        box[i].style.background="#FFA600";//遍历清除颜色
    }
//抽取格子事件
    var box1 = Math.floor(Math.random()*9);
    var box2 = Math.floor(Math.random()*9);
    var box3 = Math.floor(Math.random()*9);
//    抽取颜色事件
    function randomHexColor() { //随机生成十六进制颜色
        var hex = Math.floor(Math.random() * 16777216).toString(16); //生成ffffff以内16进制数
        while (hex.length < 6) { //while循环判断hex位数，少于6位前面加0凑够6位
            hex = '0' + hex;
        }
        return '#' + hex; //返回‘#'开头16进制颜色
    }
// 赋予格子颜色
    if (box1 != box2&&box2 !=box3&&box1 !=box3){//如果抽出的任意三个下标互不相等则将这三个下标所对应的格子变色
        box[box1].style.backgroundColor=randomHexColor();
        box[box2].style.backgroundColor=randomHexColor();
        box[box3].style.backgroundColor=randomHexColor();
    }else{start();}
}
