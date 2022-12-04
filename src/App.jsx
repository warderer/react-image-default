import './App.css'
import recipes from './assets/recipes.json'
import ImageComponent from './components/ImageComponent'

function App () {
  // Declaramos cual seria la imagen por defecto que usaremos
  // en caso de tener problemas con la imagen original.
  const placeholderImage =
  'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

  return (
    <div className='recipes'>
      <h2 className='recipes__main-title'>Recetas de Cocina</h2>
      <div className='recipes__list'>
        {recipes.map(({ id, title, cover }) => (
          <div className='recipes__item' key={id}>
            {/*
              En esta aproximación, creamos un componente ImageComponent, recibe como
              parámetros los atributos originales de una etiqueta HTML de img, pero
              además podemos indicarle que imagen usar por defecto (notFoundSrc) en caso
              de que no cargue la imagen original.
            */}
            <ImageComponent
              src={cover}
              alt={title}
              notFoundSrc={placeholderImage}
            />
            <h4>{title}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
