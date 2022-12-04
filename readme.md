### Fix de imágenes que no se muestran en React - Fallback Images Error
#### Por César Guerra
Esta y más información disponible ![en mi Blog](https://www.cesarguerra.mx/)

Este proyecto prentende mostrar como solucionar uno de los problemas más comunes cuando se inicia como desarrollador Frontend en React, y es que al cargar imágenes de una API, estas pueden venir con información incompleta o erronea, lo cual hace que cuando las queramos mostrar con ayuda un Map muchas de estas imágenes no aparezcan. En este caso es recomendable asignarles una imagen por defecto a estas imágenes.

## Reparando las Imágenes que vienen sin atributo "cover" o este viene vacío.
En este commit, se realiza una validación al momento de colocar el cover, donde si este valor no existe o viene vacío, se utilizará una imagen por defecto en su lugar.

Con esta primera aproximación, se resuelven los problemas de las imágenes de Pozole (que no cuenta con atributo "cover") y de Panuchos (que cuenta con el atributo "cover" pero viene vacío)

Sin embargo, aún notamos que nos sigue mostrando rotas las imágenes para Quesadillas con Queso y Cochinita Pibil, que si que contienen valores en sus atributos "cover", solo que estas no son válidas, debido a que ya no existen o la URL es incorrecta.