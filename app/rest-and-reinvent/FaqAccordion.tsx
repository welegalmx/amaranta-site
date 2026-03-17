"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "¿Cuándo empieza el siguiente grupo?",
    a: "Cada cohorte tiene fechas específicas. Escríbeme por contacto y te envío las próximas fechas de inicio.",
  },
  {
    q: "¿Qué temas puedo trabajar en este coaching?",
    a: "Trabajamos cambio, reinvención, confianza, claridad de objetivos, toma de decisiones y plan de acción personal.",
  },
  {
    q: "¿Qué horarios tienen?",
    a: "Las sesiones son los martes de 7:00 a 8:30 pm hora México.",
  },
  {
    q: "¿Qué pasa si un día no puedo ir?",
    a: "Puedes ver la grabación de la sesión y seguir el proceso. Te recomendamos asistir en vivo para mayor aprovechamiento.",
  },
  {
    q: "¿Todas las sesiones son en vivo?",
    a: "Sí. Las 5 sesiones grupales son en vivo. La llamada inicial y la de cierre también son en vivo.",
  },
  {
    q: "¿Cómo puedo saber si este programa es para mí?",
    a: "Si estás en una etapa de cambio o reinvención, quieres recuperar confianza y dirección, o sabes que necesitas accionar pero te dispersas, este espacio es para ti. Puedes agendar una llamada para aclarar dudas.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="rr-faq-grid">
      {FAQ_ITEMS.map((item, index) => (
        <div
          key={index}
          className={`rr-faq-item ${openIndex === index ? "rr-faq-item--open" : ""}`}
        >
          <button
            type="button"
            className="rr-faq-question"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.q}</span>
            <span className="rr-faq-chevron" aria-hidden>
              ▼
            </span>
          </button>
          <div className="rr-faq-answer" role="region" aria-label={item.q}>
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
