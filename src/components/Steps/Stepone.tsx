import { Select, Text, TextInput, Title } from '@mantine/core'
import React from 'react'

type Props = {}

export default function Stepone({ }: Props) {
    return (
        <div className='flex flex-col w-full gap-12'>
            <div className='flex flex-col gap-4'>
                <Title order={2} className="text-secondary-color">Reviewee Information</Title>
                <Text className='text-slate-500'>Enter the reviewwe personal information</Text>
            </div>
            {/**Form */}
            <div className='grid grid-cols-2 gap-8'>
                <div>
                    <TextInput  label="Reviewee Name"></TextInput>
                </div>
                <div>
                    <TextInput label="Reviewee Last Name"/>
                </div>
                <div className=''>
                        <Select
                            label="Gender"
                            placeholder="Pick one"
                            data={[
                                { value: 'male', label: 'Male' },
                                { value: 'female', label: 'Female' },
                                { value: 'many', label: 'Many' },
                            ]}
                        />
                    </div>
            </div>
        </div>
    )
}