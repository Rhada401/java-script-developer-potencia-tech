// Informando o que vou fazer, as funçôes
function changeMode() {

    let elements = [ body, footer, button, pageTitle]

    elements.forEach(element => {
        element.classList.toggle('dark-mode');
});

if (body.classList.contains('dark-mode')) {
    pageTitle.textContent = "Dark Mode On";
    button.textContent = "Light Mode";
} else {
    pageTitle.textContent = "Light Mode On";
    button.textContent = "Dark Mode";
}
}


// Chamanda pela Tag e Id, usando o [0] para informar que queremos o 1* das tags

const pageTitle = document.getElementById('page-title');
const button = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];



button.addEventListener('click', changeMode);

