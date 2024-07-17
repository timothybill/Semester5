import React from 'react'
import Dune from '../assets/imagess/trending/dune.jpg'
import Everything from '../assets/imagess/trending/everything.jpg'
import Infinite from '../assets/imagess/trending/infinite.jpg'
import Joker from '../assets/imagess/trending/joker.jpg'
import Lightyear from '../assets/imagess/trending/lightyear.jpg'
import Morbius from '../assets/imagess/trending/morbius.jpg'
function Trending() {
  return (
       <div className='container-fluid' id='trending'>
          <div className="container p-3">
          <h3>Trending</h3>

          <div className="row">
            <div className="col-lg-4 col-mb-6 col-sm-12 pb-5">
              <div class="card" style={{width: '18rem'}}>
              <img src={Dune} class="card-img-top" alt="..."/>
              <div class="card-body bg-secondary text-light">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
         </div>


            <div className="col-lg-4 col-mb-6 col-sm-12 ">
            <div class="card" style={{width: '18rem'}}>
            <img src={Everything} class="card-img-top" style={{height: '420px'}}/>
            <div class="card-body bg-secondary text-light">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
               </div>

            </div>




            <div className="col-lg-4 col-mb-6 col-sm-12 ">

            <div class="card" style={{width: '18rem'}}>
            <img src={Infinite} class="card-img-top" style={{height: '420px'}}/>
            <div class="card-body bg-secondary text-light">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
           </div>

           <div className="col-lg-4 col-mb-6 col-sm-12 ">
           <div class="card" style={{width: '18rem'}}>
            <img src={Joker} class="card-img-top" style={{height: '420px'}}/>
            <div class="card-body bg-secondary text-light">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
           </div>


           <div className="col-lg-4 col-mb-6 col-sm-12 ">
           <div class="card" style={{width: '18rem'}}>
            <img src={Lightyear} class="card-img-top" style={{height: '420px'}}/>
            <div class="card-body bg-secondary text-light">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
           </div>


           <div className="col-lg-4 col-mb-6 col-sm-12 ">
           <div class="card" style={{width: '18rem'}}>
            <img src={Morbius} class="card-img-top" style={{height: '420px'}}/>
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

export default Trending