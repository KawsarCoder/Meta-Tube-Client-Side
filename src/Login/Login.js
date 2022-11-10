import React, { useContext, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { userLogin, signIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    userLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };

        //get jwt token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("user-token", data.token);
            setError("");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.error(error));
  };

  const loginFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };

        //get jwt token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("user-token", data.token);
            form.reset();
            setError("");
            navigate(from, { replace: true });
          });
      })
      .catch((e) => {
        console.error(e);

        setError(e.message);
      });
  };

  return (
    <div className="grid grid-cols-12 my-10">
      <div className="lg:col-start-2 lg:col-end-5 md:col-start-2 md:col-end-5 col-start-1 col-end-12 w-full">
        <img
          src="https://i.ibb.co/YRpfRWy/5098293-removebg-preview.png"
          alt=""
        />
      </div>
      <form
        onSubmit={loginFormSubmit}
        className="lg:col-start-7 md:col-start-7 md:col-end-11 sm:col-start-2 sm:col-end-11 col-start-1 col-end-13 rounded-lg bg-blue-50  lg:col-end-11 p-10"
      >
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="username@mail.com"
            required=" "
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            required
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=" "
          />
        </div>

        <span className="block mb-2 text-sm text-red-700 rounded-lg dark:bg-red-200 dark:text-red-800">
          {error}
        </span>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Log In
        </button>
        <span className="block mt-5">
          {" "}
          Are you not register?{" "}
          <Link to={"/register"} className="text-rose-500 font-bold">
            Register
          </Link>
        </span>
        <div className="mt-5">
          <button
            onClick={googleSignIn}
            type="button"
            className="text-white flex bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
