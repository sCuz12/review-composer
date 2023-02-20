import { Flex, Grid, Text, Title } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import RevieweeTypeCard from '../Cards/RevieweeTypeCard'


type Props = {

}

export default function Steptwo({ }: Props) {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    // useEffect(()=>{
    //     console.log(activeButtonIndex)
    // },[activeButtonIndex])

    const revieweeTypeOnClick = (id:number) : any  => {
        setActiveButtonIndex(id)
    }
    return (
        <div className='flex flex-col w-full gap-12'>
            <div className='flex flex-col gap-4'>
                <Title order={2} className="text-secondary-color">Reviewee Type</Title>
                <Text className='text-slate-500'>Select the type of reviewee (Host,Guest)</Text>
            </div>

            <Flex className="items-center" direction={{ base: 'column', sm: 'row' }}
                gap={{ base: 'sm', sm: 'xl' }}  justify={{ sm: 'center' }}>
                <RevieweeTypeCard selected={activeButtonIndex === 1} setSelected={()=>revieweeTypeOnClick(1)} revieweeType='guest' />
                <RevieweeTypeCard selected= {activeButtonIndex === 2} setSelected={()=> revieweeTypeOnClick(2)} revieweeType='host' />
            </Flex>


        </div>
    )
}