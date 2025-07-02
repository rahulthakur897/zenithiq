"use client";

import React, { useState } from "react";
import "./style.css";

const solutions = [
  {
    imgSrc: `${process.env.PUBLIC_URL}/assets/image/erp.jpg`,
    title: "Oracle Enterprise Resource Planning (ERP) Cloud",
    description:
      "We offer Oracle Cloud ERP implementation services and handle the management of your Oracle Cloud ERP applications.",
  },
  {
    imgSrc: `${process.env.PUBLIC_URL}/assets/image/logistics.webp`,
    title: "Logistics",
    description:
      "We are home to the largest global consultancy focused on implementing, integrating, and managing Oracle Transportation Manager (OTM), Oracle Global Trade Management (GTM), and Oracle Warehouse Management Systems (WMS).",
  },
  {
    imgSrc: `${process.env.PUBLIC_URL}/assets/image/SCM.jpg`,
    title: "Supply Chain Management (SCM)",
    description:
      "Zenithiq provides a range of supply chain management solutions tailored to your needs. Our consultants bring over ten years of experience working with supply chain software.",
  },
  {
    imgSrc: `${process.env.PUBLIC_URL}/assets/image/EPM.webp`,
    title: "Oracle Enterprise Performance Management (EPM)",
    description:
      "Zenithiq boasts a team of industry experts who specialize in optimizing business processes and implementing Oracle EPM Cloud to drive substantial return on investment.",
  },
];

export function OurSolutions() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="solutions-grid">
      {solutions.map((solution, index) => (
        <div
          key={index}
          className="solution-card"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === index ? (
            <div className="solution-hover-content">
              <h6 className="solution-title">{solution.title}</h6>
              <p>{solution.description}</p>
            </div>
          ) : (
            <div className="solution-card-content">
              <img
                className="solution-image"
                src={solution.imgSrc}
                alt="Solution banner"
              />
              <h6 className="solution-title">{solution.title}</h6>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
