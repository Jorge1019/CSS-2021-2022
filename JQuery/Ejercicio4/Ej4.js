$(document).ready(function(){
    $(".cuadrado").on(

"click",function(){
    $("body").css("background-color",$(this).css("background-color"));
  
}),
$(".cuadrado").on("mouseenter",function(evento){
$(".tip").css({
"display":"block",


"background-color":"lightgreen",
"width":150,
"height":50,
"text-align":"center",
"position":"absolute",
"visibility":"visible",
"line-height":3,
"border-radius":5,
"left":evento.pageX,
"top":evento.pageY


})
$(".tip").text($(this).data("nombre"))

})


   
})