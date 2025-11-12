window.onload = function() {
    var squareArea = document.getElementById("squarearea");
    var squareCount = parseInt(Math.random() * 21) + 30;
    for (var i = 0; i < squareCount; i++) {
    var newSquare = document.createElement("div");
    newSquare.className = "square";
    newSquare.style.left= parseInt(Math.random()*651) + "px";
    newSquare.style.top= parseInt(Math.random()*251) + "px";
    squareArea.appendChild(newSquare);
}
}