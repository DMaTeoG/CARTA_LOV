import type { BirthdayContent } from "@/lib/types"; // Interfaz que valida la estructura del contenido

export const birthdayContent: BirthdayContent = { // Objeto principal con los datos demo
  theme: { palette: "auroraPastel" }, // Paleta neutra y luminosa
  typography: { title: "Playfair Display", body: "Inter" }, // Tipografias legibles y elegantes
  effects: { // Efectos visuales para la demo
    confetti: true,
    hearts: true,
    heartColor: "#f7709c",
    bokeh: true,
    polaroidsFloat: true,
  },
  typewriter: { // Configuracion del efecto de maquina
    speedMs: 50,
    startDelayMs: 800,
    soundClicks: true,
    endChime: true,
    liveLabel: "La carta demo se esta escribiendo",
    finishedLabel: "Carta demo terminada",
  },
  timeline: { // Recuerdos genericos para la demostracion
    variant: "scrapbook",
    ariaLabel: "Linea del tiempo demo",
    items: [
      {
        date: "10 de enero de 2024",
        title: "Primer boceto compartido",
        text: "Se definio la estructura base de la carta y se eligio una combinacion de colores apta para cualquier historia.",
        image: { url: "/demo/plan.jpg", alt: "Mesa de trabajo con apuntes" },
      },
      {
        date: "15 de marzo de 2024",
        title: "Sesion fotografica neutra",
        text: "Se tomaron imagenes genericas que los usuarios pueden reemplazar con sus propias fotos sin perder la composicion.",
        image: { url: "/demo/shoot.jpg", alt: "Camara fotografica sobre tripode" },
      },
      {
        date: "02 de julio de 2024",
        title: "Demo interna",
        text: "Un grupo piloto probo la experiencia completa para validar efectos, audio y rendimiento en distintos dispositivos.",
        image: { url: "/demo/presentacion.jpg", alt: "Personas probando la demo" },
      },
    ],
  },
  hero: { // Encabezado visible al cargar
    title: "Feliz cumple, Demo",
    emoji: ":)",
    emojiLabel: "Emoji sonriente",
    scrollCta: "Ver carta",
    scrollAriaLabel: "Ir a la carta de cumpleanos",
  },
  letter: { // Contenido principal del mensaje
    heading: "Una carta de muestra",
    body:
      "Esta carta demo muestra la estructura que puedes personalizar para celebrar a quien quieras.\n\n" +
      "Comparte anecdotas, metas y deseos usando saltos de linea para adaptar el tono.\n\n" +
      "Activa o desactiva secciones desde este archivo para construir versiones minimalistas o llenas de efectos.\n\n" +
      "Cuando estes listo, reemplaza nombres y detalles con tu historia real.",
    ariaLabel: "Carta de cumpleanos demo narrada como maquina de escribir",
  },
  photos: { // Fotos laterales de referencia
    left: [
      { url: "/demo/photos/1.jpg", alt: "Notas adhesivas de colores" },
      { url: "/demo/photos/2.jpg", alt: "Decoracion neutra con luces" },
      { url: "/demo/photos/3.jpg", alt: "Laptop mostrando la carta demo" },
    ],
    right: [
      { url: "/demo/photos/4.jpg", alt: "Cuaderno abierto con lapiceros" },
      { url: "/demo/photos/5.jpg", alt: "Equipo preparando la demo" },
      { url: "/demo/photos/6.jpg", alt: "Globos metalicos" },
    ],
  },
  memories: { // Mosaico de imagenes ejemplo
    heading: "Momentos favoritos (demo)",
    ariaLabel: "Galeria demo de recuerdos fotograficos",
    photos: [
      { url: "/demo/m1.jpg", alt: "Bodegon con pastel generico" },
      { url: "/demo/m2.jpg", alt: "Personas celebrando en oficina" },
      { url: "/demo/m3.jpg", alt: "Detalles de decoracion neutral" },
      { url: "/demo/m4.jpg", alt: "Carteles con mensajes genericos" },
      { url: "/demo/m5.jpg", alt: "Mesa con regalos sin marca" },
      { url: "/demo/m6.jpg", alt: "Luces colgantes" },
    ],
  },
  cta: { // Textos para los botones de compartir
    share: "Compartir",
    copyLabel: "Copiar enlace",
    copiedFeedback: "Enlace copiado",
    unavailable: "Compartir no disponible en este dispositivo",
  },
  footer: { note: "2025 Demo publica de la carta interactiva" },
  audio: { // Reproductor opcional
    src: "/audio/demo-track.mp3",
    playLabel: "Reproducir cancion demo",
    pauseLabel: "Pausar cancion demo",
    description: "Pista instrumental libre de derechos para demostracion",
  },
  sections: { // Interruptores visibles
    background: true,
    effects: true,
    hero: true,
    letter: true,
    photos: true,
    timeline: true,
    memories: true,
    audio: true,
    share: true,
    footer: true,
    loveMessage: true,
  },
  loveMessage: { // Mensaje neon
    text: "DEMO EN ACCION ",
    color: "#ff5f9e",
    repeatCount: 4,
  },
  accessibility: { reducedMotionRespect: true },
};
