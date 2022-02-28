var r = [],
    g = [],
    b = [];
var answer_index;
var ans;
var diff = 3;

function setColor(x = 3) {
    const color_div = document.querySelector(".color_code");
    generate(x);
    color_div.innerHTML = `rgb(${r[answer_index]}, ${g[answer_index]}, ${b[answer_index]})`;
    setBoxes(x);
    let head = document.querySelector(".heading");
    head.style.backgroundColor = "bisque";
}

function generate(x = 3) {
    for (let i = 0; i < 6; i++) {
        r[i] = Math.floor(Math.random() * 255);
        g[i] = Math.floor(Math.random() * 255);
        b[i] = Math.floor(Math.random() * 255);

    }
    answer_index = Math.floor(Math.random() * x);
    ans = "rgb(" + r[answer_index] + ", " + g[answer_index] + ", " + b[answer_index] + ")";
    // console.log(ans)
}

function setBoxes(x = 3) {
    const page = document.querySelector("#page")
    page.innerHTML = "";
    for (let i = 0; i < x; i++) {
        var box = document.createElement("div");
        box.classList.add("box");
        box.setAttribute("onclick", "verify(this)");
        box.style.backgroundColor = `rgb(${r[i]},${g[i]},${b[i]})`;
        page.appendChild(box);
    }
}

function verify(object) {
    let color = object.style.backgroundColor;
    let answer = document.getElementById("solution");

    // console.log(color)
    if (color == ans) {
        answer.innerText = "Congratulations!"
        onCorrect(color);

    } else {
        object.style.visibility = "hidden";
        answer.innerText = "Sorry! Try Again"

    }
}

function setState(x = diff) {
    diff = x;
    setColor(x);
}

function onCorrect(color) {
    let box = document.getElementsByClassName("box");
    for (let i = 0; i < diff; i++) {
        box[i].style.backgroundColor = color;
    }
    let head = document.querySelector(".heading");
    head.style.backgroundColor = color;
}
setColor();