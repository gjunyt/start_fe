var box = document.querySelector("#box");
box.addEventListener('mousedown', mouseDown);
box.addEventListener('mousemove', mouseMove);
box.addEventListener('mouseup', mouseUp);

var isMouseDown = false;

var X;
var Y;
var iX;
var iY;
var xO = 0;
var yO = 0;

function mouseDown(event){
    console.log("hey");
    isMouseDown = true;

    if (event.type === "touchstart") {
        iX = event.touches[0].clientX - xO;
        iY = event.touches[0].clientY - yO;
    } else {
        iX = event.clientX - xO;
        iY = event.clientY - yO;
    }

    if (event.target === box) {
        isMouseDown = true;
    }
}

function mouseMove(event){
    if (isMouseDown) {
        event.preventDefault();
      
        if (event.type === "touchmove") {
            X = event.touches[0].clientX - iX;
            Y = event.touches[0].clientY - iY;
        } else {
            X = event.clientX - iX;
            Y = event.clientY - iY;
        }

        xO = X;
        yO = Y;

        setTranslate(X, Y, box);
    }
}

function mouseUp(e){
    iX = X;
    iY = Y;

    isMouseDown = false;
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}
