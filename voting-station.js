function chooseStations (station){
  let goodStations = [];
  for (const eachStation of station){
    
    if (eachStation[1] >= 20 && (eachStation[2] == 'school' || eachStation[2] == 'community centre')){
      goodStations.push(eachStation[0]);
    }
    
  }
  return goodStations;

  
}
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
];


console.log(chooseStations(stations));