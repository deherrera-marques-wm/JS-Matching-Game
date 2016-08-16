function generateFaces() {
    var numberOfFaces = 5;
    var theLeftSide = document.getElementById("leftSide");
    for (i = 0; i < numberOfFaces; ++ i) {
        pokeball = document.createElement("img");
        pokeball.src = "pokeball.png";
        pokeball.style.top = Math.floor(Math.random() * 401) + "px";
        pokeball.style.left = Math.floor(Math.random() * 401) + "px";
        theLeftSide.appendChild(pokeball);
    }
    var theRightSide = document.getElementById("rightSide");
    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    var theBody = document.getElementsByTagName("body")[0];
    theLeftSide.lastChild.onclick = function nextLevel (event){
        event.stopPropagation();
        numberOfFaces += 5;
        generateFaces();
    };
    theBody.onclick = function gameOver() {
        alert("Game Over");
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
    }
}
