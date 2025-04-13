"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Calendar, ChevronRight } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "New M.Sc. Nursing Specialization in Critical Care",
    date: "April 10, 2025",
    category: "academics",
    excerpt:
      "S.K.M. College of Nursing & Paramedical is proud to announce a new specialization in Critical Care Nursing for our M.Sc. Nursing program starting from the upcoming academic session.",
    link: "#",
  },
  {
    id: 2,
    title: "Annual Health Camp on World Health Day",
    date: "April 5, 2025",
    category: "events",
    excerpt:
      "Join us for our annual health camp on World Health Day where our students and faculty will provide free health check-ups and awareness sessions for the community.",
    link: "#",
  },
  {
    id: 3,
    title: "Admission Open for 2025-26 Academic Year",
    date: "March 25, 2025",
    category: "admissions",
    excerpt:
      "Applications are now being accepted for all nursing programs for the academic year 2025-26. Early applicants will receive priority consideration.",
    link: "#",
  },
  {
    id: 4,
    title: "MOU Signed with Leading Hospital Chain",
    date: "March 15, 2025",
    category: "placements",
    excerpt:
      "S.K.M. College of Nursing & Paramedical has signed a Memorandum of Understanding with a leading hospital chain to provide enhanced clinical training and placement opportunities.",
    link: "#",
  },
  {
    id: 5,
    title: "Revised Examination Schedule for Final Year Students",
    date: "March 10, 2025",
    category: "academics",
    excerpt:
      "The examination schedule for final year students has been revised. Please check the updated timetable on the student portal.",
    link: "#",
  },
  {
    id: 6,
    title: "National Nursing Conference 2025",
    date: "February 28, 2025",
    category: "events",
    excerpt:
      "S.K.M. College of Nursing & Paramedical will host the National Nursing Conference 2025 on 'Innovations in Nursing Practice' from May 15-17, 2025.",
    link: "#",
  },
]

export default function NewsNotifications() {
  const [activeTab, setActiveTab] = useState("all")
  const [visibleItems, setVisibleItems] = useState(4)

  const filteredNews = activeTab === "all" ? newsItems : newsItems.filter((item) => item.category === activeTab)

  const loadMore = () => {
    setVisibleItems((prev) => prev + 4)
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="mb-6 grid w-full grid-cols-5 bg-gray-100">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="academics">Academics</TabsTrigger>
          <TabsTrigger value="admissions">Admissions</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="placements">Placements</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="space-y-4">
            {filteredNews.slice(0, visibleItems).map((item) => (
              <div key={item.id} className="rounded-lg border border-gray-100 p-4 transition-all hover:shadow-md">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-teal-100 p-2">
                    {item.category === "academics" && <Bell className="h-4 w-4 text-teal-600" />}
                    {item.category === "admissions" && <Bell className="h-4 w-4 text-teal-600" />}
                    {item.category === "events" && <Calendar className="h-4 w-4 text-teal-600" />}
                    {item.category === "placements" && <Bell className="h-4 w-4 text-teal-600" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{item.date}</span>
                      <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs capitalize text-gray-600">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="mt-1 font-medium text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{item.excerpt}</p>
                    <a
                      href={item.link}
                      className="mt-2 inline-flex items-center text-sm text-teal-600 hover:text-teal-700"
                    >
                      Read more <ChevronRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredNews.length > visibleItems && (
            <div className="mt-6 text-center">
              <Button
                onClick={loadMore}
                variant="outline"
                className="border-teal-200 text-teal-600 hover:bg-teal-50 hover:text-teal-700"
              >
                Load More
              </Button>
            </div>
          )}

          {filteredNews.length === 0 && (
            <div className="py-8 text-center text-gray-500">No notifications in this category.</div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
