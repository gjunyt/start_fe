var selected = document.querySelector('.selected');

var className = "";
var totalBox = 16;
var str = '';

var board = document.querySelector('#board');

var whatColor = true;
    for (var i = 0; i < totalBox; i++) {
        className = whatColor ? "black" : "white"
        str += '<span class = "' + className + '"></span>';
        whatColor = !whatColor
        if (i % 4 === 3) {
            whatColor = !whatColor
        }
    }
    board.innerHTML = str;

var boxes = document.querySelectorAll('span');

var selectedBox ={
    index:-1,
    className:""
}

function drawBoards(index) {
    if(selectedBox.index != -1){
        boxes[selectedBox.index].className = selectedBox.className
    }
    selectedBox.index = index;
    selectedBox.className = boxes[index].className;
    boxes[index].className = "selected";
}

for (let i = 0; i < totalBox; i++) {
    boxes[i].addEventListener('click',() => drawBoards(i));
}
