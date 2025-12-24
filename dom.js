const titre =document.getElementsByClassName('title');
console.log(titre, "la recuperation de lelements via sa class name");

const demo = document.getElementById('demo');
console.log(demo,"la recuperation de lelements via id");
demo.style.color='red';
demo.innertext="text modifier via scripz";
//demo.innerHTML='<h1>texte modifie via javascript</h1>' ;

const mySelector = document.querySelector('#liste-livre li:nth-child(2)');
console.log(mySelector,"la recuperation de lelements via query selector");

const para=document.getElementsByTagName('p');
console.log(para,"la recuperation de lelements via tag");

const bookliste =document.querySelectorAll('#list-livre');
console.log(bookliste,"la recuperation de la liste des elements via query selector all");


