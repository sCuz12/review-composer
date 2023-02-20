import { Text } from '@mantine/core';
import React from 'react'
import { Flame } from 'tabler-icons-react';

type Props = {
    title: string,
    setRating: any,
    rating: number
}

export default function StarRating({ title, setRating, rating }: Props) {
    return (
        <div className='flex flex-col items-center gap-2'>

            <Text fz="xl" >{title}</Text>
            <div className='flex'>
                {[...Array(5)].map((flame, i) => {
                    const ratingValue = i + 1;

                    return (
                        <label>
                            <input className='hidden' type="radio" value={ratingValue} onClick={() => { setRating(ratingValue) }} />
                            {
                                ratingValue <= rating ? (
                                    <Flame fill='' size={45} className='reviewIcon' />
                                ) :
                                    (
                                        <Flame size={45} className='reviewIcon' />
                                    )
                            }

                        </label>
                    )

                })}

            </div>
        </div>
    )
}