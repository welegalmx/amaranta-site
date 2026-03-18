"use client";

import Image from "next/image";
import Link from "next/link";
import ContactForm from "../ContactForm";
import FaqAccordion from "./FaqAccordion";

const CTA_HREF = "#contacto-rr";
const BOOKING_URL =
  "https://thehub-api.mastermind.com/widget/bookings/bonus-call-reinicia-y-reinventate-llamada-uno-a-unoog20i1";
const PAYMENT_URL = "https://thehub-api.mastermind.com/payment-link/68f67d1a2197092568e2d940";
const BOOKING_WIDGET_URL =
  "https://thehub-api.mastermind.com/widget/bookings/bonus-call-reinicia-y-reinventate-llamada-uno-a-unoog20i1";

export default function RestAndReinventPage() {
  return (
    <>
      <main id="contenido">
        {/* 1. REINICIA Y REINVENTA - Hero */}
        <section className="rr-hero" aria-label="Reinicia y reinventa">
          <div className="container">
            <div className="rr-hero-split">
              <div className="rr-hero-image-wrap">
                <Image
                  src="/images/hero-rest-reinvent.png"
                  alt="Mujer sentada en la montaña contemplando el horizonte al atardecer"
                  fill
                  sizes="(max-width: 980px) 100vw, 50vw"
                  className="rr-hero-image"
                  priority
                />
              </div>
              <div className="rr-hero-content">
                <h1 className="rr-hero-title">REINICIA Y REINVENTATE</h1>
                <p className="rr-hero-text">
                  El coaching grupal para quienes estén pasando por un momento de cambio, quieran mejorar algún aspecto de su vida o estén listas para alcanzar un objetivo con más claridad, herramientas y dirección.
                </p>
                <p className="rr-hero-text">
                  No es un curso. Es un proceso guiado para desaprender lo que ya no necesitas, fortalecer tu confianza, crear un plan real y tomar acción hacia la vida que quieres.
                </p>
                <a
                  className="btn btn-primary rr-btn-olive"
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agenda tu llamada gratis
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ¿Sientes que sabes que necesitas un cambio... */}
        <section className="rr-blur-block" aria-label="¿Sientes que necesitas un cambio?">
          <div className="rr-blur-bg" />
          <div className="container">
            <div className="rr-blur-card">
              <h2 className="rr-blur-title">
                ¿Sabes que necesitas un cambio, pero no logras aterrizarlo?
              </h2>
              <p className="rr-blur-text">
                Quizá llevas tiempo postergándolo, dudando de ti, repitiendo patrones o sintiendo que pasa el tiempo y sigues en el mismo lugar. Este programa es para dejar de dar vueltas y empezar a avanzar con claridad, estructura y acompañamiento.
              </p>
              <a
                className="btn rr-blur-cta"
                href={PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                EMPIEZA AHORA
              </a>
            </div>
          </div>
        </section>

        {/* 3. Este coaching es para ti si */}
        <section className="rr-section rr-section-white rr-para-ti-si" aria-label="Para quién es este coaching">
          <div className="container">
            <h2 className="rr-section-title rr-para-ti-si-title">Este coaching es para ti si:</h2>
            <ul className="rr-list-bullets rr-para-ti-si-list">
              <li>Estás en una etapa de cambio o reinvención</li>
              <li>Quieres recuperar confianza y dirección</li>
              <li>Te cuesta tomar decisiones con seguridad</li>
              <li>Sabes que necesitas accionar, pero solo te dispersas</li>
              <li>Quieres trabajar en un espacio íntimo, guiado y con contención</li>
            </ul>
          </div>
        </section>

        {/* 4. Lo que vas a obtener */}
        <section className="rr-section rr-section-dark" aria-label="Lo que vas a obtener">
          <div className="container">
            <div className="rr-dark-split">
              <div className="rr-dark-image-wrap">
                <Image
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80"
                  alt="Cuaderno y lentes sobre madera"
                  fill
                  sizes="(max-width: 980px) 100vw, 45vw"
                  className="rr-dark-image"
                />
              </div>
              <div className="rr-dark-content">
                <h2 className="rr-dark-title">Lo que vas a obtener</h2>
                <ul className="rr-list-bullets rr-list-light">
                  <li>Reescribir tu historia desde un lugar más consciente y poderoso</li>
                  <li>Más claridad sobre lo que realmente quieres</li>
                  <li>Un plan de acción personal, claro y aterrizado</li>
                  <li>Herramientas para dejar atrás dudas y bloqueos</li>
                  <li>Mayor autoconocimiento y confianza</li>
                  <li>Mejor toma de decisiones</li>
                  <li>Avance real hacia una nueva etapa de tu vida</li>
                </ul>
                <a
                  className="btn rr-btn-light-green"
                  href={BOOKING_WIDGET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quiero saber más
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Temas de sesiones */}
        <section className="rr-section rr-section-white" aria-label="Temas de sesiones">
          <div className="container">
            <h2 className="rr-section-title rr-section-title-center">Temarío de Módulos</h2>
            <div className="rr-temas-split">
              <div className="rr-temas-list-wrap">
                <ol className="rr-list-numbered">
                  <li>
                    <strong>Descubrir y desaprender:</strong>
                    <br />
                    Identificando patrones, creencias y formas de pensar que hoy ya no te ayudan a avanzar.
                  </li>
                  <li>
                    <strong>Construcción de confianza inquebrantable:</strong>
                    <br />
                    Trabajando en tu seguridad personal, tu voz interna y tu capacidad de relacionarte con más firmeza.
                  </li>
                  <li>
                    <strong>Reinvención y redirección:</strong>
                    <br />
                    Definiendo con más claridad qué quieres, hacia dónde vas y cómo se ve esta nueva etapa para ti.
                  </li>
                  <li>
                    <strong>Acción, transición y avance a la meta:</strong>
                    <br />
                    Convertiremos la claridad en movimiento para que empieces a actuar con intención y constancia.
                  </li>
                  <li>
                    <strong>Estrategias de reinvención:</strong>
                    <br />
                    Cerrando el proceso con herramientas concretas para sostener el cambio más allá del coaching.
                  </li>
                </ol>
              </div>
              <div className="rr-temas-image-wrap">
                <Image
                  src="/images/rr-temario-modulos.png"
                  alt="Manos escribiendo en un cuaderno"
                  fill
                  sizes="(max-width: 980px) 100vw, 45vw"
                  className="rr-temas-image"
                />
              </div>
            </div>
            <div className="rr-temas-cta">
              <a className="btn rr-btn-beige" href={PAYMENT_URL} target="_blank" rel="noopener noreferrer">
                Quiero mi lugar
              </a>
            </div>
          </div>
        </section>

        {/* 6. En qué consiste */}
        <section className="rr-section rr-section-olive" aria-label="En qué consiste">
          <div className="container">
            <div className="rr-olive-split">
              <div className="rr-olive-image-wrap">
                <Image
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80"
                  alt="Manos escribiendo en cuaderno"
                  fill
                  sizes="(max-width: 980px) 100vw, 45vw"
                  className="rr-olive-image"
                />
              </div>
              <div className="rr-olive-content">
                <h2 className="rr-olive-title">En qué consiste</h2>
                <ul className="rr-list-bullets rr-list-olive">
                  <li>Coaching grupal en vivo en línea</li>
                  <li>
                    1 llamada uno a uno (solo tú + Amaranta) inicial para definir tu objetivo
                  </li>
                  <li>5 sesiones grupales en vivo de 90 minutos (1 sesión por semana)</li>
                  <li>1 llamada de cierre uno a uno</li>
                  <li>Un espacio íntimo, guiado, reflexivo y transformador.</li>
                  <li>Costo regular $9500 MX ($499USD)</li>
                  <li>Ahora $5800MXN / $350USD</li>
                </ul>
                <p style={{ marginTop: 18, marginBottom: 0 }}>
                  <strong>Siguientes cursos:</strong>
                  <br />
                  8 de abril , la sesiones se llevaran a cabo los Martes de 7:00 a 8:30 pm hora CDMX
                  <br />
                  29 de abril, la sesiones se llevaran a cabo los Miércoles de 10:00 a 11:30 am hora CDMX
                  <br />
                  <strong>¡CUPO LIMITADO!</strong>
                </p>
                <a
                  className="btn rr-btn-pink"
                  href="https://thehub-api.mastermind.com/payment-link/68f67d1a2197092568e2d940"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quiero mi lugar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 7. ¿Por qué funciona? */}
        <section className="rr-section rr-section-purple" aria-label="¿Por qué funciona?">
          <div className="container">
            <h2 className="rr-section-title rr-section-title-center rr-purple-title">¿Por qué funciona?</h2>
            <div className="rr-purple-text">
              <p>Porque los cambios que perduran en el tiempo se construyen desde la mente, la identidad y la acción.</p>
              <p>La metodología de este coaching combina herramientas de Programación Neurolingüística para ayudarte a cambiar tu narrativa interna y prepararte para actuar de una forma distinta.</p>
              <p>Trabajamos en la identidad que necesitas construir para llegar a donde quieras, fortalecemos tu autoconfianza y dividimos tu objetivo en escalones concretos para que avanzar deje de sentirse abrumador y empiece a sentirse posible.</p>
              <p className="rr-purple-signoff">Siempre estás acompañada.</p>
            </div>
          </div>
        </section>

        {/* 8. ¿Quién soy? */}
        <section className="rr-section rr-section-white" aria-label="¿Quién soy?">
          <div className="container">
            <div className="rr-quien-split">
              <div className="rr-quien-content">
                <h2 className="rr-section-title">¿Quién soy?</h2>
                <p className="rr-quien-text">
                  Coach certificada con maestría en Programación Neurolingüística. Especializada en comportamiento del cambio con base en neurociencia.
                </p>
                <p className="rr-quien-text">
                  Escritora del libro &quot;Y si para. No pasa nada&quot; que ha sido un éxito en ventas.
                </p>
                <p className="rr-quien-text">
                  Ejecutiva en Marketing, liderazgo y emprendimiento.
                </p>
                <Link href="/#quien-soy" className="btn rr-btn-outline">
                  Leer más
                </Link>
              </div>
              <div className="rr-quien-image-wrap">
                <Image
                  src="/images/AMI-221.jpg"
                  alt="Amaranta Gómez Salgado"
                  fill
                  sizes="(max-width: 980px) 100vw, 45vw"
                  className="rr-quien-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 9. Testimonios */}
        <section className="rr-section rr-section-white" aria-label="Testimonios">
          <div className="container">
            <h2 className="rr-section-title rr-section-title-center rr-testimonios-title">Testimonios</h2>
            <div className="rr-testimonios-grid">
              <div className="rr-testimonial-card">
                <div className="rr-testimonial-avatar">
                  <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop" alt="Mari" width={80} height={80} />
                </div>
                <p className="rr-testimonial-name">Mari</p>
                <div className="rr-testimonial-stars">★★★★★</div>
                <p className="rr-testimonial-text">
                  Saliendo de un grupo en total seguimiento y sintiéndome identificada con una pared, me di a la tarea de buscar un coaching sencillo y un grupo de personas con quienes interactuar. Ella fue muy buena contigo y me sentí apoyada, escuchada, ¡hoy gracias a Amaranta!, mi vida va rodando, me siento más fuerte, me siento motivada, me creo lo que soy y hoy tengo herramientas para encontrar los senderos mas irregulares que a veces regresan a tu vida en ciertos momentos. Me encanta compartir todo obtenido con todo el mundo, reencauzar a individuos y alentar a las personas para que se consideren a si en algo diferente, reencauzar una experiencia, o unirse a mejores personas, and rear el hoy.
                </p>
              </div>
              <div className="rr-testimonial-card">
                <div className="rr-testimonial-avatar">
                  <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop" alt="Caro" width={80} height={80} />
                </div>
                <p className="rr-testimonial-name">Caro</p>
                <div className="rr-testimonial-stars">★★★★★</div>
                <p className="rr-testimonial-text">
                  Empezando este coaching con dudas y miedos de no ser capaz, un propósito que llegué a sentir que era mío, grande o pequeño, con ideas solo en papel, un proyecto a que estaba ahí sin arrancar. Después del coaching de Rest &amp; Reinvent de una buena situación, pude ver el proyecto de frente a la persona opuesta, tomar una donde quiero llegar, tener las herramientas correctas y los altercados correctos. El trabajar en coaching grupal también fue una muy buena experiencia, me sentí acompañada y apoyada. Y personalmente crear una copia de hacer esto a cualquier o una que mas para mí.
                </p>
              </div>
              <div className="rr-testimonial-card">
                <div className="rr-testimonial-avatar">
                  <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop" alt="Sergio" width={80} height={80} />
                </div>
                <p className="rr-testimonial-name">Sergio</p>
                <div className="rr-testimonial-stars">★★★★★</div>
                <p className="rr-testimonial-text">
                  Un sentido perdido, demostrando sin vueltas y bloqueando paso al ir pasando las sesiones mi mente y espíritu fueron adquiriendo seguridad y confianza y al terminar me siento animado, enfocado y las cosas (como el horario de trabajo) se empiezan a dar y a acomodar.
                </p>
              </div>
            </div>
            <div className="rr-cta-button-wrap">
              <a className="btn rr-btn-green" href={CTA_HREF}>
                EMPIEZA AHORA
              </a>
            </div>
          </div>
        </section>

        {/* 10 + 11. FAQ */}
        <section className="rr-section rr-section-faq" aria-label="Preguntas frecuentes">
          <div className="container">
            <h2 className="rr-faq-title">PREGUNTAS FRECUENTES</h2>
            <FaqAccordion />
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto-rr" className="section" aria-label="Contacto">
          <div className="container">
            <div className="stack" style={{ textAlign: "center", marginBottom: 48 }}>
              <p className="kicker" style={{ color: "var(--amaranta-warm)" }}>Contacto</p>
              <h2 className="h2">Reserva tu lugar</h2>
              <p className="muted" style={{ maxWidth: 640, margin: "0 auto", fontSize: "clamp(16px, 4vw, 18px)" }}>
                Cuéntame lo esencial. Te responderé con calma y claridad.
              </p>
            </div>
            <div style={{ marginTop: 32 }}>
              <ContactForm showAgenda={false} />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="divider" />
          <p style={{ fontSize: 13, opacity: 0.7 }}>
            © {new Date().getFullYear()} Amaranta Gómez Salgado. Coaching para tu reinvención.
          </p>
        </div>
      </footer>
    </>
  );
}
