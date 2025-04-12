"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { FileText, Download, Eye } from "lucide-react"
import certificateFirst from "../public/buhs-bsc-certificate.png"
import certificateSecond from "../public/buhs-nursing-certificate.png"
import certificateThird from "../public/recognition-letter.png"
import certificateFourth from "../public/bnrc-second-letter.png"

const certificates = [
  {
    id: 1,
    name: "Affiliation Letter from BUHS for ANM & GNM",
    issuer: "Bihar University of Health Sciences",
    validUntil: "February 13, 2024",
    thumbnail: certificateFirst,
    pdfUrl: "#",
  },
  {
    id: 2,
    name: "Affiliation Letter from BUHS for B.Sc. Nursing",
    issuer: "Bihar University of Health Sciences",
    validUntil: "February 13, 2024",
    thumbnail: certificateSecond,
    pdfUrl: "#",
  },
  {
    id:3,
    name: "RECOGNITION LETTER OF GNM, B.SC.(N) & ANM",
    issuer: "Bihar Nurses Registration Council",
    validUntil: "January 11, 2024",
    thumbnail: certificateThird,
    pdfUrl: "#",
  },
  {
    id:4,
    name:"Letter From BNRC (B.Sc. Nursing, ANM & GNM) of SKMCNP",
    issuer:"Bihar Nurses Registration Council",
    vaildUntil: "January 25, 2024",
    thumbnail: certificateFourth,
    pdfUrl: "#"
  }
  
]

export default function AffiliationCertificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[0] | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const openCertificate = (certificate: (typeof certificates)[0]) => {
    setSelectedCertificate(certificate)
    setIsDialogOpen(true)
  }

  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md animate-on-scroll"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <Image
                src={certificate.thumbnail || '/placeholder.png'}
                alt={certificate.name}
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white text-white hover:bg-white/20 hover:text-white"
                  onClick={() => openCertificate(certificate)}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Certificate
                </Button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900">{certificate.name}</h3>
              <p className="mt-1 text-sm text-gray-600">Issued by: {certificate.issuer}</p>
              <p className="text-sm text-gray-600">Issued On: {certificate.validUntil}</p>
              <div className="mt-4 flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-teal-600 hover:bg-teal-50 hover:text-teal-700"
                  onClick={() => openCertificate(certificate)}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-teal-600 hover:bg-teal-50 hover:text-teal-700"
                  asChild
                >
                  <a href={certificate.pdfUrl} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedCertificate?.name}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <div className="overflow-hidden rounded-md border border-gray-200">
              <Image
                src={selectedCertificate?.thumbnail || ""}
                alt={selectedCertificate?.name || "Certificate"}
                width={800}
                height={600}
                className="h-auto w-full"
              />
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-600">
                <strong>Issued by:</strong> {selectedCertificate?.issuer}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Valid until:</strong> {selectedCertificate?.validUntil}
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <Button variant="outline" className="mr-2" onClick={() => setIsDialogOpen(false)}>
                Close
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700" asChild>
                <a href={selectedCertificate?.pdfUrl} download>
                  <FileText className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
