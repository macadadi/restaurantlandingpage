import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import Zoom from 'react-reveal/Zoom';
import { addShopping , Img_url } from './redux/productSlice';
import pp from './pp.png'

//receiving props from meal section
function Singlemeal({num,description,name,price,id,prd_img}) {
  
    const [count,setCount]=useState(1)
     const dispatch = useDispatch()
  

     

     const handledispatch =(e)=>{
       e.preventDefault()


       dispatch(addShopping({id,name,price,count}))
     }

     

     const updatequantity=(e)=>{
       e.preventDefault()
       if(count > 1 | parseInt(e.target.value) > 0){
        setCount(count + parseInt(e.target.value))
       }
      
     }
   
    return (
            <div className="col-md-6 col-lg-4 col-sm-6">
               <Zoom  >
                     {/* <Item> */}
                <div className="m-2 p-2 single-meal">
                <p className='col-12 ml-4 font-weight-bold'>{name}</p>
                {console.log(prd_img)}
                {/* to workon image later
                 <img src={Img_url + prd_img} */}
                <img src={pp}
                 class="img  rounded img-fluid max-width: 100%" alt="Responsive drinks"/>
                   
                 <div className="pt-auto ">
                     <div className="d-flex justify-content-between   qq">

                         {/* <button value='-1' type='submit' className='col-2  btn-sm qtt-btn'  onClick={updatequantity}>-
                         </button>
                          <small>quantity</small>{count}  
                         <button value='1' type='submit' className='col-2 bg-info  btn-sm qtt-btn' 
                          onClick={updatequantity}>+</button>  */}
                         <span className='p-1'>Ksh {price}</span>
                         
                         </div>

                         <p> {description}</p>
                  <button className='btn  btn-cart w-100 ' onClick={handledispatch}  >Add to cart</button>
                 </div>
                 </div>
                 {/* </Item> */}
                 </Zoom>
            </div>
      
    )
}

export default Singlemeal
