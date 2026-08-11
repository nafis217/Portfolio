"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  Send,
  Linkedin,
  Github,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";

const MAX_MESSAGE_LENGTH = 2000;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    topic: "Full-Stack Project",
    message: "",
    // Honeypot — never shown to real users
    _company_website: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = PORTFOLIO_DATA.personal.social.email;
  const contactEndpoint =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
    `https://formsubmit.co/ajax/${email}`;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name (at least 2 characters).";
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Please write a message (at least 10 characters).";
    }
    if (formData.message.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Honeypot check — bot filled it
    if (formData._company_website) {
      setIsSubmitting(false);
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        topic: formData.topic,
        message: formData.message,
        _replyto: formData.email,
        _subject: `Portfolio contact: ${formData.subject}`,
        _template: "table",
      };

      const res = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseData = await res.json().catch(() => null);

      if (res.ok && !responseData?.errors) {
        setIsSubmitting(false);
        setSubmitted(true);
      } else {
        throw new Error(
          responseData?.errors?.[0]?.message || "Submission failed"
        );
      }
    } catch (err: unknown) {
      setIsSubmitting(false);
      const message =
        err instanceof Error ? err.message : "Unexpected error occurred";
      setSubmitError(
        `Something went wrong (${message}). Please try again or email me directly.`
      );
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 lg:px-12 bg-blue text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Label */}
        <div className="flex items-center justify-between border-b border-white/20 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-blue-dark uppercase tracking-widest bg-sky px-3.5 py-1.5 rounded-full border border-blue/20 shadow-subtle">
              08 / CONTACT
            </span>
            <span className="h-1 w-12 bg-sky rounded-full" />
          </div>
          <span className="font-mono text-xs font-bold text-white/80">
            GET IN TOUCH
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h2 className="heading-contact font-black text-white tracking-tight">
                LET&apos;S BUILD{" "}
                <span className="block">SOMETHING </span>
                <span className="text-sky">USEFUL.</span>
              </h2>
              <p className="text-base text-white/90 leading-relaxed font-medium">
                Have a product, enterprise system, or engineering project in
                mind? Let&apos;s discuss requirements and architecture.
              </p>
            </div>

            {/* Availability Status */}
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-3 shadow-subtle">
              <span className="relative flex h-3.5 w-3.5 shrink-0" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-sky" />
              </span>
              <div>
                <p className="text-xs font-mono font-bold text-white">
                  STATUS: OPEN FOR OPPORTUNITIES
                </p>
                <p className="text-[11px] text-white/80 font-medium">
                  Full-time roles, contracts &amp; software consultations.
                </p>
              </div>
            </div>

            {/* Direct Email */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-sky uppercase tracking-wider block font-bold">
                DIRECT EMAIL:
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={`mailto:${email}`}
                  className="text-base sm:text-lg font-extrabold text-white hover:text-sky transition-colors font-mono underline underline-offset-4 break-all"
                >
                  {email}
                </a>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="p-2.5 rounded-xl bg-white/15 border border-white/20 hover:bg-white/30 text-white transition-colors shadow-subtle shrink-0"
                  aria-label="Copy email address to clipboard"
                >
                  {copiedEmail ? (
                    <Check size={16} className="text-sky" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono text-sky uppercase tracking-wider block font-bold">
                CONNECT &amp; PROFILES:
              </span>
              <div className="flex gap-4 flex-wrap">
                <a
                  href={PORTFOLIO_DATA.personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white shadow-subtle transition-all"
                >
                  <Linkedin size={16} className="text-sky" aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white shadow-subtle transition-all"
                >
                  <Github size={16} className="text-sky" aria-hidden="true" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-7 bg-white/95 p-6 sm:p-7 rounded-3xl border border-white/60 shadow-poster text-ink backdrop-blur-sm">
            <AnimatePresence mode="wait">
              {/* === SUCCESS STATE === */}
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-sky text-blue flex items-center justify-center mx-auto border border-blue/20">
                    <CheckCircle2 size={36} aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-black text-ink">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-ink/80 max-w-md mx-auto font-medium">
                    Thank you for reaching out. I&apos;ll review your message
                    and get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        topic: "Full-Stack Project",
                        message: "",
                        _company_website: "",
                      });
                    }}
                    className="px-6 py-2.5 bg-blue text-white rounded-xl text-xs font-bold font-mono hover:bg-ink transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                /* === FORM STATE === */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-4"
                  >
                    {/* Honeypot — hidden from real users */}
                    <input
                      type="text"
                      name="_company_website"
                      value={formData._company_website}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          _company_website: e.target.value,
                        })
                      }
                      className="absolute opacity-0 pointer-events-none h-0 w-0"
                      tabIndex={-1}
                      aria-hidden="true"
                      autoComplete="off"
                    />

                    {/* Topic Selector */}
                    <fieldset className="space-y-2">
                      <legend className="text-xs font-mono font-bold text-ink/70 uppercase tracking-wider block">
                        What would you like to discuss?
                      </legend>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
                        {[
                          "Full-Stack Project",
                          "Mobile App",
                          "API / Architecture",
                          "Consultation",
                          "Hiring / Role",
                        ].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, topic: t })
                            }
                            aria-pressed={formData.topic === t}
                            className={`py-2 px-2 rounded-xl text-[11px] font-bold border transition-all ${
                              formData.topic === t
                                ? "bg-blue text-white border-blue shadow-subtle"
                                : "bg-sky/40 text-ink/80 border-blue/15 hover:border-blue"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </fieldset>

                    <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="space-y-1">
                      <label
                        htmlFor="contact-name"
                        className="text-xs font-mono font-bold text-ink/70 uppercase tracking-wider block"
                      >
                        Your Name <span aria-label="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        autoComplete="name"
                        required
                        minLength={2}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                        className="w-full px-3 py-2.5 bg-white border border-ink/15 focus:border-blue focus:ring-2 focus:ring-sky focus:outline-none text-sm text-ink font-medium rounded-xl transition-all"
                        placeholder="Md Nafis Al Safayet"
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          role="alert"
                          className="text-[11px] text-coral font-bold"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1">
                      <label
                        htmlFor="contact-email"
                        className="text-xs font-mono font-bold text-ink/70 uppercase tracking-wider block"
                      >
                        Email Address <span aria-label="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        className="w-full px-3 py-2.5 bg-white border border-ink/15 focus:border-blue focus:ring-2 focus:ring-sky focus:outline-none text-sm text-ink font-medium rounded-xl transition-all"
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          role="alert"
                          className="text-[11px] text-coral font-bold"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                    </div>

                    {/* Subject Input */}
                    <div className="space-y-1">
                      <label
                        htmlFor="contact-subject"
                        className="text-xs font-mono font-bold text-ink/70 uppercase tracking-wider block"
                      >
                        Subject <span aria-label="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        name="subject"
                        autoComplete="off"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        aria-invalid={!!errors.subject}
                        aria-describedby={
                          errors.subject ? "subject-error" : undefined
                        }
                        className="w-full px-3 py-2.5 bg-white border border-ink/15 focus:border-blue focus:ring-2 focus:ring-sky focus:outline-none text-sm text-ink font-medium rounded-xl transition-all"
                        placeholder="Project inquiry, collaboration..."
                      />
                      {errors.subject && (
                        <p
                          id="subject-error"
                          role="alert"
                          className="text-[11px] text-coral font-bold"
                        >
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message Textarea */}
                    <div className="space-y-1">
                      <label
                        htmlFor="contact-message"
                        className="text-xs font-mono font-bold text-ink/70 uppercase tracking-wider block"
                      >
                        Your Message <span aria-label="required">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        maxLength={MAX_MESSAGE_LENGTH}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        aria-invalid={!!errors.message}
                        aria-describedby="message-counter message-error"
                        className="w-full px-3 py-2.5 bg-white border border-ink/15 focus:border-blue focus:ring-2 focus:ring-sky focus:outline-none text-sm text-ink font-medium rounded-xl transition-all resize-none"
                        placeholder="Tell me about your project, goals, or requirements..."
                      />
                      <div className="flex justify-between items-center">
                        {errors.message ? (
                          <p
                            id="message-error"
                            role="alert"
                            className="text-[11px] text-coral font-bold"
                          >
                            {errors.message}
                          </p>
                        ) : (
                          <span />
                        )}
                        <span
                          id="message-counter"
                          className={`text-[10px] font-mono font-bold ${
                            formData.message.length > MAX_MESSAGE_LENGTH * 0.9
                              ? "text-coral"
                              : "text-ink/60"
                          }`}
                        >
                          {formData.message.length} / {MAX_MESSAGE_LENGTH}
                        </span>
                      </div>
                    </div>

                    {/* Submit Error */}
                    {submitError && (
                      <div
                        role="alert"
                        className="p-4 rounded-xl bg-coral/15 border border-coral/30 text-ink text-xs flex items-start gap-2.5 font-medium"
                      >
                        <AlertCircle
                          size={16}
                          className="text-coral shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <div>
                          <p>{submitError}</p>
                          <a
                            href={`mailto:${email}`}
                            className="underline text-blue font-bold mt-1 inline-block"
                          >
                            Email me directly →
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-blue text-white hover:bg-blue-dark disabled:opacity-60 disabled:cursor-not-allowed text-xs font-extrabold uppercase tracking-widest rounded-xl shadow-card transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      {isSubmitting ? (
                        <span className="font-mono animate-pulse">
                          Sending...
                        </span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowUpRight
                            size={18}
                            className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </button>
                  </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
