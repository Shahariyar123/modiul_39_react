import { useState } from "react"

export default function Team(){
const [team, setTeam]= useState(11)

const handleAdd =()=>{
    const newCount = team + 1
    setTeam(newCount)
}
const handleReduce =()=>{
    const redusceCount = team - 1
    setTeam(redusceCount)
}
const teamstyle = {
    border: '2px solid black',
    margin:'15px',
    padding :'15px',
    borderRadius:'8px'
}

    return(
        <div style={teamstyle}>
            <h3>players:{team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}