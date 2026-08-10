"use client";

import { useState } from "react";
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
    <section id="contact" className="py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="Questions, roles, or something you want built — this form emails me directly."
        />

        <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
          <div className="space-y-3 text-sm">
            <p className="text-muted">
              You can also reach me directly:
            </p>
            <p>
              <a href="mailto:shashank200801@gmail.com" className="link-accent">
                shashank200801@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/shashank200801"
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
              >
                LinkedIn
              </a>
              {" · "}
              <a
                href="https://github.com/shanki200801"
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
              >
                GitHub
              </a>
            </p>
            <p className="font-mono text-xs text-muted">Bengaluru · IST (UTC+5:30)</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  className="field"
                  disabled={isSubmitting}
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="field"
                  disabled={isSubmitting}
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleChange}
                rows={5}
                className="field resize-y"
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
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

            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Send message"}
            </button>

            {submitStatus && (
              <p
                role="status"
                className={`text-sm ${
                  submitStatus.success ? "text-muted" : "text-red-500"
                }`}
              >
                {submitStatus.message}
                {!submitStatus.success && (
                  <>
                    {" "}
                    <a href="mailto:shashank200801@gmail.com" className="link-accent">
                      shashank200801@gmail.com
                    </a>
                  </>
                )}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
