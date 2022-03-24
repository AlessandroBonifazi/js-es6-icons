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
const container = document.getElementById('icon-container');

const animalIcon = iconLibrary.filter((element) => element.type === "animal");

const vegetableIcon = iconLibrary.filter((element) => element.type === "vegetable");

const userIcon = iconLibrary.filter((element) => element.type === "user");

const select = document.getElementById('select');

// Functions
function createIcon(array) {
    array.forEach((element) => {
        const iconFrame = document.createElement('div');
        iconFrame.classList.add('ab-iconCard');
        container.appendChild(iconFrame);
        iconFrame.innerHTML = `<div style="color:${element.color}"
        <i class="${element.family} ${element.prefix}${element.name} fa-2x"></i></div>
        <div><span>${element.name}</span></div>`;
    });
}

function iconToShow() {
    if (select.value === "all") {
        container.innerHTML = '';
        createIcon(iconLibrary);
    } else if (select.value === "user") {
        container.innerHTML = '';
        createIcon(userIcon);
    } else if (select.value === "animal") {
        container.innerHTML = '';
        createIcon(animalIcon);
    } else if (select.value === "vegetables") {
        container.innerHTML = '';
        createIcon(vegetableIcon);
    }
}