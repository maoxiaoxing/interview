$(document).ready(function () {
    var htgame0 = $(".htgame0")[0];
    var htgpic = $(".htgpic")[0];
    var htginfo = $(".htginfo")[0];
    // consol.log(htgpic)
    var htgame1 = $(".htgame1")[0];
    // console.log(htgame1);
    var htgimg = htgame1.children;
    // console.log(htgimg[]);
    var htgcont = $(".htgcont");
    var htginfo1 = $(".htginfo1");
    var i;

    for(i = 0;i<htgimg.length;i++){
        htgimg[i].index = i;
        htgimg[i].onmouseover = function () {
            move_xia(htgcont[this.index],240);
            move_shang(htginfo1[this.index],-5);
        }

        htgimg[i].onmouseout = function () {
            // var index = i;
            move_shang(htgcont[this.index],103);
            move_xia(htginfo1[this.index],136);
        }

    }



    htgame0.onmouseover = function () {
        move_xia(htgpic,500);
        move_shang(htginfo,0);

    }
    htgame0.onmouseout = function () {
        move_xia(htginfo,284);
        move_shang(htgpic,254)
        // alert()
    }



    function move_xia(ele,target) {
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var nowtop = ele.offsetTop;
            if((target-nowtop)<=5){
                ele.style.top = nowtop + "px";
                clearInterval(ele.timer);
            }else {
                nowtop = nowtop + 5;
                ele.style.top = nowtop + "px";
            }
        },10)
    }

    function move_shang(ele,target) {
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var nowtop = ele.offsetTop;
            // console.log(nowtop)
            if((nowtop-target)<=5){
                ele.style.top = nowtop + "px";
                clearInterval(ele.timer);
            }else {
                nowtop = nowtop - 5;
                ele.style.top = nowtop + "px";
            }
        },10)

    }

})