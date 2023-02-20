import { Text, Title } from '@mantine/core'
import React from 'react'

type Props = {
  revieweeType : "guest|host"
}

export default function Stepthree({ }: Props) {
  return (
    <div className='flex flex-col gap-4'>
      <Title order={2} className="text-secondary-color">Experience Review</Title>
      <Text className='text-slate-500'>Share your experience </Text>
    </div>
  )
}