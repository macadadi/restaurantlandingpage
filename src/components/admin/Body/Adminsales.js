import React from 'react'
import TableOrders from './TableOrders'

function Adminsales() {
    return (
        <div>
              <div className="justify-content-center ">
            <div className="d-flex mt-2 justify-content-center">
       
         <div className='order-t-d d-delivered p-2 mr-2 align-center mb-2'>
            <h2>This months</h2>
            <h4>2000</h4>
         </div>
         <div className='order-t-d d-active p-2 mr-2 align-center mb-2'>
            <h2>Current week</h2>
            <h4>2000</h4>
         </div>
         <div className='order-t-d d-total p-2 mr-2 align-center mb-2 '>
            <h2>Past 3 months</h2>
            <h4>2000</h4>
         </div>
        </div>
        <div className=" col-md-10 p-2 m-auto  ">

        </div>
        <div className=" col-md-10 p-2 m-auto  ">

            {/* table  */}

            <TableOrders />

</div>
   </div>
        </div>
    )
}

export default Adminsales
