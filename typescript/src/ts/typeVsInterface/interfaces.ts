/* -------------------------------------------- */
/* Interface
/* -------------------------------------------- */
/** Definição */
interface Game {
  title: string
}
interface DLC {
  extra: string;
}

/** Intersection */
interface GameCollection extends Game, DLC {}

/** Implements */
class CreateGame implements GameCollection {
  title!: string;
  extra!: string;
}

/** funções */
interface getSimilars {
  (title: string): void
}

/* -------------------- Diferenças -------------------- */
// não permite declarar tipos primitivos
// não permite declarar tuplas
// permite declar a mesma interface no mesmo bloco, no caso ele mergeia as interfaces, vantagem ao precisa extender a mesma

interface HTTPI {
  put: string,
  post: string
}

interface HTTPI {
  delete: string
}

const http: HTTPI = {
  put: "put",
  post: 'post',
  delete: "delete"
}

/* Quando usar? */
// POO
// extensivel => utilizável em libs
