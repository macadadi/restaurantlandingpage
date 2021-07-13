import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



export const Base_url ='https://restaurant-backend-mac.herokuapp.com/api' // 'http://localhost:8000/api'
export const Img_url ='https://restaurant-backend-mac.herokuapp.com/' // 'http://localhost:8000/'



export const fetchdata = createAsyncThunk(
  'product/fetchdata', async ()=>{
    // https://restaurant-backend-mac.herokuapp.com/api/index
      const req = await fetch(`${Base_url}/index`).catch(err=>console.log('an error occured',err))
      return req.json()
  }
)

export const addproduct = createAsyncThunk(
  // https://restaurant-backend-mac.herokuapp.com/api/stkPush
  'product/addproduct',async (formData)=>{


    axios.post(`${Base_url}/index`,formData,{
      headers :{
        "Content-Type":"multipart/form-data"
      }
})
.then(res=>console.log("added successfuly"))
.catch(err=>console.log(err))

  }
)
export const senddata = createAsyncThunk(
  // https://restaurant-backend-mac.herokuapp.com/api/stkPush
  'product/senddata',async (data)=>{
    fetch(`${Base_url}/stkPush`,{
      method : 'post',
      headers :{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response=>response.json())
    .then(console.log('am done with '))
  }
)

const initialState={
    value:0,
    user:'admin',
    cart:[],
    Bags:[],
    Shoes:[],
    Cloths:[],
    total:0,
    status:'',
    data:'',
    payment:{
      status:'',
      errors:'',
      
    }
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    removefromcart: (state,action) => {
      //This payloads are comming from cartitem
      state.total = action.payload.total
      state.cart = action.payload.newcart
    },
    addShopping: (state, action) => {
        state.cart.unshift(action.payload)
        state.total += parseInt(action.payload.price) * parseInt(action.payload.count)
        state.value +=parseInt(action.payload.price)
    },
    addBags :(state,action)=>{
      state.Bags = action.payload
    },
    addShoes :(state,action)=>{
      state.Shoes = action.payload
    },
    addCloths :(state,action)=>{
      state.Cloths = action.payload
    }
  },
  extraReducers :{
    [fetchdata.pending] : (state,action)=>{
       state.status = 'pending'
    },
    [fetchdata.fulfilled] : (state,action)=>{
       state.data = action.payload
       state.status = 'fulfilled'
    },
    [fetchdata.rejected] :(state,action)=>{
        state.status = 'rejected'
    },
    // payment handler
    [senddata.pending]:(state)=>{
      state.payment.status ='pending'
    },
    [senddata.fulfilled]:(state,payload)=>{
      state.payment.status = 'fulfilled'
    }

   }
})

// Action creators are generated for each case reducer function
export const { removefromcart, addShopping , addBags,addCloths,addShoes } = productSlice.actions

export default productSlice.reducer