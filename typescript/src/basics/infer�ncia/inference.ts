/* ------------ Inference Types ------------- */
/* ------------------------------------------ */
let msg = "Hello"
console.log("msg is: ", typeof msg) // msg is: string

// msg = 1
// console.log("msg", msg) // error TS2322: Type '1' is not assignable to type 'string'

/* ------------ Intellisense ---------------- */
/* ------------------------------------------ */
window.addEventListener('click', (e) => {
  console.log("e.target", e.target);
  // console.log(e.foo);
})
