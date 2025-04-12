import ContactForm from "@/components/contact-form"
import AdmissionForm from "@/components/admission-form"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Contact Us</h1>
            <p className="mt-4 text-lg text-gray-600">
              Have questions? Reach out to us and our team will get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <ContactForm />
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900">Get in Touch</h3>
              <p className="mt-2 text-gray-600">
                We're here to answer your questions and provide guidance on admissions and programs.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-teal-100 p-3">
                    <MapPin className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Address</h4>
                    <p className="mt-1 text-gray-600">Dadhi Pakaria, Shambhu Ganj,
                    Banka, Bihar- 813211.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-teal-100 p-3">
                    <Phone className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="mt-1 text-gray-600">
                      +91 9955932207, 6205781139, 9910068341 (Admissions)
                      <br />
                      +91 6205781139 (General Inquiries)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-teal-100 p-3">
                    <Mail className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="mt-1 text-gray-600">
                    skmpakaria@gmail.com
                      <br />
                      principal.skmcnp@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-medium text-gray-900">Working Hours</h4>
                <p className="mt-2 text-gray-600">
                  Monday - Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Our Location</h2>
            <p className="mt-4 text-lg text-gray-600">
              Visit our campus to experience our facilities and meet our faculty in person.
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-lg shadow-md">
            <iframe
              title="College Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6887087100554!2d86.70869217483252!3d25.044636137864174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1a5254a52359d%3A0x87d532001c3d0779!2sSKM%20EDUCATION%2C%20DADHI%20PAKARIA!5e0!3m2!1sen!2sin!4v1744475867093!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Admission Form Section */}
      <section id="admission-form" className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Apply for Admission</h2>
            <p className="mt-4 text-lg text-gray-600">
              Take the first step towards your nursing career by filling out our application form.
            </p>
          </div>

          <div className="mt-16 mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-md">
            <AdmissionForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">
              Find answers to common questions about admissions, programs, and campus life.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">What are the admission requirements?</h3>
              <p className="mt-2 text-gray-600">
                Admission requirements vary by program. Generally, for B.Sc. Nursing, candidates must have completed
                10+2 with Physics, Chemistry, and Biology with a minimum of 50% marks. For detailed requirements, please
                visit our Admissions page.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">When do admissions open?</h3>
              <p className="mt-2 text-gray-600">
                Admissions typically open in June each year. The application deadline is usually in mid-July, with
                entrance examinations conducted in late July. We recommend applying early as seats are limited.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Are scholarships available?</h3>
              <p className="mt-2 text-gray-600">
                Yes, we offer merit-based and need-based scholarships. Additionally, students can apply for various
                government scholarship schemes. For more information, please visit our Fee Structure page.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Is hostel accommodation available?</h3>
              <p className="mt-2 text-gray-600">
                Yes, we provide separate hostel facilities for male and female students. Hostel accommodation is
                optional and allocated on a first-come, first-served basis. The hostel fee is separate from the tuition
                fee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
