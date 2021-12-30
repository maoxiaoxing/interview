$(document).ready(function () {
    var $focusimg = $(".focusimgs").children();
    // console.log(focusimg)
    var $focusbtn = $(".focusbtns").children();
    // console.log(focusbtn)
    var $focuscont = $(".focuscont");
    var $focuscontchi = $focuscont.children();

    $focuscontchi.eq(1).css("left","-20px");
    $focusbtn.each(function (index,ele) {
        $(ele).click(function () {

            // $focusimg.fadeOut(300,function () {
            //     $focusimg.css({"z-index":"1"});
            // })
            $focusimg.eq(index).siblings().animate({"opacity":"0","z-index":"1"},500);

            // $focusimg.eq(index).fadeIn(300,function () {
            //     $focusimg.css({"z-index":"2"});
            // })
            $focusimg.eq(index).animate({"opacity":"1","z-index":"2"},500);

            $focusbtn.eq(index).siblings().removeAttr("id");
            $focusbtn.eq(index).attr("id","focusbtn-show");

            $focuscontchi.eq(index).siblings().removeAttr("id");
            $focuscontchi.eq(index).siblings().css("left","-20px");
            $focuscontchi.eq(index).attr("id","cur");
            $focuscontchi.eq(index).animate({"left":"0px","opacity":"1"},300);



            //     alert("1")

        })
    })




})