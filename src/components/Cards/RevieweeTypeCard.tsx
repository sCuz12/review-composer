import { Text } from '@mantine/core';
import React from 'react'
import { IrevieweeType } from 'src/interfaces/IrevieweeType';
import { Briefcase, Home2 } from 'tabler-icons-react';


type Props = {
  revieweeType: 'guest' | 'host',
  setSelected : React.MouseEventHandler<HTMLDivElement>;
  selected : boolean
}

export default function RevieweeTypeCard({ revieweeType,setSelected,selected}: Props) {

  return (
    <div className={`${selected ? 'bg-secondary-color': ''} ${selected ? 'text-white': ''}  border rounded-lg w-52 h-52 border-secondary-color hover:bg-secondary-color  hover:text-white hover:cursor-pointer`} onClick={setSelected}>
      <div className='flex items-center justify-center w-full h-full '>
        <div className='flex flex-col items-center gap-2'>
          <Text fz="xl" fw="500" >{revieweeType.charAt(0).toUpperCase() + revieweeType.slice(1)}</Text>
          {revieweeType === "guest" ? (
            <Briefcase size={60} />
          ) : <Home2 size={60} />}
        </div>
      </div>
    </div>
  )
}