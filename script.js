'use strict';

function startQuiz () {
  document.querySelector( 'button' ).classList.add( 'hidden' );
   let randomNumber = Math.floor( Math.random() * 100 );
   let questionElem =  document.querySelectorAll( 'p' )[randomNumber];  

  questionElem.classList.remove( 'hidden' );

 }
 
