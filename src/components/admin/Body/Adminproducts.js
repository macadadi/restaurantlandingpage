import React from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import BagsComponent from './BagsComponent'
import Productform from './products/Productform'
import Productlist from './products/Productlist'

function Adminproducts() {
    return (
        <div >
            <div className="d-flex justify-content-between">
                <div></div>
                <div className="mt-3  p-2 col-md-4 d-flex  add-product">
               <Link style={{color:'white',textDecoration:'none',}} to='/products/form'> <h4>Add new product</h4></Link>
            </div>
            </div>
          <div className="d-flex  mt-4 justify-content-between">
              
              <Link style={{color:'black',textDecoration:'none',}} to='/products'>   
              <div className="p-2 m-1  product-div align-center">    <h3>All products</h3>
                  <h5>2000</h5>
              </div></Link>
              
               <Link style={{color:'black',textDecoration:'none',}} to='/products/Shoes'>
                   <div className="p-2 m-1  product-div align-center">   <h3>Shoes</h3>
                  <h5>200</h5>              </div></Link> 

           
              <Link style={{color:'black',textDecoration:'none',}} to='/products/Bags'> 
              <div className="p-2 m-1  product-div align-center">  <h3>Bags</h3>
                  <h5>100</h5>   </div></Link>
           
              
              <Link style={{color:'black',textDecoration:'none',}} to='/products/Cloths'>
                   <div className="p-2 m-1  product-div align-center">   <h3>Cloths</h3>
                  <h5>400</h5> 
              </div>
              </Link> 

          </div>
          <Switch>
              <Route exact path="/products/form" component={Productform}/>
              <Route exact path="/products" component={Productlist}/>
              <Route exact path="/products/:name" component={BagsComponent} />
          </Switch>
        </div>
    )
}

export default Adminproducts
