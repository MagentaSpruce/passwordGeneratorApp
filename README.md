# passwordGeneratorApp
Password generator built using HTML, CSS, and JS.

This project...

Building this project helped me to better practice and understand the following:
1) Dos
2) 1


A general walkthrough of the JavaScript code for this project is below.

First select the DOM elements to be manipulated.
```JavaScript
const pw = document.getElementById('pw');
const copy = document.getElementById('copy');
const length = document.getElementById('length');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const generate = document.getElementById('generate');
```

Create the variables which will be used to generate the password.
```JavaScript
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()-_=+'
```

Construct functions for each of the variables.
```JavaScript
function getLowerCase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getUpperCase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random() * symbols.length)];
}
```

Construct the generatePassword() function to set the password.
```JavaScript
function generatePassword(){
    const length = lengthEl.nodeValue;

    for(let i=0; i<length; i++){

        const x = generateX();
        password += x;
    }
    pwEl.innerText = password;
}
```

Add an event listener on to the generate password button to run the generatePassword() function upon click events.
```JavaScript
generateEl.addEventListener('click', generatePassword);
```

Construct the generateX() function to create the password.
```JavaScript
function generateX(){
    const xs = [];
    if(upperEl.checked){
        xs.push(getUpperCase())
    }
    if(lowerEl.checked){
        xs.push(getLowerCase())
    }
    if(numberEl.checked){
        xs.push(getNumber())
    }
    if(symbol.checked){
        xs.push(getSymbol())
    }
    if(xs.length === 0) return '☠';

    return xs[Math.floor(Math.random() * xs.length)]
}
```

Add an event listener to the copy to clipboard button.
```JavaScript
copyEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = pwEl.innerText;

    if(!password){return;}

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipbboard! 📋')
})
```

***End walkthrough
