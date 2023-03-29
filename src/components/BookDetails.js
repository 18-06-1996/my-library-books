import React from "react";
import { useParams } from "react-router-dom";
import { BookState } from "../context/BookProvider";
import { BaseApp } from "../core/BaseApp";


export function BookDetails(){

    const{book} = BookState();
    const{id} = useParams();
    const person = book[id];
    return(
<BaseApp 
title="Book information">

        <div className="user-content-view">

            <div className="user-card">
                <h1>{person.name}</h1>
                <img src={person.image}/>
                <p>Author : {person.author}</p>
                <p>Description : {person.description}</p>
            </div>
        </div>
</BaseApp>
    )
}