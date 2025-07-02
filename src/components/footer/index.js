import Link from "next/link";
import Image from "next/image";
import "./style.css";

export function Footer() {
  return (
    <footer>
      <section className="footer-content">
        <div>
          <figure>
            <Image
              src="/assets/image/logo.png"
              alt="Zenithiq Logo"
              width={60}
              height={50}
              className="footer-logo"
            />
          </figure>
          <Link
            href="https://www.linkedin.com/company/zenithiq-technology-consulting%C2%A0llc/about"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <i className="fa-brands fa-linkedin"></i>
          </Link>
        </div>
        <ul className="footer-links">
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </section>
      <section className="footer-bar">
        <p>
          &copy; 2024 Zenithiq Technology & Consultancy LLC. All rights
          reserved.
        </p>
        <p><Link href="/#">Terms of Use</Link> | <Link href="/#">Privacy Policy</Link></p>
      </section>
    </footer>
  );
}
