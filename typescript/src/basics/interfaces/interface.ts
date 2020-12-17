/** conjunto de dados para descrever a estrutura de objetos */
/** a interface trabalha exclusivamente sob objetos */
/** podemos implementar classes a partir de interfaces de objetos */

interface Movies {
  id?: number | string;
  title: string;
  description: string;
  readonly genre: string; /** readonly torna o dado imutável */
  plataform?: string[]; /** optional chaining operator torna o dado opcional */
  getSimilars?: (title: string) => void; /* Assinatura do método */
}

const film: Movies = {
  title: "The Martian",
  description: "The Martian is a science fiction",
  genre: 'Science fiction',
  // plataform: ['Netflix', 'HBO', 'YouTube'],
  getSimilars: (title: string) => console.log(`${title} is a very good film!`)
}

if (film.getSimilars) {
  film.getSimilars(film.title) /** Type guards => certificar-se que a propriedade não é undefined */
}
// film.genre = '' /** Cannot assign to 'genre' because it is a read-only property. */


/* -------------------------------------------- */
/* Herança de Interfaces
/* -------------------------------------------- */
interface SpaceMovies extends Movies {
  LostOnMars: Movies;
  title: string;
  date?: number
}

const spaceFilm: SpaceMovies = {
  title: "Interstellar",
  description: `is a movie`,
  genre: 'and genre is Science fiction',
  LostOnMars: film,
  // getSimilars: (title: string) => console.log(`${title} is a very good film`)
}

const { title: Title, description, genre } = spaceFilm
console.log(Title, description, genre);

/* -------------------------------------------- */
/* Generate class at interface
/* -------------------------------------------- */
class CreateMovie implements Movies {
  title: string;
  description: string;
  genre: string;
  plataform?: string[] | undefined;
  getSimilars?: ((title: string) => void) | undefined;
  constructor(title: string, description: string, genre: string) {
    this.title = title;
    this.description = description;
    this.genre = genre;
  }
}
