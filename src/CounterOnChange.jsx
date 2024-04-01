import React, { useState } from 'react'

const CounterOnChange = () => {

    const [data,setData] = useState({
        inputNumber : "",
    })
    const [counter,setCounter] = useState(0)


    const handleInput = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const inc = () =>{
        setCounter(counter + Number(data.inputNumber))
        console.log(counter)
    }
    const dec = () =>{
        if(counter - Number(data.inputNumber)>=0 ){

            setCounter(counter - Number(data.inputNumber))
            console.log(counter)
        }

    }
  return (
    <div>

        <form>
            <button type="button" onClick={dec}>-</button>
            <input type="text" name='inputNumber' id='inputNumber' onChange={handleInput}/>
            <button type="button" onClick={inc}>+</button>
            <div>{counter}</div>
        </form>
      
    </div>
  )
}

export default CounterOnChange
