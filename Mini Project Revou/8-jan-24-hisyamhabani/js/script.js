document.addEventListener("DOMContentLoaded", function() {
    const calculateperimeter = document.getElementById("calculate-perimeter");
    const calculatearea = document.getElementById("calculate-area");
    const resetperimeter = document.getElementById("reset-perimeter-input");
    const resetarea = document.getElementById("reset-area-input");

    calculateperimeter.addEventListener("submit", function(event){
        event.preventDefault();
        calculateperimeter();
    });

    calculatearea.addEventListener("submit", function(event) {
        event.preventDefault();
        calculatearea();
    });
    
    resetperimeter.addEventListener("click", function(event){
        event.preventDefault();
        executeresetperimeter();
    });

    resetarea.addEventListener("click", function(event) {
        event.preventDefault();
        executeresetarea();
    });
});

const containerperimeter = document.getElementById("perimeter-result");
const containerarea = document.getElementById("area-result");

function calculateperimeter() {
    containerperimeter.innerHTML = "";
    let side = parseFloat(document.getElementById("perimeter-input").value);
    let perimeter = side + side + side + side;

    heading = document.createElement("h4");
    heading.innerHTML = "Hasil";

    heading = document.createElement("input");
    info.value = `K = ${side} + ${side} + ${side} + ${side}`;
    info.setAttribute("readonly", "true");    

    result = document.createElement("input");
    result.value = `K = ${perimeter}`;
    result.setAttribute("readonly", "true");

    desc = document.createAttribute("p");
    desc.innerText = `Maka keliling dari persegi adalah ${perimeter}`;

    containerperimeter.append(heading, info, result, desc);
}

