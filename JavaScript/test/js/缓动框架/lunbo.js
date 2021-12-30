/**
 * Created by Administrator on 2017/9/21.
 */

var arr = [
    {   //  1
        width: 400,
        top: 70,
        left: 50,
        opacity: 20,
        zIndex: 2
    },
    {  // 2
        width: 600,
        top: 120,
        left: 0,
        opacity: 80,
        zIndex: 3
    },
    {   // 3
        width: 800,
        top: 100,
        left: 200,
        opacity: 100,
        zIndex: 4
    },
    {  // 4
        width: 600,
        top: 120,
        left: 600,
        opacity: 80,
        zIndex: 3
    },
    {   //5
        width: 400,
        top: 70,
        left: 750,
        opacity: 20,
        zIndex: 2
    }
];


var banner = document.getElementsByClassName("banner")[0];
var main = document.getElementsByClassName("main")[0];
var but = document.getElementsByClassName("but")[0];
var ul = document.getElementsByTagName("ul")[0];
var liArr = document.getElementsByTagName("li");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var flag;
var bool = true;

main.onmouseenter = function () {
    slow_motion(but, {"opacity": 100})
};
main.onmouseleave = function () {
    slow_motion(but, {"opacity": 0})
};

prev.onclick = function () {
    if (bool) {
        bool = false;
        flag = true;
        move(flag);
    }
};
next.onclick = function () {

    if (bool) {
        bool = false;
        flag = false;
        move(flag);
    }

};

move();

function move(boolean) {
    if (boolean === true || boolean === false){
        if (boolean) {
            //样式逆时针,删掉最后,在前面添加
            arr.unshift(arr.pop());
        } else {
            //样式顺时针.删掉第一个.在最后面添加
            arr.push(arr.shift());
        }
    }


    for (var i = 0; i < liArr.length; i++) {
        slow_motion(liArr[i], arr[i], function () {
            bool = true;
        })
    }
}


function slow_motion(ele, json, fn) {
    // 清定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        // 开闭原则
        var bool = true;

        // 遍历属性值及json
        for (var k in json) {
//                    速度 = 目标位置 - 当前位置 / 10
            var leader;
            if (k === "opacity") {
                leader = getStyle(ele, "opacity") * 100
            } else {
                leader = parseInt(getStyle(ele, k)) || 0;
            }

            // 1.获取步长
            var speed = (json[k] - leader) / 10;

            // 2.加工步长
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            leader = leader + speed;

            // 3.赋值
            if (k === "opacity") {
                ele.style[k] = leader / 100;
            } else if (k === "zIndex") {
                ele.style[k] = json[k];
            } else {
                ele.style[k] = leader + "px";
            }


            if (leader != json[k]) {
                bool = false;
            }
        }
        if (bool) {
            // if (Math.abs(json[k] - leader) <= Math.abs(speed)) {
            //     ele.style[k] = json[k] + "px";
            clearInterval(ele.timer);
//             }
            if (fn) {
                fn();
            }
        }
    }, 30);
    function getStyle(ele,sx) {
        if(window.getComputedStyle){
            return window.getComputedStyle(ele,null)[sx];
        }
        return ele.currentStyle[sx];
    }

}



