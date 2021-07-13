import React from 'react'

function TableOrders() {
    return (
        <div>
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

export default TableOrders
