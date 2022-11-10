import React from "react";

const Carousel = () => {
  return (
    <div>
      <div className="my-20 ">
        <a
          href="/"
          class="items-center  grid lg:grid-cols-2 grid-cols-1 bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="lg:h-96 overflow-hidden">
            <img
              class="object-cover w-full rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg"
              src="https://uploads.sitepoint.com/wp-content/uploads/2021/09/1631777774learn-quickly.jpg"
              alt=""
            />
          </div>
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Meta tube is a future famous youtube channel
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              The platform aims to connect teachers and students effectively
              allowing teachers to track progress of individual students and
              better facilitate their learning. This course aims to bring you up
              to date with modern theories of money and banking and recent
              developments in the analysis of monetary policy.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
