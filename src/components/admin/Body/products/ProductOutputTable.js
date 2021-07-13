import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import {fetchdata,Base_url} from '../../../redux/productSlice'
import { useDispatch } from 'react-redux'
//get props from product list
function ProductOutputTable({products}) {

    const [loading,setLoading] = useState(false)
    const dispatch = useDispatch()
    const handledelete= async (id)=>{
        axios.delete(`${Base_url}/destroy/${id}`,setLoading(true))
        .then(res=> {
           dispatch(fetchdata())
           setLoading(false)
        })
        .catch(err=>console.log(err))
           }
           const Loading =()=>{
              return(
               <div>Loading please wait</div>
              )
           }
    return (
        <div>
             <table class="table table-light table-hover table-sm">
         
         <thead>
         <tr className="bg-info">
        <th colspan="5" className='text-center text-capitalize' > <h4>Current available stock</h4></th>
       
        </tr> 
             <tr className="bg-primary mb-1">
             <th scope="col">Name</th>
             <th scope="col">Category</th>
             <th scope="col">Price</th>
             <th scope="col"> Display </th>
             <th scope="col"> action </th>
             </tr>
         </thead>
         <tbody>
        {products ? products.map(product=><tr>
            <th>{product.name}</th>
            <th>{product.category}</th>
            <th>{product.price}</th>
            <th>{product.description}</th>
            <th><button disabled={loading} onClick={()=>handledelete(product.id)}>remove</button></th>
        </tr>) : <Loading />}
         </tbody>
   </table>
        </div>
    )
}

export default ProductOutputTable
