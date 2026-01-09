"use client";

import { useMemo, useState } from "react";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Contacto desde Amaranta");
    const body = encodeURIComponent(
      `Nombre: \${name || ""}\nEmail: \${email || ""}\nPreferencia de cita: \${preferredDate || "(sin fecha)"} \${preferredTime || ""}\n\nMensaje:\n\${message || ""}`
    );

    // TODO: reemplazar por el correo real de Amaranta
    return `mailto:hola@amaranta.life?subject=\${subject}&body=\${body}`;
  }, [name, email, preferredDate, preferredTime, message]);

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Cuéntame tu nombre.";

    if (!email.trim()) next.email = "Necesito tu email para responderte.";
    else if (!isValidEmail(email)) next.email = "Revisa que el email esté bien escrito.";

    if (!message.trim()) next.message = "¿Qué te gustaría trabajar o aclarar?";
    if (message.trim().length > 2000) next.message = "Mantengámoslo en menos de 2000 caracteres.";

    return next;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    setSubmitError(null);
    
    if (Object.keys(next).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          preferredDate: preferredDate || null,
          preferredTime: preferredTime || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje");
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Error al enviar el mensaje. Por favor intenta de nuevo."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="contact-form-success">
        <div className="contact-form-success-icon">✓</div>
        <h3 style={{ marginTop: 20, fontSize: 28, lineHeight: 1.2, fontWeight: 600 }}>
          Recibí tu mensaje
        </h3>
        <p style={{ marginTop: 12, fontSize: 17, lineHeight: 1.7, opacity: 0.85, maxWidth: 520 }}>
          Tu mensaje ha sido enviado correctamente. Te responderé con calma y claridad.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setSubmitted(false);
              setName("");
              setEmail("");
              setMessage("");
              setPreferredDate("");
              setPreferredTime("");
            }}
          >
            Enviar otro mensaje
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="contact-form-modern" noValidate>
      <div className="contact-form-grid">
        <div className="contact-form-field">
          <label htmlFor="name" className="contact-form-label">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className={`contact-form-input ${errors.name ? "error" : ""}`}
          />
          {errors.name ? (
            <div className="contact-form-error">
              {errors.name}
            </div>
          ) : null}
        </div>

        <div className="contact-form-field">
          <label htmlFor="email" className="contact-form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className={`contact-form-input ${errors.email ? "error" : ""}`}
          />
          {errors.email ? (
            <div className="contact-form-error">
              {errors.email}
            </div>
          ) : null}
        </div>
      </div>

      <div className="contact-form-field">
        <label className="contact-form-label">
          Agenda (opcional)
        </label>
        <div className="contact-form-date-grid">
          <div className="contact-form-date-field">
            <label htmlFor="preferredDate" className="contact-form-sublabel">
              Fecha
            </label>
            <input
              id="preferredDate"
              name="preferredDate"
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="contact-form-input"
            />
          </div>
          <div className="contact-form-date-field">
            <label htmlFor="preferredTime" className="contact-form-sublabel">
              Hora
            </label>
            <input
              id="preferredTime"
              name="preferredTime"
              type="time"
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="contact-form-input"
            />
          </div>
        </div>
        <p className="contact-form-hint">
          Selecciona una fecha y hora tentativas. Te confirmo disponibilidad por email.
        </p>
      </div>

      <div className="contact-form-field">
        <label htmlFor="message" className="contact-form-label">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Cuéntame qué estás viviendo y qué te gustaría trabajar."
          className={`contact-form-textarea ${errors.message ? "error" : ""}`}
          rows={6}
        />
        {errors.message ? (
          <div className="contact-form-error">
            {errors.message}
          </div>
        ) : null}
      </div>

      <div className="contact-form-actions">
        <button
          type="submit"
          className="btn btn-primary"
          style={{ fontSize: 17, padding: "14px 32px" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </button>
        <a className="contact-form-email-link" href={mailtoHref}>
          Prefiero escribir por email →
        </a>
      </div>
      {submitError && (
        <div className="contact-form-error" style={{ marginTop: 16, textAlign: "center" }}>
          {submitError}
        </div>
      )}

      <p className="contact-form-footer">
        Te responderé con calma y claridad. Si tu mensaje es sensible, puedes escribir lo mínimo necesario.
      </p>
    </form>
  );
}
