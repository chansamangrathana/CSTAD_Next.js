import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded className=" navbar sticky-top navbar-expand-lg navbar-light bg-light non-scroll-bg">
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img
          src="/next.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/enroll">
          Enroll
        </NavbarLink>
        <NavbarLink href="/course">Course</NavbarLink>
        <NavbarLink href="/itNew">IT News</NavbarLink>
        <NavbarLink href="/aboutUs">About Us</NavbarLink>
        <NavbarLink href="/contect">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
