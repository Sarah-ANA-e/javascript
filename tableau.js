const myarray=["banane","pomme","cerrise","poire"];
console.log (myarray,"mon premier tableau");
const cars = new Array("mercedes","BMW","bugatti");
console.log(cars,"voitures");
console.log(myarray.length);
console.log(myarray[0]);
myarray[0]="orange"
console.log(myarray[0]);
console.log(myarray.toString());
const nombres=[2,3,4];
const nouveautableau =[1,...nombres,5]
console.log (nouveautableau);
console.log(myarray.join("/"))
let voitures=cars.pop();
console.log(voitures)
console.log(cars)
let fruit =myarray.push("kiwi")
console.log(myarray)
const boys=["je3fer","yakoub","hlilu"]
const girls=["sarah","anissa","yasmina"]
const children=boys.concat(girls)
console.log(children)
const semaine=["lun","mra","mer","jeu","ven","sam","ddi"]
let last=semaine.pop()
console.log(semaine)
let semana=semaine.push("dim")
console.log(semaine)
semaine[1]="mar"
console.log(semaine)
console.log(semaine.length)
const x=["banane","orange","pomme","mangue"]
console.log(x)
x.splice(2,0,"citron","kiwi")
console.log(x);
x.splice(2,1)
console.log(x);
const y=["fraise","pasteque","poire","mandarine"]
console.log(y)
const sliceY=y.slice(2)
console.log(sliceY)
const z=["fraise","pasteque","poire","mandarine"]
console.log(z)
const sliceZ=z.slice(1,3)
console.log(sliceZ)



