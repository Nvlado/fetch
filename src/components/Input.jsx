import { useState } from "react"
import {useNavigate} from "react-router-dom"
export default function Input(){

const [input, setInput] = useState({
    title: "", 
    text: "", 
    author: "Luka"})

const navigate = useNavigate()

function handleChange(inputIdentifier, newValue){
    setInput(prevInput => { return {...prevInput, [inputIdentifier]: newValue}})
    }

function handleClick(event){
    event.preventDefault();
    const data = {input}
    fetch('http://localhost:8000/data/', 
    {method: 'POST', headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)}) 
    .then(()=> navigate("/home"))

}

return(
        <>
        <form className="form">
        <h2>Input</h2>
        <label>Title</label>
        <input onChange={(event)=> handleChange("title", event.target.value)} value={input.title} type="text" required></input>
        <label>Text</label>
        <textarea onChange={(event)=> handleChange("text", event.target.value)} value={input.text} required></textarea>
        <label>Hero</label>
        <select onChange={(event)=> handleChange("author", event.target.value)} value={input.author} >
            <option value="Luka">Luka</option>
            <option value="Noemi">Noemi</option>
            <option value="Ivana">Ivana</option>
            <option value="Josip">Josip</option>
        </select>
        <button onClick={handleClick}>Press me</button>
        </form>
        </>
    )
}