document.getElementById('translate').addEventListener('submit', function (translate) {
    translate.preventDefault();
    const text = document.getElementById('text').value;
    const option = document.querySelector('input[name="choice"]:checked').value;
    const result = document.getElementById('result')
    let decrypt = []
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
        console.log(text)
        for (let char of text) {
            if (isAlphabet(char)) {
                if (isAlphabet(String.fromCharCode(char.charCodeAt(0) + 1)) && (isLower(char) == isLower(String.fromCharCode(char.charCodeAt(0) + 1)) || isUpper(char) == isUpper(String.fromCharCode(char.charCodeAt(0) + 1)))) {
                    decrypt.push(String.fromCharCode(char.charCodeAt(0) + 1))
                }
                else {
                    if (isLower(char)) //if it is a capital letter
                    {
                        if (isAlphabet((String.fromCharCode(('a'.charCodeAt(0) + 1 - ('z'.charCodeAt(0) - char.charCodeAt(0))) - 1)))) {
                            decrypt.push(String.fromCharCode(('a'.charCodeAt(0) + 1 - ('z'.charCodeAt(0) - char.charCodeAt(0))) - 1));
                        }
                    }
                    if (isUpper(char)) //if it is a capital letter
                    {
                        if (isAlphabet((String.fromCharCode(('A'.charCodeAt(0) + 1 - ('Z'.charCodeAt(0) - char.charCodeAt(0))) - 1)))) {
                            decrypt.push(String.fromCharCode(('A'.charCodeAt(0) + 1 - ('Z'.charCodeAt(0) - char.charCodeAt(0))) - 1));
                        }
                    }
                }
            }
            else {
                decrypt.push(char)
            }
        }
        let demo = decrypt.join("")
        console.log(demo)
        result.innerHTML = demo
    }
    else if (option == 'decrypt') {
        //Awaiting code!
    }
});