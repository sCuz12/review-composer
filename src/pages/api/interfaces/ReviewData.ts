import { Rating } from "./Rating";

export interface ReviewData {
    revieweeName: string;
    revieweeType: string;
    revieweeGender: string;
    revieweeLastname: string;
    ratings: Rating[];
  }