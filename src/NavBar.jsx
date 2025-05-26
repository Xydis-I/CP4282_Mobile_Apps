function NavBar() {
  return(
    <>
      <nav className='navBar'>
        <h1>Assignment 1</h1>
        <button onClick={evt => {
          if (evt.currentTarget.textContent == "Login") {
            evt.currentTarget.textContent = "Logout";
          } else {
            evt.currentTarget.textContent = "Login";
          }
        }} class="btn btn-light">Login</button>
      </nav>
    </>
  )
}

export {NavBar as default};