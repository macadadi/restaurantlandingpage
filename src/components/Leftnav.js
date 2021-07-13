import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ViewHeadlineOutlinedIcon from '@material-ui/icons/ViewHeadlineOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import { useState } from 'react';

function Leftnav() {
  const [active,setActive]=useState(true)
  const prods = useSelector((state)=>state.products.cart)
  const count = Object.keys(prods).length
    return (


<div className=" d-flex justify-content-between mainnav sticky-top">

<div className="">
  <div className='toggleIcon p-2'onClick={e=>setActive(!active)}><button>{active ? <ViewHeadlineOutlinedIcon />
   : <ClearOutlinedIcon />}</button></div>
<ul className=" small-div"  style={{display:active ? `none`:`flex`}}>
      <li className="nav-item "onClick={e=>setActive(!active)}>
        <Link to="/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item"onClick={e=>setActive(!active)}>
        <Link to='/General' className="nav-link" >General</Link>
      </li>
      <li className="nav-item"onClick={e=>setActive(!active)}>
      <Link className="nav-link " to='/Shoes'>Shoes</Link>
      </li> 
       <li className="nav-item"onClick={e=>setActive(!active)}>
        <Link className="nav-link " to='/Bags'>Bags</Link>
      </li>
      <li className=""onClick={e=>setActive(!active)}>
        <Link className="nav-link " to='/Cloths'>clothes</Link>
      </li>
     
    </ul>


    <ul className=" big-div"  >
     
      <li className="nav-item">
        <Link to='/' className="nav-link" >Home<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link " to='/Shoes'>Shoes</Link>
      </li> 
       <li className="nav-item">
        <Link className="nav-link " to='/Bags'>Bags</Link>
      </li>
      <li className="">
        <Link className="nav-link " to='/Cloths'>Clothes</Link>
      </li>
     
    </ul>
  
</div>
<div >  <Link className="nav-link  cart-div " to='/cart'><ShoppingCartIcon  fontSize="small"/>
   {count < 1 ? 'Empty' : count == 1 ? `${count} item` : `${count} items`}</Link>
   </div>
</div>
    )
}

export default Leftnav
