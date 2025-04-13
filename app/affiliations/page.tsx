import { Button } from "@/components/ui/button"
import AffiliationCertificates from "@/components/affiliation-certificates"

export default function AffiliationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Affiliations & Accreditations
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              S.K.M. College of Nursing & Paramedical is recognized by leading educational and professional bodies, ensuring quality
              education and valid certification.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Our Certifications</h2>
            <p className="mt-4 text-lg text-gray-600">
              View our latest affiliation certificates, including University Affiliation Letter and other relevant certifications.
            </p>
          </div>

          <AffiliationCertificates />
        </div>
      </section>

      {/* Affiliating Bodies Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Our Affiliating Bodies</h2>
            <p className="mt-4 text-lg text-gray-600">
              Learn more about the prestigious organizations that recognize and accredit our institution.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900">Bihar University of Health Sciences (BUHS)</h3>
              <p className="mt-2 text-gray-600">
              Bihar University of Health Sciences (BUHS) is a state-run university established to oversee and enhance the quality of medical, nursing, and health sciences education across Bihar.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </Button>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900">Bihar Nurses Registration Council (BNRC)</h3>
              <p className="mt-2 text-gray-600">
                The state-level regulatory body that registers nurses and maintains standards of nursing practice in
                Bihar.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </Button>
            </div>

            

            

            
            
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Benefits of Our Accreditations
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our affiliations and accreditations provide numerous advantages to our students and institution.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Recognized Qualifications</h3>
              <p className="mt-2 text-gray-600">
                Degrees and diplomas awarded by our institute are recognized nationally and internationally, enhancing
                career prospects.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Quality Assurance</h3>
              <p className="mt-2 text-gray-600">
                Regular assessments by accrediting bodies ensure that we maintain high standards in education and
                infrastructure.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Eligibility for Government Jobs</h3>
              <p className="mt-2 text-gray-600">
                Graduates from recognized institutions are eligible for government nursing positions and further
                education.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Global Mobility</h3>
              <p className="mt-2 text-gray-600">
                Our accreditations facilitate international recognition, allowing graduates to pursue opportunities
                abroad.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Access to Funding</h3>
              <p className="mt-2 text-gray-600">
                Students of accredited institutions have access to various scholarships, grants, and educational loans.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Industry Partnerships</h3>
              <p className="mt-2 text-gray-600">
                Accreditations help us forge partnerships with leading healthcare institutions for clinical training and
                placements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
