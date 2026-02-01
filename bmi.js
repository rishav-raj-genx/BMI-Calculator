let body = document.querySelector("body");
body.style.height = "100vh";
body.style.width = "100vw";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";

let bmi = document.querySelector(".bmi");
bmi.style.width = "50vw";
bmi.style.height = "60vw";

bmi.style.display = "flex";
bmi.style.flexDirection = "column";
bmi.style.alignItems = "center";

let height = document.querySelector("#height");
let weight = document.querySelector("#weight");

let button = document.querySelector("button");

button.addEventListener("click", calculateBMI);

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") calculateBMI();
});

function calculateBMI() {
    if (height.value === "" || weight.value === "") {
        alert("Please! Enter Values");
        return;
    }

    let h = parseFloat(height.value) / 100; 
    let w = parseFloat(weight.value);

    let bmiValue = (w / (h * h)).toFixed(2);

    button.innerText = `BMI → ${bmiValue}`;
}

button.style.borderRadius = '20px'
button.style.backgroundColor = 'green'
button.style.color = 'black'
body.style.color = 'white'

body.style.fontSize = "20px"
body.style.backgroundColor = "black"
button.style.fontSize = "50px"
button.style.padding = "10px 20px"

document.querySelectorAll(".input")[0].style.height = "30px"
document.querySelectorAll(".input")[1].style.height = "30px"

document.querySelectorAll(".input")[0].style.fontSize = "20px"
document.querySelectorAll(".input")[1].style.fontSize = "20px"


console.log("hii")