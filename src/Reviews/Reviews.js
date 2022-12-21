import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const { title, _id } = useLoaderData();

  const navigate = useNavigate();

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email || "unregistered";
    const photoURL = user?.photoURL;
    const message = form.message.value;

    const review = {
      service: _id,
      serviceName: title,
      userName: name,
      email,
      photoURL,
      message,
    };

    fetch("https://meta-tube-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          navigate(`/services/${_id}`);
        }
      })
      .catch((e) => console.error(e));
  };
  const notify = () => toast("Review submitted successfully!");
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-end-12 lg:col-start-4 lg:col-end-10 md:col-start-4 md:col-end-10">
          {user?.uid ? (
            <form onSubmit={handleReview}>
              <div className="my-5 bg-blue-50 p-5 border border-blue-100">
                <div className="mb-6">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-bold text-gray-500 dark:text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="base-input"
                    defaultValue={user?.displayName}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email-address-icon"
                    className="block mb-2 text-sm font-bold text-gray-500 dark:text-gray-300"
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="email-address-icon"
                      defaultValue={user?.email}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="block mb-2 mt-5 font-bold text-sm text-gray-500 dark:text-gray-300"
                  >
                    Insert your Photo URL
                  </label>
                  <input
                    type="url"
                    name="photoURL"
                    defaultValue={user?.photoURL}
                    id="website"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Photo url"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 mt-5 text-sm font-bold text-gray-500 dark:text-gray-400"
                  >
                    Your Review
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Leave a review..."
                  ></textarea>
                </div>
                <button
                  onClick={notify}
                  className="relative my-5 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                >
                  <span className="font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Submit
                  </span>
                </button>
                <ToastContainer />
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 my-6">
              <Link to="/login">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Please login to add a review
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
