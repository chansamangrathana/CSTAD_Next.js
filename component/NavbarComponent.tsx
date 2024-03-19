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
    <header>
    <Navbar  className="p-2 container mx-auto w-full bg-blue-800">
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img className="w-10"
          src="https://istad.co/resources/img/CSTAD_120.png"
        />
        <span className=" self-center whitespace-nowrap text-2xl font-bold text-white tracking-[.25em]">
          CSTAD
        </span>
      </NavbarBrand >
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" className="text-white">
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/enroll" className="text-white">
          Enroll
        </NavbarLink>
        <NavbarLink href="/course" className="text-white" >Course</NavbarLink>
        <NavbarLink href="/itNew" className="text-white">IT News</NavbarLink>
        <NavbarLink href="/aboutUs" className="text-white">About Us</NavbarLink>
        <NavbarLink href="/contect" className="text-white">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    </header>
  );
}
