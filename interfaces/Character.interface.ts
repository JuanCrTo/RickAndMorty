export interface ICharacter {
  name: string; // El nombre del personaje
  episode: string[]; // Lista de episodios en los que el personaje aparece
  id?: number; // Es opcional, no siempre se necesita en todos los componentes
  origin: {
    name: string; // Lugar de origen del personaje, opcional
  };
  status: string; // El estado del personaje (vivo, muerto, etc.), opcional
  species: string; // La especie del personaje (humano, alien, etc.), opcional
  image: string;
  gender: string;
  location: {
    name: string; // La ubicación actual del personaje, opcional
  };
}

export interface IEpisode {
  id: number; // El identificador del episodio, obligatorio
  episode: string; // Código de episodio (por ejemplo: S01E01), obligatorio
  name: string; // El nombre del episodio, obligatorio
}

// export interface ICharacter {
//   name: string;
//   species: string;
//   image: string;
//   status: string;
//   gender: string;
//   origin: {
//     name: string;
//   };
//   location: {
//     name: string;
//   };
// }