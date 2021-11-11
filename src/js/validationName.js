export default function validateUsername(name) {
//  function validateUsername(name) {
  // Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
  // Имя не должно содержать подряд более трёх цифр
  // Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире.
  const definiteSymbol = /^[\w-]+$/g.test(name);
  const beginSymbol = /^[A-Za-z]{1}[\w-]*$/g.test(name);
  const endSymbol = /^[\w-]*[A-Za-z]{1}$/g.test(name);
  const numbers = /\d{4,}/g.test(name);

  if (definiteSymbol && beginSymbol && endSymbol && !numbers) {
    return true;
  }
  return false;
}
