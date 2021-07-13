import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cartitem from './Cartitem'


//receiving data from productSlice
function Cartdetail() {
    const prod = useSelector((state)=>state.products)
    const Total = prod.total
    const products = prod.cart
    return (
   
      <div className="h-100 bg-info ml-2 mr-2  pt-4 mt-4 pb-4 mb-4 col-md-12 ">
        
      <table class="table table-light table-hover table-sm">
   
          <thead>
          <tr className="bg-info">
         <th colspan="5" className='text-center text-capitalize' > <h4>Your Shopping cart</h4></th>
        
         </tr> 
              <tr className="bg-primary mb-1">
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">cost</th>
              <th scope="col"> Total cost: Ksh {Total} </th>
              </tr>
          </thead>
          <tbody>
          {products && products.map((product,index)=><Cartitem key={index} num={index + 1} name={product.name} 
             quantity={product.count} cost={product.count * product.price} price={product.price} id={product.id}/>)}
          </tbody>
    </table>

    {/* payment section  */}
    <div className='text-center'>
      <p>Total Cost: Kshs {Total} /=</p>
        <h5>Payment options</h5>
    </div>
       <div>
<div >
<label className="container text-  ">Mpesa
<Link to='/payment' > <input type="radio" defaultChecked="checked" name="radio"  /></Link>
<span className="checkmark text-primary" />
</label>
<label className="container text-secondary d-flex ">Debit Card <p class="font-italic text-primary">(Comming soon)</p>
<input type="radio" name="radio" />
<span className="checkmark" />
</label>


</div>
</div> 
</div>
     
    )
}

export default Cartdetail
