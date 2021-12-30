
var Time = (new Date("2110/12/15 16:30:00")).getTime();
setInterval(function () {
    var nowTime = (new Date()).getTime();
    var TimeCha = Time-nowTime;

    // var day = parseInt(TimeCha/1000/60/60/24);
    var h = parseInt(TimeCha/1000/60/60%24);
    var m = parseInt(TimeCha/1000/60%60);
    var s = parseInt(TimeCha/1000%60);
    // var ms = parseInt(TimeCha%1000);

    // day<10 ? day = "0" + day : "";

    h<10 ? h = "0" + h : "";

    m<10 ? m = "0" + m : "";

    s<10 ? s = "0" + s : "";

    // ms <10 ? ms = "00" + ms :( ms<100 ?  ms = "0" + ms : "");

    // console.log(ms);
    // var str1 = "距离2018年1月25日16点30分,还有" + day + "天";
    // str1 = str1 + h + "小时" + m + "分钟" + s + "秒" + ms + "毫秒";


    // document.getElementsByTagName("body")[0].innerHTML = str1;
    document.getElementsByClassName("xiaoshi")[0].innerHTML = h;
    document.getElementsByClassName("fenzhong")[0].innerHTML = m;
    document.getElementsByClassName("miao")[0].innerHTML = s;
},10)

