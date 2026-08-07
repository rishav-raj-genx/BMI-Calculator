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
button.style.color="white"

document.querySelectorAll(".input")[0].style.height = "30px"
document.querySelectorAll(".input")[1].style.height = "30px"

document.querySelectorAll(".input")[0].style.fontSize = "20px"
document.querySelectorAll(".input")[1].style.fontSize = "20px"


// console.log("hii")

// let canvas = document.querySelector("#draw")
// let c = canvas.getContext('2d');

// let innerHeight = canvas.height;
// let innerWidth = canvas.width;

// canvas.style.backgroundColor = "transparent"

// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;

// let dx = 4;
// let dy = 4;

// let r = 30;

// function ani(){
//     requestAnimationFrame(ani);

//  c.beginPath();
//     c.arc(x,y,radius, 0, Math.PI *2, false);
//     c.strokeStyle = "white";
//     c.stroke();
//     c.clearRect(0 , 0, innerWidth, innerHeight);
// Cc.draw();


//     if(x + r >innerWidth || x-r< 0) dx = -dx;
//     if(y + r >innerHeight || y - r < 0) dy = -dy;

//     x += dx;
//     y += dy;
//     }

//     ani();

const canvas = document.getElementById("draw");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let vcircle = [];

for (let i = 0; i < 10; i++) {

    var x = Math.random() * (canvas.width - r * 2) + r;
    var y = Math.random() * (canvas.height - r * 2) + r;
    var dx = 2;
    var dy = 2;
    var r = 50;
    vcircle.push(new Circle(x, y, dx, dy, r));
}

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, canvas.width, canvas.height);


    for (let i = 0; i < vcircle.length; i++) {
        vcircle[i].draw();
    }
}

animate();


function Circle(x, y, dx, dy, r) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;

    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        c.strokeStyle = "white";
        c.lineWidth = 1;
        c.stroke();
        // c.fill();
        this.update();
    }

    this.update = () => {
        if (this.x + this.r > innerWidth || this.x - this.r < 0) this.dx = -this.dx;
        if (this.y + this.r > innerHeight || this.y - this.r < 0) this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;
    }
}
