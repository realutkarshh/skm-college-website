import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Logo from "../public/college-logo.jpg"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="Modern Nursing Institute"
                width={125}
                height={125}
                className="rounded-md"
              />
              <span className="font-bold">S.K.M. College of Nursing & Paramedical</span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Shaping compassionate healthcare professionals through quality education, practical training, and ethical
              values.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="#"
                className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-teal-600 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-teal-600 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-teal-600 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-teal-600 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-teal-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-teal-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/affiliations" className="text-sm text-gray-400 hover:text-teal-400">
                  Affiliations
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-sm text-gray-400 hover:text-teal-400">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/placements" className="text-sm text-gray-400 hover:text-teal-400">
                  Placements
                </Link>
              </li>
              <li>
                <Link href="/fee-structure" className="text-sm text-gray-400 hover:text-teal-400">
                  Fee Structure
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-teal-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Programs</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/#academics" className="text-sm text-gray-400 hover:text-teal-400">
                  B.Sc. Nursing (4 Years)
                </Link>
              </li>
              <li>
                <Link href="/#academics" className="text-sm text-gray-400 hover:text-teal-400">
                  GNM - General Nursing & Midwifery (3 Years)
                </Link>
              </li>
              <li>
                <Link href="/#academics" className="text-sm text-gray-400 hover:text-teal-400">
                  Post Basic B.Sc. Nursing (2 Years)
                </Link>
              </li>
              <li>
                <Link href="/#academics" className="text-sm text-gray-400 hover:text-teal-400">
                  M.Sc. Nursing (2 Years)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-400" />
                <span className="text-sm text-gray-400">123 Medical Campus Road, Patna, Bihar - 800001</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <span className="text-sm text-gray-400">
                  +91 9876543210 (Admissions)
                  <br />
                  +91 9876543211 (General)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-teal-400" />
                <span className="text-sm text-gray-400">
                  admissions@modernnursing.edu
                  <br />
                  info@modernnursing.edu
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Modern Nursing Institute. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-xs text-gray-400 hover:text-teal-400">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-xs text-gray-400 hover:text-teal-400">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-xs text-gray-400 hover:text-teal-400">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
