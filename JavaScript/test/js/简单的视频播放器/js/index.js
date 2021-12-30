/**
 * Created by wcs on 2016/9/9.
 */
window.onload=function(){

//     获取需要用到的标签
    var video=document.querySelector('video');
//播放暂停
    var playBtn=document.querySelector('.switch');
//     进度条
    var progress=document.querySelector('.progress');
//    当前进度条
    var currProgress=document.querySelector('.curr-progress');
//    当前时间
    var currentTime=document.querySelector('.current-time');
//    总时间
    var totalTime=document.querySelector('.total-time');
//    全屏按钮
    var extend=document.querySelector('.extend');


    var tTime=0;
//案例基本思路
//    第一步 点击 开始按钮 实现播放暂停
//    获取总时长，并且以时分秒的形式显示出来
//    当视频播放后， 更新进度条 和 当前时间
//    点击全屏，切换全屏状态


    //    第一步 点击 开始按钮 实现播放暂停，按钮上的log也要改变
    playBtn.onclick=function(){
        // video.paused 视频的暂停状态  true 暂停 ，false 播放
        if(video.paused){
            video.play();
            //改变log
            this.classList.remove('icon-play');
            this.classList.add('icon-pause');
        }else{
            video.pause();
            //改变log
            this.classList.remove('icon-pause');
            this.classList.add('icon-play');
        }
    }

//    获取视频的总时长 ，并显示
//    添加视频加载完成的事件
    video.oncanplay=function(){
        // duration 获取视频的总时长
        tTime=video.duration;
        console.log(tTime);

    //    将总时长转换成时分秒
        var h=Math.floor(tTime/3600);
        var m=Math.floor(tTime%3600/60);
        var s=Math.floor(tTime%60);

    //    时分秒 00:00:00  1 2  01:02:23 把时间拼接成指定的格式

         h=h<10?'0'+h:h;
         m=m<10?'0'+m:m;
         s=s<10?'0'+s:s;

    //    设置给 总时间
        console.log(h+":"+m+":"+s);
        totalTime.innerHTML=h+":"+m+":"+s;
    }


//    当时视频播放的时候，改变进度条和当前时间
//    当视频播放时间更新的事件
    video.ontimeupdate=function(){
        //获取视频当前播放时间
        var cTime=video.currentTime;
        console.log(cTime);

        //    将总时长转换成时分秒
        var h=Math.floor(cTime/3600);
        var m=Math.floor(cTime%3600/60);
        var s=Math.floor(cTime%60);

        //    时分秒 00:00:00  1 2  01:02:23 把时间拼接成指定的格式

        h=h<10?'0'+h:h;
        m=m<10?'0'+m:m;
        s=s<10?'0'+s:s;
        // 将当前播放的实际 更新到 控件上
        currentTime.innerHTML=h+":"+m+":"+s;

        //进度条更新 用当前的时间/总时间 *100%

        var value=cTime/tTime;
        // 把当前播放的比例 赋值给进度条
        currProgress.style.width=value*100+'%';

    }

//    全屏
    extend.onclick=function(){
        video.webkitRequestFullScreen();
    }


}