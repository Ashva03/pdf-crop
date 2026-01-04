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
  @media (max-width: 991px) {
    padding: 16px 20px;
  }
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
  position: relative;

  @media (max-width: 991px) {
    display: none;
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: linear-gradient(135deg, #5a52e8 0%, #8546ee 100%);
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  z-index: 1001;
  min-width: 150px;
`;

const DropdownItem = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const NavLinkContainer = styled.div`
  position: relative;

  &:hover ${DropdownMenu} {
    display: block;
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
  cursor: pointer;

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
    ${(props) =>
      !props.$active &&
      `
      &:after {
        transform: scaleX(0);
      }
    `}
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

const NavDropdownTrigger = styled.span<{ $active?: boolean }>`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.$active ? 1 : 0.8)};
  position: relative;
  padding: 0.5rem 0;
  cursor: default;

  &:hover {
    opacity: 1;
  }
`;

const MobileDropdownButton = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  padding: 0.5rem 0;
  text-align: left;
  width: 100%;
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.$active ? 1 : 0.8)};
  font-size: inherit;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
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
  z-index: 999;

  @media (max-width: 991px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
`;

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMobileConvertOpen, setIsMobileConvertOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsMobileConvertOpen(false);
  };

  const handleMobileConvertToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileConvertOpen(!isMobileConvertOpen);
  };

  const isConvertActive = [
    "/images-to-pdf",
    "/docs-to-pdf",
    "/pdf-to-word",
    "/pdf-to-jpg",
    "/merge-pdf",
    "/compress-pdf",
    "/edit-pdf",
  ].includes(pathname);

  // const isEditActive = pathname === "/edit-pdf";

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
          <NavLink
            href="/"
            $active={pathname === "/"}
            onClick={handleLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            href="/flipkart-label"
            $active={pathname === "/flipkart-label"}
            onClick={handleLinkClick}
          >
            Flipkart Label
          </NavLink>
          <NavLink
            href="/meesho-label"
            $active={pathname === "/meesho-label"}
            onClick={handleLinkClick}
          >
            Meesho Label
          </NavLink>
          <NavLink
            href="/snapdeal-label"
            $active={pathname === "/snapdeal-label"}
            onClick={handleLinkClick}
          >
            Snapdeal Label
          </NavLink>
          <NavLink
            href="/amazon-label"
            $active={pathname === "/amazon-label"}
            onClick={handleLinkClick}
          >
            Amazon Label
          </NavLink>
          <NavLink
            href="/myntra-label"
            $active={pathname === "/myntra-label"}
            onClick={handleLinkClick}
          >
            Myntra Label
          </NavLink>
          <NavLinkContainer>
            <NavDropdownTrigger $active={isConvertActive}>
              PDF Convert
            </NavDropdownTrigger>
            <DropdownMenu>
              <DropdownItem href="/images-to-pdf" onClick={handleLinkClick}>
                Images to PDF
              </DropdownItem>
              {/* <DropdownItem href="/docs-to-pdf" onClick={handleLinkClick}>
                Docs to PDF
              </DropdownItem> */}
              {/* <DropdownItem href="/pdf-to-word" onClick={handleLinkClick}>
                PDF to Word
              </DropdownItem> */}
              <DropdownItem href="/pdf-to-jpg" onClick={handleLinkClick}>
                PDF to JPG
              </DropdownItem>
              <DropdownItem href="/merge-pdf" onClick={handleLinkClick}>
                Merge PDF
              </DropdownItem>
              <DropdownItem href="/compress-pdf" onClick={handleLinkClick}>
                Compress PDF
              </DropdownItem>
              <DropdownItem href="/edit-pdf" onClick={handleLinkClick}>
                Edit PDF
              </DropdownItem>
            </DropdownMenu>
          </NavLinkContainer>
          <NavLink
            href="/features"
            $active={pathname === "/features"}
            onClick={handleLinkClick}
          >
            Features
          </NavLink>
          <NavLink
            href="/blog"
            $active={pathname === "/blog"}
            onClick={handleLinkClick}
          >
            Blog
          </NavLink>
          <NavLink
            href="/about"
            $active={pathname === "/about"}
            onClick={handleLinkClick}
          >
            About
          </NavLink>
          <NavLink
            href="/faq"
            $active={pathname === "/faq"}
            onClick={handleLinkClick}
          >
            FAQ
          </NavLink>
          <NavLink
            href="/contact"
            $active={pathname === "/contact"}
            onClick={handleLinkClick}
          >
            Contact
          </NavLink>
        </NavLinks>
      </NavContent>
      <MobileNav isOpen={isOpen}>
        <NavLink href="/" $active={pathname === "/"} onClick={handleLinkClick}>
          Home
        </NavLink>
        <NavLink
          href="/flipkart-label"
          $active={pathname === "/flipkart-label"}
          onClick={handleLinkClick}
        >
          Flipkart Label
        </NavLink>
        <NavLink
          href="/meesho-label"
          $active={pathname === "/meesho-label"}
          onClick={handleLinkClick}
        >
          Meesho Label
        </NavLink>
        <NavLink
          href="/snapdeal-label"
          $active={pathname === "/snapdeal-label"}
          onClick={handleLinkClick}
        >
          Snapdeal Label
        </NavLink>
        <NavLink
          href="/amazon-label"
          $active={pathname === "/amazon-label"}
          onClick={handleLinkClick}
        >
          Amazon Label
        </NavLink>
        <NavLink
          href="/myntra-label"
          $active={pathname === "/myntra-label"}
          onClick={handleLinkClick}
        >
          Myntra Label
        </NavLink>
        <MobileDropdownButton
          onClick={handleMobileConvertToggle}
          $active={isConvertActive}
        >
          PDF Convert {isMobileConvertOpen ? "▲" : "▼"}
        </MobileDropdownButton>
        {isMobileConvertOpen && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "1.5rem",
              gap: "0.5rem",
            }}
          >
            <NavLink
              href="/images-to-pdf"
              $active={pathname === "/images-to-pdf"}
              onClick={handleLinkClick}
            >
              Images to PDF
            </NavLink>
            {/* <NavLink href="/docs-to-pdf" $active={pathname === "/docs-to-pdf"} onClick={handleLinkClick}>
              Docs to PDF
            </NavLink> */}
            {/* <NavLink href="/pdf-to-word" $active={pathname === "/pdf-to-word"} onClick={handleLinkClick}>
              PDF to Word
            </NavLink> */}
            <NavLink
              href="/pdf-to-jpg"
              $active={pathname === "/pdf-to-jpg"}
              onClick={handleLinkClick}
            >
              PDF to JPG
            </NavLink>
            <NavLink
              href="/merge-pdf"
              $active={pathname === "/merge-pdf"}
              onClick={handleLinkClick}
            >
              Merge PDF
            </NavLink>
            <NavLink
              href="/compress-pdf"
              $active={pathname === "/compress-pdf"}
              onClick={handleLinkClick}
            >
              Compress PDF
            </NavLink>
            <NavLink
              href="/edit-pdf"
              $active={pathname === "/edit-pdf"}
              onClick={handleLinkClick}
            >
              Edit PDF
            </NavLink>
          </div>
        )}
        <NavLink
          href="/features"
          $active={pathname === "/features"}
          onClick={handleLinkClick}
        >
          Features
        </NavLink>
        <NavLink
          href="/blog"
          $active={pathname === "/blog"}
          onClick={handleLinkClick}
        >
          Blog
        </NavLink>
        <NavLink
          href="/about"
          $active={pathname === "/about"}
          onClick={handleLinkClick}
        >
          About
        </NavLink>
        <NavLink
          href="/faq"
          $active={pathname === "/faq"}
          onClick={handleLinkClick}
        >
          FAQ
        </NavLink>
        <NavLink
          href="/contact"
          $active={pathname === "/contact"}
          onClick={handleLinkClick}
        >
          Contact
        </NavLink>
      </MobileNav>
    </Nav>
  );
}
