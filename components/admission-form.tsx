"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle } from "lucide-react"

export default function AdmissionForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",

    // Academic Information
    program: "",
    qualification: "",
    school: "",
    board: "",
    passingYear: "",
    percentage: "",

    // Additional Information
    hostelRequired: false,
    howDidYouHear: "",
    questions: "",

    // Declarations
    agreeToTerms: false,
    confirmInformation: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
      if (!formData.email.trim()) {
        newErrors.email = "Email is required"
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid"
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required"
      } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
        newErrors.phone = "Phone number must be 10 digits"
      }
      if (!formData.dob) newErrors.dob = "Date of birth is required"
      if (!formData.gender) newErrors.gender = "Gender is required"
      if (!formData.address.trim()) newErrors.address = "Address is required"
      if (!formData.city.trim()) newErrors.city = "City is required"
      if (!formData.state.trim()) newErrors.state = "State is required"
      if (!formData.pincode.trim()) newErrors.pincode = "PIN code is required"
    } else if (currentStep === 2) {
      if (!formData.program) newErrors.program = "Program is required"
      if (!formData.qualification) newErrors.qualification = "Qualification is required"
      if (!formData.school.trim()) newErrors.school = "School/College name is required"
      if (!formData.board.trim()) newErrors.board = "Board/University is required"
      if (!formData.passingYear.trim()) newErrors.passingYear = "Passing year is required"
      if (!formData.percentage.trim()) newErrors.percentage = "Percentage/CGPA is required"
    } else if (currentStep === 3) {
      if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms and conditions"
      if (!formData.confirmInformation)
        newErrors.confirmInformation = "You must confirm that the information is correct"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user selects
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))

    // Clear error when user checks
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep(step)) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        program: "",
        qualification: "",
        school: "",
        board: "",
        passingYear: "",
        percentage: "",
        hostelRequired: false,
        howDidYouHear: "",
        questions: "",
        agreeToTerms: false,
        confirmInformation: false,
      })
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="rounded-md bg-teal-50 p-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
          <CheckCircle className="h-6 w-6 text-teal-600" />
        </div>
        <h3 className="mt-4 text-lg font-medium text-teal-800">Application Submitted Successfully!</h3>
        <p className="mt-2 text-teal-700">
          Thank you for applying to S.K.M. College of Nursing & Paramedical. Your application has been received and is being processed.
          You will receive a confirmation email shortly with further instructions.
        </p>
        <p className="mt-4 text-teal-700">
          Application Reference Number: <strong>MNI-{Math.floor(100000 + Math.random() * 900000)}</strong>
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false)
            setStep(1)
          }}
          className="mt-6 bg-teal-600 hover:bg-teal-700"
        >
          Submit Another Application
        </Button>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex flex-1 items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                  step === stepNumber
                    ? "border-teal-600 bg-teal-600 text-white"
                    : step > stepNumber
                      ? "border-teal-600 bg-teal-100 text-teal-600"
                      : "border-gray-300 bg-white text-gray-500"
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div className={`h-1 flex-1 ${step > stepNumber ? "bg-teal-600" : "bg-gray-300"}`}></div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between text-sm">
          <div className="text-center">Personal Information</div>
          <div className="text-center">Academic Details</div>
          <div className="text-center">Declaration</div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Your first name"
                  className={errors.firstName ? "border-red-300" : ""}
                />
                {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Your last name"
                  className={errors.lastName ? "border-red-300" : ""}
                />
                {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={errors.email ? "border-red-300" : ""}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className={errors.phone ? "border-red-300" : ""}
                />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="dob">
                  Date of Birth <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="dob"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  className={errors.dob ? "border-red-300" : ""}
                />
                {errors.dob && <p className="text-sm text-red-500">{errors.dob}</p>}
              </div>

              <div className="space-y-2">
                <Label>
                  Gender <span className="text-red-500">*</span>
                </Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(value) => handleSelectChange("gender", value)}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
                {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">
                Address <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your complete address"
                className={errors.address ? "border-red-300" : ""}
              />
              {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="city">
                  City <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Your city"
                  className={errors.city ? "border-red-300" : ""}
                />
                {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">
                  State <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Your state"
                  className={errors.state ? "border-red-300" : ""}
                />
                {errors.state && <p className="text-sm text-red-500">{errors.state}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="pincode">
                  PIN Code <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Your PIN code"
                  className={errors.pincode ? "border-red-300" : ""}
                />
                {errors.pincode && <p className="text-sm text-red-500">{errors.pincode}</p>}
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="button" onClick={nextStep} className="bg-teal-600 hover:bg-teal-700">
                Next Step
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Academic Information</h3>

            <div className="space-y-2">
              <Label htmlFor="program">
                Program Applying For <span className="text-red-500">*</span>
              </Label>
              <Select value={formData.program} onValueChange={(value) => handleSelectChange("program", value)}>
                <SelectTrigger className={errors.program ? "border-red-300" : ""}>
                  <SelectValue placeholder="Select a program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bsc">B.Sc. Nursing (4 Years)</SelectItem>
                  <SelectItem value="gnm">GNM - General Nursing & Midwifery (3 Years)</SelectItem>
                  <SelectItem value="post-bsc">Post Basic B.Sc. Nursing (2 Years)</SelectItem>
                  <SelectItem value="msc">M.Sc. Nursing (2 Years)</SelectItem>
                </SelectContent>
              </Select>
              {errors.program && <p className="text-sm text-red-500">{errors.program}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="qualification">
                Highest Qualification <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.qualification}
                onValueChange={(value) => handleSelectChange("qualification", value)}
              >
                <SelectTrigger className={errors.qualification ? "border-red-300" : ""}>
                  <SelectValue placeholder="Select your qualification" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10th">10th (Secondary)</SelectItem>
                  <SelectItem value="12th">12th (Higher Secondary)</SelectItem>
                  <SelectItem value="diploma">Diploma</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                  <SelectItem value="postgraduate">Post Graduate</SelectItem>
                </SelectContent>
              </Select>
              {errors.qualification && <p className="text-sm text-red-500">{errors.qualification}</p>}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="school">
                  School/College Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="school"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  placeholder="Name of your school/college"
                  className={errors.school ? "border-red-300" : ""}
                />
                {errors.school && <p className="text-sm text-red-500">{errors.school}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="board">
                  Board/University <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="board"
                  name="board"
                  value={formData.board}
                  onChange={handleChange}
                  placeholder="Name of board/university"
                  className={errors.board ? "border-red-300" : ""}
                />
                {errors.board && <p className="text-sm text-red-500">{errors.board}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="passingYear">
                  Year of Passing <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="passingYear"
                  name="passingYear"
                  value={formData.passingYear}
                  onChange={handleChange}
                  placeholder="Year of passing"
                  className={errors.passingYear ? "border-red-300" : ""}
                />
                {errors.passingYear && <p className="text-sm text-red-500">{errors.passingYear}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="percentage">
                  Percentage/CGPA <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="percentage"
                  name="percentage"
                  value={formData.percentage}
                  onChange={handleChange}
                  placeholder="Your percentage or CGPA"
                  className={errors.percentage ? "border-red-300" : ""}
                />
                {errors.percentage && <p className="text-sm text-red-500">{errors.percentage}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="hostelRequired"
                  checked={formData.hostelRequired}
                  onCheckedChange={(checked) => handleCheckboxChange("hostelRequired", checked as boolean)}
                />
                <Label htmlFor="hostelRequired">I require hostel accommodation</Label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="howDidYouHear">How did you hear about us?</Label>
              <Select
                value={formData.howDidYouHear}
                onValueChange={(value) => handleSelectChange("howDidYouHear", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">Institute Website</SelectItem>
                  <SelectItem value="social-media">Social Media</SelectItem>
                  <SelectItem value="newspaper">Newspaper</SelectItem>
                  <SelectItem value="friends">Friends/Family</SelectItem>
                  <SelectItem value="education-fair">Education Fair</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="questions">Questions or Comments</Label>
              <Textarea
                id="questions"
                name="questions"
                value={formData.questions}
                onChange={handleChange}
                placeholder="Any questions or comments you have for us"
                rows={3}
              />
            </div>

            <div className="flex justify-between">
              <Button type="button" onClick={prevStep} variant="outline">
                Previous Step
              </Button>
              <Button type="button" onClick={nextStep} className="bg-teal-600 hover:bg-teal-700">
                Next Step
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Declaration</h3>

            <div className="rounded-md bg-gray-50 p-4">
              <p className="text-sm text-gray-600">
                Please read the following declarations carefully before submitting your application:
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleCheckboxChange("agreeToTerms", checked as boolean)}
                      className={errors.agreeToTerms ? "border-red-300" : ""}
                    />
                    <div>
                      <Label htmlFor="agreeToTerms" className="text-sm">
                        I agree to the terms and conditions of S.K.M. College of Nursing & Paramedical, including the fee structure,
                        admission policies, and code of conduct. <span className="text-red-500">*</span>
                      </Label>
                      {errors.agreeToTerms && <p className="text-sm text-red-500">{errors.agreeToTerms}</p>}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="confirmInformation"
                      checked={formData.confirmInformation}
                      onCheckedChange={(checked) => handleCheckboxChange("confirmInformation", checked as boolean)}
                      className={errors.confirmInformation ? "border-red-300" : ""}
                    />
                    <div>
                      <Label htmlFor="confirmInformation" className="text-sm">
                        I hereby declare that all the information provided in this application form is true and correct
                        to the best of my knowledge. I understand that providing false information may result in
                        cancellation of my admission. <span className="text-red-500">*</span>
                      </Label>
                      {errors.confirmInformation && <p className="text-sm text-red-500">{errors.confirmInformation}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-md bg-yellow-50 p-4">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> After submission, you will be required to upload scanned copies of your
                educational certificates, ID proof, and passport-sized photograph during the verification process.
              </p>
            </div>

            <div className="flex justify-between">
              <Button type="button" onClick={prevStep} variant="outline">
                Previous Step
              </Button>
              <Button type="submit" className="bg-teal-600 hover:bg-teal-700" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
