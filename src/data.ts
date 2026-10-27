// ============================================================================
//  CONTENIDO DEL PORTFOLIO — María Arami Vera Vargas
//  Editá los textos acá. Datos de perfil y contacto arriba; el resto abajo.
// ============================================================================

// ---- Datos de perfil / contacto ----
export const perfil = {
  nombre: 'María Arami Vera Vargas',
  nombreCorto: 'Arami Vera',
  iniciales: 'AV',
  fotoUrl: 'foto.jpg',          // archivo en public/ (o URL http completa)
  cvUrl: 'CV_Arami_Vera.pdf',   // archivo en public/
}

export const contacto = {
  email: 'arami.vera997@gmail.com',
  telefono: '(0982) 215 231',
  whatsapp: '595982215231',
  linkedin: '',                 // completar si tiene perfil
}

// ---- Estructura del contenido ----
interface Skill { categoria: string; items: string[] }
interface Exp { puesto: string; empresa: string; periodo: string; detalles: string[] }
interface Curso { titulo: string; emisor: string; fecha: string; link?: string }
interface Edu { titulo: string; institucion: string; periodo: string }

interface Content {
  rol: string
  ubicacion: string
  disponibilidad: string
  resumen: string
  sobreMi: string[]
  valores: string[]
  reconocimientos: string[]
  skills: Skill[]
  experiencia: Exp[]
  cursos: Curso[]
  educacion: Edu[]
}

export const content: Content = {
  rol: 'Contadora Pública',
  ubicacion: 'Nueva Italia, Paraguay',
  disponibilidad: 'Disponible para nuevas oportunidades',
  resumen:
    'Contadora Pública egresada con honores académicos de la Universidad Nacional de ' +
    'Asunción, con experiencia en atención al cliente, manejo de caja y gestión ' +
    'administrativa, y formación complementaria en tributación y planillas electrónicas.',
  sobreMi: [
    'Soy Contadora Pública egresada de la Universidad Nacional de Asunción (2022), donde me ' +
      'gradué con honores académicos. A lo largo de mi formación complementé la carrera con ' +
      'talleres, conferencias y webinars sobre tributación, información financiera, ' +
      'emprendedurismo e inversiones.',
    'Cuento con experiencia en atención al cliente, apertura y cierre de caja, recepción de ' +
      'proveedores y tareas administrativas como mesa de entradas y organización de archivos, ' +
      'tanto en el sector comercial como en el cooperativo.',
    'Mis objetivos laborales y personales son desempeñarme con responsabilidad, honestidad y ' +
      'eficiencia en el cargo que se me asigne, para coadyuvar al desarrollo de la entidad y que ' +
      'la actividad contribuya a mi desarrollo personal e intelectual.',
  ],
  valores: [
    'Responsabilidad',
    'Honestidad',
    'Eficiencia',
    'Atención y trato al cliente',
    'Orden y organización',
  ],
  reconocimientos: [
    'Graduada con honores académicos — UNA, 2022',
    'Diploma Alumna Distinguida — Colegio María Auxiliadora, 2015',
  ],
  skills: [
    { categoria: 'Contabilidad y finanzas', items: ['Contabilidad general', 'Información financiera', 'Planillas electrónicas'] },
    { categoria: 'Tributación', items: ['IVA', 'IRP', 'IRAGRO', 'IRACIS'] },
    { categoria: 'Gestión administrativa', items: ['Apertura y cierre de caja', 'Recepción de proveedores', 'Mesa de entradas', 'Organización de archivos'] },
    { categoria: 'Atención al cliente', items: ['Atención al público', 'Recepción de llamadas', 'Comunicación'] },
  ],
  experiencia: [
    {
      puesto: 'Cajera',
      empresa: 'Carnicería El Rodeo — Villeta',
      periodo: '',
      detalles: [
        'Apertura y cierre de caja.',
        'Recepción de llamadas.',
        'Recepción de proveedores.',
      ],
    },
    {
      puesto: 'Pasantía laboral',
      empresa: 'Cooperativa Credivill Ltda.',
      periodo: '07/2021 — 10/2021',
      detalles: [
        'Atención al cliente.',
        'Recepción de llamadas.',
        'Asistencia a mesa de entradas.',
        'Organización de archivos.',
      ],
    },
  ],
  cursos: [
    { titulo: 'Elaboración y manejo de planilla electrónica', emisor: 'SNPP', fecha: '2020' },
    {
      titulo: 'Taller: IVA, IRP, IRAGRO e IRACIS',
      emisor: 'Impuesto al Valor Agregado, a la Renta Personal, a las Actividades Agropecuarias y Comercial, Industrial y de Servicios',
      fecha: '2019',
    },
    { titulo: 'Conectando ideas y Desarrollo de Actitudes Emprendedoras', emisor: 'Conferencia Internacional', fecha: '2019' },
    { titulo: 'Innovación Educativa. Nuevos Retos hacia una educación de excelencia', emisor: 'Congreso Regional Internacional', fecha: '2020' },
    { titulo: 'Semana Mundial de Inversionistas 2021', emisor: 'Conferencia', fecha: '2021' },
    { titulo: 'Innovación Educativa. Nuevos Retos hacia una educación de excelencia', emisor: 'Conferencia Regional Internacional', fecha: '2021' },
    { titulo: 'El Rol del Contador en la Información Financiera durante la Pandemia del COVID-19', emisor: 'Webinar', fecha: '2021' },
  ],
  educacion: [
    {
      titulo: 'Contadora Pública',
      institucion: 'Universidad Nacional de Asunción',
      periodo: '2022 · Graduada con honores académicos',
    },
    {
      titulo: 'Bachiller Científico con énfasis en Ciencias Sociales',
      institucion: 'Colegio Privado María Auxiliadora',
      periodo: 'Diploma Alumna Distinguida, 2015',
    },
  ],
}

export const ui = {
  nav: { about: 'Perfil', experience: 'Experiencia', courses: 'Formación', skills: 'Habilidades', education: 'Educación', contact: 'Contacto' },
  actions: { contact: 'Contactar', experience: 'Ver experiencia', downloadCv: 'Descargar CV' },
  sections: {
    about: { k: '01 · Perfil', t: 'Sobre mí' },
    experience: { k: '02 · Trayectoria', t: 'Experiencia laboral' },
    courses: { k: '03 · Formación continua', t: 'Cursos y certificaciones' },
    skills: { k: '04 · Conocimientos', t: 'Habilidades' },
    education: { k: '05 · Académico', t: 'Educación' },
    contact: { k: '06 · Contacto', t: 'Hablemos' },
  },
  labels: {
    ver: 'Ver ↗', valores: 'Valores', reconocimientos: 'Reconocimientos', sendEmail: 'Enviar correo',
    contactText: 'Estoy disponible para nuevas oportunidades laborales. Escribime por correo o WhatsApp y te respondo a la brevedad.',
    footer: 'Contadora Pública · Paraguay',
  },
}
