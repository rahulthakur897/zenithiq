import React from "react";
import "./style.css"

const ServiceName = ({ imgName, serviceIndex, serviceName }) => {
  return (
    <div className="service-card">
      <img
        className="service-image"
        src={process.env.PUBLIC_URL + "assets/image/" + imgName}
        alt={serviceName}
      />
      <div className="service-content">
        <div></div>
        <h5>{serviceIndex}</h5>
        <div></div>
        <p>{serviceName}</p>
      </div>
    </div>
  );
};

export function OurServices() {
  return (
    <div className="services-container">
      <ServiceName
        imgName="implementations.png"
        serviceIndex={1}
        serviceName="Implementations & Integrations"
      />
      <ServiceName
        imgName="cloudmigration.png"
        serviceIndex={2}
        serviceName="Cloud Migration"
      />
      <ServiceName
        imgName="softwaremanage.png"
        serviceIndex={3}
        serviceName="Software Managed Services"
      />
      <ServiceName
        imgName="digitaltransform.png"
        serviceIndex={4}
        serviceName="Digital Transformation"
      />
      <ServiceName
        imgName="application.png"
        serviceIndex={5}
        serviceName="Application Education & Training"
      />
    </div>
  );
}
