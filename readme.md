### Fix de imágenes que no se muestran en React - Fallback Images Error
#### Por César Guerra
Esta y más información disponible ![en mi Blog](https://www.cesarguerra.mx/)

Este proyecto prentende mostrar como solucionar uno de los problemas más comunes cuando se inicia como desarrollador Frontend en React, y es que al cargar imágenes de una API, estas pueden venir con información incompleta o erronea, lo cual hace que cuando las queramos mostrar con ayuda un Map muchas de estas imágenes no aparezcan. En este caso es recomendable asignarles una imagen por defecto a estas imágenes.

## Proyecto Base que Muestra las Recetas pero con Problemas en las Imágenes
En este commit, se tiene la estructura básica que manda a llamar la información de Recetas de Cocina contenida en /assets/recipes.json , sin embargo notamos que al visualizar la página existen elementos que estan rotos:
- Quesadillas con Queso: Puesto que la URL tiene carácteres de más, por lo que es una URL incorrecta que devolverá error 404.
- Pozole: Que no contiene el atributo "cover" en el archivo JSON, por lo que no puede mostrar una imagen que ni si quiera tiene.
- Panuchos: Que si tiene el atributo "cover" pero lo tiene con valor vacío "".
- Cochinita Pibil: Que si tiene el atributo "cover" pero con un valir incompleto e incorrecto, lo cual es prácticamente el mismo caso que las Quesadillas sin Queso.

Por lo tanto, con el código del commit actual, al visualizar las imágenes anteriores, estas apareceran rotas en el navegador.