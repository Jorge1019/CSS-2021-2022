//Seleccionar todas las imágenes en la página; registrar en la consola el atributo alt de cada imagen.
$("img[alt]").each(function() {
    console.log( "valor alt= " + $( this ).attr("alt") );
    });
//Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo.
    $("input").closest("form").attr("class","prueba");
//Seleccionar el ítem que posee la clase “current” dentro de la lista #myList y remover dicha clase en el elemento; luego añadir la clase “current” al siguiente ítem de la lista.
    
    $("#myList li").filter(".current").attr("class","").next().attr("class","current");
    
    //4.Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit.
    $("#specials select").closest("form").find("input:submit");
    //5.Seleccionar el primer ítem de la lista en el elemento #slideshow;
    // añadirle la clase “current” al mismo y luego añadir la clase “disabled” a los elementos hermanos.
    $("#slideshow li").first().attr("class","current").nextAll().attr("class","disabled");