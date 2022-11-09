import React from "react";

const SingleReview = ({ review, handleDelete }) => {
  const { _id, serviceName, message } = review;

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
        <a
          href="/"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
      <td class="py-4 px-6">
        <span
          onClick={() => handleDelete(_id)}
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Delete
        </span>
      </td>
    </tr>
  );
};

export default SingleReview;
