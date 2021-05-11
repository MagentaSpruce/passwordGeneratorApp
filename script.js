'use strict';

const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()-_=+'

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

// alert(getNumber());

function generatePassword(){
    const length = lengthEl.value;
    let password = '';

    for(let i=0; i<length; i++){

        const x = generateX();
        password += x;
    }

    pwEl.innerText = password;
}


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


generateEl.addEventListener('click', generatePassword);

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