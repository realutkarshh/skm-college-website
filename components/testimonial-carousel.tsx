"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "B.Sc. Nursing Graduate, 2024",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "My four years at S.K.M. College of Nursing & Paramedical were transformative. The faculty's dedication and hands-on clinical experience prepared me well for my career. I secured a position at AIIMS Delhi even before graduation.",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    role: "GNM Graduate, 2023",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The practical training and simulation labs at MNI gave me confidence to handle real medical situations. The placement cell helped me find a great opportunity at a leading private hospital in Patna.",
  },
  {
    id: 3,
    name: "Anjali Singh",
    role: "M.Sc. Nursing Graduate, 2022",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "As a working professional pursuing M.Sc. Nursing, I found the faculty extremely supportive. The curriculum was up-to-date with the latest healthcare practices, which helped me advance in my career.",
  },
  {
    id: 4,
    name: "Vikram Patel",
    role: "B.Sc. Nursing Graduate, 2023",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The holistic education at MNI focuses not just on nursing skills but also on developing compassion and empathy. The international exposure through exchange programs broadened my perspective.",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative overflow-hidden rounded-lg bg-white p-6 shadow-md">
      <div className="absolute left-6 top-6">
        <Quote className="h-12 w-12 text-teal-100" />
      </div>

      <div className="relative z-10">
        <div className="transition-all duration-500">
          <div className="pt-8">
            <p className="text-lg text-gray-600">{testimonials[current].content}</p>
            <div className="mt-6 flex items-center gap-4">
              <Image
                src={testimonials[current].image || "/placeholder.svg"}
                alt={testimonials[current].name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h4 className="font-medium text-gray-900">{testimonials[current].name}</h4>
                <p className="text-sm text-gray-600">{testimonials[current].role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index)
                setAutoplay(false)
              }}
              className={`h-2 w-8 rounded-full transition-all ${index === current ? "bg-teal-600" : "bg-gray-200"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => {
              prev()
              setAutoplay(false)
            }}
            className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-teal-100 hover:text-teal-600"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => {
              next()
              setAutoplay(false)
            }}
            className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-teal-100 hover:text-teal-600"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
