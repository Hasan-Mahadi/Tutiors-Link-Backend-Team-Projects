import { Review } from "./reviews.model";

interface ReviewPayload {
 
  student: string;
  comment: string;
  rating: number;
  teacher: string;
}

const createReviewIntoDb = async (payload: ReviewPayload) => {
  const result = await Review.create(payload);
  return result;
};

export const reviewServices = {
  createReviewIntoDb,
};
