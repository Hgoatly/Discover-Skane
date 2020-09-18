let y = document.getElementById("main-content");
y.style.display = "none";

function hideLandingPage() {
 let x = document.getElementById("landing-page");
 x.style.display = "none";
 y.style.display = "block";
}

let lakeMap = document.getElementById("lake-map")
let lakes = document.getElementById("lakes");
lakeMap.style.display = "none";


function showMap() {
/*    a.style.display = "none";
    z.style.display = "block";
}

function hideMap() {
    a.style.display = "block";
    z.style.display = "none";
}
*/

if (lakeMap.style.display === "none") {
    lakeMap.style.display = "block";
    lakes.style.display = "none";
} else {
    lakeMap.style.display = "none";
    lakes.style.display = "block";
}
}