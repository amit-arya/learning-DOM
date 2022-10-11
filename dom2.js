var itemlist=document.querySelector('#items');
// console.log(itemlist.parentNode); 
// itemlist.parentNode.style.backgroundColor='#f4f4f4';

// console.log(itemlist.parentNode.parentNode);

//ParentElement
// console.log(itemlist.parentElement); 
// itemlist.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentElement.parentElement);

//firstChild
//console.log(itemlist.firstChild);

//firstELementChild
//console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.textContent='Hello 1';

//lastChild
//console.log(itemlist.firstChild);

//firstElementChild
//console.log(itemlist.lastElementChild);
//itemlist.lastElementChild.textContent='Hello 4';

//nextSibling
//console.log(itemlist.nextSibling);

//nextElementSibling
//console.log(itemlist.nextElementSibling);

//previousSibling
//console.log(itemlist.previousSibling);

//previousElementSibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color='green';

//create a div
var newDiv = document.createElement('div');

newDiv.className='hello';
newDiv.id='hello 1';

newDiv.setAttribute('title','Hello Div');

var newDivText=document.createTextNode('Hello World');

newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize='30px';

container.insertBefore(newDiv, h1);
var container2=document.querySelector('#items .container2');
container2.insertBefore(newDiv, itemlist);