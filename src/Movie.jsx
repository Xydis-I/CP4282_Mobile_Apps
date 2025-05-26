function Movie({name, year, rating, poster}) {
  return(
    <>
      <img src={poster}></img>
      <div>
        <h2>{name}</h2>
        <p>📆 {year}</p>
        <p>★ {rating}</p>
      </div>
      <br></br>
    </>
  )
}

export {Movie as default};