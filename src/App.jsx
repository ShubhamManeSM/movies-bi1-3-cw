import './App.css'
import AddMovieForm from "./components/AddMovieForm"
import MovieByTitle from "./components/MovieByTitle"
import Movies from "./components/Movies"

function App() {
  return (
    <main>
      <AddMovieForm />
      <Movies />
      <MovieByTitle title={"Gully Boy"}/>
    </main>
      
  )
}

export default App
