
var cl1 = document.getElementsByClassName("cl-1")[0];
var cl2 = document.getElementsByClassName("cl-2")[0];
var cl3 = document.getElementsByClassName("cl-3")[0];
var cl4 = document.getElementsByClassName("cl-4")[0];
var cl5 = document.getElementsByClassName("cl-5")[0];
var cl6 = document.getElementsByClassName("cl-6")[0];
var cl7 = document.getElementsByClassName("cl-7")[0];
var cl8 = document.getElementsByClassName("cl-8")[0];





var cl1tc = document.getElementsByClassName("cl-1tc")[0];
var cl2tc = document.getElementsByClassName("cl-2tc")[0];
var cl3tc = document.getElementsByClassName("cl-3tc")[0];
var cl4tc = document.getElementsByClassName("cl-4tc")[0];
var cl5tc = document.getElementsByClassName("cl-5tc")[0];
var cl6tc = document.getElementsByClassName("cl-6tc")[0];
var cl7tc = document.getElementsByClassName("cl-7tc")[0];
var cl8tc = document.getElementsByClassName("cl-8tc")[0];




cl1.onmouseover = function () {
    cl1tc.style.display = "block";
}
cl1.onmouseout = function () {
    cl1tc.style.display = "none";
}
cl1tc.onmouseover = function () {
    cl1tc.style.display = "block";
}
cl1tc.onmouseout = function () {
    cl1tc.style.display = "";
}

cl2.onmouseover = function () {
    cl2tc.style.display = "block";
}
cl2.onmouseout = function () {
    cl2tc.style.display = "";
}
cl2tc.onmouseover = function () {
    cl2tc.style.display = "block";
}
cl2tc.onmouseout = function () {
    cl2tc.style.display = "";
}

cl3.onmouseover = function () {
    cl3tc.style.display = "block";
}
cl3.onmouseout = function () {
    cl3tc.style.display = "";
}
cl3tc.onmouseover = function () {
    cl3tc.style.display = "block";
}
cl3tc.onmouseout = function () {
    cl3tc.style.display = "";
}

cl4.onmouseover = function () {
    cl4tc.style.display = "block";
}
cl4.onmouseout = function () {
    cl4tc.style.display = "";
}
cl4tc.onmouseover = function () {
    cl4tc.style.display = "block";
}
cl4tc.onmouseout = function () {
    cl4tc.style.display = "";
}

cl5.onmouseover = function () {
    cl5tc.style.display = "block";
}
cl5.onmouseout = function () {
    cl5tc.style.display = "";
}
cl5tc.onmouseover = function () {
    cl5tc.style.display = "block";
}
cl5tc.onmouseout = function () {
    cl5tc.style.display = "";
}

cl6.onmouseover = function () {
    cl6tc.style.display = "block";
}
cl6.onmouseout = function () {
    cl6tc.style.display = "";
}
cl6tc.onmouseover = function () {
    cl6tc.style.display = "block";
}
cl6tc.onmouseout = function () {
    cl6tc.style.display = "";
}

cl7.onmouseover = function () {
    cl7tc.style.display = "block";
}
cl7.onmouseout = function () {
    cl7tc.style.display = "";
}
cl7tc.onmouseover = function () {
    cl7tc.style.display = "block";
}
cl7tc.onmouseout = function () {
    cl7tc.style.display = "";
}

cl8.onmouseover = function () {
    cl8tc.style.display = "block";
}
cl8.onmouseout = function () {
    cl8tc.style.display = "";
}
cl8tc.onmouseover = function () {
    cl8tc.style.display = "block";
}
cl8tc.onmouseout = function () {
    cl8tc.style.display = "";
}





window.onscroll = function () {
    var top = fun2().top;

    cl7.onclick = function () {
        var target = 0;
        run1(window,target);
    }
    cl7tc.onclick = function () {
        var target = 0;
        run1(window,target);
    }
}

// cl7.onclick = function () {
//     var target =
//         run1(window,target);
// }

function run1(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var leader = fun2().top;

        var speed = (target - leader)/10;

        speed > 0? speed = Math.ceil(speed): speed = Math.floor(speed);

        if(Math.abs(target-leader) <= Math.abs(speed)){
            clearInterval(ele.timer);
            ele.scrollTo(0,target);
            console.log("停");
        }else {
            leader = leader + speed;
            ele.scrollTo(0,leader);
        }


    },20)
}



function fun2() {
    return {
        "top": window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
        "left": window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
    }
}






