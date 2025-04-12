import FacultySection from "@/components/faculty-section"

export default function FacultyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Our Faculty</h1>
            <p className="mt-4 text-lg text-gray-600">
              Meet our experienced and dedicated faculty members who are committed to providing quality education and
              mentorship to our students.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Members Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FacultySection />
        </div>
      </section>

      {/* Faculty Development Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Faculty Development</h2>
            <p className="mt-4 text-lg text-gray-600">
              We invest in the continuous professional development of our faculty to ensure they remain at the forefront
              of nursing education and practice.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900">Professional Development Programs</h3>
              <p className="mt-2 text-gray-600">
                Our faculty regularly participate in workshops, seminars, and conferences to enhance their knowledge and
                teaching skills. We organize faculty development programs on various topics such as:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                <li>Advanced teaching methodologies</li>
                <li>Clinical simulation techniques</li>
                <li>Research methodology and publication</li>
                <li>Technology integration in nursing education</li>
                <li>Student mentoring and counseling</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900">Research and Publications</h3>
              <p className="mt-2 text-gray-600">
                We encourage our faculty to engage in research activities and publish their work in reputed journals.
                Our faculty members have contributed significantly to nursing literature through:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                <li>Research papers in national and international journals</li>
                <li>Textbooks and reference materials for nursing education</li>
                <li>Presentations at scientific conferences</li>
                <li>Collaborative research projects with healthcare institutions</li>
                <li>Guidance for student research projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Achievements Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Faculty Achievements</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our faculty members have received recognition for their contributions to nursing education, research, and
              practice.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900">Awards and Recognitions</h3>
              <ul className="mt-4 space-y-4">
                <li className="rounded-md bg-gray-50 p-4">
                  <p className="font-medium text-gray-900">Best Nursing Educator Award</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Dr. Priya Sharma received the Best Nursing Educator Award from the State Nursing Association in 2023
                    for her outstanding contribution to nursing education.
                  </p>
                </li>
                <li className="rounded-md bg-gray-50 p-4">
                  <p className="font-medium text-gray-900">Research Excellence Award</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Dr. Rajesh Kumar was honored with the Research Excellence Award by the National Research Foundation
                    for his work on improving patient outcomes in critical care settings.
                  </p>
                </li>
                <li className="rounded-md bg-gray-50 p-4">
                  <p className="font-medium text-gray-900">Innovation in Teaching Award</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Prof. Meena Patel received the Innovation in Teaching Award for developing a novel simulation-based
                    teaching methodology for obstetric nursing.
                  </p>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900">Notable Publications</h3>
              <ul className="mt-4 space-y-4">
                <li className="rounded-md bg-gray-50 p-4">
                  <p className="font-medium text-gray-900">Textbook on Fundamentals of Nursing</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Dr. Priya Sharma co-authored a comprehensive textbook on Fundamentals of Nursing that is widely used
                    in nursing institutions across the country.
                  </p>
                </li>
                <li className="rounded-md bg-gray-50 p-4">
                  <p className="font-medium text-gray-900">Research on Nursing Interventions in Diabetes Management</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Dr. Anand Singh published a series of research papers on effective nursing interventions for
                    diabetes management in the International Journal of Nursing Studies.
                  </p>
                </li>
                <li className="rounded-md bg-gray-50 p-4">
                  <p className="font-medium text-gray-900">Handbook of Clinical Procedures</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Prof. Vikram Mehta developed a practical handbook of clinical procedures for nursing students that
                    has been adopted by several nursing institutions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
