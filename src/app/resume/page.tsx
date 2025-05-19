"use client";

import { useState, useEffect } from "react";
import { resumeData } from "@/lib/data/resume";
import Link from "next/link";
import ResumeSection from "@/components/resume/ResumeSection";
import ResumeVariantSelector from "@/components/resume/ResumeVariantSelector";
import SkillsList from "@/components/resume/SkillsList";
import Toast from "@/components/ui/Toast";

export default function ResumePage() {
  const [selectedVariant, setSelectedVariant] =
    useState<string>("engineeringLeader");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Animation on page load
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  const variant = resumeData.variants[selectedVariant];

  // Handle PDF download
  const handleDownloadPdf = async () => {
    try {
      setIsDownloading(true);

      // Get the PDF filename from the selected variant
      const pdfFileName = variant.pdfFileName;
      console.log("Requesting PDF:", pdfFileName);

      // Use our proxy endpoint
      const response = await fetch(
        `/api/proxy/resumepdf?filename=${encodeURIComponent(pdfFileName)}`,
        {
          method: "GET",
          headers: {
            Accept: "application/pdf",
          },
        }
      );

      console.log("Response status:", response.status);
      console.log(
        "Response headers:",
        Object.fromEntries(response.headers.entries())
      );

      if (!response.ok) {
        let errorText;
        try {
          errorText = await response.text();
        } catch {
          errorText = "Failed to read error response";
        }
        console.error("Error response:", errorText);
        throw new Error(errorText || `HTTP error! status: ${response.status}`);
      }

      // Check content type
      const contentType = response.headers.get("content-type");
      if (!contentType?.includes("application/pdf")) {
        console.warn("Unexpected content type:", contentType);
        throw new Error(`Unexpected content type: ${contentType}`);
      }

      // Convert the response to a blob
      const blob = await response.blob();
      console.log("Blob size:", blob.size, "bytes");
      console.log("Blob type:", blob.type);

      if (blob.size === 0) {
        throw new Error("Received empty PDF file");
      }

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link and click it to download
      const link = document.createElement("a");
      link.href = url;
      link.download = pdfFileName;
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setToastMessage("PDF downloaded successfully!");
      setToastVisible(true);
    } catch (error: unknown) {
      console.error("Download error:", error);

      // Extract the most meaningful error message
      let errorMessage = "Failed to download PDF. Please try again later.";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      }

      setToastMessage(`Error: ${errorMessage}`);
      setToastVisible(true);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className='container mx-auto px-4 py-24 md:py-32'>
      <div className='max-w-4xl mx-auto px-4 pt-32 pb-20 sm:pt-40 sm:pb-24'>
        <h1 className='text-4xl sm:text-5xl font-bold mb-6'>
          <span className='text-gradient'>Resume</span>
        </h1>
        <p className='text-xl text-secondary max-w-2xl leading-relaxed transition-colors mb-8'>
          My professional experience, skills, and qualifications. Select a
          resume variant below to see different aspects of my career and
          expertise.
        </p>
      </div>

      <div className='max-w-5xl mx-auto mb-16'>
        {/* Variant Selector & Download Button */}
        <div
          className={`
          flex flex-col sm:flex-row justify-between items-start sm:items-center 
          mb-12 gap-6 transition-all duration-700 transform
          ${
            isPageLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }
        `}
        >
          <ResumeVariantSelector
            variants={resumeData.variants}
            selectedVariant={selectedVariant}
            onVariantChange={setSelectedVariant}
          />

          <button
            onClick={handleDownloadPdf}
            disabled={isDownloading}
            className={`
              bg-brand-primary hover:bg-brand-primary-hover transition-colors 
              px-6 py-3 rounded-md text-white font-medium shadow-sm 
              flex items-center
              ${isDownloading ? "opacity-75 cursor-not-allowed" : ""}
            `}
          >
            <svg
              className={`w-5 h-5 mr-2 ${isDownloading ? "animate-spin" : ""}`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isDownloading ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              )}
            </svg>
            {isDownloading ? "Downloading..." : "Download PDF"}
          </button>
        </div>

        {/* Summary Section */}
        <div
          className={`
          bg-card border border-card-border rounded-xl shadow-sm p-8 mb-12
          transition-all duration-700 delay-100 transform
          ${
            isPageLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }
        `}
        >
          <h2 className='text-2xl font-bold text-primary mb-4 transition-colors'>
            Summary
          </h2>
          <p className='text-secondary transition-colors leading-relaxed'>
            {variant.summary}
          </p>
        </div>

        {/* Experience Section */}
        <ResumeSection
          title='Experience'
          delay={200}
          isVisible={isPageLoaded}
          items={variant.experience}
          renderItem={(item, index) => (
            <div key={index} className='mb-8 last:mb-0'>
              <div className='flex flex-col sm:flex-row justify-between mb-2'>
                <h3 className='text-xl font-bold text-primary transition-colors'>
                  {item.position}
                </h3>
                <span className='text-tertiary transition-colors text-sm sm:text-base'>
                  {item.duration}
                </span>
              </div>
              <div className='flex flex-col sm:flex-row justify-between mb-2'>
                <div className='font-medium text-brand-primary transition-colors'>
                  {item.company}
                </div>
                <div className='text-tertiary transition-colors text-sm sm:text-base'>
                  {item.location}
                </div>
              </div>
              <p className='text-secondary transition-colors mb-3'>
                {item.description}
              </p>
              <ul className='list-disc list-inside text-secondary space-y-1 transition-colors'>
                {item.achievements.map((achievement, i) => (
                  <li key={i} className='text-sm sm:text-base'>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        />

        {/* Skills Section */}
        <ResumeSection
          title='Skills'
          delay={300}
          isVisible={isPageLoaded}
          items={[variant.skills]}
          renderItem={(skills) => (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <SkillsList title='Technical Skills' skills={skills.technical} />
              <SkillsList title='Tools & Technologies' skills={skills.tools} />
              <SkillsList title='Soft Skills' skills={skills.softSkills} />
              {skills.languages && (
                <SkillsList
                  title='Programming Languages'
                  skills={skills.languages}
                />
              )}
            </div>
          )}
        />

        {/* Education Section - Only show if there are education items */}
        {variant.education.length > 0 && (
          <ResumeSection
            title='Education'
            delay={400}
            isVisible={isPageLoaded}
            items={variant.education}
            renderItem={(item, index) => (
              <div key={index} className='mb-8 last:mb-0'>
                <div className='flex flex-col sm:flex-row justify-between mb-2'>
                  <h3 className='text-xl font-bold text-primary transition-colors'>
                    {item.degree}
                  </h3>
                  <span className='text-tertiary transition-colors text-sm sm:text-base'>
                    {item.duration}
                  </span>
                </div>
                <div className='flex flex-col sm:flex-row justify-between mb-2'>
                  <div className='font-medium text-brand-primary transition-colors'>
                    {item.institution}
                  </div>
                  <div className='text-tertiary transition-colors text-sm sm:text-base'>
                    {item.location}
                  </div>
                </div>
                {item.relevantCourses && (
                  <div className='mt-2'>
                    <h4 className='text-sm font-semibold text-tertiary mb-1 transition-colors'>
                      Relevant Coursework
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {item.relevantCourses.map((course, i) => (
                        <span
                          key={i}
                          className='inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-card-alt text-tertiary border border-card-border'
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          />
        )}

        {/* Certifications Section */}
        <ResumeSection
          title='Certifications'
          delay={500}
          isVisible={isPageLoaded}
          items={variant.certifications}
          renderItem={(item, index) => (
            <div key={index} className='mb-6 last:mb-0'>
              <h3 className='font-bold text-primary transition-colors'>
                {item.name}
              </h3>
              <div className='flex flex-col sm:flex-row justify-between'>
                <div className='text-brand-primary transition-colors font-medium'>
                  {item.issuer}
                </div>
                <div className='text-tertiary transition-colors'>
                  {item.date}
                </div>
              </div>
              {item.link && (
                <Link
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm inline-flex items-center text-tertiary hover:text-brand-primary transition-colors mt-1'
                >
                  <svg
                    className='w-4 h-4 mr-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                    />
                  </svg>
                  Verify
                </Link>
              )}
            </div>
          )}
        />
      </div>

      {/* Toast notification */}
      <Toast
        message={toastMessage}
        type='info'
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
