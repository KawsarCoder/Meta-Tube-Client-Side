import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const currentReview = useLoaderData();
  const [reviews, setReviews] = useState(currentReview);

  const handleUpdateReview = (event) => {
    event.preventDefault();
    // console.log(reviews);
  };

  const handleReviewChange = (event) => {
    const message = event.target.name;
    const value = event.target.value;
    const newReview = { ...reviews };
    newReview[message] = value;
    setReviews(newReview);
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-3 col-end-10 text-center">
        <h1>Your review</h1>
        <p>{currentReview.message}</p>
        <form onSubmit={handleUpdateReview}>
          <div>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              onChange={handleReviewChange}
              rows="4"
              name="message"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="text-cyan-600 my-6 hover:text-white border border-cyan-500 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Update Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
