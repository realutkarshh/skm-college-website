import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Award, Users, BookOpen, Clock, MapPin } from "lucide-react"
import OurStoryImage from "/public/our-story.jpeg"
import DoctorImage1 from "/public/doctor-image1.png"
import DoctorImage2 from "/public/doctor-image2.jpg"
import DoctorImage3 from "/public/doctor-image3.png"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">About Us</h1>
            <p className="mt-4 text-lg text-gray-600">
              Learn more about S.K.M. College of Nursing & Paramedical, our history, mission, and commitment to excellence in nursing
              education.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Story</h2>
              <p className="mt-4 text-lg text-gray-600">
              S.K.M. College of Nursing & Paramedical was established in 2023 with a vision to create a center of excellence for
                nursing education in Bihar. Over the years, we have grown to become one of the leading nursing
                institutions in the region, known for our quality education, state-of-the-art facilities.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our institute was founded by a group of healthcare professionals and educators who recognized the need
                for well-trained nursing professionals in the healthcare sector. We now admit over 180 students annually across various nursing programs.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                We take pride in our alumni who are serving in prestigious healthcare institutions across India and
                abroad, making significant contributions to patient care and healthcare delivery.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <div className="relative h-full overflow-hidden rounded-lg">
                <Image
                  src={OurStoryImage}
                  alt="S.K.M. College of Nursing & Paramedical Institute Building"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Mission & Vision</h2>
            <p className="mt-4 text-lg text-gray-600">
              Guided by our core values, we strive to make a positive impact on healthcare through education and
              training.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-teal-100 p-3">
                  <Award className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="mt-4 text-gray-600">
                To develop competent, compassionate, and ethical nursing professionals who contribute to improving
                healthcare outcomes in society through:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                  <span>Providing high-quality nursing education that integrates theory and practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                  <span>Fostering critical thinking, clinical reasoning, and evidence-based practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                  <span>Promoting research and innovation in nursing and healthcare</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                  <span>Instilling professional values, ethics, and a commitment to lifelong learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                  <span>Serving the healthcare needs of the community through outreach programs</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-teal-100 p-3">
                  <BookOpen className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="mt-4 text-gray-600">
                To be recognized as a center of excellence in nursing education, research, and practice, producing
                leaders who transform healthcare delivery and improve patient outcomes.
              </p>
              <p className="mt-4 text-gray-600">We envision S.K.M. College of Nursing & Paramedical Institute as:</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                  <span>A premier institution for nursing education in Eastern India</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                  <span>A hub for nursing research and innovation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                  <span>A community of scholars and practitioners committed to healthcare excellence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-600"></span>
                  <span>A catalyst for positive change in healthcare delivery systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600">
              These principles guide our approach to education, research, and community service.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <Award className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Excellence</h3>
              <p className="mt-2 text-gray-600">
                We strive for excellence in all aspects of education, research, and service, setting high standards and
                continuously improving our programs and practices.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Compassion</h3>
              <p className="mt-2 text-gray-600">
                We foster empathy, kindness, and respect for human dignity, recognizing that compassionate care is
                essential to the nursing profession and patient well-being.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <Award className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Integrity</h3>
              <p className="mt-2 text-gray-600">
                We uphold the highest ethical standards, promoting honesty, transparency, and accountability in all our
                interactions and professional practice.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <BookOpen className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Innovation</h3>
              <p className="mt-2 text-gray-600">
                We encourage creativity, critical thinking, and evidence-based approaches to address healthcare
                challenges and improve nursing practice.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Diversity & Inclusion</h3>
              <p className="mt-2 text-gray-600">
                We value and respect diversity in all its forms, creating an inclusive environment that celebrates
                different perspectives, backgrounds, and experiences.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <Clock className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Lifelong Learning</h3>
              <p className="mt-2 text-gray-600">
                We promote continuous professional development and a commitment to lifelong learning, adapting to the
                evolving healthcare landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Leadership</h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet the dedicated professionals who guide our institution towards excellence.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md text-center">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src={DoctorImage2}
                  alt="Dr. Priya Sharma"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Dr. Sharma</h3>
              <p className="text-teal-600">Principal & Director</p>
              <p className="mt-2 text-sm text-gray-600">
                Ph.D. in Nursing, M.Sc. Nursing with 25+ years of experience in nursing education and administration.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md text-center">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src={DoctorImage1}
                  alt="Dr. Rajesh Kumar"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Dr. Kumar</h3>
              <p className="text-teal-600">Vice Principal & Dean of Academics</p>
              <p className="mt-2 text-sm text-gray-600">
                Ph.D. in Nursing, M.Sc. Nursing (Medical-Surgical) with expertise in curriculum development and academic
                leadership.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md text-center">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src={DoctorImage3}
                  alt="Dr. Anand Singh"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Dr. Singh</h3>
              <p className="text-teal-600">Dean of Research & Development</p>
              <p className="mt-2 text-sm text-gray-600">
                Ph.D. in Psychiatric Nursing with a strong background in healthcare research and innovation.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/faculty"
              className="inline-flex items-center rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
            >
              View All Faculty Members <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Campus Location Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-teal-100 p-3">
                  <MapPin className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Location</h3>
              </div>
              <p className="mt-4 text-gray-600">
                S.K.M. College of Nursing & Paramedical Institute is located in Dadhi Pakaria, Shambhu Ganj, Banka, Bihar, making it easily accessible
                from all parts of the city. Our campus is situated in a peaceful environment conducive to learning, yet
                close to hospitals and healthcare facilities where our students gain practical experience.
              </p>
              <p className="mt-4 text-gray-600">
                The campus is well-connected by public transportation.
              </p>
              <div className="mt-6">
                <h4 className="font-medium text-gray-900">Address:</h4>
                <p className="text-gray-600">Dadhi Pakaria, Shambhu Ganj,
                Banka, Bihar- 813211.</p>
                {/* <p className="mt-2 text-gray-600">
                  <span className="font-medium">Landmarks:</span> Near City Hospital, 2 km from Gandhi Maidan
                </p> */}
              </div>
            </div>
            <div className="h-96 overflow-hidden rounded-lg shadow-md">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Begin Your Nursing Journey With Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              Take the first step towards a rewarding career in healthcare by joining S.K.M. College of Nursing & Paramedical Institute.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact#admission-form"
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-teal-600 bg-white px-5 py-2.5 text-sm font-medium text-teal-600 shadow-sm hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
