//定义全局变量
var CurrentPosion = 0;
var theCurrentLength;
var theNewsText;
var theCharacterTimeout;
var theWidgetOne;
var theWidgetTwo;
var theSpaceFiller;

function startTicker() {
    //初始化设置
    theCharacterTimeout = 50;//字符间隔时间 
    //设置光标的变化这里效果是一闪一闪
    theWidgetOne = "_";
    theWidgetTwo = " ";
    theCurrentLength = 0;
    theSpaceFiller = " ";
    //获取要打印的内容
    theNewsText = document.getElementById("Summary").innerHTML;
    drawNews();
}


//执行动作
function runTheTicker() {
    if (theCurrentLength < theNewsText.length) {
        drawNews();
    }
}

//绘画动作
function drawNews() {
    var myWidget;
    //让光标闪动
    if ((theCurrentLength % 2) == 1) {
        myWidget = theWidgetTwo;
    }
    else {
        myWidget = theWidgetOne;
    }
    //去除HTML元素避免读入延迟
    var flag = theNewsText[theCurrentLength];
    if(flag === '<'){
        while(theNewsText[++theCurrentLength]!=='>');
        ++theCurrentLength;
    }
    document.getElementById("hottext").innerHTML = theNewsText.substring(0, theCurrentLength) + myWidget + theSpaceFiller;
    theCurrentLength++;
    setTimeout("runTheTicker()", theCharacterTimeout);
} 
