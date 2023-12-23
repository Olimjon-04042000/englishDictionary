const search = document.querySelector('.search-img');
const input = document.querySelector('.input');
const warning = document.querySelector('.warning');
const wordd = document.querySelector('.word');
const phonetic = document.querySelector('.phonetic');
const play = document.querySelector('.play');
const result = document.querySelector('.result');

function newWord(word) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(res => res.json())
        .then(data => wordMeaning(data))
        .catch(error => {
            console.log(error);
        })
}

let searchWord;
search.addEventListener('click', function() {
    if (input.value) {
        searchWord = input.value;
        // console.log(searchWord);
        newWord(searchWord);
        warning.style.display = 'none';
        setTimeout(() => {
            result.style.display = 'block';
        }, 300);
        setTimeout(() => {
            input.value = '';
        }, 200);
    } else {
        warning.style.display = 'block';
        result.style.display = 'none';

    }

})

function wordMeaning(word) {
    console.dir(word);
    console.log(word.title);
    if (!word.title) {
        wordd.textContent = word[0].word;
        phonetic.textContent = word[0].phonetic;
        // play.addEventListener('click', {
        //     word[0].phonetics

        // })
    }
}