import React from "react";
import useTitle from "../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog")
  return (
    <div className="grid lg:grid-cols-2 justify-items-center my-10">
      <div className="my-5">
        <a
          href="/blog"
          class="block p-6 max-w-xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Difference between Sql and NoSql.
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.
          </p>
        </a>
      </div>
      <div className="my-5">
        <a
          href="/blog"
          class="block p-6 max-w-xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What is JWT and how does it work?
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object. It is
            compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity Provider(IdP).
          </p>
        </a>
      </div>
      <div className="my-5">
        <a
          href="/blog"
          class="block p-6 max-w-xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What is the difference between JS and Node Js?
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </p>
        </a>
      </div>
      <div className="my-5">
        <a
          href="/blog"
          class="block p-6 max-w-xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            How does Node JS handle multiple request at the same time?
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            How NodeJS handle multiple client requests? NodeJS receives multiple
            client requests and places them into EventQueue. NodeJS is built
            with the concept of event-driven architecture.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Blog;
