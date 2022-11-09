import React, { useState } from "react";

const AddService = () => {
  const [service, setService] = useState({});

  const handleAddService = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Service added successfully");
          event.target.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  const handleInputBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newService = { ...service };
    newService[field] = value;
    setService(newService);
  };

  return (
    <form className="my-6" onSubmit={handleAddService}>
      <div className="grid gap-6 mb-6 grid-cols-12">
        <div className="col-start-2 col-end-11 lg:col-start-4 lg:col-end-10 bg-blue-50 p-10 border rounded-lg border-blue-100">
          <div className="mt-6">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Service name
            </label>
            <input
              type="text"
              id="first_name"
              name="title"
              onBlur={handleInputBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Give here of your service name"
              required=""
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="mt-6">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Price
              </label>
              <input
                type="number"
                id="phone"
                name="price"
                onBlur={handleInputBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Price"
                required=""
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Rating
              </label>
              <input
                type="number"
                id="phone"
                name="rating"
                onBlur={handleInputBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Price"
                required=""
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="website"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Photo URL
            </label>
            <input
              type="link"
              name="img"
              id="website"
              onBlur={handleInputBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Give here photo url"
              required=""
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              name="description"
              onBlur={handleInputBlur}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span class="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Submit
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddService;
