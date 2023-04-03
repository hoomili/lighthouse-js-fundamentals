const judgeVegetable = function (vegetables, metric) {
  let name = "";
  let value = 0;
  for (let count of vegetables){
    if (count[metric] > value){
      value = count[metric];
      name = count.submitter;
    }
  }
  return name;
}
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric))