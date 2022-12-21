import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/useTitle";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateReview = () => {
  const currentReview = useLoaderData();
  const [reviews, setReviews] = useState(currentReview?.message);
  useTitle("Update-Review");

  const handleUpdateReview = (event) => {
    event.preventDefault();
    fetch(`https://meta-tube-server.vercel.app/reviews/${currentReview?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          event.target.reset();
        }
      });
  };

  const notify = () => toast("Review Update successfully!");
  const handleReviewChange = (event) => {
    const message = event.target.name;
    const value = event.target.value;
    const newReview = { ...reviews };
    newReview[message] = value;
    setReviews(newReview);
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-4 col-end-10 text-center">
        <h1 className="phoneNumberfont-bold text-2xl mt-20">
          Your recent review for{" "}
          <span className="text-rose-500 font-semibold">
            {currentReview.serviceName}
          </span>
        </h1>
        <p className="text-gray-700 font-semibold mt-3">
          {currentReview.message}
        </p>
        <form className="my-20" onSubmit={handleUpdateReview}>
          <div>
            <label
              htmlFor="message"
              className="block text-xl pb-4 font-semibold mb-2  text-gray-700 dark:text-gray-400"
            >
              Update your review
            </label>
            <textarea
              id="message"
              onChange={handleReviewChange}
              rows="4"
              name="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave your review..."
            ></textarea>
          </div>

          <button
            onClick={notify}
            type="submit"
            className="text-cyan-600 my-6 hover:text-white border border-cyan-500 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Update Review
          </button>

          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
