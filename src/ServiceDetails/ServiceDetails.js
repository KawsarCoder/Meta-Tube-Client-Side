import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Reviews from "../Reviews/Reviews";
import PublicReviews from "../PublicReviews/PublicReviews";
import useTitle from "../Hooks/useTitle";

const ServiceDetails = () => {
  const { title, _id, description, price, img } = useLoaderData();
  useTitle("Service-Details");

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://meta-tube-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center">
        <h2 className="text-center text-xl font-bold my-10 text-rose-500 border-b-4 border-blue-300 p-5 w-80">
          Details of {title}
        </h2>
      </div>
      <div className="grid grid-cols-12">
        <div className="max-w-5/3 lg:col-start-5 lg:col-end-9 md:col-start-4 md:col-end-9 sm:col-start-1 sm:col-end-13 col-start-1 col-end-13 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <PhotoProvider>
            <div className="foo">
              <PhotoView key={_id} src={img}>
                <img
                  className="rounded-t-lg h-64 w-full"
                  src={img}
                  alt="cardImage"
                />
              </PhotoView>
            </div>
          </PhotoProvider>

          <div className="p-5">
            <a href="/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
            <h5>{price}</h5>
          </div>
        </div>
      </div>

      <div className="text-center my-5">
        <div className="grid grid-cols-1 justify-items-center">
          <h2 className="text-center text-xl font-bold mt-10 text-rose-500 border-b-4 border-blue-300 p-5 w-72">
            Update Review
          </h2>
        </div>
        <div>
          <Reviews></Reviews>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-items-center">
        <h2 className="text-center text-xl font-bold mt-10 text-rose-500 border-b-4 border-blue-300 p-5 w-72">
          All Review
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5">
        {reviews.map((review) => (
          <PublicReviews
            key={review._id}
            cardId={_id}
            review={review}
          ></PublicReviews>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
