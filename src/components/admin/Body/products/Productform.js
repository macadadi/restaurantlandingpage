import axios from 'axios'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addproduct, Base_url,fetchdata } from '../../../redux/productSlice'


const Productform=()=> {
  const [category,setCategory]=useState()
  const [file,setFile]=useState()
  const [name,setName]=useState()
  const [price,setPrice]=useState()
  const [description,setDescription]=useState()

  const dispatch = useDispatch()

  const handleupload =(e)=>{
    e.preventDefault()
    // let data ={ category,file,name,price,description }
    const formData = new FormData()
    formData.append('category',category)
    formData.append('image',file)
    formData.append('name',name)
    formData.append('price',price)
    formData.append('description',description)
    //  dispatch(addproduct(formData))
     axios.post(`${Base_url}/index`,formData,{
       headers :{
        "Content-Type":"multipart/form-data"
       }
     }).then(response=>{dispatch(fetchdata)
  })
     .catch(errors=>console.log(errors))

//set back state to default
     setCategory('')
     setFile()
     setName('')
     setPrice('')
     setDescription('')


  }
    return (
        <div>

            <div className="mt-4 pt-4 pb-4 mb-3  ">
                          
         <form className="form text-dark col-md-6 justify-content-center m-auto product-form">
             <h3 >Upload new product</h3>
  <div className="form-group">
    <label htmlFor="productname"style={{color:'black',textDecoration:'none',}}>Name</label>
    <input type="text" className="form-control form-control-sm" value={name} onChange={e=>setName(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="productname" style={{color:'black',textDecoration:'none',}}>Price</label>
    <input type='text' className="form-control form-control-sm" value={price} onChange={e=> e.target.value > 1 ? setPrice(e.target.value): ''}/>
  </div>
  <div className="form-group">
    <label htmlFor="productname"style={{color:'black',textDecoration:'none',}}>Description</label>
    <textarea className="form-control form-control-sm" row='3' value={description} onChange={e=>setDescription(e.target.value)} />
  </div>
  <label className="my-1 mr-2" style={{color:'black',textDecoration:'none',}}>Category</label>

  <select className="custom-select my-1 mr-sm-2 form-control-sm" value={category} onChange={e=>setCategory(e.target.value)}>
    <option selected>Choose..</option>
    <option value="Shoes">Shoes</option>
    <option value="Bags">Bags</option>
    <option value="Cloths">General</option>
  </select>
  <div class="form-group d-flex">
    <label for="exampleFormControlFile1">Upload file</label>
    <input type="file" class="form-control-file form-control-sm" id="exampleFormControlFile1"  onChange={e=>setFile(e.target.files[0])}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={handleupload}>Submit</button>
</form>
            </div>

        </div>

    )
}

export default Productform
