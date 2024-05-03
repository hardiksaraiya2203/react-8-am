import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DEC, INC } from './action/counteraction'

export default function CounterData() {
  const data = useSelector(y=>y.counter)
  const dis = useDispatch()

  const inc = () =>{
    // dis(INC())
    dis({"type": "INCREMENT_ASYNC"})
  }
  const dec = () =>{
    dis(DEC())
  }
  return (
    <div>
      {data}

      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  )
}