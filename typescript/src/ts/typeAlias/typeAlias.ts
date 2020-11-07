// Estamos repetindo a tipagem de uid, podemos criar um type para resolver
type typeUid = number | string;

// -------------------------------------------------- //
function logDetails(uid: typeUid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}`)
}
logDetails(123, 'sapado');
logDetails('123', 'sapado');

// -------------------------------------------------- //
function logInfo(uid: typeUid, item: string) {
  console.log(`An user with ${uid} has a name as ${item}`);
}
logInfo(123, 'Carl');
logInfo('123', 'Self');

// -------------------------------------------------- //
type stars = 'Sun' | 'Sirius' | 'Antares';

function renderStars(star: stars) {
  return star;
}
console.log(renderStars("Sirius"));
