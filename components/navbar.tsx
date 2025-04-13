"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "../public/college-logo.jpg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Affiliations", href: "/affiliations" },
    { name: "Faculty", href: "/faculty" },
    { name: "Courses", href: "/#academics" },
    { name: "Fee Structure", href: "/fee-structure" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <Image
            src={Logo}
            alt="S.K.M. College of Nursing & Paramedical"
            width={50}
            height={50}
            className="rounded-md"
          />
          <span className="hidden font-bold text-gray-900 md:inline-block">
            S.K.M. College of <br /> Nursing & Paramedical
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                isActive(link.href) ? "text-teal-600" : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-1 text-sm font-medium text-gray-600"
              >
                Quick Links
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {/* <DropdownMenuItem asChild>
                <Link href="/contact#admission-form" className="w-full cursor-pointer">
                  Apply Now
                </Link>
              </DropdownMenuItem> */}
              {/* <DropdownMenuItem asChild>
                <Link href="/#news" className="w-full cursor-pointer">
                  News & Events
                </Link>
              </DropdownMenuItem> */}
              <DropdownMenuItem asChild>
                <Link href="/#anti-ragging" className="w-full cursor-pointer">
                  Anti-Ragging
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/#bscc" className="w-full cursor-pointer">
                  BSCC Scheme
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild className="bg-teal-600 hover:bg-teal-700">
            <Link href="/contact#admission-form">Apply Now</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                  isActive(link.href) ? "text-teal-600" : "text-gray-600"
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                <Link href="/contact#admission-form" onClick={closeMenu}>
                  Apply Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
