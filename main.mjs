import Grid from './Classes/Grid.mjs';
import Vector from './Classes/Vector.mjs';
import directions from './Enums/directionsEnum.mjs';

function randomElement (array) {
  return array[Math.floor (Math.random () * array.length)];
}
var directionNames = Object.keys (directions);
console.log (randomElement (directionNames));
