//Añadir 5 nuevos ítems al final de la lista desordenada #myList. Ayuda:
var numItemsActuales= ("#myList").length;
for (i=numItemsActuales+1;i<numItemsActuales+5;i++)
{var $li=$("<li>List item’+i+'</li>");
$("#myList").append($li);
}

//Remover los ítems impares de la lista.

$("#myList li:even").remove();

//Añadir otro elemento h2 y otro párrafo al último div.module.
$("div.module:last").append($("<h2>Mi H2</h2>")).append($("<p>Mi P</p>"));

//Añadir otra opción al elemento select; darle a la opción añadida el valor “Wednesday”.
$("select[name=day]").append("<option value=»wednesday»>Wednesday</option>");

//Añadir un nuevo div.module a la página después del último; luego añadir una copia de una de las imágenes existentes dentro del nuevodiv.