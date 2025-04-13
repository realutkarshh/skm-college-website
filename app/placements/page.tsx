import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Award, Users, Briefcase } from "lucide-react"
import PlacementStats from "@/components/placement-stats"

export default function PlacementsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Placements</h1>
            <p className="mt-4 text-lg text-gray-600">
              Our Training and Placement Cell works diligently to ensure students find rewarding career opportunities in
              leading healthcare institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Placement Statistics Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Placement Statistics</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our placement records demonstrate our commitment to student success and career development.
            </p>
          </div>

          <PlacementStats />
        </div>
      </section>

      {/* Recruiters Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Our Recruiters</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our students are placed in prestigious hospitals and healthcare organizations across the country.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
              <div
                key={index}
                className="flex h-24 items-center justify-center rounded-md bg-white p-4 shadow-sm transition-all hover:shadow-md"
              >
                <Image
                  src={`/placeholder.svg?height=80&width=160&text=Hospital ${index}`}
                  alt={`Hospital ${index}`}
                  width={160}
                  height={80}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Placement Process</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our structured placement process ensures students are well-prepared for their careers.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Pre-Placement Training</h3>
              <p className="mt-2 text-gray-600">
                We provide comprehensive training to enhance employability skills, including:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                <li>Communication skills development</li>
                <li>Interview preparation</li>
                <li>Resume building workshops</li>
                <li>Mock interviews and feedback</li>
                <li>Personality development sessions</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <Briefcase className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Placement Activities</h3>
              <p className="mt-2 text-gray-600">
                Our placement cell organizes various activities to connect students with potential employers:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                <li>On-campus recruitment drives</li>
                <li>Hospital visits and internships</li>
                <li>Healthcare career fairs</li>
                <li>Industry-academia interaction sessions</li>
                <li>Guest lectures by healthcare professionals</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <Award className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Post-Placement Support</h3>
              <p className="mt-2 text-gray-600">Our support continues even after students are placed:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                <li>Mentoring during initial job phase</li>
                <li>Alumni networking opportunities</li>
                <li>Career advancement guidance</li>
                <li>Higher education counseling</li>
                <li>Continuing education programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Success Stories</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our alumni have achieved remarkable success in their nursing careers. Here are some inspiring stories.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=64&width=64&text=PS"
                    alt="Priya Sharma"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Priya Sharma</h3>
                  <p className="text-sm text-teal-600">B.Sc. Nursing, Batch of 2020</p>
                  <p className="text-sm text-gray-600">Critical Care Nurse, AIIMS Delhi</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "The clinical exposure and simulation training at S.K.M. College of Nursing & Paramedical prepared me exceptionally
                well for my role in the critical care unit. The faculty's guidance and mentorship were instrumental in
                my success."
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=64&width=64&text=RK"
                    alt="Rahul Kumar"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Rahul Kumar</h3>
                  <p className="text-sm text-teal-600">GNM, Batch of 2019</p>
                  <p className="text-sm text-gray-600">Nursing Supervisor, Max Healthcare</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "Starting as a staff nurse, I was promoted to a supervisory role within just three years. The leadership
                skills and clinical knowledge I gained at MNI gave me a competitive edge in my career progression."
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=64&width=64&text=AS"
                    alt="Anjali Singh"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Anjali Singh</h3>
                  <p className="text-sm text-teal-600">M.Sc. Nursing, Batch of 2018</p>
                  <p className="text-sm text-gray-600">Nursing Educator, Apollo Hospitals</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "The research methodology and teaching skills I developed during my M.Sc. program at MNI helped me
                secure a position as a nursing educator at Apollo Hospitals, where I now train the next generation of
                nurses."
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="#testimonials">
                Read More Success Stories <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* International Placements Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">International Opportunities</h2>
            <p className="mt-4 text-lg text-gray-600">
              We also facilitate international placements for our students in countries like the UK, USA, Australia,
              Canada, and the Middle East.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900">International Placement Support</h3>
              <p className="mt-2 text-gray-600">
                Our dedicated international placement cell provides comprehensive support to students seeking
                opportunities abroad:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                <li>Guidance on international nursing registration requirements</li>
                <li>Preparation for international nursing examinations (NCLEX, IELTS, OET)</li>
                <li>Assistance with visa applications and work permits</li>
                <li>Connections with international healthcare recruiters</li>
                <li>Cultural orientation and adaptation training</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900">Countries Where Our Alumni Work</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-md bg-gray-50 p-3">
                  <p className="font-medium text-gray-900">United Kingdom</p>
                  <p className="mt-1 text-sm text-gray-600">NHS Hospitals and Private Healthcare</p>
                </div>
                <div className="rounded-md bg-gray-50 p-3">
                  <p className="font-medium text-gray-900">United States</p>
                  <p className="mt-1 text-sm text-gray-600">Hospitals and Long-term Care Facilities</p>
                </div>
                <div className="rounded-md bg-gray-50 p-3">
                  <p className="font-medium text-gray-900">Australia</p>
                  <p className="mt-1 text-sm text-gray-600">Public and Private Hospitals</p>
                </div>
                <div className="rounded-md bg-gray-50 p-3">
                  <p className="font-medium text-gray-900">Canada</p>
                  <p className="mt-1 text-sm text-gray-600">Provincial Health Services</p>
                </div>
                <div className="rounded-md bg-gray-50 p-3">
                  <p className="font-medium text-gray-900">UAE & Saudi Arabia</p>
                  <p className="mt-1 text-sm text-gray-600">Government and Private Hospitals</p>
                </div>
                <div className="rounded-md bg-gray-50 p-3">
                  <p className="font-medium text-gray-900">Singapore</p>
                  <p className="mt-1 text-sm text-gray-600">Restructured and Private Hospitals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Placement Cell Section */}
      <section className="bg-teal-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Contact Our Placement Cell</h2>
              <p className="mt-2 text-gray-600">
                For placement-related inquiries, please contact our Training and Placement Cell.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Contact Details</h3>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                    <span>
                      <strong>Prof. Vikram Mehta</strong>
                      <br />
                      Training and Placement Officer
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                    <span>
                      <strong>Email:</strong> placements@modernnursing.edu
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                    <span>
                      <strong>Phone:</strong> +91 9876543215
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                    <span>
                      <strong>Office Hours:</strong> Monday to Friday, 9:00 AM to 5:00 PM
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">For Recruiters</h3>
                <p className="mt-2 text-gray-600">
                  If you are a healthcare organization interested in recruiting our students, please contact us for:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                  <li>Campus recruitment drives</li>
                  <li>Internship opportunities</li>
                  <li>Industry-academia partnerships</li>
                  <li>Guest lectures and workshops</li>
                </ul>
                <div className="mt-6">
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
