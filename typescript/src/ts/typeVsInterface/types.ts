/* -------------------------------------------- */
/* Type Alias
/* -------------------------------------------- */
/** definição */
type GameT = {
  title: string;
}
type DLCT = {
  extra: string;
}

/** Intersection */
type GameCollectionT = GameT & DLCT & { content: number };

/** Implements */
class CreateGameT implements GameCollection {
  title!: string;
  extra!: string;
}

/** funções */
type getSimilarsT = (title: string) => void


/* -------------------- Diferenças -------------------- */
// declarar tipos primitivos
type movie = string | number

// declarar tuplas
type tuple = [number, string];
[1, "hello"] as tuple;

// só permite declarar um type por escopo

type HTTP = {
  get: string,
  post: string
}
/*
type HTTP = {
  get: string,
  post: string
} Duplicate identifier 'HTTP'
*/

/* Quando usar? */
// funcional
// React => props
// Consistência
