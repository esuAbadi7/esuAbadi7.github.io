// alert("Hello, world!");

window.onload = function(){
    // document.getElementById("decor_btn").onclick = changesize;
    // document.getElementById("bling").onchange = changeWeight;
    document.getElementById("malcovich").onclick = malcovich;
}

function changesize(){

    if(document.getElementById("textAr").style.fontSize){
        document.getElementById("textAr").style.fontSize = parseInt(document.getElementById("textAr").style.fontSize) + 2 +"pt";
    }else{
        document.getElementById("textAr").style.fontSize = "12pt";
    }
        
    console.log(document.getElementById("textAr").style.fontSize);
  
} 
let timer= null;
function changeByTimer(){

    if(timer== null){
        timer = setInterval(changesize,500);
    }else{
        clearInterval(timer);
        timer=null;
    }
}

function changeWeight(){
    if(document.getElementById("bling").checked){
        document.getElementById("textAr").style.fontWeight="bold";
        document.getElementById("textAr").style.color="green";
        document.getElementById("textAr").style.textDecoration="underline";
        // document.getElementsByTagName("body")[0].style.backgroundImage = 'images/background_image.png';
        document.body.style.backgroundImage= "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";

    }else{
        document.getElementById("textAr").style.fontWeight="normal";
        document.getElementById("textAr").style.color='';
        document.getElementById("textAr").style.textDecoration="none";
        document.body.style.backgroundImage= "url()";
    }
    // alert("Checkbox clicked!");
}

function malcovich(){
    var inputValue = document.getElementById("textAr").value;
    var word = inputValue.split(' ');
    for(var i=0; i<word.length; i++){
         if(word[i].length>= 5){
            inputValue = inputValue.replace(word[i],'MalcoVich');
         }
    }
    
    document.getElementById("textAr").value = inputValue;

}


