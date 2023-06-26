import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
  const AddServices=()=> {
  const navigate= useNavigate()
  const [description,setDescription]=useState("")
  const [values,setValues]=useState({
    title:"",
    content:"",
   })
    useEffect(()=>{
        if(!localStorage.getItem("Token")&& localStorage.getItem("Role")==="admin"){
            navigate("/manageuser")
        }
    },[])
    const handleChange=(e)=>{
       const {name,value}=e.target
       setValues({
        ...values,
        [name]:value
       })
    }
    console.log(values)
      return (
            <div className="App">
                <h2>Add Services</h2><br/>
                <div className='container'>
                <div className='row'>
                    <div className='col-12'></div>
                    <input type="text" placeholder='title' onChange={handleChange} name="title"/>
                </div><br/>
                <div className='row'>
                    <div className='col-12'></div>
                    <input type="text" placeholder='content' onChange={handleChange} name="content"/>
                </div><br/>
                <CKEditor
                    editor={ ClassicEditor}
                  // onReady={editor}
                    onChange={handleChange}
                    name="description"
                  />
            </div>
            </div>
        );
    }
export default AddServices;
