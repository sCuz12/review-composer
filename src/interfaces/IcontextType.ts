import { IreviewProcessObject } from "./IreviewProcessObject";

export interface IcontextType {
    reviewObject: IreviewProcessObject;
    updateReviewObject: (newReviewObject: IreviewProcessObject) => void;
  }
  