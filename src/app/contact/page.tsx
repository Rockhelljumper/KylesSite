"use client";

import { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import { homeData } from "@/lib/data/homeData";
import FormInput from "@/components/ui/FormInput";
import Toast from "@/components/ui/Toast";

// Form validation types
type FormValues = {
  fullName: string;
  email: string;
  message: string;
};

type FormErrors = {
  fullName?: string;
  email?: string;
  message?: string;
};

export default function ContactPage() {
  // Form state
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Animate form on page load
  useEffect(() => {
    setFormVisible(true);
  }, []);

  // Form field change handler
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Form validation
  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    // Validate name
    if (!formValues.fullName.trim()) {
      errors.fullName = "Name is required";
    }

    // Validate email
    if (!formValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Please enter a valid email address";
    }

    // Validate message
    if (!formValues.message.trim()) {
      errors.message = "Message is required";
    } else if (formValues.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Check if form is valid for enabling/disabling submit button
  const isFormValid = (): boolean => {
    return (
      formValues.fullName.trim() !== "" &&
      formValues.email.trim() !== "" &&
      /\S+@\S+\.\S+/.test(formValues.email) &&
      formValues.message.trim() !== "" &&
      formValues.message.trim().length >= 10
    );
  };

  // Form submission handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        // Log form values to console
        console.log("Form values:", formValues);

        // TODO: Wire to API or Formspree
        // Example implementation:
        // fetch('/api/contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(formValues)
        // })

        // Reset form
        setFormValues({
          fullName: "",
          email: "",
          message: "",
        });

        // Show success message
        setToastMessage(
          "Message sent successfully. I'll get back to you soon!"
        );
        setToastVisible(true);
        setIsSubmitting(false);
      }, 1000);
    }
  };

  // Icon components for social links
  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return (
          <svg
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
              clipRule='evenodd'
            />
          </svg>
        );
      case "linkedin":
        return (
          <svg
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
          </svg>
        );
      case "twitter":
        return (
          <svg
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
          </svg>
        );
      case "email":
        return (
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
            />
          </svg>
        );
      default:
        return null;
    }
  };

  // Copy email to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setToastMessage("Email copied to clipboard!");
        setToastVisible(true);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div className='container mx-auto px-4 py-24 md:py-32'>
      <div className='max-w-4xl mx-auto px-4 pt-32 pb-20 sm:pt-40 sm:pb-32'>
        <h1 className='text-4xl sm:text-5xl font-bold mb-6'>
          <span className='text-gradient'>Let's Connect</span>
        </h1>
        <p className='text-xl text-secondary max-w-2xl leading-relaxed transition-colors mb-8'>
          Have a question, project idea, or just want to say hello? I'd love to
          hear from you. Fill out the form below or reach out through any of my
          social channels.
        </p>
      </div>

      <div className='max-w-4xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {/* Contact Form */}
          <div className='md:col-span-2'>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={`
                bg-card rounded-xl p-8 border border-card-border shadow-sm
                transition-all duration-700 transform
                ${
                  formVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >
              <h2 className='text-2xl font-bold text-primary mb-6 transition-colors'>
                Send a Message
              </h2>

              <FormInput
                id='fullName'
                name='fullName'
                label='Full Name'
                value={formValues.fullName}
                placeholder='Your name'
                required
                error={formErrors.fullName}
                onChange={handleChange}
              />

              <FormInput
                id='email'
                name='email'
                type='email'
                label='Email Address'
                value={formValues.email}
                placeholder='your.email@example.com'
                required
                error={formErrors.email}
                onChange={handleChange}
              />

              <FormInput
                id='message'
                name='message'
                label='Message'
                value={formValues.message}
                placeholder='Your message here...'
                required
                textarea
                rows={6}
                error={formErrors.message}
                onChange={handleChange}
              />

              <button
                type='submit'
                disabled={isSubmitting || !isFormValid()}
                className={`
                  w-full md:w-auto px-6 py-3 rounded-md text-white font-medium shadow-sm
                  transition-all duration-300
                  ${
                    isSubmitting || !isFormValid()
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-brand-primary hover:bg-brand-primary-hover"
                  }
                `}
              >
                {isSubmitting ? (
                  <span className='flex items-center justify-center'>
                    <svg
                      className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Connect and Social Links */}
          <div className='md:col-span-1'>
            <div className='bg-card rounded-xl p-8 border border-card-border shadow-sm'>
              <h2 className='text-2xl font-bold text-primary mb-6 transition-colors'>
                Connect With Me
              </h2>

              {/* Email with copy functionality */}
              <div className='mb-6'>
                <h3 className='text-lg font-semibold text-secondary mb-2 transition-colors'>
                  Email
                </h3>
                <button
                  onClick={() => copyToClipboard("kyle.simmons@example.com")}
                  className='flex items-center text-brand-primary hover:underline transition-colors'
                >
                  <svg
                    className='w-5 h-5 mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  kyle.simmons@example.com
                  <span className='ml-2 text-xs text-tertiary'>
                    (Click to copy)
                  </span>
                </button>
              </div>

              {/* Social links */}
              <div>
                <h3 className='text-lg font-semibold text-secondary mb-3 transition-colors'>
                  Find me on
                </h3>
                <div className='flex flex-col space-y-4'>
                  {homeData.socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center text-tertiary hover:text-brand-primary transition-colors'
                    >
                      <span className='mr-3'>
                        {renderSocialIcon(social.icon)}
                      </span>
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notification for success message */}
      <Toast
        message={toastMessage}
        type='success'
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
