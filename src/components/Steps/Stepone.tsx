import { Select, Text, TextInput, Title } from '@mantine/core'
import React, { useContext, useEffect } from 'react'
import {ReviewsContext} from '../../store/reviewsContext';

type Props = {}

export default function Stepone({ }: Props) {

    const {reviewObject,updateReviewObject} = useContext(ReviewsContext)

    const handleFirstNameChange = (e:any) => {
        const newReviewObject = {
            ...reviewObject,
            revieweeName : e.target.value
        }
        updateReviewObject(newReviewObject)
    }
    //TODO : Handle last name

    const handleGenderChange = (value:string) => {
        const newReviewObject = {
            ...reviewObject,
            revieweeGender : value
        }
        updateReviewObject(newReviewObject)
    }

    return (
        <div className='flex flex-col w-full gap-12'>
            <div className='flex flex-col gap-4'>
                <Title order={2} className="text-secondary-color">Reviewee Information</Title>
                <Text className='text-slate-500'>Enter the reviewee personal information</Text>
            </div>
            {/**Form */}
            <div className='grid grid-cols-2 gap-8'>
                <div>
                    <TextInput required label="Reviewee Name"  onChange={handleFirstNameChange}></TextInput>
                </div>
                <div>
                    <TextInput label="Reviewee Last Name" />
                </div>
                <div className=''>
                    <Select
                        required
                        label="Gender"
                        placeholder="Pick one"
                        data={[
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                            { value: 'many', label: 'Many' },
                        ]}
                        onChange={handleGenderChange}
                    />
                </div>
              
            </div>
        </div>
    )
}