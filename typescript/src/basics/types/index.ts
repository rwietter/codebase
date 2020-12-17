/* ---------------- Boolean ----------------- */
/* ------------------------------------------ */
let isOpen: boolean;
isOpen = false;

let message: string;
message = `foo ${isOpen}`;

/* --- Number ~ int, float, hex, binary ~ --- */
/* ------------------------------------------ */
let total: number;
total = 0xff0;

/* ------ Array ~ type and structure ~ ------ */
/* ------------------------------------------ */
let items: number[];
items = [1, 2, 3, 4, 5];

let array: Array<number>; // generic
array = [1, 2, 3, 4];

/* ------------------ Tuple ----------------- */
/* ------------------------------------------ */
let title: [number, string];
title = [1, 'foo'];

/* ------------------ Enum ------------------ */
/* ------------------------------------------ */
enum Colors {
  white = '#FFFF',
  black = '#000',
}

/* --------- Any ~ qualquer coisa ~ --------- */
/* ------------------------------------------ */
let random: any;
random = [1, 'foo', true];

/* ----------------- Void ------------------- */
/* ------------------------------------------ */
function logger(): void {
  console.log('foo');
}

/* ---- Null | Undefined => type alias  ----- */
/* ------------------------------------------ */
type mars = number | string;

/* ----------------- Never ------------------ */
/* ------------------------------------------ */
function error(): never {
  throw new Error('error');
}

/* ----------------- Object ----------------- */
/* ------------------------------------------ */
let cart: object;
cart = {
  planet: {
    mars: 'red',
    earth: 'blue',
  },
};
