import {useState} from "react"
import Button from "./Button"
const Calculator = () => {

    const [input, setInput] = useState("")
    const [result, setResult] = useState("")


    const handleInput = (value) =>{
        setInput((prev)=>prev+value)
    }

    const calculateResult = () =>{
        try{
            setResult(eval(input))
        }catch(err){
            setResult('Error')
        }
    }

    const clearInput=()=>{
        setInput("")
        setResult("")
    }
    const deleteLast = ()=>{
        setInput(input.slice(0,-1))
    }

    const btnArr =['+','-','7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '.', '0'] 

  return (
    <div className='calculator'>
        <div className="input">
            <h6>Input</h6>
            <input type="text" placeholder='0' value={input} readOnly/>
            <h6>Result</h6>
            <input type="text" placeholder='0' value={result} readOnly/>
        </div>

        <div className="buttons">

            <button onClick={clearInput}>AC</button>
            <button onClick={deleteLast}>Del</button>

            {btnArr.map((value)=>{
                return <Button handleInput={handleInput} value={value}/>
            })}

            <button className="equal" onClick={calculateResult}>=</button>
        </div>
    </div>
  )
}

export default Calculator