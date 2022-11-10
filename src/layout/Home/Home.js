import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Card/Card";
import Carousel from "./Carousel/Carousel";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Carousel></Carousel>
      {services.length < 4 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 my-5 lg:grid-cols-3 gap-5">
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

      <div className="text-center my-5">
        <Link to="/services">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            More services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
