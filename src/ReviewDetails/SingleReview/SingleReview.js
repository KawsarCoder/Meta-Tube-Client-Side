import React from "react";
import { Link } from "react-router-dom";

const SingleReview = ({ review, handleDelete }) => {
  const { _id, service, serviceName, message } = review;
console.log(service);
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="py-4 font-bold px-6">{serviceName}</td>
      <th
        scope="row"
        className="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
      >
        {message}
      </th>
      <td className="py-4 px-6">
        <Link to={`/reviews/${_id}`}>
          <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            Edit
          </button>
        </Link>
      </td>
      <td className="py-4 px-6">
        <button
          onClick={() => handleDelete(_id)}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleReview;
