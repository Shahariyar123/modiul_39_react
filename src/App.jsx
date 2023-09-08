import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Ueser from './Ueser'

function App() {
  

  function handleClick(){
    alert('harlar putte kothay click dicu')
  }
const handleClick2 =()=>{
  alert('kicu nai re ba')
} 


const addToFive = (num) =>{
  alert(num + 5)
}

  return (
    <>

      <h4> React core Concepts -2</h4>
      <Ueser></Ueser>
      <Team></Team>
      <Counter></Counter>
     <div > <button className='bg-gray-500 p-2 mx-8'  onClick={handleClick}>Click Me</button>
      <button className='bg-gray-500 p-2 mx-8' onClick={handleClick2}>Click -2</button>
      <button className='bg-gray-500 p-2 mx-8' onClick={()=>{alert('ভুল ভাল')}}>third</button>
      <button className='bg-gray-500 p-2 mx-8' onClick={()=>addToFive(3)}>four</button></div>
    </>
  )
}

export default App
