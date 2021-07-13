import React from 'react'
import pp from './pp.png'
import ll from './ll.jpg'
import kk from './kk.jpg'


function Landingcauresal() {
    return (
    
           <div id="carouselExampleIndicators" className="carousel slide caureldiv" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block img-fluid w-100" src={kk} alt="First slide" /> 
       <div className="carousel-caption d-none d-md-block">
           <h5>Top trending</h5>
           <p>you cant miss having this</p>
          </div>

    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid w-100" src={ll} alt="Second slide" />
      <div className="carousel-caption d-none d-md-block">
           <h5>Top trending</h5>
           <p>you cant miss having this</p>
          </div>
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid w-100" src={pp} alt="Third slide" />
      <div className="carousel-caption d-none d-md-block">
           <h5>Top trending</h5>
           <p>you cant miss having this</p>
          </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>


    
        
    )
}

export default Landingcauresal
