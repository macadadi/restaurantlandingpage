import React from 'react'



function Customers() {
 
    return (
        <div>
            <div className="d-flex">
            <label className="my-1 mr-2 pt-1" style={{color:'black',textDecoration:'none',}}>Order by</label>
  <select className="custom-select my-1 mr-sm-2 form-control-sm col-3" >
    <option selected>Choose..</option>
    <option value="">Price min-max</option>
    <option value="Bags">price max-min</option>
    <option value="General">Name A-Z</option>
    <option value="General">Name Z-A</option>
  </select>
            </div>
                    <table class="table table-light table-hover table-sm">
         
         <thead>
         <tr className="bg-info">
        <th colspan="6" className='text-center text-capitalize' > <h4>Your Shopping cart</h4></th>
       
        </tr> 
             <tr className="bg-primary mb-1">
             <th scope="col">Invoice</th>
             <th scope="col">Product</th>
             <th scope="col">Quantity</th>
             <th scope="col">Customer</th>
             <th scope="col"> Total cost: Ksh 200 </th>
             <th scope="col"> Status </th>
             </tr>
         </thead>
         <tbody>
         {/* {products && products.map((product,index)=><Cartitem key={index} num={index + 1} name={product.name} 
            quantity={product.count} cost={product.count * product.price} price={product.price} id={product.id}/>)}
             */}
         </tbody>
   </table>
        </div>
    )
}

export default Customers
