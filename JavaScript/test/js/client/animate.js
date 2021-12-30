function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            var leader = parseInt(getStyle(obj, k));
            var step = (json[k] - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            obj.style[k] = leader + step + "px";
            if (leader != json[k]) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
//                alert("到了");
            if (fn) {
                fn();
            }
        }
    }, 10);
}

function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
        // return obj.style[attr];


    } else {
        return obj.currentStyle[attr];
    }
}


animate("box",'{"top",100}',animate("box",'{"top",100}'))