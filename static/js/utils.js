/**
 * Created by Meyou on 2018/3/8.
 */

//与当前时间之差（年月日时分秒）
function getDifferTime(timestamp) {
    var now = new Date(),
        runTime = parseInt((timestamp - now.getTime()) / 1000);
    var year = Math.floor(runTime / 86400 / 365);
    runTime = runTime % (86400 * 365);
    var month = Math.floor(runTime / 86400 / 30);
    runTime = runTime % (86400 * 30);
    var day = Math.floor(runTime / 86400);
    runTime = runTime % 86400;
    var hour = Math.floor(runTime / 3600);
    runTime = runTime % 3600;
    var minute = Math.floor(runTime / 60);
    runTime = runTime % 60;
    var second = runTime;
    return {year: year,month:month,day:day,hour:hour,minute:minute,second:second};
}

//根据参数名获取url中的参数值
function getUrlParam(key) {
    var s = window.location.search.substring(1);
    var arr = s.split('&');
    var value;
    for (var i in arr){
        if(arr[i].substring(0, key.length) === key){
            value = arr[i].substring(key.length+1);
            break;
        }
    }
    return value || '';
}