import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import Card from "../../Card/Card";
import Carousel from "./Carousel/Carousel";
import Overview from "./Overview/Overview";
import Pricing from "./Pricing/Pricing";

const Home = () => {
  const [services, setServices] = useState([]);
  useTitle("Home");
  useEffect(() => {
    fetch("https://meta-tube-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="lg:mx-20">
      <Carousel></Carousel>
      <div className="grid grid-cols-1 justify-items-center">
        <h3 className="text-center text-xl my-5 font-bold text-rose-500 border-b-4 border-blue-300 p-5 w-72">
          Services
        </h3>
      </div>
      {services.length < 4 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 my-5 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service._id} service={service}></Card>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 my-5 lg:grid-cols-3 gap-5">
            {services.slice(0, 3).map((service) => (
              <Card key={service._id} service={service}></Card>
            ))}
          </div>
        </>
      )}

      <div className="text-center mt-5 mb-20">
        <Link to="/services">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            See All
          </button>
        </Link>
      </div>
      <div>
        <Overview></Overview>
      </div>
      <div>
        <div className="grid grid-cols-1 justify-items-center">
          <h2 className="text-center text-xl font-bold mt-10 text-rose-500 border-b-4 border-blue-300 p-5 w-72">
            Subscription plan
          </h2>
        </div>
        <Pricing></Pricing>
      </div>
    </div>
  );
};

export default Home;
