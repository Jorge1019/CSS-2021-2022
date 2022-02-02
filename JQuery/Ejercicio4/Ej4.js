$(document).ready(function(){
    $(".cuadrado").on({

"click":function(){
    $("body").css("background-color",$(this).css("background-color"));
  
},
"mousemove":function(evento){
$(".tip")
.text($(this).data("nombre"))
.css({
"display":"block"




})
}


    })
})