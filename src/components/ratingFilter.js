import React from 'react'
import Rating from './rating'

function RatingFilter({onChangeRating, count}) {
    return (
        <div className='searchRating'>
            <p style={{textDecoration:'underline'}}> <strong>Min Rating</strong></p>
            <Rating             
            count={count} 
            onChangeRate={(newRating)=>onChangeRating(newRating)}
            />
            
        </div>
    )
}

export default RatingFilter
