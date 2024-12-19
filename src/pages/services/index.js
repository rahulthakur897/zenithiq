import { Footer, Header } from "../../components";
import "./style.css";

export default function Home() {
  const data = [
    {
      id: 1,
      heading: "Custom Software Solutions",
      description:
        "Every business is unique, and so are its software needs. Right Arc specializes in developing bespoke software solutions tailored to meet the specific demands of your business. Our custom-built software enhances productivity, optimizes processes, and ensures seamless integration with your existing systems, enabling you to stay ahead of the curve in today’s competitive market.",
      image: "assets/image/service-1.jpg",
    },
    {
      id: 2,
      heading: "IT Staffing & Services",
      description:
        "Today’s rapidly evolving tech landscape, finding the right talent can be a challenge. Right Arc offers comprehensive IT staffing solutions, ensuring that your business has access to skilled professionals who align with your technical and cultural needs. Whether you need short-term assistance or permanent hires, we deliver IT experts who can seamlessly integrate into your team and drive your projects forward.",
      image: "assets/image/service-2.jpg",
    },
    {
      id: 3,
      heading: "Managed IT Services",
      description:
        "Managing IT infrastructure can be overwhelming, especially as your business grows. With Right Arc’s Managed IT Services, we take the complexity out of IT management, offering proactive support, monitoring, and optimization of your systems. Our team ensures that your technology infrastructure is secure, efficient, and scalable, allowing you to focus on what matters most – running your business.",
      image: "assets/image/service-3.jpg",
    },
  ];


  return (
    <main className="services-page">
      <Header />
      <section className="services-banner-container">
        <img
          src={process.env.PUBLIC_URL + "assets/image/services.png"}
          alt="services img"
        />
        <div className="services-banner-content">
          <h3>Our Services</h3>
          <p>Elevate Your Business with Right Arc's Expert Consultancy and IT Solutions</p>
          {/* <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>/</li>
            <li>services</li>
          </ul> */}
        </div>
      </section>
      
      {data.map((item, index) => (
  <div
    key={item.id}
    className={`agriculture-container ${index % 2 === 0 ? "even" : "odd"}`}
  >
    {index % 2 === 0 ? (
      <section className="dark-section">
        <div className="section-content">
            <div className={`agriculture-container ${index % 2 === 0 ? "even" : "odd"}`} >
          <div className="content-section">
            <h2 className="heading">{item.heading}</h2>
            <p className="description">{item.description}</p>
          </div>
          <div className="image-section">
            <img
              src={process.env.PUBLIC_URL + item.image}
              alt="services img"
              className="services-img"
            />
          </div>
          </div>
        </div>
      </section>
    ) : (
      <section className="light-section">
        <div className="section-content">
            <div className={`agriculture-container ${index % 2 === 0 ? "even" : "odd"}`}
            >
          <div className="image-section">
            <img
              src={process.env.PUBLIC_URL + item.image}
              alt="services img"
              className="services-img"
            />
          </div>
          <div className="content-section">
            <h2 className="heading">{item.heading}</h2>
            <p className="description">{item.description}</p>
          </div>
          </div>
        </div>
      </section>
    )}
  </div>
))}

      <Footer />
    </main>
  );
}
