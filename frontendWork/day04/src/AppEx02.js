import React from 'react'
import { useState } from 'react';

function App() {
  const [arr, setArr] = useState(["a","b","c"])
  const [newArr, setNewArr] = useState()
  return (
    <div>
      <p>
        <input type="text" value={newArr} onChange={(e)=>setNewArr(e.target.value)}></input>
        <button onClick={(e)=>{
          setArr([...arr, newArr ])
        }}>
          add
        </button>
      </p>
      <ul>
      {
        arr.map((value,idx)=>{
          return <li key={idx}>{value}</li>
        })
      }
      </ul>
    </div>
  )
}

export default App