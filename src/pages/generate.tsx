import React, { useContext, useState } from 'react'
import { AppShell, Button, Header, Navbar } from '@mantine/core'
import SideNavbar from '@/components/Layout/SideNavbar'
import Stepone from '@/components/Steps/Stepone'
import Steptwo from '@/components/Steps/Steptwo'
import Stepthree from '@/components/Steps/Stepthree'
import { MyProvider } from '../store/reviewsContext'
import { ReviewsContext } from '../store/reviewsContext';

type Props = {}

export default function generate({ }: Props) {

    const [activePage, setActive] = useState(1)


    const { reviewObject, updateReviewObject } = useContext(ReviewsContext)

    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current))
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))

    console.log(reviewObject.revieweeType);

    return (


        <AppShell
            padding="md"
            navbar={<SideNavbar stepNo={activePage} />}
            header={<Header height={60} p="xs"><p>asa</p></Header>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            {/* Your application here */}
            <div className='h-full'>
                <div className='py-10 '>
                    {activePage === 1 && <Stepone />}
                    {activePage === 2 && <Steptwo />}
                    {activePage === 3 && <Stepthree revieweeType={reviewObject.revieweeType} />}

                </div>
                <div className='flex gap-2'>
                    <Button className='bg-secondary-color' radius="md" onClick={nextStep}>Next Step</Button>

                    {activePage != 1 && (
                        <Button onClick={prevStep} variant='outline' color='red' className="text-black hover:text-white hover:bg-red-300" radius="md" >
                            Previous Step
                        </Button>
                    )}
                </div>

            </div>
        </AppShell>


    )
}