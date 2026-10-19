export const site = {
  name: "Simplestock",
  tagline: "Control de stock simple, privado y sin conexión",
  description:
    "Simplestock es la app de control de stock para pequeños negocios. Crea productos, registra surtidos y ventas desde tu teléfono: 100% local, privada y sin conexión a internet.",

  github: "https://github.com/Emcahell/simplestock",
  issues: "https://github.com/Emcahell/simplestock/issues",
  appStore: "https://apps.apple.com/app/simplestock",
  playStore: "https://play.google.com/store/apps/details?id=com.simplestock",
  androidApk:
    "https://github.com/Emcahell/simplestock/releases/latest/download/simplestock.apk",
  contactEmail: "https://github.com/Emcahell/simplestock/issues",

  owner: "Simplestock",
  country: "Chile",

  // Placeholders used inside the `legal/` markdown documents.
  placeholders: {
    REPOSITORIO_URL: "https://github.com/Emcahell/simplestock",
    CORREO_CONTACTO: "https://github.com/Emcahell/simplestock/issues",
    TITULAR: "Simplestock",
    PAIS_O_JURISDICCION: "Chile",
    ULTIMA_ACTUALIZACION: "14 de octubre de 2026",
    NOMBRE_APP: "Simplestock",
  } as Record<string, string>,
};

export type Site = typeof site;
