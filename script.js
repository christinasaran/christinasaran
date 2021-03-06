const container = document.getElementById('container');
const btnClear = document.getElementById('btnClear');
const btnAll = document.getElementById('btnAll');
const rainbow = document.getElementById('rainbow');

let rainbowBool = false;

function makeRows(row, col){
      container.style.setProperty('--grid-rows', row);
      container.style.setProperty('--grid-cols', col);
      for( c=0; c<(row*col); c++ ){
         let cell = document.createElement('div');
         //cell.innerText = (c + 1);
         container.appendChild(cell).className = 'grid-item';

      } 
}

//squares created now
let squares = document.getElementsByClassName('grid-item');
//console.log(squares);

function color (color = 'black' ){
   for(let i = 0; i < squares.length; i++){
      squares[i].addEventListener('mouseenter', e => {

         if(rainbowBool){
            let temp = randomColour();
            e.target.style.backgroundColor = temp;
         } else 
         //console.log(e.target.className);
         e.target.style.backgroundColor = color;
      });
   }
}

function clear(){
   for (let i = squares.length - 1; i >= 0; --i) {
      squares[i].remove();
    }
    rainbowBool = false;

} 

/*
   if want color to be continous random would
   neeed ex:
   boolean colorful = false; (when new button black (not made)
      is clicked or default
      and true when all colours clicked

      then in color function in mouseenter
      if colourful
      new xyz, and rgb
*/
function randomColour(){
   let x = Math.floor((Math.random() * 256) +1);
   let y = Math.floor((Math.random() * 256 +1));
   let z = Math.floor((Math.random() * 256)+1);

   return random = `rgb( ${x},${y},${z} )`;
}

rainbow.addEventListener('click', e => {
   rainbowBool=  true;
   color();
});

btnAll.addEventListener('click', e => {
   // let x = Math.floor(Math.random() * 256);
   // let y = Math.floor(Math.random() * 256);
   // let z = Math.floor(Math.random() * 256);

   // let random = `rgb( ${x},${y},${z} )`;
   rainbowBool= false;
   let newColor = randomColour();
   color(newColor);

});

btnClear.addEventListener('click', e => {
   let newGridSize = prompt("Enter new grid\'s # of squares per side");
   clear();
   makeRows(newGridSize, newGridSize);
   color();
    
});

function init(){
   makeRows(4, 4);
   color();
}
init();