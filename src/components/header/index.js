"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdMenu } from "react-icons/io";
import Image from "next/image";
import "./style.css";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <Link className="nav-logo" href="/">
        <figure>
          <Image
            src="/assets/image/logo.png"
            alt="logo"
            width={60}
            height={50}
          />
        </figure>
      </Link>

      <nav>
        <ul className="nav-links">
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={pathname === "/services" ? "active" : ""}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div id="mobilemenu">
        <IoMdMenu
          id="menu-icon"
          onClick={toggleMenu}
          size={30}
          aria-label="Toggle mobile menu"
        />

        {menuOpen && (
          <ul>
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className={pathname === "/services" ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className={pathname === "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
