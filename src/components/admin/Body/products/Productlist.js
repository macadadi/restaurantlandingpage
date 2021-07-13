import React from 'react'
import { useSelector } from 'react-redux'
import {fetchdata,Base_url} from '../../../redux/productSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProductOutputTable from './ProductOutputTable'

// geting props from adminproducts
function Productlist() {
    const dispatch = useDispatch()
  
    useEffect(()=>{
        dispatch(fetchdata())
    },[])
    const products = useSelector(state=>state.products.data)

    // functionn to delete data from database 

    return (
        <div>
           <ProductOutputTable  products={products}/> 
        </div>
    )
}

export default Productlist
