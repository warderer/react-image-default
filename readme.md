### Fix de imágenes que no se muestran en React - Fallback Images Error
#### Por César Guerra
Esta y más información disponible [en mi Blog](https://www.cesarguerra.mx/)

Este proyecto prentende mostrar como solucionar uno de los problemas más comunes cuando se inicia como desarrollador Frontend en React, y es que al cargar imágenes de una API, estas pueden venir con información incompleta o erronea, lo cual hace que cuando las queramos mostrar con ayuda un Map muchas de estas imágenes no aparezcan. En este caso es recomendable asignarles una imagen por defecto a estas imágenes.

## Generando un componente ImageComponent para Renderizar las Imágenes con Capacidad de Imagen por Defecto (onError)
Para este commit, se ha generado un componente ImageComponent que se encargará de recibir por props todos los parámetros que puede tener una etiqueta img de HTML, pero además va a recibir un prop especial llamado notFoundSrc, que contendrá la URL de la imagen a renderear por defecto en caso de que falle al cargar la imagen.

Este componente considerá los 2 casos anteriores, donde el valor del src podría venir vacio o no existir, y también en el caso de que si tenga un valor que esta sea una URL que obtenga un recurso válido.

Otro beneficio es que se usa una aproximación con estados, para que React este enterado cuando se producen estos cambios en el DOM y no sea sólo cosa del Navegador. Además de que es un componente reutilizable.