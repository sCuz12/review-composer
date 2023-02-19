import { Button, Navbar, Stepper } from '@mantine/core'
import { CircleCheck ,InfoCircle } from "tabler-icons-react";

import React from 'react'

type Props = {
    stepNo: number
}

export default function SideNavbar({ stepNo }: Props) {
    return (
        <div className='h-full bg-secondary-color'>

            <Navbar className='bg-secondary-color' width={{ base: 400 }} height={800} p="xs">
                <div className='flex flex-col items-start p-8'>
                    <div className='flex flex-col w-full gap-3'>
                        <h2 className='text-xl font-bold text-white'>Step {stepNo}</h2>
                        <p className='font-light text-white'>
                            Complete all the information
                        </p>
                    </div>

                    <div className='pt-20'>
                        <Stepper
                             iconSize={50} active={stepNo} breakpoint="sm" orientation="vertical"  completedIcon={<CircleCheck color='black'/>}>
                            <Stepper.Step icon={<InfoCircle size={25} />} label="Review Information" description="Add your information" />
                            <Stepper.Step icon={<InfoCircle size={23} />} label="Second step" description="Verify email" />
                            <Stepper.Step label="Final step" description="Get full access" />
                        </Stepper>
                    </div>
                </div>
            </Navbar>
        </div>

    )
}