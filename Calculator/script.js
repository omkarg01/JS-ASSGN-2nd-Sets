document.querySelector(".equals").addEventListener("click", equals);

function insert(num) {
  let inp = document.querySelector('#textview');
  inp.value += num;

  // remove error message as soon as user starts typing
  let err = document.querySelector('#error');
  err.style.display = "none";
}

function equals() {
  // evaluate the expression in textview, if catch error, display error message
  try {
    let inp = document.querySelector('#textview');
    inp.value = eval(inp.value);
  } catch (error) {
    let err = document.querySelector('#error');
    err.innerHTML = error;
    err.style.display = "block";
  }
}

function clean() {
  // clear all text in textview
  let inp = document.querySelector('#textview');
  inp.value = "";
}

function back() {
  // remove last character in textview
  let inp = document.querySelector('#textview');
  inp.value = inp.value.substring(0, inp.value.length - 1);
}