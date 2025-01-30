document.getElementById('translate').addEventListener('submit',function (translate){
    translate.preventDefault();
    const text = document.getElementById('text').value;
    const option = document.querySelector('input[name="choice"]:checked').value;
    const result = document.getElementById('result')
    if (option=='encrypt')
    {
        result.innerHTML = text;
    }
    else if (option=='decrypt')
    {
        result.innerHTML = text;
    }
});