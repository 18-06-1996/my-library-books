import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BookState } from "../context/BookProvider";
import { BaseApp } from "../core/BaseApp";
import * as yup from 'yup'
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";

const bookValidationSchema = yup.object({
    id : yup.string().required("shoud be filled a valid ID"),
    name : yup.string().required("should be filled a name of the book"),
    image:yup.string(),
    author : yup.string().required("shoud be filled a author name"),
    description : yup.string().required("shoud be filled short description")
})

export function EditBook(){
    const {book,setBook} = BookState();
    const history = useHistory();
    const{id} = useParams();
    const selectedBook = book.find((per)=>per.id===id);

    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues: {
            id : selectedBook.id ,
            name : selectedBook.name,
            image : selectedBook.image,
            author : selectedBook.author,
            description : selectedBook.description,
          },
          validationSchema : bookValidationSchema,
          onSubmit : (editData)=>{
          console.log(editData);
          updateBook(editData);
          }
    
    })
    

  
    
    
    // const [idx,setIdx] = useState('');
    // const [name, setName] = useState('');
    // const [image, setImage] = useState('');
    // const [author,setAuthor] = useState('');
    // const [description,setDescription] = useState('');

  

    //  useEffect(()=>{
    //         setIdx(selectedBook.id);
    //         setName(selectedBook.name);
    //         setImage(selectedBook.image)
    //         setAuthor(selectedBook.author);
    //         setDescription(selectedBook.description);
    //  },[]);

const updateBook=(editData)=>{
    const editIndex=book.findIndex((per)=>per.id === id);
    console.log(editIndex)

    
     book[editIndex]=editData;
     setBook([...book]);
     history.push("/");
}


    return(
        <BaseApp
title={"Edit A  Book Details"}>
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

>
  updateBook
</Button>
</form>

</BaseApp>
    )
}