import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h1>service</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 my-5 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Card key={service.id} service={service}></Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
