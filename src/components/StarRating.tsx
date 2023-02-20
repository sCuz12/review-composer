import React from 'react'
import { Flame } from 'tabler-icons-react';

type Props = {}

export default function StarRating({ }: Props) {
    return (
        <div className='flex'>
            {[...Array(5)].map((flame,i) => {
                const ratingValue = i + 1 ;

                return (
                    <label >
                        {/* <input className='hidden' type="radio" value={ratingValue} onClick={()=>{setRating(ratingValue)}}/> */}
                        <Flame className='reviewIcon' />
                      
                    </label>
                )

            })}

        </div>
    )
}