import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {  Base_url,addCloths,addBags,addShoes } from '../../redux/productSlice'
import ProductOutputTable from './products/ProductOutputTable'


function BagsComponent({match}) {
    const  query = match.params.name
    
   const shoes = useSelector(state=>state.products.Shoes)
   const bags = useSelector(state=>state.products.Bags)
   const cloths = useSelector(state=>state.products.Cloths)
    const dispatch = useDispatch()
    
    let addData
    let products
    if(query == 'Shoes'){
        addData = addShoes
        products =shoes
    }
    else if(query == 'Clothes'){
        addData = addCloths
        products =cloths
    }
    else{
        addData = addBags
        products = bags
    }
 
    useEffect(()=>{
        getBags()
    },[query])
    const getBags = async()=>{
     
        axios.get(`${Base_url}/search/${query}`)
        .then(res=>{
            dispatch(addData(res.data))
            

        })
        .catch(error=>console.log(console.error()))
    }
 
    return (
        <div>
        <ProductOutputTable  products={products}/>
        </div>
    )
}

export default BagsComponent
