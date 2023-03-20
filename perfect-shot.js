const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  for (const position of moves){
    switch(position){
      case 'north':
        y++;
        break;
      case 'south':
        y--;
        break;
      case 'west':
        x--;
        break;
      case 'east':
        x++;
      
    }
  }
  return [x,y];
}
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));