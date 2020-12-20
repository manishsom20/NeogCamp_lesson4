console.log("App js initialised");

function translateToMinionese(){
    var minionese_box = document.querySelector('#minionese_text');
    var translate_text = document.querySelector("#translate_text").value;

    if(translate_text != ''){
        btnTranslate.innerText = "Please wait...";
        
        fetch("https://api.funtranslations.com/translate/minion.json"+"?text="+translate_text)
        .then(response => response.json())
        .then(data => {
            minionese_box.innerText = data.contents.translated;
            btnTranslate.innerText = "Translate to Minionese";
        })
        .catch(error => alert("Error with server: ", error))
    }
    else{
        console.log("else part: ", translate_text);
    }
}

var btnTranslate = document.querySelector('#btn_translate');

btnTranslate.addEventListener("click", translateToMinionese);