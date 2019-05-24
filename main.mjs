import Grid from './Classes/Grid.mjs';
import Vector from './Classes/Vector.mjs';
import directions from './Enums/directionsEnum.mjs';

function randomElement (array) {
  return array[Math.floor (Math.random () * array.length)];
}

var directionNames = 'n ne e se s sw w nw'.split (' ');
console.log (randomElement (directionNames));
