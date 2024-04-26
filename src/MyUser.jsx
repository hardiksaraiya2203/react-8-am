import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getUser from './asyncAction/Myuserasyncaction'

export const MyUser = () => {

    const data = useSelector(y=>y.myuser?.data.data)
    const dis = useDispatch()

    useEffect(()=>{

        dis(getUser())
    },[])
  return (
    <div>
        {
            data.map((value)=>{

                return (value.name)

            })
        }
    </div>
  )
}
