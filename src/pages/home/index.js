import { Link } from "react-router-dom";
import {
  Header,
  Footer,
} from "../../components";
import "./style.css";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <section
        className="banner-container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/image/home.gif)`,
        }}
      >
        <div className="banner-content">
          <h1>
            Your Trusted Partner for Professional Consulting and IT Services
          </h1>
          <p>
            Zenithiq specializes in providing Custom Software Solutions, IT
            Staffing & Services, and Managed IT Solutions.
          </p>
        </div>
      </section>
      <section className="dark-section">
        <div className="section-content">
          <h2>OUR APPROACH</h2>
          <p>
            Zenithiq excels in implementing and managing Oracle Cloud
            Applications to enhance supply chain, procurement, customer
            experience, and financial planning. We streamline critical processes
            like order-to-cash, procure-to-pay, and financial consolidation
            while providing effective change management to solve business
            challenges and drive efficiency across your organization.
          </p>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <img
              src={process.env.PUBLIC_URL + "assets/image/aproach.jpg"}
              alt="banner img"
              style={{ height: "300px", width: "400px" }}
            />
            <div style={{ paddingTop: "1rem", width: "50%" }}>
              <p>
                Elevate your business with our expert guidance. We are a
                Texas-based consultancy firm, dedicated to driving success for
                businesses across various industries. Our personalized solutions
                and strategic insights will propel your company towards
                achieving and exceeding its objectives.
              </p>
              <Link to="/contact">
                <button style={{ padding: "1rem 1.5rem", background: "#fff" }}>
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="light-section">
        <div className="section-content">
          <div className="text-container">
            <h2>OUR SERVICES</h2>
            <p>
              Zenithiq excels in implementing and managing Oracle Cloud
              Applications to enhance supply chain, procurement, customer
              experience, and financial planning. We streamline critical
              processes like order-to-cash, procure-to-pay, and financial
              consolidation while providing effective change management to solve
              business challenges and drive efficiency across your organization.
            </p>
          </div>
          <div className="image-grid">
            <div className="services-item">
              <div className="services-container">
                <div className="services-background"></div>
                <img
                  src={process.env.PUBLIC_URL + "assets/image/service-1.jpg"}
                  alt="lion img"
                  className="services-image"
                />
              </div>
              <Link to="/services">
                <p className="service-title">Custom Software Solutions</p>
              </Link>
            </div>
            <div className="services-item">
              <div className="services-container">
                <div className="services-background"></div>
                <img
                  src={process.env.PUBLIC_URL + "assets/image/Service-2.jpg"}
                  alt="lion img"
                  className="services-image"
                />
              </div>
              <Link to="/services">
                <p className="service-title">IT Staffing & Services</p>
              </Link>
            </div>
            <div className="services-item">
              <div className="services-container">
                <div className="services-background"></div>
                <img
                  src={process.env.PUBLIC_URL + "assets/image/Service-3.jpg"}
                  alt="lion img"
                  className="services-image"
                />
              </div>
              <Link to="/services">
                <p className="service-title">Managed IT Services</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
