 const dictionaries = {
    en: {
      title: 'Page about the PokeApi - JLS',
      inicio: 'Home',
      generaciones: 'Generations',
    },
    es: {
      title: 'Página sobre la PokeApi - JLS',
      inicio: 'Inicio',
      generaciones: 'Generaciones',
    },
    fr: {
        title: 'Page sur le PokeApi - JLS',
        inicio: 'Commencer',
        generaciones: 'Générations',
      }
   }
  export const getDictionary = (lang) => dictionaries[lang ]