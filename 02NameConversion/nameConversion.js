
const btn = document.querySelector("#convert-btn");
btn.addEventListener("click", convert)

function convert() {
    const inp = document.querySelector("input");
    const text = inp.value;
    camelCase(text)
    pascalCase(text)
    snakeCase(text)
    screamingSnakeCase(text)
    kebab(text)
    screamingKebabCase(text)
}

function camelCase(text) {
    const target = document.querySelector("#camel-case");
    const splitText = text.split(" ");
    let camelCase = "";
    splitText.forEach((word, index) => {
        if (index === 0) {
            word = word.toLowerCase();
        } else {
            word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }

        camelCase += word;
    })
    target.textContent = camelCase;
}

function pascalCase(text) {
    const target = document.querySelector("#pascal-case");
    const splitText = text.split(" ");
    let pascalCase = "";
    splitText.forEach((word, index) => {
        word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        pascalCase += word;
    })
    target.textContent = pascalCase;
}

function snakeCase(text) {
    const target = document.querySelector("#snake-case");
    const splitText = text.split(" ");
    let snakeCase = "";
    splitText.forEach((word, index) => {
        word = word.toLowerCase();
        if (splitText.length !== index)
            snakeCase += word + "_";
    })

    snakeCase = snakeCase.slice(0, snakeCase.length - 1);
    target.textContent = snakeCase;
}

function screamingSnakeCase(text) {
    const target = document.querySelector("#screaming-snake-case");
    const splitText = text.split(" ");
    let screamingSnakeCase = "";

    splitText.forEach((word, index) => {
        word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        if (splitText.length !== index)
            screamingSnakeCase += word + "_";
    })

    screamingSnakeCase = screamingSnakeCase.slice(0, screamingSnakeCase.length - 1);
    target.textContent = screamingSnakeCase;
}

function kebab(text) {
    const target = document.querySelector("#kebab-case");
    const splitText = text.split(" ");
    let kebab = "";

    splitText.forEach((word, index) => {
        word = word.toLowerCase();
        if (splitText.length !== index)
            kebab += word + "-";
    })

    kebab = kebab.slice(0, kebab.length - 1);
    target.textContent = kebab;
}

function screamingKebabCase(text) {
    const target = document.querySelector("#screaming-kebab-case");
    const splitText = text.split(" ");
    let screamingKebabCase = "";

    splitText.forEach((word, index) => {
        word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        if (splitText.length !== index)
            screamingKebabCase += word + "-";
    })

    screamingKebabCase = screamingKebabCase.slice(0, screamingKebabCase.length - 1);
    target.textContent = screamingKebabCase;
}





