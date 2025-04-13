import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IndianRupee, Download, FileText, HelpCircle } from "lucide-react"

export default function FeeStructurePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Fee Structure</h1>
            <p className="mt-4 text-lg text-gray-600">
              Transparent fee details for all our programs for the academic year 2025-26.
            </p>
          </div>
        </div>
      </section>

      {/* Fee Structure Table Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Course Fees</h2>
            <p className="mt-4 text-lg text-gray-600">
              Below is the detailed fee structure for all nursing programs offered at S.K.M. College of Nursing & Paramedical.
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-lg bg-white shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-teal-50">
                    <th className="border-b p-4 font-medium text-gray-900">Course</th>
                    <th className="border-b p-4 font-medium text-gray-900">Duration</th>
                    <th className="border-b p-4 font-medium text-gray-900">Tuition Fee (per year)</th>
                    <th className="border-b p-4 font-medium text-gray-900">Hostel Fee (per year)</th>
                    {/* <th className="border-b p-4 font-medium text-gray-900">Other Charges</th> */}
                    {/* <th className="border-b p-4 font-medium text-gray-900">Total Course Fee</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border-b p-4 font-medium">Degree in B.Sc. Nursing</td>
                    <td className="border-b p-4">4 Years</td>
                    <td className="border-b p-4">₹1,50,000</td>
                    <td className="border-b p-4">₹54,000</td>
                    {/* <td className="border-b p-4">₹15,000</td> */}
                    {/* <td className="border-b p-4 font-medium">₹2,04,000</td> */}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-b p-4 font-medium">Diploma in GNM</td>
                    <td className="border-b p-4">3 Years</td>
                    <td className="border-b p-4">₹1,50,000</td>
                    <td className="border-b p-4">₹54,000</td>
                    {/* <td className="border-b p-4">₹12,000</td> */}
                    {/* <td className="border-b p-4 font-medium">₹1,69,000</td> */}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-b p-4 font-medium">Diploma in ANM</td>
                    <td className="border-b p-4">2 Years</td>
                    <td className="border-b p-4">₹60,000</td>
                    <td className="border-b p-4">₹54,000</td>
                    {/* <td className="border-b p-4">₹10,000</td> */}
                    {/* <td className="border-b p-4 font-medium">₹1,25,000</td> */}
                  </tr>

                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 p-4">
              <h3 className="font-medium text-gray-900">Notes:</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
                <li>
                Other dues, such as charges for books, uniforms, miscellaneous incidental expenses, and examination fees, shall be levied separately by the institute on an actual basis as determined by the college authorities. </li>
                <li>Hostel accommodation is optional.</li>
                <li>Fees are subject to revision as per regulatory guidelines.</li>
                <li>Scholarships are available for meritorious and economically disadvantaged students.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <a href="/fee-structure.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Fee Structure PDF
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Fee Breakdown Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Fee Breakdown</h2>
            <p className="mt-4 text-lg text-gray-600">
              Detailed breakdown of various fees and charges for better understanding.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-teal-100 p-3">
                  <IndianRupee className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Tuition Fee</h3>
              </div>
              <p className="mt-4 text-gray-600">
                The tuition fee covers the cost of academic instruction, including theory classes, practical sessions,
                and clinical training. It also includes:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                <li>Faculty salaries and academic resources</li>
                <li>Use of simulation labs and equipment</li>
                <li>Basic study materials and handouts</li>
                <li>Internal assessments and evaluations</li>
                <li>Academic counseling and guidance</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-teal-100 p-3">
                  <IndianRupee className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Hostel Fee</h3>
              </div>
              <p className="mt-4 text-gray-600">
                The hostel fee covers accommodation in our on-campus hostels, which are separately available for male
                and female students. The fee includes:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                <li>Shared room accommodation (2-3 students per room)</li>
                <li>Basic furniture (bed, study table, chair, cupboard)</li>
                <li>Electricity and water charges</li>
                <li>Common room facilities</li>
                <li>Wi-Fi connectivity</li>
                <li>Security and housekeeping services</li>
              </ul>
              <p className="mt-4 text-gray-600">
                <strong>Note:</strong> Mess charges are separate and payable directly to the mess contractor on a
                monthly basis.
              </p>
            </div>

            {/* <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-teal-100 p-3">
                  <IndianRupee className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Other Charges</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Other charges include various fees that are essential for the overall educational experience:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Examination Fee:</span>
                  <span>₹5,000 per year</span>
                </li>
                <li className="flex justify-between">
                  <span>Library Fee:</span>
                  <span>₹3,000 per year</span>
                </li>
                <li className="flex justify-between">
                  <span>Laboratory Fee:</span>
                  <span>₹4,000 per year</span>
                </li>
                <li className="flex justify-between">
                  <span>Student Activities Fee:</span>
                  <span>₹2,000 per year</span>
                </li>
                <li className="flex justify-between">
                  <span>Development Fee:</span>
                  <span>₹1,000 per year</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-teal-100 p-3">
                  <IndianRupee className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">One-Time Fees</h3>
              </div>
              <p className="mt-4 text-gray-600">These are fees that are paid only once at the time of admission:</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Admission Fee:</span>
                  <span>₹10,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Registration Fee:</span>
                  <span>₹2,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Caution Deposit (Refundable):</span>
                  <span>₹5,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Uniform Fee:</span>
                  <span>₹3,000</span>
                </li>
                <li className="flex justify-between">
                  <span>ID Card Fee:</span>
                  <span>₹500</span>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>

      {/* Payment Options Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Payment Options</h2>
            <p className="mt-4 text-lg text-gray-600">
              We offer various payment methods and installment plans to make education more accessible.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900">Payment Methods</h3>
              <p className="mt-2 text-gray-600">Fees can be paid through any of the following methods:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                {/* <li>Online payment through the institute's portal</li> */}
                <li>Demand Draft in favor of "S.K.M. College of Nursing & Paramedical " payable at Shambhu Ganj</li>
                <li>NEFT/RTGS/UPI transfer to the institute's bank account</li>
                {/* <li>Debit/Credit Card payment at the institute's accounts office</li> */}
              </ul>
            </div>

            {/* <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900">Installment Plans</h3>
              <p className="mt-2 text-gray-600">Students can opt for installment plans to pay their fees:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                <li>Two equal installments per academic year</li>
                <li>First installment at the time of admission/beginning of academic year</li>
                <li>Second installment after six months</li>
                <li>A nominal processing fee of ₹1,000 is applicable for installment plans</li>
              </ul>
              <p className="mt-4 text-gray-600">
                <strong>Note:</strong> Installment plans are available only for tuition fees. Hostel fees and other
                charges must be paid in full at the beginning of the academic year.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Scholarships & Financial Aid
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We offer various scholarships and financial aid options to support deserving students.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900">Merit Scholarships</h3>
              <p className="mt-2 text-gray-600">
                Scholarships based on academic performance in qualifying examinations:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                <li>90% and above: 25% tuition fee waiver</li>
                <li>85% to 89.9%: 15% tuition fee waiver</li>
                <li>80% to 84.9%: 10% tuition fee waiver</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900">Need-Based Scholarships</h3>
              <p className="mt-2 text-gray-600">Financial assistance for economically disadvantaged students:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                <li>Based on family income and financial need</li>
                <li>Up to 30% tuition fee waiver</li>
                <li>Limited number of scholarships available each year</li>
                <li>Requires submission of income proof and recommendation</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900">Government Schemes</h3>
              <p className="mt-2 text-gray-600">We facilitate access to various government scholarship schemes:</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                {/* <li>Post-Matric Scholarship for SC/ST students</li> */}
                <li>Bihar Student Credit Card Scheme</li>
                {/* <li>Central Sector Scholarship Scheme</li>
                <li>Minority Scholarship Schemes</li>
                <li>Other state and central government scholarships</li> */}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              asChild
              variant="outline"
              className="border-teal-200 text-teal-600 hover:bg-teal-50 hover:text-teal-700"
            >
              <Link href="/contact">
                <HelpCircle className="mr-2 h-4 w-4" />
                Contact for Scholarship Details
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Refund Policy Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Refund Policy</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our refund policy is designed to be fair and transparent, in accordance with regulatory guidelines.
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-lg bg-white shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-teal-50">
                    <th className="border-b p-4 font-medium text-gray-900">Withdrawal Timeline</th>
                    <th className="border-b p-4 font-medium text-gray-900">Refund Percentage</th>
                    <th className="border-b p-4 font-medium text-gray-900">Processing Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border-b p-4">Before commencement of classes</td>
                    <td className="border-b p-4">90% of total fees</td>
                    <td className="border-b p-4">₹1,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-b p-4">Within 15 days of commencement</td>
                    <td className="border-b p-4">80% of total fees</td>
                    <td className="border-b p-4">₹1,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-b p-4">16-30 days after commencement</td>
                    <td className="border-b p-4">50% of total fees</td>
                    <td className="border-b p-4">₹1,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-b p-4">After 30 days of commencement</td>
                    <td className="border-b p-4">No refund</td>
                    <td className="border-b p-4">Not applicable</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 p-4">
              <h3 className="font-medium text-gray-900">Notes:</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
                <li>Admission fee and registration fee are non-refundable under any circumstances.</li>
                <li>Caution deposit is fully refundable after adjusting for any dues or damages.</li>
                <li>Refund process takes approximately 4-6 weeks from the date of application.</li>
                <li>
                  In case of withdrawal due to medical reasons or other exceptional circumstances, special consideration
                  may be given on a case-by-case basis.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <a href="/refund-policy.pdf" download>
                <FileText className="mr-2 h-4 w-4" />
                Download Refund Policy
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
