window.onload = function() {
    var add = document.getElementById("add");
    add.onclick = addSquare;
    var squareCount = parseInt(Math.random() * 21) + 30;
    for (let i = 0; i < squareCount; i++) {
        addSquare();
    }
}

function getRandomColor() {
    var possibiities = "0123456789ABCDEF";
    var result = "#";
    for (var i = 0; i < 6; i++) {
        result += possibiities.charAt(Math.floor(Math.random() * 16));
    }
    return result;
}

function addSquare() {
     var squareArea = document.getElementById("squarearea");
      var newSquare = document.createElement("div");
    newSquare.className = "square";
    newSquare.style.left= parseInt(Math.random()*651) + "px";
    newSquare.style.top= parseInt(Math.random()*251) + "px";
    newSquare.style.backgroundColor = getRandomColor();
    squareArea.appendChild(newSquare);
}