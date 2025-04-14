"use client";

import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import React from "react";
import { Menu, X } from "lucide-react";

const Nav = styled.nav`
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  img {
    width: 28px;
    height: 28px;
    border-radius: 5px;
    object-fit: contain;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 991px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.$active ? 1 : 0.8)};
  position: relative;
  padding: 0.5rem 0;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: white;
    transform: scaleX(${(props) => (props.$active ? 1 : 0)});
    transition: transform 0.3s ease;
  }

  &:hover {
    opacity: 1;
    &:after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 991px) {
    &:hover {
      opacity: 0.8;
      &:after {
        transform: scaleX(0);
      }
    }

    ${(props) =>
      props.$active &&
      `
      &:hover {
        opacity: 1;
        &:after {
          transform: scaleX(1);
        }
      }
    `}
  }
`;

const CloseIcon = styled.svg`
  width: 25px;
  height: 25px;
  fill: white;
`;

const Hamburger = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 991px) {
    display: flex;
  }
`;

const MobileNav = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 71px;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  padding: 1rem;
  gap: 1rem;

  @media (max-width: 991px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
`;

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Nav>
      <NavContent>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Logo>
            <img src="/favicon-32x32.png" alt="PDF Cropper Logo" />
            PDF Cropper
          </Logo>
        </Link>
        <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="h-6 w-6" style={{ color: "white" }} />
          ) : (
            <Menu className="h-6 w-6" style={{ color: "white" }} />
          )}
        </Hamburger>
        <NavLinks>
          <NavLink href="/" $active={pathname === "/"}>
            Home
          </NavLink>
          <NavLink
            href="/flipkart-label"
            $active={pathname === "/flipkart-label"}
          >
            Flipkart Label
          </NavLink>
          {/* <NavLink href="/myntra-label" $active={pathname === '/myntra-label'}>
            Myntra Label
          </NavLink> */}
          <NavLink href="/meesho-label" $active={pathname === "/meesho-label"}>
            Meesho Label
          </NavLink>
          {/* <NavLink href="/amazon-label" $active={pathname === '/amazon-label'}>
            Amazon Label
          </NavLink> */}
          <NavLink href="/features" $active={pathname === "/features"}>
            Features
          </NavLink>
          <NavLink href="/pricing" $active={pathname === "/pricing"}>
            Pricing
          </NavLink>
          <NavLink href="/blog" $active={pathname === "/blog"}>
            Blog
          </NavLink>
          <NavLink href="/contact" $active={pathname === "/contact"}>
            Contact
          </NavLink>
        </NavLinks>
      </NavContent>
      <MobileNav isOpen={isOpen}>
        <NavLink href="/" $active={pathname === "/"}>
          Home
        </NavLink>
        <NavLink
          href="/flipkart-label"
          $active={pathname === "/flipkart-label"}
        >
          Flipkart Label
        </NavLink>
        <NavLink href="/meesho-label" $active={pathname === "/meesho-label"}>
          Meesho Label
        </NavLink>
        <NavLink href="/features" $active={pathname === "/features"}>
          Features
        </NavLink>
        <NavLink href="/pricing" $active={pathname === "/pricing"}>
          Pricing
        </NavLink>
        <NavLink href="/blog" $active={pathname === "/blog"}>
          Blog
        </NavLink>
        <NavLink href="/contact" $active={pathname === "/contact"}>
          Contact
        </NavLink>
      </MobileNav>
    </Nav>
  );
}
