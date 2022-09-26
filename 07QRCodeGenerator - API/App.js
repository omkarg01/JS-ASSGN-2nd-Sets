document.querySelector("#submit").addEventListener("click", () => {
    let img = document.querySelector("#img");
    let inp = document.querySelector(".data");
    img.style.display = "block";
    var qrc = new QRCode(img, inp.value);
    console.log(qrc)
  });