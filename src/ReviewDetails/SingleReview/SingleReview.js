import React from "react";
import { Link } from "react-router-dom";

const SingleReview = ({
  review,
  handleDelete,
  // handleUpdate
}) => {
  const {
    _id,
    serviceName,
    message,
    // status
  } = review;

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td class="py-4 font-bold px-6">{serviceName}</td>
      <th
        scope="row"
        class="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
      >
        {message}
      </th>
      <td class="py-4 px-6">
        <Link to={`/reviews/${_id}`}>
          <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            Edit
          </button>
        </Link>
        {/* <button
          onClick={() => handleUpdate(_id)}
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          {status ? status : "pending"}
        </button> */}
      </td>
      <td class="py-4 px-6">
        <button
          onClick={() => handleDelete(_id)}
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleReview;
