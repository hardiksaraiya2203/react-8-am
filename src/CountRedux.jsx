import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DEC, INC } from './aaction/CountAction'

const CountRedux = () => {

    const s = useSelector(y=>y)
    const dis = useDispatch()

    const INCREMENT = () =>{
        dis(INC())
    }
    const DECREMENT = () =>{
        dis(DEC())
    }
  return (
    <div>

        {s}
        <button onClick={INCREMENT}>+</button>
        <button onClick={DECREMENT}>-</button>
      
    </div>
  )
}

export default CountRedux


// btn call-->function-->action-->reducer-->store-->component has changed value of state


// drop  =
// 2 drop
// drop
// no 
// no 
// no 
// // emp 
// t
// d
// d
// n

// tax
// t
// t
// t
// check

