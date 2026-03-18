"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "¿Cuándo empieza el siguiente grupo?",
    a: "Martes 8 de abril a la 7:00pm hora México y Miércoles 29 de abril la sesiones 10:00 am hora México.",
  },
  {
    q: "¿Qué horarios tiene?",
    a: "El grupo de la tarde son Martes de 7:00 a 8:30 pm hora Ciudad de México. Grupo tarde son Miércoles de 10:00 a 11:30 am hora Ciudad de México.",
  },
  {
    q: "¿Qué temas puedo tratar en el coaching?",
    a: "El plan que hagas es 100% personal por lo que puedes venir con temas específicos personales o profesionales. Ejemplo en aspecto personal crear un nuevo hábito, manejo del tiempo, pareja o profesional crecimiento laboral, emprendimiento, cambio de trabajo. En fin cualquier objetivo que busques alcanzar.",
  },
  {
    q: "¿Qué pasa si un día no puedo ir?",
    a: "Tendrás acceso a una plataforma donde estará la sesión grabada y los materiales de apoyo.",
  },
  {
    q: "¿Cómo puedo saber si el programa es para mí?",
    a: "Agenda una llamada gratuita y así aclararás cualquier duda.",
  },
  {
    q: "¿Todas las sesiones son en vivo?",
    a: "Sí. Las 5 sesiones grupales en vivo son de 90 minutos y se realizan 1 sesión por semana.",
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
