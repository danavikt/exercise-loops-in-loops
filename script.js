const actions = document.getElementById('actions');
const output = document.getElementById('output');

//CLEAR

// const clear = () =>  {
//    output.innerHTML = '';
// };

//RENDER - OUTPUT FUNKCIJA NUPIEST REZULTATUI

const render = drawings => {
   output.innerHTML = drawings;
};

//TRIANGLE

const triangle = () =>  {
   let drawing = ''; //kur saugom piesini
   for (let i = 0; i < 10 ; i++) { //10 aukstu nupiesia
      for (let j = 0; j < i + 1; j++) { // kiekvienam aukstui nupiesia tiek zvaigzduciu kuriam aukste yra, pradedant nuo 1
         drawing += '*'; 
      }
      drawing += '<br />'; //10 aukstu nupiesia su i funkcija
   } 
   render(drawing);//iskvieciam f-ja ir paduodam kintamojo reiksme
};

//PIRAMID

const piramid = () =>  {
   let drawing = ''; 
   for (let i = 0; i < 10 ; i++) { 
      
      for (let x = 0; x < 10 - i; x++) {
         drawing += '&nbsp;'; 
      }
      for (let k = 0; k < i * 2 + 1; k++) {  //0*2+1=1, 1*2+1=3 isskaiciuoja nelyginius sk zvaigzdutem
         drawing += '*'; 
      }
      drawing += '<br />'; 
   } 
   render(drawing);
};

//REVERSE- PIRAMID

const reversePiramid = () =>  {
   let drawing = ''; 
   for (let i = 10; i >= 0 ; i--) { //keiciam tik sita salyga
      
      for (let x = 0; x < 10 - i; x++) {
         drawing += '&nbsp;'; 
      }
      for (let k = 0; k < i * 2 + 1; k++) {  //0*2+1=1, 1*2+1=3 isskaiciuoja nelyginius sk zvaigzdutem
         drawing += '*'; 
      }
      drawing += '<br />'; 
   } 
   render(drawing);
};



actions.addEventListener('click', event => {

if (event.target.tagName === 'BUTTON') { // klausosi tik mygtuku 

const action = event.target.name;

  switch (action) {
      case 'triangle':
         triangle();
         break;
      case 'piramid':
         piramid();
         break;
      case 'reverse-piramid':
         reversePiramid();
         break;
      case 'clear':
         render("");
         break;
      default:
         render("");
         break;
  }

} 
   
});