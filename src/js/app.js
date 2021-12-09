// import validateUsername from './validationName';
import Character from './character';
import Team from './addPlayer';
import ErrorRepository from './errorRepository';

// task 1
const character = new Character('player1', 'Bowerman');
const character2 = new Character('player2', 'Bowerman');
const character3 = new Character('player3', 'Magician');
const character4 = new Character('player4', 'Friend');
const team = new Team();
team.add(character);
console.log(team);
team.add(character2);
// team.add(character2);
// console.log(team);
team.toArray();
console.log(team);

team.addAll(character, character2, character3, character4);
console.log(team);

// task 2
const error1 = new ErrorRepository(1, 'error 1');
console.log(error1.translate(1));
// console.log(error2.translate(2));
