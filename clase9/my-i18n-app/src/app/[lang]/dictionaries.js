import 'server-only';

const dictionaries = {
  'en': () => ({
    title: 'Welcome',
    description: 'This is an example of internationalization with Next.js.',
    links: { aboutUs: 'About Us' },
    example: "This is using this language",
    return: "Return to Home"
  }),
    'es': () => ({
        title: 'Bienvenido',
        description: 'Este es un ejemplo de internacionalización con Next.js.',
        links: { aboutUs: 'Sobre Nosotros' },
        example: "Esto está usando este idioma",
        return: "Volver al Inicio"
    }),
    'de': () => ({
        title: 'Willkommen',
        description: 'Dies ist ein Beispiel für Internationalisierung mit Next.js.',
        links: { aboutUs: 'Über uns' },
        example: "Das ist in dieser Sprache",
        return: "Zurück zur Startseite"
    })
};

export const getDictionary = async (locale) => dictionaries[locale]();
