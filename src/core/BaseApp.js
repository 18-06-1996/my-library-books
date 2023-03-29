import { Button } from '@mui/material';
import React, { children } from 'react';
import { useHistory } from 'react-router-dom';
import { BookState } from '../context/BookProvider';



export function BaseApp({title,children}){

    const history = useHistory();
    const{book,setBook} = BookState();

const noOfBooks = console.log(book.length)
   
    return(

        <div>
<div className='side-bar'>
    <h1>CURD OPERATION</h1>
<div className='btn-groups'>



    <Button
     onClick={()=>history.push("/")}
     variant="contained"
     disableElevation>
  DashBoard
</Button>

<Button
      onClick={()=>history.push("/add/book")}
     variant="contained"
     disableElevation>
  Add Book
</Button>
    
<Button
variant="contained"
 color="secondary">
    Total Books - {book.length}
    </Button>
   
    </div> 
    
</div>
<div className='title'>
{title}

</div>

<div className='children'>
    {children}</div>

<footer className='footer'>
    <div> CopyRight With 2023</div>
    <div>karthick18696@gmail.com</div>
</footer>
        </div>
    )
}