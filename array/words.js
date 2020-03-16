
let parole = ["Vai","dove","ti","porta","il","cuore","!"];
let paroleStr = JSON.parse(JSON.stringify(parole));

let paroleLtR = parole.join();
let paroleRtL = paroleStr.reverse();

console.log(paroleLtR);
console.log(paroleRtL);
