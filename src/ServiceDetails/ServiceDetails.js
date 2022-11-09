import React from "react";
import { useLoaderData } from "react-router-dom";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Reviews from "../Reviews/Reviews";

const ServiceDetails = () => {
  const { title, _id, description, price, img } = useLoaderData();
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
            {/* <Link
              to="/reviews"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Give review
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link> */}
          </div>
        </div>
      </div>

      <div className="text-center my-5">
        <h4>Reviews</h4>
        <div>
          <Reviews></Reviews>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
