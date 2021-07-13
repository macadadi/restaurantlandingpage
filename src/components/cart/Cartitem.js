import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {removefromcart} from '../redux/productSlice'

//receiving props from cart detail
function Cartitem({name,price,id,quantity,cost}) {

    const cart = useSelector(state=>state.products.cart)
    const dispatch = useDispatch()
    let total =0

    const updatequantity=(e)=>{
        e.preventDefault()
      const  newcart = cart.filter(cart=>cart.id !== id)
      newcart.map((item,index)=>{
          const current_price=  item.price * item.count
          total += current_price
      })  
      
      
      const item={
        total,newcart
      }
      dispatch(removefromcart(item))

      
    }
    return (

        <tr >
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{cost}</td>
            <td>
            <button onClick={updatequantity} value='-1' type="submit" className=" btn-sm ml-1  sub-btn  
            btn-outline-danger">remove</button>
  
            </td>

        </tr>

  
    )
}

export default Cartitem
