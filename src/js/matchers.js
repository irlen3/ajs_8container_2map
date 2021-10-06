// const players = [
//     {name: 'мечник', health: 10},
//     {name: 'маг', health: 100},
//     {name: 'лучник', health: 80},
// ];

export default function sort(players) {
  const result = players;
  result.sort((a, b) => parseFloat(b.health) - parseFloat(a.health));

  return result;
}
