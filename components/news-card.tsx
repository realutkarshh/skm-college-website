import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface NewsCardProps {
  title: string
  description: string
  image: string
  date: string
  url: string
}

export default function NewsCard({ title, description, image, date, url }: NewsCardProps) {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300">
      <div className="md:w-1/3 relative h-48 md:h-auto">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 md:w-2/3 flex flex-col justify-between">
        <div>
          <p className="text-sm text-teal-600 mb-2">{date}</p>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 line-clamp-3">{description}</p>
        </div>
        <Link href={url} className="mt-4 inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
          Read more <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
