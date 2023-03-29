import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { BookState } from "../context/BookProvider";
import { BaseApp } from "../core/BaseApp";



export function BookComponent(){


const {book, setBook} = BookState();

const history = useHistory();
const DeleteUser = (idx)=>{

    const alterList = book.filter((per)=>per.id !==idx)
    setBook(alterList);
}


    return(
        <BaseApp 
        title="List Of Books">
        <div className="user-content">

{
book &&(
    book?.map((person,idx)=>(
        <div key={idx} className="user-card">

            <h1> {person.name}</h1>
            <img src={person.image}/>   
            <p> Author : {person.author}</p>
            <p> Description: {person.description}</p>

            <div className="btn-group">
                   
                    <Button
                    onClick={()=>history.push(`/edit/${person.id}`)}
                     variant="contained" 
                     color="secondary">
                      Edit
                    </Button>

                    <Button 
                     onClick={()=>history.push(`/book/${idx}`)}
                    variant="contained" 
                    color="success">
                    View
                    </Button>

                    <Button
                      onClick={()=>DeleteUser(person.id)}
                    variant="contained"
                    color="error"
                     >
                        Delete
                        </Button>


                    {/* <button
                        onClick={()=>DeleteUser(person.id)}
                        className="del-btn">Delete
                    </button> */}
            </div >

        </div>
    ))
)}


        </div>
        </BaseApp>
    )
}