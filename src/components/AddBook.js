import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BookState } from "../context/BookProvider";
import { BaseApp } from "../core/BaseApp";
import * as yup from 'yup'
import { useFormik } from "formik";

const userValidationSchema = yup.object({
    id : yup.string().required("shoud be filled a valid ID"),
    name : yup.string().required("should be filled a name of the book"),
    image:yup.string(),
    author : yup.string().required("shoud be filled a author name"),
    description : yup.string().required("shoud be filled short description")
})



export function AddBook(){
    const {book,setBook} = BookState();
    const history = useHistory();
    

const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
    initialValues: {
        id : "",
        name : "",
        image : "",
        author : "",
        description : "",
      },
      validationSchema : userValidationSchema,
      onSubmit : (newBook)=>{
      console.log(newBook);
      addNewBook(newBook);
      }

})




const addNewBook=(newBook)=>{

   
  
    setBook([...book, newBook])
    history.push("/")
}


    return(
<BaseApp 
title={"Add A New Book"}>
    
<form  className="text-areas" onSubmit={handleSubmit}>
    <TextField  fullWidth
     id="outlined-basic"
     label="ID" 
     name="id"
     variant="outlined"
     onBlur={handleBlur}
     value={values.id}
     onChange={handleChange}
     />
{touched.id && errors.id ? <p style={{color:"crimson"}}> {errors.id}</p> : ""}
<TextField fullWidth
     id="outlined-basic"
     label="NAME" 
     variant="outlined"
     name="name"
     onBlur={handleBlur}
     value={values.name}
     onChange={handleChange}
     />
{touched.name && errors.name ? <p style={{color:"crimson"}}> {errors.name}</p> : ""}

     <TextField fullWidth
     id="outlined-basic"
     label="IMAGE" 
     variant="outlined"
     name="image"
     onBlur={handleBlur}
     value={values.image}
onChange={handleChange}
     />
{touched.image && errors.image ? <p style={{color:"crimson"}}> {errors.image}</p> : ""}

     <TextField fullWidth
     id="outlined-basic"
     label="AUTHOR" 
     variant="outlined"
     name="author"
     onBlur={handleBlur}
     value={values.author}
     onChange={handleChange}
     />
{touched.author && errors.author ? <p style={{color:"crimson"}}> {errors.author}</p> : ""}

     <TextField fullWidth
     id="outlined-basic"
     label="DESCRIPTION" 
     variant="outlined"
     name="description"
     onBlur={handleBlur}
     value={values.description}
     onChange={handleChange}
     />
     { touched.description && errors.description ? <p style={{color:"crimson"}}> {errors.description}</p> : ""}

<Button 
variant="contained" 
type="submit"
color="success"
// onClick={addNewBook}
>
  Add Book
</Button>
</form>
   
</BaseApp>
    )
}