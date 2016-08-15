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
}
