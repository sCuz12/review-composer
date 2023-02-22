import React, { useContext, useEffect, useState } from 'react'
import { AppShell, Button, Header, Navbar } from '@mantine/core'
import SideNavbar from '@/components/Layout/SideNavbar'
import Stepone from '@/components/Steps/Stepone'
import Steptwo from '@/components/Steps/Steptwo'
import Stepthree from '@/components/Steps/Stepthree'
import { MyProvider } from '../store/reviewsContext'
import { ReviewsContext } from '../store/reviewsContext';

type Props = {}

export default function generate({ }: Props) {

    const [activePage, setActive] = useState(3);
    const [disableButton, setDisableButton] = useState<boolean>(false)
    const [disableGenerateBtn,setDisableGenerateBtn] = useState<boolean>(true)


    //This constans represents the number of ratings (communication etc etc)
    const NUMBER_OF_RATINGS = 3;

    const { reviewObject, updateReviewObject } = useContext(ReviewsContext)

    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current))
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))


    useEffect(() => {
    
        if (activePage == 1) {

            if (!reviewObject.revieweeName) {
                setDisableButton(true);
            } else {
                setDisableButton(false);
            }

            if (!reviewObject.revieweeGender) {
                setDisableButton(true);
            } else {
                setDisableButton(false);
            }

        } 

        if (activePage == 2) {
            if (!reviewObject.revieweeType) {
                console.log("asdsa");
                setDisableButton(true);
            } else {
                console.log("asdas");
                setDisableButton(false);
            }
        }
    }, [reviewObject.revieweeName,activePage,reviewObject.revieweeType,reviewObject.revieweeGender])

    useEffect(() => {
        //all rating steps are completed 
        if (reviewObject.ratings.length === NUMBER_OF_RATINGS) {
            setDisableGenerateBtn(false)
        }

    }, [reviewObject.ratings])

    const handleGenerateReviewSubmitForm = async () => {
        const response = await fetch('/api/review-generator',{
            method: 'POST',
            body : JSON.stringify(reviewObject),
            headers :{
                "Content-Type" : 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }

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
            <div className='h-screen '>
                <div className='py-10 '>
                    {activePage === 1 && <Stepone />}
                    {activePage === 2 && <Steptwo />}
                    {activePage === 3 && <Stepthree revieweeType={reviewObject.revieweeType} />}

                </div>
                <div className='flex gap-2'>
                    {activePage == 3 ? (
                        <Button onClick={handleGenerateReviewSubmitForm} disabled={disableGenerateBtn}className='bg-secondary-color' radius="md" >Generate Review</Button>
                    ) : (
                        <Button disabled={disableButton} className='bg-secondary-color' radius="md" onClick={nextStep}>Next Step</Button>
                    )}


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