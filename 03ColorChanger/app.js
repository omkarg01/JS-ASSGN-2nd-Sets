
function changeBgColor() {
    const bg = document.querySelector("#canvas");
    bg.style.backgroundColor = randomColor();
}

function randomColor() {
    return ("#" + (Math.floor(Math.random() * 16777215).toString(16)));
};

const btn = document.querySelector("#button");
btn.addEventListener("click", changeBgColor)
