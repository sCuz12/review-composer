import { IcontextType } from "@/interfaces/IcontextType";
import { IproviderType } from "@/interfaces/IproviderType";
import { IreviewProcessObject } from "@/interfaces/IreviewProcessObject";
import React, { createContext, useState } from "react"

const ReviewsContext = createContext<IcontextType>({
  reviewObject: { revieweeName: '', revieweeType: '', ratings: [] , revieweeGender:''},
  updateReviewObject: () => { },
});

const MyProvider: React.FC<IproviderType> = (props) => {
  const [reviewObject, setReviewObject] = useState<IreviewProcessObject>({
    revieweeName: '',
    revieweeGender : '',
    revieweeType: '',
    ratings: [],
  });


  const updateReviewObject = (newReviewObject: IreviewProcessObject) => {
    setReviewObject(newReviewObject);
  };

  return (
    <ReviewsContext.Provider value={{ reviewObject, updateReviewObject }}>
      {props.children}
    </ReviewsContext.Provider>
  );
};

export { ReviewsContext, MyProvider };