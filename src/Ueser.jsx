import { data } from "autoprefixer"
import { useEffect, useState } from "react"

export default function Ueser(){
    const [users , setUsers]= useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // .then (data=>console.log(data))
        .then (data=>setUsers(data))
    },[])

 return(
    <div>
        <h3>users:{Ueser.length}</h3>
    </div>
 )
}

/***
 * 1.declare a state to hold the data 
 * 2.useEffect with call back and dependency array
 * 3.uer fetch load data
 */