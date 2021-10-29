export default function getMassive(character) {
  const result = [];
  let addProp = {};
  for (let i = 0; i < character.special.length; i += 1) {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = character.special[i];
    addProp = {
      id, name, description, icon,
    };
    result.push(addProp);
  }
  return result;
}
