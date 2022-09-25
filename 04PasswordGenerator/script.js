const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    // console.log(resultEl.select())
    window.getSelection().selectAllChildren(resultEl);
    navigator.clipboard.writeText(resultEl.textContent);
})

generateEl.addEventListener('click', () => {

    const checked = document.querySelectorAll("input[checked]")
    let checkedLen = 0;

    for (const iterator of checked) {
        if (iterator.checked)
            checkedLen++;
    }

    resultEl.innerHTML =
        generatePassword(randomFunc.lower, randomFunc.upper, randomFunc.number, randomFunc.symbol, checkedLen);

})


function generatePassword(lower, upper, number, symbol, checkedLen) {
    const len = lengthEl.value;
    let password = "";

    // adding the four character in each iteration
    for (let i = 0; i < Math.ceil(len / checkedLen); i++) {
        password += getEachPart(lower, upper, number, symbol);
    }

    password = password.slice(0, len - password.length === 0 ? len : len - password.length);
    return password;
}

// generate only those function which are checked
function getEachPart(lower, upper, number, symbol) {
    let part = "";
    if (uppercaseEl.checked) {
        part += upper()
    }
    if (lowercaseEl.checked) {
        part += lower()
    }
    if (numbersEl.checked) {
        part += number()
    }
    if (symbolsEl.checked) {
        part += symbol()
    }
    return part;
}

function getRandomLower() {
    return getRandomLetter(false);
}

function getRandomUpper() {
    return getRandomLetter(true);
}

function getRandomNumber() {
    return parseInt(Math.random() * 10);
}

// ---------------------------------------------------------------
// additional functions to generate radom symbols, numbers, letter
// ---------------------------------------------------------------
function getRandomSymbol() {
    const symbols = '!"#$%&\'()*+,-./:;<=>?@[\]^_\`{|}~';
    const index = Math.floor(randomNumber(0, symbols.length));
    return symbols[index];
}

function generateAlphabet(capital = false) {
    return [...Array(26)].map((_, i) => String.fromCharCode(i + (capital ? 65 : 97)));
}

function getRandomLetter(bool) {
    const alphabet = generateAlphabet(bool);
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

const text = getRandomLetter(false);