const globalContainer = document.getElementById('slider');
const firstContainer = document.getElementById('first');
const secondContainer = document.getElementById('second');
const thirdContainer = document.getElementById('third');

console.log(globalContainer);

function changeContainer() {
   setTimeout( modifyContainer => addClass(firstContainer) , 3000 );
   setTimeout( modifyContainer => removeClass(secondContainer) , 3001 );
   setTimeout( modifyContainer => addClass(secondContainer) , 6000 );
   setTimeout( modifyContainer => removeClass(thirdContainer) , 6001 );
   return console.log('ya cargó el dom perrín');
}

let addClass = containerOn => containerOn.classList.add("off");
let removeClass = containerOff => containerOff.classList.remove("off");
