import lifeLine from './lifeline';
import sort from './matchers';

console.log('app worked');

const player = { name: 'Маг', health: 90 };
lifeLine(player);

const players = [
  { name: 'мечник', health: 100 },
  { name: 'маг', health: 10 },
  { name: 'лучник', health: 60 },
];
sort(players);
