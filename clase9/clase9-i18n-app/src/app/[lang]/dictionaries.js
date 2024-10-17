import "server-only";

const dictionaries = {
    'en': () => ({
        title: 'Welcome',
        descripiton: 'This is an example of multilanguage with Next.js',
        links: {aboutUs: 'About us',index: 'Index'},
        example: "This is an example using this languahe"
    }),
    'es': () => ({
        title: 'Bienvenido',
        descripiton: 'Este es un ejemplo de multilenguaje con Next.js',
        links: {aboutUs: 'Sobre nosotros',index: 'Inicio'},
        example: "Este es un ejemplo usando este idioma"
    }),
    'de': () => ({
        title: "Wilkommen",
        descripiton: "Dies ist ein Beispiel für mehrsprachig mit Next.js",
        links: {aboutUs: "Über uns",index: "Zurück"},
        example: "Das ist in dieser Sprache"
    }),
    'fr': () => ({
        title: "Bienvenue",
        descripiton: "C'est un exemple de multilingue avec Next.js",
        links: {aboutUs: "À propos de nous",index: "Index"},
        example: "C'est un exemple utilisant cette langue"
    }),
    'it': () => ({
        title: "Benvenuto",
        descripiton: "Questo è un esempio di multilingua con Next.js",
        links: {aboutUs: "Chi siamo",index: "Indice"},
        example: "Questo è un esempio usando questa lingua"
    }),
}

export const getDictionary = async(locale) => dictionaries[locale]();