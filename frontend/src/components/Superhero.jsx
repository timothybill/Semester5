import React from 'react'
import Antman from '../assets/imagess/superhero/antman.jpg'
import Avenger from '../assets/imagess/superhero/avenger.jpg'
import Batman from '../assets/imagess/superhero/batman.jpg'
import Robinhood from '../assets/imagess/superhero/robinhood.jpg'
import Spiderman from '../assets/imagess/superhero/spiderman.jpg'
import Superman from '../assets/imagess/superhero/superman.jpg'


function Superhero() {
  return (
    <div className="container-fluid " id='superhero' >
        <div className="container">
            <h3>SuperHero</h3>

            <div className="row">
                <div className="col-lg-4 col-mb-6 col-sm-12 pb-5">
                <div class="card" style={{width: '18rem'}}>
                <img src={Antman} class="card-img-top" alt="..."/>
                <div class="card-body bg-secondary text-light">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                 </div>
                </div>


                <div className="col-lg-4 col-mb-6 col-sm-12">
                 <div class="card" style={{width: '18rem'}}>
                 <img src={Avenger} class="card-img-top" alt="..."/>
                 <div class="card-body bg-secondary text-light">
                 <h5 class="card-title">Card title</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>


                <div className="col-lg-4 col-mb-6 col-sm-12">
                 <div class="card" style={{width: '18rem'}}>
                 <img src={Batman} class="card-img-top" alt="..."/>
                 <div class="card-body bg-secondary text-light">
                 <h5 class="card-title">Card title</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>


                <div className="col-lg-4 col-mb-6 col-sm-12 pb-5">
                 <div class="card" style={{width: '18rem'}}>
                 <img src={Robinhood} class="card-img-top" alt="..."/>
                 <div class="card-body bg-secondary text-light">
                 <h5 class="card-title">Card title</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-mb-6 col-sm-12">
                 <div class="card" style={{width: '18rem'}}>
                 <img src={Spiderman} class="card-img-top" style={{height: '440px'}}/>
                 <div class="card-body bg-secondary text-light">
                 <h5 class="card-title">Card title</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>


                <div className="col-lg-4 col-mb-6 col-sm-12">
                 <div class="card" style={{width: '18rem'}}>
                 <img src={Superman} class="card-img-top" style={{height: '440px'}}/>
                 <div class="card-body bg-secondary text-light">
                 <h5 class="card-title">Card title</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Superhero