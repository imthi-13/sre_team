import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://backend-service/movies")
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <Navbar/>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;

