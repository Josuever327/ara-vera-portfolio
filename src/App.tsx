import { useEffect, useState } from 'react'
import './App.css'
import { perfil, contacto, content as t, ui } from './data'

// Enlaces que funcionan sin cliente de correo instalado:
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contacto.email}` +
  `&su=${encodeURIComponent('Contacto desde tu portfolio')}`
const waUrl = `https://wa.me/${contacto.whatsapp}` +
  `?text=${encodeURIComponent('Hola Arami, vi tu portfolio y me gustaría contactarte.')}`

const withBase = (file: string) =>
  file.startsWith('http') ? file : import.meta.env.BASE_URL + file
const fotoSrc = perfil.fotoUrl ? withBase(perfil.fotoUrl) : ''
const cvSrc = perfil.cvUrl ? withBase(perfil.cvUrl) : ''

// Íconos de línea (usan currentColor), al estilo de los íconos del CV
const Icon = ({ children }: { children: React.ReactNode }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
)
const icons = {
  user: <Icon><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></Icon>,
  briefcase: <Icon><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></Icon>,
  book: <Icon><path d="M2 5h6a4 4 0 0 1 4 4v11a3 3 0 0 0-3-3H2zM22 5h-6a4 4 0 0 0-4 4v11a3 3 0 0 1 3-3h7z" /></Icon>,
  chart: <Icon><path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 5-6" /></Icon>,
  cap: <Icon><path d="M22 9 12 4 2 9l10 5 10-5z" /><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" /></Icon>,
  mail: <Icon><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Icon>,
}

const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)
const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
)

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  useEffect(() => {
    setTheme((localStorage.getItem('theme') as 'dark' | 'light') || 'light')
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <Nav theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Courses />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function SectionHead({ icon, k, title }: { icon: React.ReactNode; k: string; title: string }) {
  return (
    <div className="section-head">
      <div className="section-icon">{icon}</div>
      <div>
        <div className="section-kicker">{k}</div>
        <h2 className="section-title">{title}</h2>
      </div>
    </div>
  )
}

function Nav({ theme, onToggleTheme }: { theme: string; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const links = [
    ['#about', ui.nav.about],
    ['#experience', ui.nav.experience],
    ['#courses', ui.nav.courses],
    ['#skills', ui.nav.skills],
    ['#education', ui.nav.education],
    ['#contact', ui.nav.contact],
  ]
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" onClick={close}>{perfil.nombreCorto}</a>
        <div className="nav-right">
          <div className={`nav-links ${open ? 'open' : ''}`}>
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={close}>{label}</a>
            ))}
          </div>
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Cambiar tema">
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
          <button className="nav-burger" onClick={() => setOpen((o) => !o)} aria-label="Menú" aria-expanded={open}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const { linkedin } = contacto
  return (
    <header id="top" className="hero">
      <div className="container hero-grid">
        <div className={`hero-monogram ${fotoSrc ? 'has-photo' : ''}`}>
          {fotoSrc ? <img src={fotoSrc} alt={perfil.nombre} /> : perfil.iniciales}
        </div>
        <div>
          <div className="hero-badge"><span className="dot" />{t.disponibilidad}</div>
          <h1 className="hero-name">{perfil.nombre}</h1>
          <p className="hero-role">{t.rol}</p>
          <div className="hero-rule" />
          <p className="hero-summary">{t.resumen}</p>
          <div className="hero-meta">
            <span>{t.ubicacion}</span>
            <a href={gmailUrl} target="_blank" rel="noreferrer">{contacto.email}</a>
            <a href={waUrl} target="_blank" rel="noreferrer">WhatsApp</a>
            {linkedin && <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href={gmailUrl} target="_blank" rel="noreferrer">{ui.actions.contact}</a>
            <a className="btn" href="#experience">{ui.actions.experience}</a>
            {cvSrc && <a className="btn" href={cvSrc} target="_blank" rel="noreferrer" download>{ui.actions.downloadCv}</a>}
          </div>
        </div>
      </div>
    </header>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead icon={icons.user} k={ui.sections.about.k} title={ui.sections.about.t} />
        <div className="about-text">
          {t.sobreMi.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="two-col" style={{ marginTop: 36 }}>
          <div>
            <div className="mini-title">{ui.labels.valores}</div>
            <ul className="soft-list">
              {t.valores.map((v) => <li key={v}>{v}</li>)}
            </ul>
          </div>
          <div>
            <div className="mini-title">{ui.labels.reconocimientos}</div>
            <ul className="soft-list">
              {t.reconocimientos.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead icon={icons.briefcase} k={ui.sections.experience.k} title={ui.sections.experience.t} />
        {t.experiencia.map((e, i) => (
          <div className="exp-item" key={i}>
            <div className="exp-periodo">{e.periodo}</div>
            <div>
              <div className="exp-puesto">{e.puesto}</div>
              <div className="exp-empresa">{e.empresa}</div>
              <ul className="exp-detalles">
                {e.detalles.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Courses() {
  return (
    <section id="courses" className="section">
      <div className="container">
        <SectionHead icon={icons.book} k={ui.sections.courses.k} title={ui.sections.courses.t} />
        {t.cursos.map((c, i) => (
          <div className="list-row" key={i}>
            <div>
              <div className="list-main">{c.titulo}</div>
              <div className="list-sub">{c.emisor}</div>
            </div>
            <div className="list-right">
              <div className="list-meta">{c.fecha}</div>
              {c.link && <a className="list-link" href={c.link} target="_blank" rel="noreferrer">{ui.labels.ver}</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead icon={icons.chart} k={ui.sections.skills.k} title={ui.sections.skills.t} />
        <div className="grid grid-2">
          {t.skills.map((g) => (
            <div className="card" key={g.categoria}>
              <div className="skill-cat">{g.categoria}</div>
              <div className="skill-list">
                {g.items.map((s) => <span className="chip" key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHead icon={icons.cap} k={ui.sections.education.k} title={ui.sections.education.t} />
        {t.educacion.map((ed, i) => (
          <div className="list-row" key={i}>
            <div>
              <div className="list-main">{ed.titulo}</div>
              <div className="list-sub">{ed.institucion}</div>
              <div className="list-note">{ed.periodo}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const { linkedin } = contacto
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHead icon={icons.mail} k={ui.sections.contact.k} title={ui.sections.contact.t} />
        <p style={{ color: 'var(--text-soft)', maxWidth: 560, marginBottom: 18 }}>
          {ui.labels.contactText}
        </p>
        <div className="contact-data">
          <span>Celular: {contacto.telefono}</span>
          <span>Correo: {contacto.email}</span>
          <span>{t.ubicacion}</span>
        </div>
        <div className="contact-links">
          <a className="btn btn-primary" href={gmailUrl} target="_blank" rel="noreferrer">{ui.labels.sendEmail}</a>
          <a className="btn" href={waUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          {linkedin && <a className="btn" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          {cvSrc && <a className="btn" href={cvSrc} target="_blank" rel="noreferrer" download>{ui.actions.downloadCv}</a>}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {perfil.nombre}</span>
        <span>{ui.labels.footer}</span>
      </div>
    </footer>
  )
}
