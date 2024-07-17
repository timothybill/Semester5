import React from 'react'

function navbar() {
  return (
    
   
    

<nav class="navbar navbar-expand-lg bg-transparan">
  <div class="container">
    <a class="navbar-brand text-light" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-light rounded"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <a class="nav-link active text-light" aria-current="page" href="#trending">Tranding</a>
        <a class="nav-link text-light" href="#superhero">Super Hero</a>
        
      </div>
    </div>
  </div>
</nav>



  )
}

export default navbar