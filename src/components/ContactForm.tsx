"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiAlertCircle, FiCheckCircle, FiMail, FiSend } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

interface FormData {
  name: string;
  email: string;
  message: string;
  website: string; // honeypot
}

type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

interface SubmitStatus {
  success: boolean;
  message: string;
}

const EMPTY_FORM: FormData = { name: "", email: "", message: "", website: "" };

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const { name, email, message, website } = formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name: field, value } = e.target;
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });
      const data = await response.json();

      if (!response.ok) {
        setSubmitStatus({
          success: false,
          message: data.error ?? "Couldn't send the message. Please try again.",
        });
        return;
      }

      setSubmitStatus({
        success: true,
        message: data.message ?? "Message sent — I'll get back to you soon.",
      });
      setFormData(EMPTY_FORM);
      setErrors({});
    } catch {
      setSubmitStatus({
        success: false,
        message: "Network error. Please try again, or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Get In Touch"
          description="Have a question, a role, or an idea worth building? Send it over — the form actually emails me."
          align="center"
        />

        <div className="reveal mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Direct channels */}
          <div className="surface flex flex-col justify-between rounded-2xl p-7">
            <div>
              <h3 className="font-semibold">Prefer something direct?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                I read everything that lands in my inbox and usually reply within a
                couple of days.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="mailto:shashank200801@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-line p-3 text-sm transition-colors hover:border-brand-400"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-500/15 to-accent-500/15 text-brand-400">
                    <FiMail className="h-4 w-4" />
                  </span>
                  <span className="truncate">shashank200801@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/shashank200801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-line p-3 text-sm transition-colors hover:border-brand-400"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-500/15 to-accent-500/15 text-brand-400">
                    <FaLinkedin className="h-4 w-4" />
                  </span>
                  LinkedIn
                </a>

                <a
                  href="https://github.com/shanki200801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-line p-3 text-sm transition-colors hover:border-brand-400"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-500/15 to-accent-500/15 text-brand-400">
                    <FaGithub className="h-4 w-4" />
                  </span>
                  github.com/shanki200801
                </a>
              </div>
            </div>

            <p className="mt-8 font-mono text-xs text-muted">Based in Bengaluru · IST (UTC+5:30)</p>
          </div>

          {/* Form */}
          <div className="surface rounded-2xl p-7 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    placeholder="Ada Lovelace"
                    className={`field ${errors.name ? "!border-red-500" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={`field ${errors.email ? "!border-red-500" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="What are you working on?"
                  className={`field resize-y ${errors.message ? "!border-red-500" : ""}`}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Honeypot — hidden from humans, tempting to bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <FiSend className="h-4 w-4" />
                  </>
                )}
              </button>

              {submitStatus && (
                <div
                  role="status"
                  className={`flex items-start gap-3 rounded-xl border p-4 text-sm ${
                    submitStatus.success
                      ? "border-mint-400/30 bg-mint-400/10 text-mint-400"
                      : "border-red-500/30 bg-red-500/10 text-red-400"
                  }`}
                >
                  {submitStatus.success ? (
                    <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  ) : (
                    <FiAlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  )}
                  <div>
                    <p>{submitStatus.message}</p>
                    {!submitStatus.success && (
                      <a
                        href="mailto:shashank200801@gmail.com"
                        className="mt-1 inline-block underline underline-offset-2"
                      >
                        shashank200801@gmail.com
                      </a>
                    )}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
