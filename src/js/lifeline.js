// const player = { name: 'Маг', health: 90 };

export default function lifeLine(life) {
  let result = '';

  if (life.health > 50) {
    result = 'healthy';
  }
  if (life.health <= 50 && life.health >= 15) {
    result = 'wounded';
  }
  if (life.health < 15) {
    result = 'critical';
  }
  console.log(result);
  return result;
}
