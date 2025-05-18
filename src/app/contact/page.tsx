"use client";

import { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import { homeData } from "@/lib/data/homeData";
import FormInput from "@/components/ui/FormInput";
import Toast from "@/components/ui/Toast";
import { submitContactForm } from "@/lib/api/emailService";

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

  // Initialize form animation
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
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // Use our client-side utility to submit the form
        const result = await submitContactForm(formValues);

        if (!result.success) {
          throw new Error(result.error || 'Failed to send message');
        }

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
      } catch (error) {
        console.error('Error sending message:', error);
        setToastMessage(
          "Sorry, there was an error sending your message. Please try again."
        );
        setToastVisible(true);
      } finally {
        setIsSubmitting(false);
      }
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
    <div className='flex flex-col px-4 min-h-[calc(100vh-4rem)] md:px-8 max-w-7xl mx-auto w-full py-12'>
      <div className='max-w-4xl mx-auto w-full'>
        <h1 className='text-3xl md:text-4xl font-bold mb-8'>Get in Touch</h1>

        <div className='grid md:grid-cols-3 gap-10'>
          {/* Contact Info */}
          <div className='md:col-span-1 order-2 md:order-1'>
            <div className='bg-card rounded-xl p-6 shadow-sm'>
              <h2 className='text-xl font-semibold mb-4'>Contact Info</h2>

              <div className='space-y-4'>
                {/* Email */}
                <div
                  className='flex items-center cursor-pointer hover:text-blue-500 transition-colors'
                  onClick={() => copyToClipboard("kyle@example.com")}
                >
                  <div className='bg-primary/10 rounded-full p-2 mr-3'>
                    {renderSocialIcon("email")}
                  </div>
                  <div>
                    <div className='font-medium'>Email</div>
                    <div className='text-sm text-muted-foreground'>
                      kyle@example.com
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className='pt-4 border-t'>
                  <h3 className='text-sm font-medium mb-3'>Connect with me</h3>
                  <div className='flex space-x-3'>
                    {homeData.socialLinks.map((link) => (
                      <Link
                        key={link.icon}
                        href={link.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-card hover:bg-muted rounded-full p-2 transition-colors'
                        aria-label={`Visit ${link.name}`}
                      >
                        {renderSocialIcon(link.icon)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`md:col-span-2 order-1 md:order-2 transition-opacity duration-500 ${
              formVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className='bg-card rounded-xl p-6 shadow-sm'>
              <h2 className='text-xl font-semibold mb-4'>Send a Message</h2>

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className='space-y-4'>
                  {/* Name Input */}
                  <FormInput
                    id='fullName'
                    label='Full Name'
                    name='fullName'
                    type='text'
                    placeholder='Your full name'
                    value={formValues.fullName}
                    onChange={handleChange}
                    error={formErrors.fullName}
                    required
                  />

                  {/* Email Input */}
                  <FormInput
                    id='email'
                    label='Email Address'
                    name='email'
                    type='email'
                    placeholder='your.email@example.com'
                    value={formValues.email}
                    onChange={handleChange}
                    error={formErrors.email}
                    required
                  />

                  {/* Message Textarea */}
                  <div className='form-group'>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium mb-1'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      rows={5}
                      className={`w-full px-4 py-2 border rounded-md bg-background focus:ring-2 focus:ring-primary/50 ${
                        formErrors.message
                          ? "border-red-500"
                          : "border-input"
                      }`}
                      placeholder='Enter your message here...'
                      value={formValues.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    {formErrors.message && (
                      <p className='text-red-500 text-xs mt-1'>
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className='pt-2'>
                    <button
                      type='submit'
                      className='w-full py-2.5 px-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed'
                      disabled={!isFormValid() || isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className='flex items-center justify-center'>
                          <svg
                            className='animate-spin -ml-1 mr-2 h-4 w-4'
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
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
        type='success'
      />
    </div>
  );
}
