import { ReviewType } from "@/types/ReviewType";

export interface IreviewProcessObject {
    revieweeName: string;
    revieweeType: string;
    revieweeGender : string;
    ratings: ReviewType[];
    disableButton?: boolean;

  }
  