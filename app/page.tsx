import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Award,
  GraduationCap,
  Building,
  BookOpen,
  Users,
  Bell,
  Shield,
} from "lucide-react"
import NewsNotifications from "@/components/news-notifications"
import FacilityGallery from "@/components/facility-gallery"
import ImageCarousel from "@/components/image-carousel"
import HeroImage from "../public/hero-main.jpeg"

export default function Home() {
  return (
    <>

    
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="relative h-screen max-h-[800px] w-full overflow-hidden">
          <ImageCarousel
            images={[
              { src: HeroImage.src, alt: "Nursing students in classroom" },
              { src: HeroImage.src, alt: "Nursing simulation lab" },
              { src: HeroImage.src, alt: "College campus" },
              { src: HeroImage.src, alt: "Students in clinical practice" },
            ]}
          />
          <div className="container relative mx-auto px-4 py-8 sm:px-6 lg:flex lg:h-screen lg:max-h-[800px] lg:items-center lg:px-8 lg:py-24">
            <div className="max-w-xl text-center sm:text-left z-10">
              <div className="relative">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800 mb-6 animate-fade-in-up">
                  Excellence in Nursing Education
                </div>

                <h1 className="text-3xl font-extrabold sm:text-5xl lg:text-6xl animate-fade-in-up animation-delay-200 text-white">
                  S.K.M. College of
                  <span className="block text-teal-300 mt-1">Nursing & Paramedical</span>
                </h1>

                <p className="mt-4 max-w-lg sm:text-xl/relaxed text-gray-100 animate-fade-in-up animation-delay-400">
                  Shaping compassionate healthcare professionals through quality education, practical training, and
                  ethical values.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-center animate-fade-in-up animation-delay-600">
                <Link
                  href="/contact#admission-form"
                  className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring sm:w-auto"
                >
                  Apply Now
                </Link>

                <Link
                  href="/about"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring sm:w-auto"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-on-scroll">
              About Our Institute
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-on-scroll animation-delay-200">
              S.K.M. College of Nursing & Paramedical is dedicated to providing high-quality education and training to
              aspiring nurses, preparing them for successful careers in healthcare.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg animate-on-scroll">
              <div className="rounded-full bg-teal-100 p-3">
                <MapPin className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Our Location</h3>
              <p className="mt-2 text-gray-600">Dadhi Pakaria, Shambhu Ganj, Banka, Bihar- 813211.</p>
              <div className="mt-4 h-64 w-full overflow-hidden rounded-lg">
                <iframe
                  title="College Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6887087100554!2d86.70869217483252!3d25.044636137864174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1a5254a52359d%3A0x87d532001c3d0779!2sSKM%20EDUCATION%2C%20DADHI%20PAKARIA!5e0!3m2!1sen!2sin!4v1744475867093!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="flex flex-col items-start rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg animate-on-scroll animation-delay-200">
              <div className="rounded-full bg-teal-100 p-3">
                <Phone className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Contact Details</h3>
              <p className="mt-2 text-gray-600">We're here to answer your questions and provide guidance.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-teal-600" />
                  <span>+91 9955932207, 6205781139, 9910068341</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-teal-600" />
                  <span>skmpakaria@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-teal-600" />
                  <span>principal.skmcnp@gmail.com</span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="font-medium text-gray-900">Working Hours:</h4>
                <p className="text-gray-600">Monday - Saturday: 10:00 AM - 4:00 PM</p>
                {/* <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p> */}
              </div>
            </div>

            <div className="flex flex-col items-start rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg animate-on-scroll animation-delay-400">
              <div className="rounded-full bg-teal-100 p-3">
                <Award className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Our Mission</h3>
              <p className="mt-2 text-gray-600">
                To develop competent, compassionate, and ethical nursing professionals who contribute to improving
                healthcare outcomes in society.
              </p>
              <h4 className="mt-4 font-medium text-gray-900">Our Values:</h4>
              <ul className="mt-2 list-disc pl-5 text-gray-600">
                <li>Excellence in education and patient care</li>
                <li>Compassion and empathy</li>
                <li>Ethical practice and integrity</li>
                <li>Innovation and continuous improvement</li>
                <li>Diversity and inclusion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="bg-white py-16 sm:py-24">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-on-scroll">
        Academic Excellence
      </h2>
      <p className="mt-4 text-lg text-gray-600 animate-on-scroll animation-delay-200">
        Discover our comprehensive academic programs, experienced faculty, and educational resources.
      </p>
    </div>

    <div className="mt-16 flex justify-center">
      <div className="w-full max-w-7xl rounded-lg bg-white p-6 shadow-md animate-on-scroll">
        <div className="flex items-center gap-4 mb-8">
          <div className="rounded-full bg-teal-100 p-3">
            <GraduationCap className="h-6 w-6 text-teal-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Courses Offered</h3>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/** Card 1 */}
          <div className="rounded-lg bg-white shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="B.Sc. Nursing"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-medium text-gray-900 text-xl">B.Sc. Nursing (4 Years)</h4>
              <p className="mt-2 text-gray-600">
                Discover B.Sc Nursing Course at Nightingale Institute of Nursing
              </p>
              <Link
                href="/contact#admission-form"
                className="mt-4 inline-flex items-center text-teal-600 hover:text-teal-700"
              >
                Apply for admission <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/** Card 2 */}
          <div className="rounded-lg bg-white shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="GNM Course"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-medium text-gray-900 text-xl">Diploma in GNM (3 Years)</h4>
              <p className="mt-2 text-gray-600">Diploma in General Nursing skills and Midwifery.</p>
              <Link
                href="/contact#admission-form"
                className="mt-4 inline-flex items-center text-teal-600 hover:text-teal-700"
              >
                Apply for admission <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/** Card 3 */}
          <div className="rounded-lg bg-white shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="ANM Course"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-medium text-gray-900 text-xl">Diploma in ANM (2 Years)</h4>
              <p className="mt-2 text-gray-600">Diploma in Auxiliary Nursing skills and Midwifery.</p>
              <Link
                href="/contact#admission-form"
                className="mt-4 inline-flex items-center text-teal-600 hover:text-teal-700"
              >
                Apply for admission <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Facilities Section */}
      <section id="facilities" className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-on-scroll">
              Campus Facilities
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-on-scroll animation-delay-200">
              Explore our state-of-the-art infrastructure and facilities designed to provide an optimal learning
              environment.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md animate-on-scroll">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-teal-100 p-3">
                  <Building className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Academic Buildings</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Our modern campus features spacious classrooms, lecture halls, and administrative facilities.
              </p>
              <div className="mt-6 overflow-hidden rounded-lg">
                <FacilityGallery type="buildings" />
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md animate-on-scroll animation-delay-200">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-teal-100 p-3">
                  <BookOpen className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Library & Learning Resources</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Our well-stocked library contains thousands of books, journals, and digital resources.
              </p>
              <div className="mt-6 overflow-hidden rounded-lg">
                <FacilityGallery type="library" />
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md animate-on-scroll">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-teal-100 p-3">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Simulation Labs</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Our advanced simulation labs provide hands-on training in realistic healthcare scenarios.
              </p>
              <div className="mt-6 overflow-hidden rounded-lg">
                <FacilityGallery type="labs" />
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md animate-on-scroll animation-delay-200">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-teal-100 p-3">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Student Amenities</h3>
              </div>
              <p className="mt-4 text-gray-600">We provide comfortable hostels.</p>
              <ul className="mt-6 space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                  <span>Separate hostels for male and female students</span>
                </li>
                {/* <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                  <span>Hygienic cafeteria with nutritious meal options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                  <span>Indoor and outdoor sports facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                  <span>Student common rooms and recreation areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                  <span>Wi-Fi enabled campus</span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-on-scroll">
              Student Testimonials
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-on-scroll animation-delay-200">
              Hear from our alumni about their experiences at S.K.M. College of Nursing & Paramedical Institute.
            </p>
          </div>

          <div className="mt-16 animate-on-scroll animation-delay-400">
            <TestimonialCarousel />
          </div>
        </div>
      </section> */}

      {/* BSCC Notification Section */}
      <section id="bscc" className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-lg bg-teal-50 p-6 shadow-md animate-on-scroll">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <div className="rounded-full bg-teal-100 p-3">
                <Bell className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-left sm:text-3xl">
                Bihar Student Credit Card Scheme (BSCC)
              </h2>
            </div>
            <div className="mt-6 rounded-md bg-white p-4">
              <p className="text-gray-600">
                <strong className="font-medium text-teal-700">Important Notice:</strong> The Bihar Student Credit Card
                Scheme (BSCC) is a <strong className="underline">loan scheme</strong> provided by the Government of
                Bihar to help students finance their higher education. This is not a scholarship or grant program.
                Students and parents are advised to carefully review the terms and conditions before applying.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-md bg-gray-50 p-3">
                  <h4 className="font-medium text-gray-900">Key Features:</h4>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
                    <li>Education loan up to ₹4 lakhs</li>
                    <li>Annual interest rate of 4%</li>
                    <li>Repayment period of up to 10 years after course completion</li>
                    <li>No collateral required</li>
                  </ul>
                </div>
                <div className="rounded-md bg-gray-50 p-3">
                  <h4 className="font-medium text-gray-900">Eligibility:</h4>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
                    <li>Bihar domicile students</li>
                    <li>Admission in recognized institutions</li>
                    <li>Family income criteria as per government guidelines</li>
                    <li>Academic performance requirements</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link href="#" className="inline-flex items-center text-teal-600 hover:text-teal-700">
                  Learn more about BSCC <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Notifications Section */}
      <section id="news" className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-on-scroll">
              News & Notifications
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-on-scroll animation-delay-200">
              Stay updated with the latest announcements, events, and activities at our institute.
            </p>
          </div>

          <div className="mt-16 animate-on-scroll animation-delay-400">
            <NewsNotifications />
          </div>
        </div>
      </section>

      {/* Anti-Ragging Section */}
      <section id="anti-ragging" className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-lg bg-red-50 p-6 shadow-md animate-on-scroll">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <div className="rounded-full bg-red-100 p-3">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-left sm:text-3xl">
                Anti-Ragging Policy
              </h2>
            </div>
            <p className="mt-6 text-gray-600">
              S.K.M. College of Nursing & Paramedical maintains a zero-tolerance policy towards ragging in any form.
              Ragging is strictly prohibited within the campus, hostels, and all institute-affiliated locations. Any
              student found engaging in ragging will face severe disciplinary action as per UGC regulations and state
              laws.
            </p>
            {/* <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-md bg-white p-4 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">Anti-Ragging Committee</h3>
                <ul className="mt-4 space-y-3">
                  <li className="rounded-md bg-gray-50 p-3">
                    <div className="font-medium">Dr. Rajesh Kumar</div>
                    <div className="text-sm text-gray-600">Chairperson</div>
                    <div className="mt-1 text-sm text-gray-600">Contact: +91 9876543210</div>
                  </li>
                  <li className="rounded-md bg-gray-50 p-3">
                    <div className="font-medium">Prof. Meena Sharma</div>
                    <div className="text-sm text-gray-600">Member Secretary</div>
                    <div className="mt-1 text-sm text-gray-600">Contact: +91 9876543211</div>
                  </li>
                  <li className="rounded-md bg-gray-50 p-3">
                    <div className="font-medium">Dr. Anand Singh</div>
                    <div className="text-sm text-gray-600">Faculty Member</div>
                    <div className="mt-1 text-sm text-gray-600">Contact: +91 9876543212</div>
                  </li>
                </ul>
              </div>
              <div className="rounded-md bg-white p-4 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">Reporting Ragging</h3>
                <p className="mt-2 text-gray-600">
                  Students can report incidents of ragging through the following channels:
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-red-600"></span>
                    <span>Anti-Ragging Helpline: 1800-180-5522</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-red-600"></span>
                    <span>Email: antiragging@modernnursing.edu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-red-600"></span>
                    <span>In-person: Dean of Students' Office</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-red-600"></span>
                    <span>Online: Through the institute's portal</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link href="#" className="inline-flex items-center text-red-600 hover:text-red-700">
                    View complete anti-ragging circular <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
