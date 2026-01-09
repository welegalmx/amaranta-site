import Image from "next/image";
import ContactForm from "./ContactForm";

// Real people + city imagery (stock for now)
const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    alt: "Retrato editorial de una mujer en estudio",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=80",
    alt: "Vista hacia el cielo entre edificios altos",
  },
  {
    src: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=1200&q=80",
    alt: "Retrato natural de una mujer sonriendo",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1200&q=80",
    alt: "Vista de ciudad junto al agua",
  },
] as const;

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a href="#inicio" aria-label="Ir al inicio" className="brand">
            <span className="brand-name">AMARANTA</span>
            <span className="kicker" style={{ letterSpacing: "0.18em" }}>
              Coach
            </span>
          </a>

          <nav className="nav" aria-label="Navegación">
            <a href="#inicio">Home</a>
            <a href="#coaching">Coaching</a>
            <a href="#libro">Libro</a>
            <a href="#quien-soy">¿Quién soy?</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main id="contenido">        {/* HERO */}
        <section id="inicio" className="hero-full" aria-label="Portada">
          <div className="hero-bg">
            <Image
              src="/images/AMI-090.jpg"
              alt="Amaranta Gómez Salgado"
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "85% 20%", transform: "scale(0.85)" }}
              priority
            />
            <div className="hero-overlay" />
          </div>
          <div className="container">
            <div className="hero-content" style={{ paddingLeft: "0", paddingTop: "460px", marginLeft: "-400px" }}>
              <h1 className="h2" style={{ fontSize: 72, lineHeight: 0.95, fontWeight: 700, color: "#ffffff" }}>
                Crea la vida profesional y personal que tanto deseas.
              </h1>
              <p style={{ maxWidth: 600, fontSize: 22, lineHeight: 1.85, color: "#ffffff", opacity: 0.95 }}>
                Te acompaño a crearlo con claridad, intención y acción.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
                <a className="btn btn-primary" href="#contacto">
                  Empieza tu reinvención
                </a>
              </div>
            </div>
          </div>
        </section>        {/* QUOTE AMARANTA */}
        <section className="section" aria-label="Quote" style={{ paddingTop: "100px" }}>
          <div className="container">
            <div className="stack" style={{ maxWidth: 920, textAlign: "center", margin: "0 auto" }}>
              <p className="kicker" style={{ color: "#AE887B" }}>Amaranta Gómez Salgado</p>
              <blockquote style={{ margin: 0, fontSize: 38, lineHeight: 1.65, fontStyle: "italic", color: "#AE887B", position: "relative", zIndex: 2 }}>
                "El coaching es un atajo para alcanzar lo que deseas. Aporta claridad en los momentos de duda, transforma
                la inspiración y la motivación en resultados. Todos podemos crear la vida que deseamos; solo necesitamos
                tomar acción. Y es más fácil hacerlo acompañado que hacerlo solo."
              </blockquote>
              <div style={{ marginTop: -40, display: "flex", justifyContent: "center", position: "relative", zIndex: 1 }}>
                <Image
                  src="/images/firma.jpeg"
                  alt="Firma de Amaranta"
                  width={600} height={240}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* HISTORIA BREVE */}
        <section id="quien-soy" className="section" aria-label="Historia">
          <div className="container">
            <div className="split">
              <div className="stack" style={{ textAlign: "justify" }}>
                <h2 className="h2">Mi camino</h2>
                <p className="muted">
                  Durante años construí una carrera exitosa en el mundo corporativo, liderando equipos y proyectos en
                  distintos países, y convirtiéndome en la primera mujer en liderar toda una región.
                </p>
                <p className="muted">
                  Desde fuera, todo parecía perfecto. Por dentro, sabía que algo faltaba.
                </p>
                <p className="muted">
                  Un día me atreví a renunciar para ir por lo que realmente anhelaba. Esa decisión me llevó a redefinir mi
                  identidad en todos los sentidos: empezar de nuevo en un país desconocido, cambiar de carrera, volver a
                  estudiar y construir un negocio propio.
                </p>
                <p className="muted">
                  En ese proceso entendí que los sueños no se logran solo con motivación, sino con claridad, estructura y
                  acompañamiento.
                </p>
                <p className="muted">
                  Hoy acompaño a mujeres a crear la vida profesional y personal que desean, con un plan y acción real.
                </p>
              </div>
              <div className="stack" style={{ gap: 10 }}>
                <div className="gallery-item gallery-item--tall" style={{ minHeight: 520 }}>
                  <Image
                    src="/images/AMI-221.jpg"
                    alt="Amaranta Gómez Salgado"
                    fill
                    sizes="(max-width: 980px) 100vw, 520px"
                    style={{ objectFit: "cover", objectPosition: "center 30%" }}
                  />
                </div>
                </div>
            </div>
          </div>
        </section>        {/* ¿PARA QUIÉN ES ESTE COACHING? */}
        <section className="section-tight" aria-label="Para quién">
          <div className="container">
            <div className="stack" style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="h2" style={{ fontSize: 48, lineHeight: 1.0 }}>
                Para quién es el coaching
              </h2>
              <p className="kicker" style={{ color: "#AE887B" }}>Es para ti si…</p>
            </div>
            
            <div className="coaching-grid">
              {[
                "Quieres abrir un negocio, crecer en tu trabajo o redefinir tu camino profesional.",
                "Tienes un sueño o una idea que quieres llevar a la realidad.",
                "Sabes que hay una versión diferente de ti, pero no tienes claridad de cómo construirla.",
                "Ya no te sientes cómoda con tu vida actual, aunque desde fuera todo funcione.",
                "Sientes que hay algo más para ti y quieres empezar a explorarlo.",
                "Lo has intentado antes, pero la inseguridad o la duda te hicieron detenerte.",
                "Quieres hacer un cambio real en tu vida, profesional o personal, y estás lista para actuar.",
              ].map((item, index) => (
                <div key={item} className="coaching-item">
                  <div className="coaching-number">{index + 1}</div>
                  <p style={{ fontSize: 17, lineHeight: 1.8, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            
            <div style={{ textAlign: "center", marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(120, 122, 91, 0.18)" }}>
              <p style={{ fontSize: 24, lineHeight: 1.75, opacity: 0.92, margin: "0 auto", whiteSpace: "nowrap" }}>
                Si sabes que quieres un cambio, <span className="decorative-line">este acompañamiento es para ti.</span>
              </p>
            </div>
          </div>
        </section>        {/* ¿CÓMO FUNCIONA EL COACHING? */}
        <section id="coaching" className="section" aria-label="Cómo funciona">
          <div className="container">
            <div className="stack" style={{ textAlign: "center", marginBottom: 64 }}>
              <p className="kicker" style={{ color: "#AE887B" }}>Cómo funciona el coaching</p>
              <h2 className="h2" style={{ fontSize: 48, lineHeight: 1.0 }}>El proceso en 5 pasos</h2>
            </div>
            
            <div className="process-flow">
              {[
                {
                  step: "1",
                  title: "Claridad",
                  body: "Entendemos dónde estás hoy y definimos un objetivo claro y realista alineado con lo que quieres construir.",
                },
                {
                  step: "2",
                  title: "Recursos",
                  body: "Revisamos los recursos que ya tienes y identificamos los que necesitas adquirir para avanzar con seguridad.",
                },
                {
                  step: "3",
                  title: "Bloqueos y creencias",
                  body: "Identificamos y trabajamos sobre los bloqueos y creencias que te frenan.",
                },
                {
                  step: "4",
                  title: "Plan",
                  body: "Traducimos ese objetivo en un plan concreto con prioridades, decisiones y acciones claras.",
                },
                {
                  step: "5",
                  title: "Acción acompañada",
                  body: "Te acompaño durante el proceso para que avances con enfoque y sostengas la motivación.",
                },
              ].map((item, index) => (
                <div key={item.step} className="process-step">
                  <div className="process-step-number">{item.step}</div>
                  <div className="process-step-content">
                    <h3 className="h3" style={{ fontSize: 24, marginBottom: 12 }}>{item.title}</h3>
                    <p className="muted" style={{ fontSize: 17, lineHeight: 1.8 }}>{item.body}</p>
                  </div>
                  {index < 4 && <div className="process-connector"></div>}
                </div>
              ))}
            </div>
            
            <div style={{ textAlign: "center", marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(120, 122, 91, 0.18)" }}>
              <p style={{ fontSize: 20, lineHeight: 1.75, opacity: 0.92, maxWidth: 720, margin: "0 auto" }}>
                El cambio se construye con claridad, recursos, trabajo interno, plan y acción.
              </p>
            </div>
          </div>
        </section>        {/* PROGRAMAS Y SERVICIOS */}
        <section className="section-tight" aria-label="Programas">
          <div className="container">
            <div className="stack" style={{ textAlign: "center", marginBottom: 64 }}>
              <p className="kicker" style={{ color: "#AE887B" }}>Programas y servicios</p>
              <h2 className="h2" style={{ fontSize: 48, lineHeight: 1.0 }}>Acompañamiento que se adapta a ti</h2>
            </div>
            
            <div className="programs-grid">
              {[
                {
                  title: "Programa Crecimiento Ejecutivo",
                  desc: "Para mujeres que quieren crecer en su trabajo, liderar con claridad y tomar decisiones estratégicas en su carrera.",
                  link: "#coaching",
                  linkText: "Conocer el programa",
                },
                {
                  title: "Programa Camino Emprendedor",
                  desc: "Emprender no es fácil. Requiere constancia, dedicación, estructura y motivación. Este programa te acompaña para construirlo con claridad y sostén.",
                  link: "#coaching",
                  linkText: "Explorar el programa",
                },
                {
                  title: "Diseña tu Vida",
                  desc: "Un proceso para tomar dirección de tu vida, alinear tus prioridades y tu tiempo, y caminar hacia lo que realmente amas.",
                  link: "#contacto",
                  linkText: "Diseñar mi vida",
                },
                {
                  title: "Coaching One on One",
                  desc: "Acompañamiento individual, personalizado y en vivo. Disponible en línea o de manera presencial.",
                  link: "#contacto",
                  linkText: "Conocer el coaching 1:1",
                },
                {
                  title: "Coaching Grupal",
                  desc: "Procesos guiados para avanzar acompañada, compartir experiencias y sostener el cambio. Disponible en línea o de manera presencial.",
                  link: "#contacto",
                  linkText: "Ver programas grupales",
                },
              ].map((item, index) => (
                <div key={item.title} className="program-card">
                  <div className="program-card-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="program-card-content">
                    <h3 className="h3" style={{ fontSize: 24, marginBottom: 16 }}>{item.title}</h3>
                    <p className="muted" style={{ fontSize: 17, lineHeight: 1.8, marginBottom: 20 }}>
                      {item.desc}
                    </p>
                    <a href={item.link} className="program-card-link">
                      {item.linkText} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LIBRO */}
        <section id="libro" className="section" aria-label="Libro">
          <div className="container">
            <div className="split">
              <div className="stack">
                <p className="kicker">Libro</p>
                <h2 className="h2">Una guía para pasar los cambios que la vida trae.</h2>
                <p className="muted" style={{ textAlign: "justify" }}>
                  Los cambios son constantes. Algunos los elegimos y otros nos llegan sorpresivamente. El miedo nos paraliza, pero ¿qué es lo peor que puede pasar? Y si pasa, no pasa nada es una guía que te acompaña con herramientas para superar los cambios y llegar a donde quieras llegar. Amaranta empezó este libro como herramienta personal para superar adversidades, y el resultado fue tan significativo que decidió compartirlo.
                </p>
                <a className="btn btn-primary" href="https://www.amazon.com.mx/pasa-nada-Desarrollo-resiliencia-transformaci%C3%B3n/dp/6074577986/ref=sr_1_1?crid=12WSB8YKSV1T0&dib=eyJ2IjoiMSJ9.KEPhh553JEwLfuXfl6ltSQAtPMfeSJVu1_U0JetViBlTIjRlyaiQdls3zn7apENFOHOzlmim7KiKnuFlGb-_MkHacvUm3PoxIx88-9_Ikig7cC_-1RUzqZDIqU8f5eBTSLYjTrCcgbMKIzMhe1QK-e-Xghuu5pwDuCcCGjsbQnZ_FRDT70ULj_mAZeQd58mmVUnUKODObRL7okq-TLgOPIbZWli0vZKEVikMLAo-7JrHA9bw2-g02FISmuyfo8GtpTozvsDNN-AzNASUqcvYEZIZWe9sqXoC6yDw3RzoKCk.ZQ0RO1WuosjpoJTzCtEWlOyl3KGwsFbVxzqntDnpsUk&dib_tag=se&keywords=y+si+pasa+no+pasa+nada&qid=1766422459&sprefix=si+pasa+no+pasa%2Caps%2C412&sr=8-1&ufe=app_do%3Aamzn1.fos.de93fa6a-174c-4df7-be7c-5bc8e9c5a71b" target="_blank" rel="noopener noreferrer" style={{ marginTop: 8, width: "fit-content" }}>
                  Comprar libro
                </a>
              </div>
              <div className="stack" style={{ gap: 10 }}>
                <div className="gallery-item gallery-item--tall" style={{ minHeight: 520 }}>
                  <Image
                    src="/images/libro.jpeg"
                    alt="Portada del libro"
                    fill
                    sizes="(max-width: 980px) 100vw, 520px"
                    style={{ objectFit: "cover", objectPosition: "50% 20%" }}
                  />
                </div>
                </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta" aria-label="Llamado a la acción">
          <div className="container">
            <div className="cta-inner">
              <p className="kicker">Empezar</p>
              <h2 className="cta-title">Empieza tu reinvención.</h2>
              <p className="muted" style={{ maxWidth: 820 }}>
                Sin promesas exageradas. Sin presión. Un espacio para ordenar lo que hoy pesa y encontrar claridad.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
                <a className="btn btn-primary" href="#contacto">
                  Agenda una sesión
                </a>
                <a className="btn btn-secondary" href="#coaching">
                  Ver programas
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contacto" className="section" aria-label="Contacto">
          <div className="container">
            <div className="stack" style={{ textAlign: "center", marginBottom: 48 }}>
              <p className="kicker" style={{ color: "#AE887B" }}>Contacto</p>
              <h2 className="h2" style={{ fontSize: 48, lineHeight: 1.0 }}>Escríbeme</h2>
              <p className="muted" style={{ maxWidth: 640, margin: "0 auto", fontSize: 18 }}>
                Cuéntame lo esencial. Te responderé con calma y claridad.
              </p>
            </div>
            <div style={{ marginTop: 32 }}>
              <ContactForm />
            </div>
            <p style={{ fontSize: 13, opacity: 0.7, marginTop: 20, textAlign: "center" }}>
              Gracias por confiar. Si hoy no puedes explicarlo todo, está bien.
            </p>
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
