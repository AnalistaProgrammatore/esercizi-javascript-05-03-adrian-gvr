var nomeStudente = new Studente();
nomeStudente.Add(83);
nomeStudente.Add(77);
nomeStudente.Add(91);
nomeStudente.Add(96);
nomeStudente.Add(82);
nomeStudente.Add(70);
nomeStudente.Add(88);

console.log("La media dei voti dello studente: ",nomeStudente.media());

function Studente(){
  this.Voti = [];
  this.add = add();
  this.media = media();
}

function add(voto){
  this.Voti.push(voto);
}

function media(){
  let totale = 0;
  for (let i = 0; i<this.Voti.length; i++){
    totale = totale + this.Voti[i];
  }
return totale/this.Voti.length;
totale=0;
}
