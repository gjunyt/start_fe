//문제 1
var AR = document.querySelector('.add-red');
AR.addEventListener('click',addRedClick);
function addRedClick(event){
    var boxes = document.querySelectorAll('.box');

    for(var i=0; i<boxes.length; i++){
        boxes[i].className += 'red';
    }
}

//문제 2
var AB = document.querySelector('.add-btn');
AB.addEventListener('click', addBtnClick);
function addBtnClick(event){
    var body = document.querySelector('body');
    
    const div = document.createElement('div');
    div.className = 'box';
    document.body.appendChild(div);
}

//문제 3
var DB = document.querySelector('.delete-btn');
DB.addEventListener('click', deleteBtnClick);
function deleteBtnClick(event){
    const boxes = document.querySelectorAll('.box');
    const el = boxes.item(boxes.length - 1);
    el.remove();
}

//문제 4
var TB = document.querySelector('.text-btn');
TB.addEventListener('click', textBtnClick);
function textBtnClick(event){
    const textEl = document.querySelector('.txt');
    const textValue = textEl.value;

    var boxes = document.querySelectorAll('.box');
    for(var i=0; i<boxes.length; i++){
        boxes[i].textContent += textValue;
    }
}

//문제 5
var RB = document.querySelector('.reset-btn');
RB.addEventListener('click', resetBtnClick);
function resetBtnClick(event){
    var boxes = document.querySelectorAll('.box');
    for(var i=0; i<boxes.length; i++){
        boxes.item(i).remove();
    }
}

//문제 6
var TB = document.querySelector('.toggle-btn');
TB.addEventListener('click', toggleBtnClick);
function toggleBtnClick(event){
    var boxes = document.querySelectorAll('.box');
    for(var i=0; i<boxes.length; i++){
        if (boxes[i].style.display === "none") {
            boxes[i].style.display = "block";
        } else {
            boxes[i].style.display = "none";
        }
    }
}

//문제 7
var imageBtn = document.querySelector('.image-btn');
imageBtn.addEventListener('click', imageBtnClick);
function imageBtnClick(event){
    var boxes = document.querySelectorAll('.box');
    if(boxes.length == 0){
        addBtnClick();
        boxes = document.querySelectorAll('.box');
    }
    for(var i=0; i<boxes.length; i++){
        const img = document.createElement('img');
        img.src = "https://ifh.cc/g/YunDfC.jpg"
        boxes[i].appendChild(img);
    }
}
