import React from 'react'
import Singlemeal from './Singlemeal'
import { useEffect} from 'react';
import { fetchdata,Base_url,addBags,addShoes,addCloths } from './redux/productSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Landingcauresal from './Landingcauresal';
import Zoom from 'react-reveal/Zoom';

function Bagscontainer({match}) {
  const query = match.params.name
    const category = useSelector(state=>state.products.data)
    const cloths = useSelector(state=>state.products.Cloths)
    const bags = useSelector(state=>state.products.Bags)
    const shoes = useSelector(state=>state.products.Shoes)
    const dispatch= useDispatch()

    let addData
    let products
    if(query == 'Shoes'){
        addData = addShoes
        products =shoes
    }
    else if(query == 'Cloths'){
        addData = addCloths
        products =cloths
    }
    else if(query == 'Bags'){
        addData = addBags
        products = bags
    }
    else{
      products = category
    }




    useEffect(async () => {

    dispatch(fetchdata())
    getSpecificProduct()
    },[query])
    
    const getSpecificProduct = async()=>{
         
      axios.get(`${Base_url}/search/${query}`)
      .then(res=>{
          dispatch(addData(res.data))
          

      })
      .catch(error=>console.log(console.error()))
  }


    return (
     <div className="">
  {query ? '' :   <Zoom> <div> <Landingcauresal /></div></Zoom>}
       <div><h3>{query == 'Cloths' ? "Clothes" : query}</h3></div>
  <div className="row bg-light">

      {products && Object.keys(products).length ? products.map((product,index)=>(<Singlemeal key={index} 
       name={product.name} price={product.price}
     id={product.id} description={product.description}  num={Math.floor(Math.random() * 4)  }
       dir={Math.floor(Math.random() * 1)}  prd_img={product.image} /> )) : 
       <div className='d-load ml-3 mr-3'>
       <div class="lds-roller "><div></div><div></div><div></div><div></div><div></div>
       <div></div><div></div><div></div></div> loading.. </div>
       }
 
  </div>
</div>

    )
}

export default Bagscontainer
