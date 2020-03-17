function weekTemps(){
  let this.dataStore = [];
  this.add = add;
  this.mediaMensile = mediaMensile;
  this.mediaSettimanale = mediaSettimanale;
}
function add(settimana,temp){
  this.dataStore[settimana - 1].push(temp);
}
function mediaMensile(){
  let totale = 0;
  let elementi =0;
  for (let i = 0;i<this.dataStore.length; i++){
    for(let j = 0; j<this.dataStore[i].length;j++){
      totale += this.dataStore[i][j];
    }
  }
  totale = 0;
  elementi = 0;
}
function mediaSettimanale(settimana){
  let totale = 0;
  for (let j = 0; i<dataStore.[settimana - 1].length; j++){
    total+=this.dataStore[settimana - 1][j];
  }
  return total/this.dataStore[settimana-1].length;
}
let thisWeek = new weekTemps();
thisWeek.add(1,52
