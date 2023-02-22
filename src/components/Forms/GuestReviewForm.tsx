import { ReviewsContext } from '../../store/reviewsContext'
import React, { useContext, useEffect, useState } from 'react'
import StarRating from '../StarRating'

type Props = {}





function GuestReviewForm({ }: Props) {
    const { reviewObject, updateReviewObject } = useContext(ReviewsContext)
    const [communicationRating, setCommunicationRating] = useState<number>(0);
    const [houseRespectRating, setHouseRespectRating] = useState<number>(0);
    const [cleanlinessRating, setCleanlinessRating] = useState<number>(0);


    const communicationStarHandler = (rating: number) => {
        const newRating = { name: 'communication', rating: rating };

        const newRatings = reviewObject.ratings.map((ratingObj) =>
            ratingObj.name === 'communication' ? newRating : ratingObj
        );

        const newRatingExists = newRatings.some(
            (ratingObj) => ratingObj.name === 'communication'
          );
          
          if (!newRatingExists) {
            newRatings.push({ name: 'communication', rating });
          }

        const newReviewObject = {
            ...reviewObject,
            ratings: newRatings,
        }


        setCommunicationRating(rating)

        updateReviewObject(newReviewObject)
    }

    const respectOfHouseHandler = (rating: number) => {

        const newRating = { name: 'houseRespect', rating: rating };

        const newRatings = reviewObject.ratings.map((ratingObj) =>
            ratingObj.name === 'houseRespect' ? newRating : ratingObj);

        const newRatingExists = newRatings.some(
            (ratingObj) => ratingObj.name === 'houseRespect'
        );


        if (!newRatingExists) {
            newRatings.push({ name: 'houseRespect', rating });
        }


        const newReviewObject = {
            ...reviewObject,
            ratings: newRatings,
        }
        setHouseRespectRating(rating)
        updateReviewObject(newReviewObject)
    }

    const cleanlinessChangeHandler = (rating: number) => {
        const newRating = { name: 'cleanliness', rating: rating };

        const newRatings = reviewObject.ratings.map((ratingObj) =>
            ratingObj.name === 'cleanliness' ? newRating : ratingObj);

        const newRatingExists = newRatings.some(
            (ratingObj) => ratingObj.name === 'cleanliness'
        );


        if (!newRatingExists) {
            newRatings.push({ name: 'cleanliness', rating });
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
                <StarRating key={1} title="Communication" setRating={communicationStarHandler} rating={communicationRating} />
                <StarRating key={2} title="Respect of House" setRating={respectOfHouseHandler} rating={houseRespectRating} />
                <StarRating key={3} title="Cleanliness of house" setRating={cleanlinessChangeHandler} rating={cleanlinessRating} />
            </div>
        </div>

    )
}

export default GuestReviewForm