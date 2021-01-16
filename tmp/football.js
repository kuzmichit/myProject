'use strict';

let ball = document.querySelector('.ball');
let field = document.querySelector('.field');
let coordsField = field.getBoundingClientRect();
let coordsBall = ball.getBoundingClientRect();
let limitFieldRight = coordsField.right - coordsBall.width;
let limitFieldBottom = coordsField.bottom - coordsBall.height;

field.addEventListener('click', moveBall);

function moveBall(evt) {	
	if(evt.clientX > limitFieldRight) {
		ball.left = limitFieldRight;
	} else ball.left = evt.clientX;
	
	if (evt.clientY > limitFieldBottom) {
		ball.top = limitFieldBottom;
	} else ball.top = evt.clientY;
}
evt => console.log(evt.clientX);
