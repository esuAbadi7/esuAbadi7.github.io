var textArea, startBtn, stopBtn, animationList, fontSizeList, turboBtn;
window.onload = function(){

    textArea = document.getElementById("text-area");
    startBtn  = document.getElementById("start");
    stopBtn = document.getElementById("stop");
    animationList = document.getElementById("animation");
    fontSizeList = document.getElementById("fontsize");
    turboBtn = document.getElementById('turbo');
    

    startBtn.onclick = setview;
    stopBtn.onclick = cleararea;
    animationList.onchange = changeanimation;
    fontSizeList.onchange = changefont;
    turboBtn.onclick = changedelay;
};
let timer = null;
var whichone = "Blank";
var delay = 250;

function setview(){

    var view = ANIMATIONS[whichone].split("=====\n");
    stopBtn.disabled = false;
    startBtn.disabled = true;
    animationList.disabled = true;

    if(whichone === "Blank" ){
        return;
    }
    if(timer == null){
        let i=0;
        timer = setInterval( function(){
                    
                    textArea.value = view[i++];
                    if(i>= view.length){
                        i=0;
                    }
                    
                }, delay );

    }

}

function cleararea(){

    textArea.value = BLANK;
    stopBtn.disabled = true;
    startBtn.disabled = false;
    animationList.disabled = false;
    clearInterval(timer);
    timer = null;

}

function changeanimation(){

    whichone = animationList.value;

}

function changefont(){
    textArea.style.fontSize = fontSizeList.value;
}

function changedelay(){
    if(turboBtn.checked){
        delay = 50;
    }else{
        delay= 250;
    }
}
