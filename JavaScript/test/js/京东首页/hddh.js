var hdl = document.getElementsByClassName("mtop-mid-top-img1")[0];
var hdr = document.getElementsByClassName("mtop-mid-top-img2")[0];
var hdul1 = document.getElementsByClassName("mtop-mid-top-ul1")[0];
var hdli1 = document.getElementsByClassName("mtop-mid-top-ul2")[0].children;
var tbox = document.getElementsByClassName("mtop-mid-top")[0];
var liclon = hdul1.children[0].cloneNode(true);
hdul1.appendChild(liclon);
console.log(hdli1)
var num = 0;
var timer1;
var timer2;

for(var i = 0;i<hdli1.length;i++){
    hdli1[i].index = i;
    hdli1[i].onmouseover = function () {
        index = this.index;
        num = index;
        for(var i = 0; i<hdli1.length;i++){
            hdli1[i].id = "";
        }
        this.id = "mtop-mid-top-ul2-li1";
        var juli = -(index*790);
        run(hdul1,juli);
    }
}

function auto() {
    timer2 = setInterval(function () {
        hdr.onclick();
    },2000)
    tbox.onmouseover = function () {
        clearInterval(timer2);
    }
    tbox.onmouseout = function () {
        auto();
    }
}

hdl.onclick = function () {
        num--;
        if(num < 0) {
            hdul1.style.left = -(liclon.offsetWidth) * (hdul1.children.length - 1) + "px";
            num = hdli1.length - 1;
        }
            for(var i = 0;i<hdli1.length;i++){
                hdli1[i].id = "";
            }
            hdli1[num].id = "mtop-mid-top-ul2-li1";

        var juli = -(num*790);
        run(hdul1,juli);
    }

hdr.onclick = function () {
        num++;
        if(num > hdli1.length-1) {
            hdul1.style.left = 0 + "px";
            num = 0;
        }
            for(var i = 0;i<hdli1.length;i++){
                hdli1[i].id = "";
            }
            hdli1[num].id = "mtop-mid-top-ul2-li1";
        var juli = -(num*790);
        run(hdul1,juli);
    }

// hdr.onclick = lrun;
// function lrun() {
//     num++;
//     if (num > hdli1.length - 1) {
//         for (var i = 0; i < hdli1.length; i++) {
//             hdli1[i].id = "";
//         }
//         hdli1[0].id = "mtop-mid-top-ul2-li1";
//     } else {
//         for (var i = 0; i < hdli1.length; i++) {
//             hdli1[i].id = "";
//         }
//         hdli1[num].id = "mtop-mid-top-ul2-li1";
//     }
//     console.log(num);
//     var juli = -(num * 490);
//     run(hdul1, juli);
//     // hdr.onclick = "";
//
// }


function run(ele,target) {
    clearInterval(timer1);
    timer1 = setInterval(function () {
        var bool = true;
        var leader = ele.offsetLeft;
        var speed = (target-leader)/10;
        speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
        leader = leader + speed;
         if(leader >= target){
            ele.style.left = leader + "px";
            if(num >= hdli1.length){
                num = 0;
                ele.style.left = 0 + "px";
                console.log(ele.style.left);
            }
        }
        ele.style.left = leader+"px";
        // if(Math.abs(target-leader)<speed){
        //
        //     ele.style.left = target + "px";
        //     if(num == hdul1.children.length-1){
        //         num = 0;
        //         ele.style.left = "0px"
        //     }
        //
        // }else {
        //     ele.style.left = leader + "px";
        //
        // }

    },10)

}

auto();