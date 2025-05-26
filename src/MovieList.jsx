import Movie from "./Movie";

function MovieList({json}) {

  console.log(json.length);

  let movies = [];

  for (let i = 0; i < json.length; i++) {
    movies.push(
      <div className="movie">
        <Movie name={json[i].name} year={json[i].year} rating={json[i].rating} poster={json[i].poster}></Movie>
      </div>
    )
    
  }

  return(
    <>
      {movies}
    </>
  )
}

export {MovieList as default};