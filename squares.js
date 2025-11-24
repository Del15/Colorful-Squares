window.onload = function() {
    var add = document.getElementById("add");
    add.onclick = addSquare;
    var squareCount = parseInt(Math.random() * 21) + 30;
    for (let i = 0; i < squareCount; i++) {
        addSquare();
    }
}

// this generates a random hex color
function getRandomColor() {
    var possibiities = "0123456789ABCDEF";
    var result = "#";
    for (var i = 0; i < 6; i++) {
        result += possibiities.charAt(Math.floor(Math.random() * 16));
    }
    return result;
}

function addSquare() {
    let topZ = 1; // to keep track of the highest z index
     var squareArea = document.getElementById("squarearea");
      var newSquare = document.createElement("div");
    newSquare.className = "square";

    // random size that is 55-65 px
    var size = parseInt(Math.random() * 11) + 55;
    newSquare.style.width = size + "px";
    newSquare.style.height = size + "px";
    // random position within the square area
    newSquare.style.left= parseInt(Math.random()*651) + "px";
    newSquare.style.top= parseInt(Math.random()*251) + "px";
    // this gives the square a random color
    newSquare.style.backgroundColor = getRandomColor();

    // this is for the default z index
    newSquare.style.zIndex = 1;

    // for the onclick event
    newSquare.onclick = function() {
        const currentZ = parseInt(this.style.zIndex);

        // if square is at top, remove it 
        if (currentZ === topZ) {
            this.remove();
        } else {
            // otherwise bring it to the top
            topZ++;
            this.style.zIndex = topZ;
        }
};
    squareArea.appendChild(newSquare);
}
