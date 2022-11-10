import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useTitle from "../Hooks/useTitle";
import SingleReview from "./SingleReview/SingleReview";

const ReviewDetails = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("User-Reviews");

  useEffect(() => {
    fetch(`https://meta-tube-server.vercel.app/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          userLogOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, userLogOut]);

  const handleDelete = (id) => {
    const process = window.confirm("Are sure to remove this review");
    if (process) {
      fetch(`https://meta-tube-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
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

  return (
    <div>
      {reviews.length > 0 ? (
        <>
          <div className="grid grid-cols-1 justify-items-center">
            <h2 className="text-center text-xl font-bold mt-10 text-rose-500 border-b-4 border-blue-300 p-5 w-72">
              Your Review
            </h2>
          </div>
          <div className="grid grid-cols-12 mb-10 mt-5">
            <div className="lg:col-start-3 lg:col-end-11 col-start-2 col-end-12">
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Service Name
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Review
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Update
                      </th>
                      <th scope="col" className="py-3 px-6">
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
          <div className="grid grid-cols-1 justify-items-center">
            <h2 className="text-center text-xl font-bold mt-10 text-rose-500 border-b-4 border-blue-300 p-5 w-72">
              You don't give any review
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default ReviewDetails;
