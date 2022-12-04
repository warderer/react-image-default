import { useState } from 'react'

const ImageComponent = (props) => {
  // Separamos notFoundSrc y src del resto de los atributos de la etiqueta img
  const { notFoundSrc, src, ...imageAttributes } = props

  // Generamos un estado que contendra la imagen a mostrar, por defecto es la imagen original
  // para que de esta forma React se entere del cambio que sufre la etiqueta img.
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <img
      {...imageAttributes} // Colocamos atributos adicionales de img: alt, height, width, etc., en caso de que vengan como props
      src={imgSrc || notFoundSrc} // Validamos que exista el atributo que contiene la URL de la imagen o no venga vacio
      onError={() => { setImgSrc(notFoundSrc) }} // Si se dispará el evento onError, entonces cambiamos la imagen original por la imagen de error, como usamos setImgSrc para modificar el estado, esto ocasionará que se renderice nuevamente la imagen con el nuevo valor.
    />
  )
}
export default ImageComponent
