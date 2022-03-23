// Debug
console.log('JS OK!');

// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona,
// in cui è presente il nome dell'icona e l'icona stessa.

// Ciascuna icona ha una proprietà "color":
// utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone
// (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select,
//  visualizzare solamente le icone corrispondenti.

// Config
const iconLibrary = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];

const container = document.getElementById('icon-container');

let animalIcon = iconLibrary.filter((element) => element.type === "animal");

let vegetableIcon = iconLibrary.filter((element) => element.type === "vegetable");

let userIcon = iconLibrary.filter((element) => element.type === "user");



// Functions
function createIcon(array) {
    array.forEach((element) => {
        const iconFrame = document.createElement('div');
        container.appendChild(iconFrame);
        iconFrame.innerHTML = `<div style="color:${element.color}"<i class="${element.family} ${element.prefix}${element.name} fa-2x"></i>
        <p>${element.name}</p></div>`;
    });
}

createIcon(iconLibrary);