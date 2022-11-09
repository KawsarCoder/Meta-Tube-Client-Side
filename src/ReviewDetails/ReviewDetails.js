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

  const handleDelete = (id) => {
    const process = window.confirm("Are sure to remove this review");
    if (process) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Successfully deleted");
            const remaining = reviews.filter((rev) => rev._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  // const handleUpdate = (id) => {
  //   fetch(`http://localhost:5000/reviews/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({ status: "Approved" }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.modifiedCount > 0) {
  //         const remaining = reviews.filter((rev) => rev._id !== id);
  //         const accepting = reviews.find((rev) => rev._id === id);
  //         accepting.status = "Approved";

  //         const newReviews = [accepting, ...remaining];
  //         setReviews(newReviews);
  //       }
  //     });
  // };

  return (
    <div>
      {reviews.length > 0 ? (
        <>
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
                      <SingleReview
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                        // handleUpdate={handleUpdate}
                      ></SingleReview>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>no review</h1>
        </>
      )}
    </div>
  );
};

export default ReviewDetails;
