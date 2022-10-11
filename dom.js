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

var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);

//items[1].textContent='Hello 2';
//items[1].style.fontWeight='bold';
//items[1].style.backgroundColor='yellow';

//for(let i=0;i<items.length;i++){
 //   items[i].style.backgroundColor='#f4f4f4';
//}

items[2].style.backgroundColor='green';

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}
