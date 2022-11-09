import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SingleReview from "./SingleReview/SingleReview";

const ReviewDetails = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);
  console.log(reviews);
  return (
    <div>
      <h1>Your all reviews</h1>
      <div className="grid grid-cols-12 mb-10 mt-5">
        <div className="lg:col-start-3 lg:col-end-11 col-start-2 col-end-12">
          <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    Service Name
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Review
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Update
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {reviews?.map((review) => (
                  <SingleReview key={review._id} review={review}></SingleReview>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;