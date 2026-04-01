import type { FAQPageContent } from "@/types/content";
import { getCalendlyUrl, getWhatsAppUrl } from "@/config/site.config";

const calendlyUrl = getCalendlyUrl("powerPalette");
const whatsappUrl = getWhatsAppUrl("es");

export const faqEsContent: FAQPageContent = {
  hero: {
    label: "FAQ",
    headline: "Preguntas que escuchamos seguido.",
    description: "Toque un tema para encontrar su respuesta. Si no está aquí, Lu siempre está a un mensaje de distancia.",
  },

  categories: [
    {
      id: "general", pillLabel: "General", count: 6, sectionLabel: "GENERAL", sectionTitle: "Sobre nuestro enfoque",
      items: [
        { question: "¿En qué se diferencia esto de contratar a una personal shopper?", answer: "<strong>Una personal shopper le ayuda a comprar ropa. Nosotros construimos un sistema de imagen completo.</strong> Cada recomendación está basada en análisis diagnóstico — colorimetría, arquitectura corporal, arquetipo de estilo — no en gustos personales. El resultado no es una bolsa de compras nuevas; es un sistema que usará por años." },
        { question: "¿Esto es solo para mujeres?", answer: "<strong>No.</strong> Trabajamos con profesionales de todos los géneros. La metodología — análisis de color, arquitectura corporal, identidad de estilo — aplica universalmente. Si desea una imagen profesional más intencional, podemos ayudarle." },
        { question: "¿Dónde se realizan las sesiones?", answer: "<strong>Las sesiones presenciales se realizan en el área de Miami</strong> — en su hogar para el trabajo de clóset, en tiendas seleccionadas para compras, y en un espacio profesional para análisis y fotos. Opciones virtuales están disponibles para el análisis de color inicial y las consultas." },
        { question: "Hablo español. ¿Podemos trabajar en español?", answer: "<strong>Por supuesto.</strong> Lu es hablante nativa de español, originaria de Colombia, y cada servicio está disponible completamente en español — desde la consulta inicial hasta todos los entregables. Nunca necesitará cambiar de idioma." },
        { question: "¿Qué pasa si no estoy segura de cuál servicio necesito?", answer: `<strong>Comience con Tu Paleta de Poder</strong> — un análisis de color de cortesía de 20 minutos. Es el punto de entrada a ambos servicios y le da a Lu todo lo necesario para recomendarle el camino correcto. <a href="${calendlyUrl}" target="_blank" rel="noopener noreferrer">Descubre tus colores →</a>` },
        { question: "¿Ofrecen planes de pago?", answer: `<strong>Estamos explorando opciones de pago flexibles.</strong> Contacte a Lu directamente para conversar sobre lo que funcione para su situación. <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Escríbele a Lu por WhatsApp →</a>` },
      ],
      crossLinks: { text: "¿Buscas algo específico?", links: [{ label: "Ocasiones", categoryId: "occasions" }, { label: "Consultoría de Imagen", categoryId: "image" }] },
    },
    {
      id: "occasions", pillLabel: "Ocasiones", count: 3, sectionLabel: "ESTILISMO DE OCASIÓN", sectionTitle: "Preparación para eventos",
      items: [
        { question: "¿Con cuánta anticipación debo reservar para un evento?", answer: `<strong>Idealmente 2–4 semanas antes de su evento.</strong> Esto nos da tiempo para la consulta, revisión de guardarropa y cualquier compra necesaria. Para VIP con acompañamiento el día del evento, recomendamos mínimo 3–4 semanas. ¿Tiene algo más pronto? <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Contáctenos</a> — haremos lo posible por acomodarlo.` },
        { question: "¿Qué pasa si no tengo nada en mi clóset para este evento?", answer: '<strong>Más común de lo que piensa — y no es un problema.</strong> El nivel Essential incluye curaduría virtual de piezas nuevas. Complete y VIP incluyen compras acompañadas presenciales donde Lu le ayuda a encontrar todo lo que necesita. <a href="/es/servicios/estilismo-de-ocasion">Ver los tres niveles →</a>' },
        { question: "¿Pueden ayudarme a rentar piezas en vez de comprarlas?", answer: "<strong>Sí.</strong> Si rentar tiene más sentido para su evento — particularmente para ocasiones únicas como una gala o boda formal — podemos incorporar opciones de renta de plataformas seleccionadas en su plan de estilismo." },
      ],
      crossLinks: { text: "¿Buscas algo más?", links: [{ label: "General", categoryId: "general" }, { label: "Consultoría de Imagen", categoryId: "image" }] },
    },
    {
      id: "image", pillLabel: "Consultoría de Imagen", count: 6, sectionLabel: "CONSULTORÍA DE IMAGEN", sectionTitle: "La transformación completa",
      items: [
        { question: "¿Cuánto dura el proceso completo?", answer: "<strong>De 4 a 6 sesiones en un período de 4 a 8 semanas, según su disponibilidad.</strong> Inversión total de tiempo: 20–24 horas de trabajo personalizado, más tiempo de creación de entregables." },
        { question: "¿Necesito comprar un guardarropa nuevo?", answer: "<strong>No.</strong> El Detox de Clóset está diseñado específicamente para maximizar lo que ya tiene. La mayoría de las clientas descubren que tienen más piezas utilizables de lo que pensaban. El componente de compras se enfoca solo en vacíos estratégicos — compra únicamente lo que realmente falta." },
        { question: "¿Qué pasa después de completar el proceso?", answer: "<strong>Recibe los siete entregables</strong> (tarjeta de paleta de color, perfil de estilo, guía de clóset, lista de compras, lookbook, fotos), más 7 días de soporte por WhatsApp donde Lu está disponible para consultas de outfits y chequeos de estilismo. Después, sus entregables funcionan como su sistema de referencia permanente." },
        { question: "¿Puedo hacer los componentes por separado?", answer: '<strong>El proceso está diseñado como un sistema completo</strong> — cada componente se construye sobre el anterior. El análisis de color informa el detox de clóset, que informa las compras, que alimenta el estilismo final y las fotos. Separarlos comprometería los resultados. Para algo más enfocado, <a href="/es/servicios/estilismo-de-ocasion">Estilismo de Ocasión</a> puede ser la opción ideal.' },
        { question: "¿Qué incluye la sesión de fotos?", answer: "<strong>Cada clienta recibe una sesión estilizada con iluminación profesional, dirigida y fotografiada por Lu</strong> — incluida en su inversión. Para imágenes de calidad premium, puede agregar una sesión de 3 horas con un fotógrafo profesional por $300 adicionales. Ambas opciones entregan imágenes listas para LinkedIn, redes sociales y perfiles profesionales." },
        { question: "¿Por qué el precio introductorio es diferente al estándar?", answer: "<strong>La tarifa introductoria de $1,500 está disponible por tiempo limitado</strong> mientras establecemos nuestra práctica en Miami. La tarifa estándar es $2,000. Las clientas que comienzan con la tarifa introductoria no se ven afectadas cuando cambie." },
      ],
      crossLinks: { text: "¿Buscas algo más?", links: [{ label: "General", categoryId: "general" }, { label: "Ocasiones", categoryId: "occasions" }] },
    },
  ],

  bottomCta: {
    heading: "¿No encontraste tu respuesta?",
    description: "Lu está encantada de ayudarte — o puedes empezar con una consulta de cortesía y preguntar todo en persona.",
    whatsappCta: { text: "PREGÚNTALE A LU", href: whatsappUrl, external: true },
    calendlyCta: { text: "CONSULTA GRATIS", href: calendlyUrl, external: true },
  },

  stickyBar: { text: "Análisis de color gratis", subtext: "· 20 min", href: calendlyUrl },

  seo: {
    title: "Preguntas Frecuentes — Consultoría de Imagen | Image by LUI",
    description: "Respuestas sobre consultoría de imagen, estilismo, precios y proceso. Cómo nos diferenciamos de una personal shopper. Miami, bilingüe.",
    ogImage: "/og/faq.jpg",
  },
};
