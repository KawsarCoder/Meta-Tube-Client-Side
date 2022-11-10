import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Reviews from "../Reviews/Reviews";
import PublicReviews from "../PublicReviews/PublicReviews";

const ServiceDetails = () => {
  const { title, _id, description, price, img } = useLoaderData();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://meta-tube-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h1>service details page</h1>
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
        <h4>Reviews</h4>
        <div>
          <Reviews></Reviews>
        </div>
        <div className="grid grid-cols-3">
          {reviews.map((review) => (
            <PublicReviews
              key={review._id}
              cardId={_id}
              review={review}
            ></PublicReviews>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
