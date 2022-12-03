import './App.css'
import recipes from './assets/recipes.json'

function App () {
  return (
    <div className='recipes'>
      <h2 className='recipes__main-title'>Recetas de Cocina</h2>
      <div className='recipes__list'>
        {recipes.map(({ id, title, cover }) => (
          <div className='recipes__item' key={id}>
            <img src={cover} alt={title} />
            <h4>{title}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
