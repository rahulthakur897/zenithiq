import Link from "next/link";
import "./style.css";

export default function Home() {
  return (
    <main className="home-page">
      <section
        className="banner-container"
        style={{
          backgroundImage: `url(/assets/image/home.gif)`,
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
          <h2>Our Approach</h2>
          <article className="our-approch">
            <img
              src="/assets/image/aproach.jpg"
              alt="Consulting approach"
              className="our-approch-img"
            />
            <div className="our-approch-content">
              <p>
                Elevate your business with our expert guidance. We are a
                Texas-based consultancy firm, dedicated to driving success for
                businesses across various industries. Our personalized solutions
                and strategic insights will propel your company towards
                achieving and exceeding its objectives.
              </p>
              <Link href="/contact">
                <button className="our-approch-button">Contact Us</button>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="light-section">
        <div className="section-content">
          <div className="text-container">
            <h2>Our Services</h2>
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
            <article className="services-item">
              <figure className="services-container">
                <div className="services-background"></div>
                <img
                  src="/assets/image/service-1.jpg"
                  alt="Custom Software Solutions"
                  className="services-image"
                />
              </figure>
              <Link href="/services#Custom-Software-Solutions">
                <p className="service-title">Custom Software Solutions</p>
              </Link>
            </article>

            <article className="services-item">
              <figure className="services-container">
                <div className="services-background"></div>
                <img
                  src="/assets/image/Service-2.jpg"
                  alt="IT Staffing & Services"
                  className="services-image"
                />
              </figure>
              <Link href="/services#IT-Staffing-Services">
                <p className="service-title">IT Staffing & Services</p>
              </Link>
            </article>

            <article className="services-item">
              <figure className="services-container">
                <div className="services-background"></div>
                <img
                  src="/assets/image/Service-3.jpg"
                  alt="Managed IT Services"
                  className="services-image"
                />
              </figure>
              <Link href="/services#Managed-IT-Services">
                <p className="service-title">Managed IT Services</p>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
