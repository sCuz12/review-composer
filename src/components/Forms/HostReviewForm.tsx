import React, { useState,useContext } from 'react'
import StarRating from '../StarRating'
import { ReviewsContext } from '@/store/reviewsContext'

type Props = {}

function HostReviewForm({ }: Props) {
    const {reviewObject,updateReviewObject} = useContext(ReviewsContext);

    const [locationRating, setLocationRating] = useState<number>(0)
    const [communicationRating, setCommunicationRating] = useState<number>(0)
    const [cleanlinessRating, setCleanlinessRating] = useState<number>(0)
    

    const locationChangeHandler = (rating: number) => {
        const newRating = { name: 'hostLocation', rating: rating };

        const newRatings = reviewObject.ratings.map((ratingObj) =>
            ratingObj.name === 'hostLocation' ? newRating : ratingObj
        );
        const newRatingExists = newRatings.some(
            (ratingObj) => ratingObj.name === 'hostLocation'
        );

        if (!newRatingExists) {
            newRatings.push({ name: 'hostLocation', rating });
        }

        const newReviewObject = {
            ...reviewObject,
            ratings: newRatings,
        }

        setLocationRating(rating)
        updateReviewObject(newReviewObject)
    }

    const communicationChangeHandler = (rating:number) => {
    
        const newRating = { name: 'hostCommunication', rating: rating };

        const newRatings = reviewObject.ratings.map((ratingObj) =>
            ratingObj.name === 'hostCommunication' ? newRating : ratingObj
        );
        const newRatingExists = newRatings.some(
            (ratingObj) => ratingObj.name === 'hostCommunication'
        );

        if (!newRatingExists) {
            newRatings.push({ name: 'hostCommunication', rating });
        }

        const newReviewObject = {
            ...reviewObject,
            ratings: newRatings,
        }

        setCommunicationRating(rating)
        updateReviewObject(newReviewObject)
    }
    
    const cleanlinessChangeHandler = (rating:number) => {
        const newRating = { name: 'hostCleanliness', rating: rating };

        const newRatings = reviewObject.ratings.map((ratingObj) =>
            ratingObj.name === 'hostCleanliness' ? newRating : ratingObj
        );
        const newRatingExists = newRatings.some(
            (ratingObj) => ratingObj.name === 'hostCleanliness'
        );

        if (!newRatingExists) {
            newRatings.push({ name: 'hostCleanliness', rating });
        }

        const newReviewObject = {
            ...reviewObject,
            ratings: newRatings,
        }

        setCleanlinessRating(rating)
        updateReviewObject(newReviewObject)
    }

    return (
        <div className='flex items-center justify-center py-8'>
            <div className='flex flex-col w-1/2 gap-8 p-20 bg-white border shadow-2xl rounded-xl'>
                <StarRating description="How was the Location of the house?"key={1} title="Location" setRating={locationChangeHandler} rating={locationRating} />
                <StarRating description="How was the communication with host?" key={1} title="Communication" setRating={communicationChangeHandler} rating={communicationRating} />
                <StarRating description='How was the cleanliness of the house?' key={1} title="Cleanliness" setRating={cleanlinessChangeHandler} rating={cleanlinessRating} />
            </div>
        </div>
    )
}

export default HostReviewForm