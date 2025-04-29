import NewsCard from "./news-card"

export default function NewsNotifications() {
  const newsItems = [
    {
      title: "Admission Open for 2025-26 Academic Year",
      description:
        "Applications are now being accepted for B.Sc. Nursing, GNM, and ANM programs for the upcoming academic year. Early applicants may qualify for merit scholarships.",
      image: "/placeholder.svg?height=300&width=400",
      date: "May 15, 2025",
      url: "/admissions",
    },
    {
      title: "New Simulation Lab Inaugurated",
      description:
        "S.K.M. College has inaugurated a state-of-the-art simulation lab equipped with high-fidelity mannequins and advanced medical equipment to enhance practical training.",
      image: "/placeholder.svg?height=300&width=400",
      date: "April 28, 2025",
      url: "/news/simulation-lab",
    },
    {
      title: "100% Placement Record for 2024 Batch",
      description:
        "We're proud to announce that our 2024 graduating batch has achieved 100% placement in prestigious hospitals and healthcare institutions across the country.",
      image: "/placeholder.svg?height=300&width=400",
      date: "March 10, 2025",
      url: "/news/placements",
    },
  ]

  return (
    <div className="space-y-6">
      {newsItems.map((item, index) => (
        <NewsCard
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
          date={item.date}
          url={item.url}
        />
      ))}
    </div>
  )
}
