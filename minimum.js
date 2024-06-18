//for cyklus – důkaz provedení
for (let i = 0; i < 5; i++) {

  console.log(i);

}


//while cyklus – ukázka použití
let promenna = 0;
while (promenna < 30) {

  console.log(promenna);
  promenna += 5;

}

//do-while cyklus – podmínka se vyhodnocuje později
let test = 1;
do {

  console.log(test);
  test++;

} while (test <= 5)


//podmínka if-else
let numero = 4;
if (numero > 5) {

  console.log("Numero je větší než 5.");

} else {

  console.log("Numero je menší než 5.");

}

//logická konjunkce v podmínce
let arabela = 165;
let xenie = 178;

if (arabela > 145 && xenie > 175) {

console.log("Obě pricezny zároveň mohou s Petrem Majerem na horskou dráhu.");

}

//logická disjunkce v podmínce
let x = 20;
let y = 2;

if (x > 10 || y > 5) { 

console.log("Alespoň jedna z podmínek platí.");

}

//switch jako příklad podmínky
let barva = "červená";
switch (barva) {
  
  case "červená": console.log("Barva je červená.");
  
  break;

  case "modrá": console.log("Barva je modrá.");

  break; 
  
  default: console.log("Barva je neznámá.");
  
}

function pozdrav(jmeno){

    console.log(`Ahoj, ${jmeno}!`);

}
pozdrav("Rumburaku")

//obecné nalezení kotvy v URL
// výstup: #nazev-kotvy
const prvniKotva = window.location.hash;

console.log(prvniLotva);

//úprava nalezené kotvy přímo přes metodu
//zbavuji se symbolu #
// výstup: nazev-kotvy
 
const druhaKotva = window.location.hash.substring(1);

console.log(druhaKotva);

//navázaní na tlačítko
const button = document.getElementById("myButton");


button.addEventListener("click", function() {

  console.log("Tlačítko bylo kliknuto!");

  // Kod tady může pokračovat dál.

}, { passive: true, once: true });


const myArray = ["prvek1", "prvek2"];

myArray.unshift({ novoPole: "hodnota" });

console.log(myArray); 

// Output: [{ novoPole: "hodnota" }, "prvek1", "prvek2"]

const myArray = ["prvek1"];

myArray.splice(1, 0, { novoPole: "hodnota" });

console.log(myArray); 

// Output: ["prvek1", { novoPole: "hodnota" }]

//rozdíl v načtený a spuštění určitého kódu

$(document).ready(function() {

  // kód, který se má spustit, když je DOM připraven

});

$(window).load(function() {

  // kód, který se má spustit, když je celá stránka načtena

});
