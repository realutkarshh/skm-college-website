"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import LabImage1 from "../public/lab-1.jpeg"
import LabImage2 from "../public/lab-2.jpeg"
import LabImage3 from "../public/lab-3.jpg"
import LabImage4 from "../public/lab-4.jpg"
import BuildingImage1 from "../public/building-image1.jpeg"
import BuildingImage2 from "../public/building-image2.jpeg"
import BuildingImage3 from "../public/building-image3.jpg"
import LibraryImage1 from "../public/library-image1.jpg"
import LibraryImage2 from "../public/library-image2.jpg"
import LibraryImage3 from "../public/library-image3.jpg"
import LibraryImage4 from "../public/library-image4.jpg"


interface FacilityGalleryProps {
  type: "buildings" | "labs" | "library"
}

export default function FacilityGallery({ type }: FacilityGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)

  // Define images based on type
  const images = {
    buildings: [
      {
        src: BuildingImage1,
        alt: "Academic Building",
        caption: "Main Academic Building with modern classrooms and lecture halls",
      },
      {
        src: BuildingImage2,
        alt: "Administrative Block",
        caption: "Administrative Block housing offices and meeting rooms",
      },
      // {
      //   src: BuildingImage3,
      //   alt: "Student Center",
      //   caption: "Classroom for Students",
      // },
      // {
      //   src: "/placeholder.svg?height=400&width=600&text=Hostel Building",
      //   alt: "Hostel Building",
      //   caption: "Modern hostel facilities for students",
      // },
    ],
    labs: [
      {
        src: LabImage1,
        alt: "Simulation Lab",
        caption: "Advanced simulation lab with high-fidelity mannequins",
      },
      {
        src: LabImage2,
        alt: "Anatomy Lab",
        caption: "Well-equipped anatomy and physiology laboratory",
      },
      // {
      //   src: LabImage3,
      //   alt: "Computer Lab",
      //   caption: "Computer lab with nursing informatics resources",
      // },
      // {
      //   src: LabImage4,
      //   alt: "Skills Lab",
      //   caption: "Nursing skills lab for practical training",
      // },
    ],
    library: [
      {
        src: LibraryImage1,
        alt: "Main Library",
        caption: "Spacious main library with thousands of books and journals",
      },
      {
        src: LibraryImage2,
        alt: "Digital Library",
        caption: "Digital library with access to online databases and resources",
      },
      {
        src: LibraryImage3,
        alt: "Reading Area",
        caption: "Quiet reading and study areas for students",
      },
      {
        src: LibraryImage4,
        alt: "Group Study Rooms",
        caption: "Collaborative study spaces for group discussions",
      },
    ],
  }

  const selectedImages = images[type]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % selectedImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + selectedImages.length) % selectedImages.length)
  }

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setShowLightbox(true)
  }

  const closeLightbox = () => {
    setShowLightbox(false)
  }

  return (
    <div>
      <div className="relative overflow-hidden rounded-lg">
        <div className="aspect-w-16 aspect-h-9">
          <Image
            src={selectedImages[currentImage].src || "/placeholder.svg"}
            alt={selectedImages[currentImage].alt}
            width={600}
            height={400}
            className="h-full w-full object-cover"
            onClick={() => openLightbox(currentImage)}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-sm text-white">{selectedImages[currentImage].caption}</p>
        </div>
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white transition-colors hover:bg-black/50"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white transition-colors hover:bg-black/50"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {selectedImages.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-md ${index === currentImage ? "ring-2 ring-teal-600" : ""}`}
            onClick={() => setCurrentImage(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={150}
              height={100}
              className="h-16 w-full cursor-pointer object-cover transition-transform hover:scale-110"
            />
          </div>
        ))}
      </div>

      {showLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="max-h-[90vh] max-w-[90vw]">
            <Image
              src={selectedImages[currentImage].src || "/placeholder.svg"}
              alt={selectedImages[currentImage].alt}
              width={1200}
              height={800}
              className="max-h-[80vh] max-w-full object-contain"
            />
            <div className="mt-4 text-center text-white">
              <p>{selectedImages[currentImage].caption}</p>
              <p className="mt-2 text-sm text-gray-400">
                Image {currentImage + 1} of {selectedImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
