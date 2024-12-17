import {
  Header,
  Footer,
  OurSolutions,
  OurServices,
  OurPartner,
} from "../../components";
import "./style.css";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <section
        className="banner-container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/image/Home.png)`,
        }}
      >
        <div className="banner-content">
          <h1>
          Your Trusted Partner for Professional Consulting and IT Services
          </h1>
          <p>Zenithiq specializes in providing Custom Software Solutions,
             IT Staffing & Services, and Managed IT Solutions.</p>
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
          <div style={{display:"flex", justifyContent:"space-evenly"}}>
          <img
          src={process.env.PUBLIC_URL + "assets/image/banner.jpg"}
          alt="banner img"
          style={{height:"300px", width:"400px"}}
        />
        <div style={{paddingTop:"1rem", width:"50%"}}>
        <p>Elevate your business with our expert guidance. We are a Texas-based consultancy firm,
           dedicated to driving success for businesses across various industries. Our personalized
           solutions and strategic insights will propel your company towards achieving and exceeding its objectives.</p>
           <button style={{padding:"1rem 1.5rem", background:"#fff"}}>Contact Us</button>
           </div>
          </div>
        </div>
      </section>
      <section className="light-section">
        <div className="section-content ">
          <h2>Our Services </h2>
          <p>
            Zenithiq excels in implementing and managing Oracle Cloud
            Applications to enhance supply chain, procurement, customer
            experience, and financial planning. We streamline critical processes
            like order-to-cash, procure-to-pay, and financial consolidation
            while providing effective change management to solve business
            challenges and drive efficiency across your organization.
          </p>
          <div style={{display:"flex",
             justifyContent:"space-evenly",
             gap:"20px",
             textAlign:"center"
             }}>
        <div>
        <img
          src={process.env.PUBLIC_URL + "assets/image/banner.jpg"}
          alt="banner img"
          style={{height:"260px", width:"325px",}}
        />
        <p style={{fontWeight:"600", padding:"1rem"}}>Custom Software Solutions</p>
           </div>
           <div>
        <img
          src={process.env.PUBLIC_URL + "assets/image/banner.jpg"}
          alt="banner img"
          style={{height:"260px", width:"325px"}}
        />
          <p style={{fontWeight:"600", padding:"1rem"}}>IT Staffing & Services</p>
           </div>
           <div>
        <img
          src={process.env.PUBLIC_URL + "assets/image/banner.jpg"}
          alt="banner img"
          style={{height:"260px", width:"325px"}}
        />
         <p style={{fontWeight:"600", padding:"1rem"}}>Managed IT Services</p>
           </div>
           
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
