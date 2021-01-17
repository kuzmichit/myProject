'use strict';

let ball = document.querySelector('.ball');
let field = document.querySelector('.field');
let coordsField = field.getBoundingClientRect();
let coordsBall = ball.getBoundingClientRect();
let limitFieldRight = coordsField.right - coordsBall.width - field.clientLeft;
let limitFieldBottom = coordsField.bottom - coordsBall.height;

field.addEventListener('click', moveBall);

function moveBall(evt) {	
	if(evt.clientX > limitFieldRight) {
		ball.style.left = limitFieldRight + 'px';
	} else ball.style.left = evt.clientX + 'px';
	
	if (evt.clientY > limitFieldBottom) {
		ball.style.top = limitFieldBottom + 'px';
	} else ball.style.top = evt.clientY + 'px';
	console.log('top' + coordsField.top);
	console.log('limit' + limitFieldBottom);
}
//evt = console.log(evt.clientX);
