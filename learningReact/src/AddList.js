import React, { useState } from 'react'

export default function AddList() {
    const [title,seTitle]=useState()
    const [date,setDate]=useState()
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(title,date)
    }
  return (
    <form onSubmit={handleSubmit}>
       
    <label>
        <span>which programming language do you love.</span>
        <input type={"text"} placeholder="Your title"></input>
        <input onChange={e=>seTitle(e.target.value)}></input>
    </label>
    <label>
        <span>When you learn this thing?</span>
        <input  onChange={e=>setDate(e.target.value)} type={"date"}></input>
    </label>
    <button>Submit</button>
    </form>
  )
}
