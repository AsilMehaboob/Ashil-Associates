"use client";

import { useActionState } from "react";
import { CONTACT_INFO } from "@/constants";
import { MapPin, Phone, Mail, Loader2, Check } from "lucide-react";
import { submitContactForm } from "@/app/actions";

const IconMap: Record<string, React.ElementType> = {
  "map-pin": MapPin,
  phone: Phone,
  mail: Mail,
};

function Icon({ name, className }: { name: string; className?: string }) {
  const IconComponent = IconMap[name];
  if (!IconComponent) return null;

  return <IconComponent className={className} strokeWidth={1.5} />;
}

const initialState = {
  success: false,
  message: "",
};

export default function Contact() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <section className="bg-white py-24 px-6 sm:px-8 lg:px-12" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content: Info */}
          <div className="flex flex-col">
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-midnight-500)] mb-8 font-sans">
              {CONTACT_INFO.sectionHeader}
            </h3>

            <h2 className="text-4xl sm:text-5xl font-serif text-[var(--color-midnight-900)] leading-[1.15] mb-8 max-w-md">
              {CONTACT_INFO.title}
            </h2>

            <p className="text-sm leading-relaxed text-[var(--color-midnight-500)] font-sans max-w-md mb-12">
              {CONTACT_INFO.description}
            </p>

            <div className="space-y-8">
              {CONTACT_INFO.details.map((detail) => (
                <div key={detail.type} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-arctic-50)] flex items-center justify-center rounded-sm">
                    <Icon
                      name={detail.icon}
                      className="w-5 h-5 text-[var(--color-midnight-800)]"
                    />
                  </div>
                  <div className="font-sans">
                    <h4 className="text-sm font-semibold text-[var(--color-midnight-900)] mb-1">
                      {detail.type}
                    </h4>
                    {detail.icon === "map-pin" ? (
                      <a
                        href={(detail as any).url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group/link font-medium"
                      >
                        {detail.lines.map((line, i) => (
                          <p
                            key={i}
                            className="text-sm text-[var(--color-midnight-500)] leading-relaxed group-hover/link:text-[var(--color-midnight-900)] transition-colors"
                          >
                            {line}
                          </p>
                        ))}
                      </a>
                    ) : (
                      detail.lines.map((line, i) => {
                        const href =
                          detail.icon === "phone"
                            ? `tel:${line.replace(/\s+/g, "")}`
                            : detail.icon === "mail"
                            ? `mailto:${line}`
                            : undefined;

                        return href ? (
                          <a
                            key={i}
                            href={href}
                            className="block text-sm font-medium text-[var(--color-midnight-500)] leading-relaxed hover:text-[var(--color-midnight-900)] transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <p
                            key={i}
                            className="text-sm text-[var(--color-midnight-500)] leading-relaxed"
                          >
                            {line}
                          </p>
                        );
                      })
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content: Form */}
          <div className="pt-8 lg:pt-0">
            {state.success ? (
              <div className="h-full flex flex-col items-center justify-center p-10 bg-[var(--color-arctic-50)] rounded-sm text-center animate-in fade-in zoom-in slide-in-from-bottom-4 duration-500">
                <div className="w-16 h-16 bg-[var(--color-midnight-50)] rounded-full flex items-center justify-center mb-6 ring-1 ring-[var(--color-midnight-100)]">
                  <Check className="w-7 h-7 text-[var(--color-midnight-900)] mt-1" />
                </div>
                <h3 className="text-3xl font-serif text-[var(--color-midnight-900)] mb-4">
                  Message Sent
                </h3>
                <p className="text-sm text-[var(--color-midnight-600)] font-sans max-w-[300px] leading-relaxed">
                  Thank you for reaching out. We have received your inquiry and
                  will be in touch with you shortly.
                </p>
              </div>
            ) : (
              <form action={formAction} className="space-y-8">
                {CONTACT_INFO.form.fields.map((field) => (
                  <div key={field.name} className="group">
                    <label className="block text-xs font-semibold text-[var(--color-midnight-900)] mb-2 font-sans">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.label.includes("*")}
                        rows={4}
                        autoComplete={field.name === "message" ? "off" : "on"}
                        className="w-full border-b border-[var(--color-arctic-200)] py-3 text-sm text-[var(--color-midnight-900)] placeholder-[var(--color-arctic-400)] focus:outline-hidden focus:border-[var(--color-midnight-900)] transition-colors resize-none font-sans bg-transparent"
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.label.includes("*")}
                        placeholder={field.placeholder}
                        autoComplete={field.name}
                        className="w-full border-b border-[var(--color-arctic-200)] py-3 text-sm text-[var(--color-midnight-900)] placeholder-[var(--color-arctic-400)] focus:outline-hidden focus:border-[var(--color-midnight-900)] transition-colors font-sans bg-transparent"
                      />
                    )}
                  </div>
                ))}

                {state?.message && !state.success && (
                  <div className="p-4 bg-red-50 text-red-600 text-sm font-sans rounded-sm border border-red-100">
                    {state.message}
                  </div>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-[var(--color-midnight-950)] text-white text-xs font-medium tracking-[0.1em] uppercase py-5 px-8 hover:bg-[var(--color-midnight-800)] transition-colors duration-300 cursor-pointer font-sans disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      CONTACT_INFO.form.buttonText
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
