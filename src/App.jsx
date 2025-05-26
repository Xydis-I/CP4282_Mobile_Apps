import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './bootstrap.css'
import NavBar from './NavBar'
import MovieList from './MovieList'
import movies from './movies.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <div className='movieList'>
        <MovieList json={movies}></MovieList>
      </div>
    </>
  )
}

export default App
