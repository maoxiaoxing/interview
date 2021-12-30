var topul1 = document.getElementsByClassName("top-ul1")[0];
var ewm = document.getElementsByClassName("ewm")[0];
var dewm = document.getElementsByClassName("dewm")[0];

topul1.children[7].onmouseover = function () {
    dewm.style.display = "block";
}

topul1.children[7].onmouseout = function () {
    dewm.style.display = "none";
}


ewm.onmouseover = function () {
    dewm.style.display = "block";
}

dewm.onmouseout = function () {
    dewm.style.display = "none";
}
dewm.onmouseover = function () {
    dewm.style.display = "block";
}