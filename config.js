/* CONFIGURACIÓN — TARJETA DIGITAL YALITH SALÓN
   Cambia solo lo que está entre comillas "..."
   No borres comas, comillas ni llaves.
   Si dejas algo vacío "", se muestra PENDIENTE DE CONFIGURAR. */

const CONFIG = {

  // Cuando termines de llenar todo, cambia true por false.
  mostrarAvisos: true,

  negocio: {
    nombre: "Yalith Salón",
    frase: "Belleza que se nota, atención que se recuerda.",
    ciudad: "Cancún, Quintana Roo",
    logo: "imagenes/logo.jpg",
    fotoPortada: ""
  },

  contacto: {
    // WhatsApp: código de país + número, solo dígitos. PENDIENTE DE CONFIGURAR
    whatsapp: "",
    // Teléfono para el botón Llamar. PENDIENTE DE CONFIGURAR
    telefono: "",
    // Instagram: solo el usuario, sin @. PENDIENTE DE CONFIGURAR
    instagram: "",
    // Facebook: enlace completo. PENDIENTE DE CONFIGURAR
    facebook: "",
    // Dirección como la escribirías en Google Maps. PENDIENTE DE CONFIGURAR
    direccion: "",
    // Opcional: enlace de Google Maps.
    mapsUrl: ""
  },

  mensajeWhatsApp: "Hola, vi su tarjeta digital y me gustaría conocer sus servicios y agendar una cita. 😊",

  // precio: déjalo "" para ocultarlo. Ejemplo: "$350"
  servicios: [
    { nombre: "Extensiones de pestañas", descripcion: "Mirada más definida y con volumen, a tu medida.", precio: "", foto: "" },
    { nombre: "Diseño de cejas", descripcion: "Forma, color y cuidado para enmarcar tu rostro.", precio: "", foto: "" },
    { nombre: "Uñas", descripcion: "Manos impecables con diseños y acabados duraderos.", precio: "", foto: "" },
    { nombre: "Faciales", descripcion: "Limpieza y cuidado de la piel para un rostro luminoso.", precio: "", foto: "" }
  ],

  // Fotos de trabajos reales. Ejemplo: "imagenes/trabajo-1.jpg",
  galeria: [
  ]
};
