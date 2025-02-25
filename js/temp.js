function copyText(){
    const textToCopy = document.getElementById('result').innerText;
    if (textToCopy!="")
    {
        const popup = document.getElementById('popup')
        const temptext = document.createElement('textarea');
        temptext.value = textToCopy;
        document.body.appendChild(temptext);
        temptext.select();
        document.execCommand('copy');
        document.body.removeChild(temptext);
        popup.classList.add('show');
        popup.classList.remove('hide');
        setTimeout(()=>{
            popup.classList.add('hide');
            popup.classList.remove('show');
        }, 3000);
    } 
}
function pasteText(){
        navigator.clipboard.readText().then((text) => {
            document.getElementById("text").value = text;
        }).catch(err => {
            console.error("Failed to paste text: ", err);
        });
}
document.getElementById("radioW").addEventListener("click",()=>{
    const option = document.querySelector('input[name="choice"]:checked').value;
    if (option=="encrypt")
        document.getElementById("text").placeholder = "Type here to encrypt text";
    else
        document.getElementById("text").placeholder = "Type here to decrypt text";
});
document.getElementById('translate').addEventListener('submit', function (translate) {
    translate.preventDefault();
    const text = document.getElementById('text').value;
    const option = document.querySelector('input[name="choice"]:checked').value;
    const result = document.getElementById('result');
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
                    encrypt.push(String.fromCharCode((char.charCodeAt(0)-'A'.charCodeAt(0)+1)%26 + 'A'.charCodeAt(0)))
                }
                if (isLower(char)) {
                    encrypt.push(String.fromCharCode((char.charCodeAt(0)-'a'.charCodeAt(0)+1)%26 + 'a'.charCodeAt(0)))
                }
            }
            else {
                encrypt.push(char);
            }
            if (char=='\n')
            {
                encrypt.push('<br>');
            }
        }
        let demo = encrypt.join("");
        console.log(demo);
        result.innerHTML = demo;
    }
    else if (option == 'decrypt') {
        for (let char of text) {
            if (isAlphabet(char)) {
                if (isUpper(char)) {
                    decrypt.push(String.fromCharCode((char.charCodeAt(0)-'A'.charCodeAt(0)-1)%26 + 'A'.charCodeAt(0)))
                }
                if (isLower(char)) {
                    decrypt.push(String.fromCharCode((char.charCodeAt(0)-'a'.charCodeAt(0)-1)%26 + 'a'.charCodeAt(0)))
                } 
            }
            else {
                decrypt.push(char);
            }
            if (char=='\n')
                {
                    decrypt.push('<br>');
                }
        }
        let demo = decrypt.join("");
        console.log(demo);
        result.innerHTML = demo;
    }
});