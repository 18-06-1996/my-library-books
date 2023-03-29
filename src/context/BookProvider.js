import React, {children, createContext, useContext, useState } from "react";
import { data } from "../Datas/Data";



const BookContext = createContext();

export  const BookProvider = ({children})=>{

    const[book, setBook] = useState(data);

   
return(
    <BookContext.Provider
    value={{
        book,
        setBook
    }}>

        {children}
  
  </BookContext.Provider>
)
}

export const BookState = ()=>{
    return useContext(BookContext)
}