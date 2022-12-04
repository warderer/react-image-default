import './App.css'
import recipes from './assets/recipes.json'

function App () {
  // Declaramos cual seria la imagen por defecto que usaremos
  // en caso de tener problemas con la imagen original.
  const placeholderImage =
  'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

  // Esta función se ejecutará en caso de que se cumpla el evento onError de la imagen.
  // Este generalmente ocurre cuando no puede cargar la imagen original.
  const handleImageError = (e) => {
    e.target.src = placeholderImage
  }

  return (
    <div className='recipes'>
      <h2 className='recipes__main-title'>Recetas de Cocina</h2>
      <div className='recipes__list'>
        {recipes.map(({ id, title, cover }) => (
          <div className='recipes__item' key={id}>
            {/*
              Una primera aproximación es indicar que si el valor de imagen se evalua como falso
              entonces se usa la imagen placeholder, de lo contrario se usa la imagen que viene.
              Esto soluciona los problemas de Pozole que no tiene atributo cover y de Panuchos
              que tiene un atributo cover vacío, ya que en ambos casos son considerados falsy
              (valores que son interpretados como false).

              En una segunda aproximación, cuando una imagen o documento externo falla en cargar
              se dispara el evento onError, el cual ejecuta la función handleImageError, la cual
              cambia la imagen no válida por la imagen placeholderImage.
            */}
            <img
              src={cover || placeholderImage}
              alt={title}
              onError={handleImageError}
            />
            <h4>{title}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
