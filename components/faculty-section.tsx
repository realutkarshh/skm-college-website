"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Award, BookOpen, Mail, Phone } from "lucide-react"
import DoctorImage1 from "/public/doctor-image1.png"
import DoctorImage2 from "/public/doctor-image2.jpg"
import DoctorImage3 from "/public/doctor-image3.png"

const facultyMembers = [
  {
    id: 1,
    name: "Dr. Sharma",
    position: "Principal & Professor",
    department: "Administration",
    image: DoctorImage1,
    education: "Ph.D. in Nursing, M.Sc. Nursing",
    experience: "25+ years in nursing education and administration",
    specialization: "Nursing Administration, Community Health Nursing",
    research: "Published over 30 research papers in national and international journals",
    email: "principal@modernnursing.edu",
    phone: "+91 9876543210",
  },
  {
    id: 2,
    name: "Dr. Kumar",
    position: "Professor & HOD",
    department: "Medical-Surgical Nursing",
    image: DoctorImage2,
    education: "Ph.D. in Nursing, M.Sc. Nursing (Medical-Surgical)",
    experience: "20+ years in clinical and teaching experience",
    specialization: "Critical Care Nursing, Cardiovascular Nursing",
    research: "Published 25 research papers, authored 2 textbooks",
    email: "rajesh.kumar@modernnursing.edu",
    phone: "+91 9876543211",
  },
  {
    id: 3,
    name: "Prof. Patel",
    position: "Associate Professor",
    department: "Obstetrics & Gynecological Nursing",
    image: DoctorImage3,
    education: "M.Sc. Nursing (OBG), PG Diploma in Healthcare Management",
    experience: "18 years of clinical and teaching experience",
    specialization: "Maternal and Child Health, High-Risk Pregnancy Care",
    research: "Published 15 research papers, ongoing research on maternal health",
    email: "meena.patel@modernnursing.edu",
    phone: "+91 9876543212",
  },
  {
    id: 4,
    name: "Dr. Singh",
    position: "Associate Professor",
    department: "Psychiatric Nursing",
    image: DoctorImage1,
    education: "Ph.D. in Psychiatric Nursing, M.Sc. Nursing",
    experience: "15+ years in mental health nursing",
    specialization: "Addiction Nursing, Crisis Intervention",
    research: "Published 20 research papers, recipient of national award in mental health nursing",
    email: "anand.singh@modernnursing.edu",
    phone: "+91 9876543213",
  },
  {
    id: 5,
    name: "Prof. Verma",
    position: "Assistant Professor",
    department: "Community Health Nursing",
    image: DoctorImage2,
    education: "M.Sc. Nursing (Community Health), MPH",
    experience: "12 years in public health and teaching",
    specialization: "Epidemiology, Rural Health",
    research: "Published 10 research papers, active in community health projects",
    email: "sunita.verma@modernnursing.edu",
    phone: "+91 9876543214",
  },
  {
    id: 6,
    name: "Prof. Mehta",
    position: "Assistant Professor",
    department: "Child Health Nursing",
    image: DoctorImage3,
    education: "M.Sc. Nursing (Pediatrics), Specialized in Neonatal Care",
    experience: "10 years in pediatric nursing and education",
    specialization: "Neonatal Intensive Care, Pediatric Oncology",
    research: "Published 8 research papers, ongoing research in pediatric care",
    email: "vikram.mehta@modernnursing.edu",
    phone: "+91 9876543215",
  },
]

const departments = [
  "All",
  "Administration",
  "Medical-Surgical Nursing",
  "Obstetrics & Gynecological Nursing",
  "Psychiatric Nursing",
  "Community Health Nursing",
  "Child Health Nursing",
]

export default function FacultySection() {
  const [selectedFaculty, setSelectedFaculty] = useState<(typeof facultyMembers)[0] | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("All")

  const openFacultyDetails = (faculty: (typeof facultyMembers)[0]) => {
    setSelectedFaculty(faculty)
    setIsDialogOpen(true)
  }

  const filteredFaculty =
    activeTab === "All" ? facultyMembers : facultyMembers.filter((faculty) => faculty.department === activeTab)

  return (
    <div className="mt-16">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-teal-100 p-3">
          <Users className="h-6 w-6 text-teal-600" />
        </div>
        <h3 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl animate-on-scroll">
          Our Faculty
        </h3>
        <p className="mt-4 text-lg text-gray-600 animate-on-scroll animation-delay-200">
          Meet our experienced and dedicated faculty members who are committed to providing quality education and
          mentorship.
        </p>
      </div>

      <div className="mt-8 overflow-x-auto">
        <Tabs defaultValue="All" onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 flex w-max bg-gray-100 p-1">
            {departments.map((dept) => (
              <TabsTrigger key={dept} value={dept} className="px-4 py-2">
                {dept}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredFaculty.map((faculty) => (
                <div
                  key={faculty.id}
                  className="group overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md animate-on-scroll"
                  onClick={() => openFacultyDetails(faculty)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-32 w-32 overflow-hidden rounded-full">
                      <Image
                        src={faculty.image || "/placeholder.svg"}
                        alt={faculty.name}
                        width={128}
                        height={128}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h4 className="mt-4 text-lg font-medium text-gray-900">{faculty.name}</h4>
                    <p className="text-sm text-teal-600">{faculty.position}</p>
                    <p className="text-sm text-gray-600">{faculty.department}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-4 text-teal-600 hover:bg-teal-50 hover:text-teal-700"
                      onClick={() => openFacultyDetails(faculty)}
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Faculty Profile</DialogTitle>
          </DialogHeader>
          {selectedFaculty && (
            <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={selectedFaculty.image || "/placeholder.svg"}
                    alt={selectedFaculty.name}
                    width={250}
                    height={250}
                    className="h-auto w-full"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{selectedFaculty.name}</h3>
                <p className="text-teal-600">{selectedFaculty.position}</p>
                <p className="text-gray-600">{selectedFaculty.department}</p>
                <div className="mt-4 space-y-2">
                  <a
                    href={`mailto:${selectedFaculty.email}`}
                    className="flex items-center justify-center text-sm text-gray-600 hover:text-teal-600"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {selectedFaculty.email}
                  </a>
                  <a
                    href={`tel:${selectedFaculty.phone}`}
                    className="flex items-center justify-center text-sm text-gray-600 hover:text-teal-600"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {selectedFaculty.phone}
                  </a>
                </div>
              </div>
              <div className="md:col-span-2 space-y-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-teal-600" />
                    <h4 className="font-medium text-gray-900">Education</h4>
                  </div>
                  <p className="mt-1 text-gray-600">{selectedFaculty.education}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-teal-600" />
                    <h4 className="font-medium text-gray-900">Experience</h4>
                  </div>
                  <p className="mt-1 text-gray-600">{selectedFaculty.experience}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-teal-600" />
                    <h4 className="font-medium text-gray-900">Specialization</h4>
                  </div>
                  <p className="mt-1 text-gray-600">{selectedFaculty.specialization}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-teal-600" />
                    <h4 className="font-medium text-gray-900">Research & Publications</h4>
                  </div>
                  <p className="mt-1 text-gray-600">{selectedFaculty.research}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
