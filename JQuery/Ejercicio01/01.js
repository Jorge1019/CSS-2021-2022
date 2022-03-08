$(document).ready(function () {
    $(".cuadro").draggable();
    $(".equipo.rojo").droppable({

accept:".rojo",

drop:function(evento,elemento){
$(this).data("puntos",$(this).data("puntos")+1)
$(this).text($(this).data("puntos"))
elemento.draggable("disable")
}
    })

    $(".equipo.azul").droppable({

        accept:".azul",
drop:function(evento,elemento){
    $(this).data("puntos",$(this).data("puntos")+1)
$(this).text($(this).data("puntos"))
elemento.draggable("disable")
}
        
    })
});