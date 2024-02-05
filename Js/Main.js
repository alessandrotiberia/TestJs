//alert('primo javascript') //outup nuova finestra
//document.writeln("questa è una prova") // output dove posizionato tag script
//console.log("prova log"); // output nella console di debug 
//output all'interno di un tag e nel tag bisogna specificare attributo id
//document.getElementById('miodiv').innerHTML='il mio div';


const n=7; //non dobbiamo dichiarare i tipi perchè si ricava dall'assegnazione
//const indica che l'assegnazione puoi farla solo una volta quindi non possiamo agg. n=8 perchè sarebbe errore essendo assegnato già

console.log("valore di n è: " +n);

let x=10;
x=20 // con let posso cambiare il valore
x="venti"; // variabile può cambiare il tipo in questo caso diventato una stringa
console.log("valore di x è: " + x);
if (x>=20)
console.log("è maggiore di 20");
else 
console.log("è minore di 20");

while (x>0) {
    console.log(x);
    x--;
}
do{
   console.log("------")
   x++; 
}while (x<10);