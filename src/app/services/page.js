import Image from "next/image";
import "./style.css";

export default function ServicesPage() {
  const data = [
    {
      id: "Custom-Software-Solutions",
      heading: "Custom Software Solutions",
      description:
        "Every business is unique, and so are its software needs. Zenithiq specializes in developing bespoke software solutions tailored to meet the specific demands of your business. Our custom-built software enhances productivity, optimizes processes, and ensures seamless integration with your existing systems, enabling you to stay ahead of the curve in today’s competitive market.",
      image: "/assets/image/service-1.jpg",
    },
    {
      id: "IT-Staffing-Services",
      heading: "IT Staffing & Services",
      description:
        "In today’s rapidly evolving tech landscape, finding the right talent can be a challenge. Zenithiq offers comprehensive IT staffing solutions, ensuring that your business has access to skilled professionals who align with your technical and cultural needs. Whether you need short-term assistance or permanent hires, we deliver IT experts who can seamlessly integrate into your team and drive your projects forward.",
      image: "/assets/image/service-2.jpg",
    },
    {
      id: "Managed-IT-Services",
      heading: "Managed IT Services",
      description:
        "Managing IT infrastructure can be overwhelming, especially as your business grows. With Zenithiq’s Managed IT Services, we take the complexity out of IT management, offering proactive support, monitoring, and optimization of your systems. Our team ensures that your technology infrastructure is secure, efficient, and scalable, allowing you to focus on what matters most – running your business.",
      image: "/assets/image/service-3.jpg",
    },
  ];

  return (
    <div className="services-page">
       <section className="services-banner-container">
        <Image
          src="/assets/image/services.png"
          alt="services banner"
          width={1440}
          height={400}
          className="services-banner-img"
        />
        <div className="services-banner-content">
          <h3>Our Services</h3>
          <p>
            Elevate Your Business with Zenithiq's Expert Consultancy and IT Solutions
          </p>
        </div>
      </section>

      {data.map((item, index) => (
        <section
          key={item.id}
          className={index % 2 === 0 ? "dark-section" : "light-section"}
          id={item.id}
        >
          <div className="section-content">
            <div className={`agriculture-container ${index % 2 === 0 ? "even" : "odd"}`}>
              {index % 2 === 0 ? (
                <>
                  <div className="content-section">
                    <h2 className="heading">{item.heading}</h2>
                    <p className="description">{item.description}</p>
                  </div>
                  <div className="image-section">
                    <Image
                      src={item.image}
                      alt={item.heading}
                      width={500}
                      height={350}
                      className="services-img"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="image-section">
                    <Image
                      src={item.image}
                      alt={item.heading}
                      width={500}
                      height={350}
                      className="services-img"
                    />
                  </div>
                  <div className="content-section">
                    <h2 className="heading">{item.heading}</h2>
                    <p className="description">{item.description}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
