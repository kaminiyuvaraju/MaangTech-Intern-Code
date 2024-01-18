    let text =
    `The quick
    brown fox
    jumps over
    the lazy dog`;
    document.getElementById("demo1").innerHTML = text;


    let firstName = "John";
    let lastName = "Doe";
    let text2 = `Welcome ${firstName}, ${lastName}!`; //Variable Substitutions
    document.getElementById("demo2").innerHTML = text2;

    let price = 10;
    let VAT = 0.25;
    let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
    document.getElementById("demo3").innerHTML = total;

    let header = "Template Strings";
    let tags = ["template strings", "javascript", "es6"];

    let html = `<h2>${header}</h2><ul>`;

    for (const x of tags) {
        html += `<li>${x}</li>`;
    }

    html += `</ul>`;
    document.getElementById("demo4").innerHTML = html;