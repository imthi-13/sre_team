import React from "react";

function MovieList({ movies }) {
  return (
    <div style={{padding: "20px"}}>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map((m) => (
          <li key={m._id}>
            {m.title} - ⭐ {m.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;

