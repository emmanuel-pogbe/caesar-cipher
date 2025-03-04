const textarea = document.getElementById("text");
const clearBtn = document.getElementById("clear");
const pasteBtn = document.getElementById("paste");
const translateBtn = document.getElementById("translatebtn");
const copyBtn = document.getElementById('copy');
const result = document.getElementById('result');
function toggleCopyButton(){
    if (result.textContent !== "") {
        copyBtn.style.display = "block";
    } else {
        copyBtn.style.display = "none";
    }
}
function toggleTranslateButton(){
    if (textarea.value.trim() !== "") {
        translateBtn.style.display = "block";
    } else {
        translateBtn.style.display = "none";
    }
}
function toggleClearButton() {
    if (textarea.value.trim() !== "") {
        clearBtn.style.display = "block";
    } else {
        clearBtn.style.display = "none";
    }
}   
function togglePasteButton(){
    if (textarea.value.trim()!==""){
        pasteBtn.style.display = "none";
    } else {
        pasteBtn.style.display = "block";       
    }
}
function decrement(){
    let inputField = document.getElementById('shiftKey');
    let currentValue = parseInt(inputField.value,10);
    if (currentValue>0){
        inputField.value = currentValue-1;
    }
}
function increment(){
    let inputField = document.getElementById('shiftKey');
    let currentValue = parseInt(inputField.value,10);
    if (currentValue<25){
        inputField.value = currentValue + 1;
    }
}
textarea.addEventListener("input", toggleClearButton); //While typing, display clear button
textarea.addEventListener("input", togglePasteButton); //While typing, hide paste button
textarea.addEventListener("input", toggleTranslateButton); //While typing, show translate button
clearBtn.addEventListener("click", () => {
    textarea.value = "";
    clearBtn.style.display = "none";
    togglePasteButton();
    toggleTranslateButton();
    toggleCopyButton();
});
toggleClearButton();
toggleTranslateButton();
toggleCopyButton();

function mod(n, m) { //using external function to calculate the modulus of numbers, in cases of negative numbers
    return ((n % m) + m) % m;
}
function copyText(){
    const textToCopy = result.innerText;
    if (textToCopy!="")
    {
        let popup = document.getElementById('popup')
        const temptext = document.createElement('textarea');
        temptext.value = textToCopy;
        document.body.appendChild(temptext);
        temptext.select();
        document.execCommand('copy');
        document.body.removeChild(temptext);
        popup.classList.add('show');
        popup.classList.remove('hide');
        setTimeout(()=>{
            popup.classList.remove('show');
            popup.classList.add('hide');
        }, 2000);
    } 
}
function pasteText(){
    setTimeout(()=>{
        navigator.clipboard.readText().then((text) => {
            textarea.value = text;
            toggleClearButton();
            togglePasteButton();
            toggleTranslateButton();
        }).catch(err => {
            console.error("Failed to paste text: ", err);
        });
    },300); 
}
document.getElementById("radioW").addEventListener("click",()=>{
    const option = document.querySelector('input[name="choice"]:checked').value;
    if (option=="encrypt")
        textarea.placeholder = "Type here to encrypt text";
    else
        textarea.placeholder = "Type here to decrypt text";
});
document.getElementById('translate').addEventListener('submit', function (translate) {
    let shiftKey = document.getElementById("shiftKey").value;
    translate.preventDefault();
    const text = document.getElementById('text').value;
    const option = document.querySelector('input[name="choice"]:checked').value;

    let decrypt = [];
    let encrypt = [];
    function isAlphabet(char) {
        let code = char.charCodeAt(0);
        return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
    }
    function isUpper(char) {
        let code = char.charCodeAt(0);
        return (code >= 65 && code <= 90);
    }
    function isLower(char) {
        let code = char.charCodeAt(0);
        return (code >= 97 && code <= 122);
    }
    if (option == 'encrypt') {
        for (let char of text) {
            if (isAlphabet(char)) {
                if (isUpper(char)) {
                    encrypt.push(String.fromCharCode(mod((char.charCodeAt(0)-'A'.charCodeAt(0)+parseInt(shiftKey)),26) + 'A'.charCodeAt(0)))
                }
                if (isLower(char)) {
                    encrypt.push(String.fromCharCode(mod((char.charCodeAt(0)-'a'.charCodeAt(0)+parseInt(shiftKey)),26) + 'a'.charCodeAt(0)))
                }
            }
            else {
                encrypt.push(char);
            }
        }
        let demo = encrypt.join("");
        console.log(demo);
        result.textContent = demo;
    }
    else if (option == 'decrypt') {
        for (let char of text) {
            if (isAlphabet(char)) {
                if (isUpper(char)) {
                    decrypt.push(String.fromCharCode(mod((char.charCodeAt(0)-'A'.charCodeAt(0)-parseInt(shiftKey)),26) + 'A'.charCodeAt(0)))
                        
                }
                if (isLower(char)) {
                    decrypt.push(String.fromCharCode(mod((char.charCodeAt(0)-'a'.charCodeAt(0)-parseInt(shiftKey)),26) + 'a'.charCodeAt(0)))
                } 
            }
            else {
                decrypt.push(char);
            }
        }
        let demo = decrypt.join("");
        console.log(demo);
        result.textContent = demo;
    }
    toggleCopyButton();
});
document.querySelectorAll('.options').forEach(button => { //ripple effect!!!
    button.addEventListener('click', function (e) {
        this.querySelectorAll('.ripple').forEach(r => r.remove()); //removes any existing ripples
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
        setTimeout(() => {
            ripple.remove();
        }, 300);
    });
});

