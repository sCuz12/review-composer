import { Text, Title } from '@mantine/core'
import React from 'react'
import GuestReviewForm from '../Forms/GuestReviewForm'
import HostReviewForm from '../Forms/HostReviewForm'

type Props = {
  revieweeType : string
}

export default function Stepthree({ revieweeType}: Props) {

  return (
    <>
    <div className='flex flex-col gap-4'>
      <Title order={2} className="text-secondary-color">Experience Review</Title>
      <Text className='text-slate-500'>Share your experience </Text>
    </div>
    <div>
      {revieweeType === "guest" && <GuestReviewForm/>}
      {revieweeType === "host" && <HostReviewForm/>}
    </div>
    </>
  )
}