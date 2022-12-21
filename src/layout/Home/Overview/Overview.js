import React from "react";

const Overview = () => {
  return (
    <div className="grid grid-cols-12 my-6">
      <div className="w-full col-start-1 col-end-13 bg-white rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
        <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 sm:flex dark:divide-gray-600 dark:text-gray-400">
          <li className="w-full">
            <button className="inline-block text-3xl font-bold p-4 w-full bg-gray-50 rounded-tl-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500">
              Overview
            </button>
          </li>
        </ul>
        <div className="border-t border-gray-200 dark:border-gray-600">
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
            <dl className="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
              <div className="flex flex-col justify-center items-center">
                <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Developers
                </dd>
              </div>
              <div className="flex flex-col justify-center items-center">
                <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Public repositories
                </dd>
              </div>
              <div className="flex flex-col justify-center items-center">
                <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Open source projects
                </dd>
              </div>
              <div className="flex flex-col justify-center items-center">
                <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Contributors
                </dd>
              </div>
              <div className="flex flex-col justify-center items-center">
                <dt className="mb-2 text-3xl font-extrabold">90+</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Top Forbes companies
                </dd>
              </div>
              <div className="flex flex-col justify-center items-center">
                <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Organizations
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
