console.log(window.outerWidth);
console.log(window.name);
console.log(window.open('http://www.google.com'));

var debug = document.getElementById('debug');
console.log(debug);

var box = document.querySelector('.box');
var box = document.querySelectorAll('.box');
console.log(box)

var div = document.createElement('div');
// console.log(div)
div.style.border = "1px solid #000";
div.innerHTML = "hello!!";

document.body.appendChild(div)

const span = document.createElement('span');
const textNode = document.createTextNode('hello!');
span.appendChild(textNode);
document.querySelector('#debug').appendChild(span);

const text = '<span>hello</span>';
document.querySelector('#debug').innerHTML = text;

var debug = document.getElementById('debug');
debug.remove();

const list = document.getElementById('list');
list.removeChild(list.children[0]);

window.addEventListener('load', function() {
    alert("load");
})

document.body.addEventListener('click', function() {
   console.log('click');
 })

function clickBody() {
  console.log('click');
}

document.querySelector('.box').addEventListener('click', clickBody);
 
var list = document.querySelector('#list');
console.log(list.children);

var app = document.getElementById('list');

app.addEventListener('click', function(event) {
  if (event.target.nodeName = 'LI') {
    console.log('li');
  }
});

document.body.addEventListener('click', function() {
  console.log('body');
});

for(var i=0; i<list.length; i++){
  list.children[i].addEventListener('click', function() {
    console.log(1);
  });
}

var link = document.querySelector('#link');
link.addEventListener('click', function() {
  console.log(22222222)
  // event.stopPropagation();
  event.preventDefault();
});
