import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'
import {senddata} from '../redux/productSlice'

function Payment() {
    const [number,setNumber]=useState()
    const dispatch = useDispatch()
    const Total = useSelector((state)=>state.products.total)

    const sendpostdata =e=>{
        e.preventDefault()
        dispatch(senddata({
            amount :Total,
            number : number,
            
        }))
    }

    return (
        <div>
            <form> 
            {/* the payment option */}
            <div className="w-100 d-flex justify-content-center align-items-center payment-div  ">
                <div className='col-md-8 bg-light m-5 payment-shad '>
            <form className=" ">
            <div className='form-group d-flex'>
                <span className="form-control text-center mt-4" >Amount to be deducted Ksh{Total}</span>
         
                </div>
                <div className='form-group d-flex'>
                <span className='pt-2 mr-2 font-weight-bold ' >Number</span>
               <input type='text' className='bg-info' onChange={e=>setNumber(e.target.value)} placeholder='please enter your number'/>
                </div>
                <button type='submit' onClick={sendpostdata} className='btn btn-success  w-100 mb-4 text-dark '>Confirm</button>
            </form>
            <div className=''>
           <p>
                After entering your number and confirming it you wiil receive a pop up in your 
                phone. Please enter your pin to finish the transaction.After this you will automaticaly
                be redirected to checkout page.
            </p>
           </div>
            </div>
            </div>
        </form> 
        
        </div>
    )
}

export default Payment


