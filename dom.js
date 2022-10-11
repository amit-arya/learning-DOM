//console.log(document.all);
//console.log(document.all[10]);
//console.log(document.links);
//console.log(document.images);

//console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='Hello';
//headerTitle.innerText='Goodbye';
//console.log(headerTitle.innerText);

//headerTitle.innerHTML='<h3>Hello</h3>'
//headerTitle.style.borderBottom='solid 3px #000';
//header.style.borderBottom='solid 3px #000';

// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);

// li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';

// for(let i=0;i<li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4';
// }

//  li[2].style.backgroundColor='green';

// for(let i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold';
// }

// Queryselector
// var header=document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='green';

// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color='white';

//QuerySelectorAll
let titles = document.querySelectorAll('.list-group-item');
titles[1].style.color='green';

let odd = document.querySelectorAll('li:nth-child(odd)');

for(let i=0;i<odd.length;i++){
    odd[i].style.background='green';
}