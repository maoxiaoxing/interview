$(document).ready(function () {
    var cbl = $(".cbl")[0];
    // console.log(cbl)
    var cblli = cbl.children;
    // console.log(cblli[0])
    var sbli1 = $(".sbxfcbl-li1")[0];
    var sbli2 = $(".sbxfcbl-li2")[0];
    var sbli3 = $(".sbxfcbl-li3")[0];
    var sbli4 = $(".sbxfcbl-li4")[0];
    var sbli5 = $(".sbxfcbl-li5")[0];
    var sbli6 = $(".sbxfcbl-li6")[0];
    var sbli7 = $(".sbxfcbl-li7")[0];

    cblli[0].onmouseover = function () {
        sbli1.style.display = "block";
        // cblli[0].style.display = "none";
    }
    sbli1.onmouseout = function () {
        sbli1.style.display = "none";
    }

    cblli[1].onmouseover = function () {
        sbli2.style.display = "block";
    }
    sbli2.onmouseout = function () {
        sbli2.style.display = "none";
    }

    cblli[2].onmouseover = function () {
        sbli3.style.display = "block";
    }
    sbli3.onmouseout = function () {
        sbli3.style.display = "none";
    }

    cblli[3].onmouseover = function () {
        sbli4.style.display = "block";
    }
    sbli4.onmouseout = function () {
        sbli4.style.display = "none";
    }

    cblli[4].onmouseover = function () {
        sbli5.style.display = "block";
    }
    sbli5.onmouseout = function () {
        sbli5.style.display = "none";
    }

    cblli[5].onmouseover = function () {
        sbli6.style.display = "block";
    }
    sbli6.onmouseout = function () {
        sbli6.style.display = "none";
    }

    cblli[6].onmouseover = function () {
        sbli7.style.display = "block";
    }
    sbli7.onmouseout = function () {
        sbli7.style.display = "none";
    }
})