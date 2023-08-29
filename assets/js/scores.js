const scores = document.getElementById("hScores");

scores.innerHTML = "";

displayScores();

function displayScores () {
    var savScores = (localStorage.getItem("HS"));

    let scoreArray = savScores.split(", ");

    for (let i = 0; i < scoreArray.length; i++) {
        var divCont = document.createElement("div");
        divCont.append(scoreArray[i]);
        scores.appendChild(divCont);
    }
}