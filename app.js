var inputTextBox = document.querySelector('#translate-input');
var outputTextBox = document.querySelector('#translate-output');
var translateBtn = document.querySelector('#translate-button');



function eventHandler(){
    var valueInputTextBox = inputTextBox.value;
    var url = "	https://api.funtranslations.com/translate/numbers.json";
    fetch(url + "?" + "text=" + valueInputTextBox)
    .then(res => res.json())
    .then(data => 
        {var translatedText = data.contents.translated;
        outputTextBox.innerHTML = translatedText})
        .catch(() => alert("some error occured"));
}

translateBtn.addEventListener('click', eventHandler);