$(document).ready(function(){
    $("#maze div.boundary").mouseover(move);
   $("#start").mouseover(normal);
    $("#end").mouseover(win);
    $("#start").click(normal);
  //  $("#start").click('mouseout',otherbody);


    


});
function move(){
    $("#maze div.boundary").addClass("youlose");
    $("#status").text("You lose!");


};
function normal(){
    $("div.boundary").removeClass("youlose");
    $("#status").text("Click The " +"'S'" +" to bigin");




}
function win(){
    const h =$("#maze div.boundary").css("background-color");
    $("#dummy").css("background-color","#ff8888");
    const p =$("#dummy").css("background-color");
    //const k = $("#maze div.boundary").mouseenter(move).value;
    console.log(p);

    if( h !== p ){
        // alert("you win");
        $("#status").text("You win!:");
    } 
}


    


}
