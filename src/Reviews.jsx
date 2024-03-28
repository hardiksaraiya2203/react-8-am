import React, { useState } from 'react'
import { reviews } from "./Review";

const Reviews = () => {
    const [data,setData] = useState(reviews)

    const handleReview = () => {
        
    }

  return (
    <div>
        {
            data.map((value,index)=>{
                return 
            })
        }
      
    </div>
  )
}

export default Reviews
