// Radiobuttons
const vidabela = document.getElementById("vidabela");
const pianista = document.getElementById("pianista");
const stalker = document.getElementById("stalker");
const central = document.getElementById("central");
const paradiso = document.getElementById("paradiso");

// Botão para submeter usuário
const button_form = document.getElementById("button_form");

// Variável que irá armazenar o radiobutton selecionado
let radioClicked = null;

function checked(radiobutton){
    let radios = [vidabela, pianista, stalker, central, paradiso];

    for (const radio of radios) {    // Remove da lista o elemento clicado
        if (radio === radiobutton){
            radios.splice(radios.indexOf(radio), 1);
            if (radio.checked){
                radioClicked = radio;
            } else {
                radioClicked = null;
            }
        }
    }

    for (const radio of radios){
        radio.checked = false;
    }
}

// Adicionando eventos aos radiobuttons
vidabela.addEventListener("click", () => checked(vidabela));
pianista.addEventListener("click", () => checked(pianista));
stalker.addEventListener("click", () => checked(stalker));
central.addEventListener("click", () => checked(central));
paradiso.addEventListener("click", () => checked(paradiso));

// Adicionando botão para submeter resposta
button_form.addEventListener("click", () => {
    if (radioClicked){
        const label = document.querySelector(`label[for="${radioClicked.id}"]`);
        alert("Você elegeu " + label.innerText + " como o melhor filme!");
    } else {
        alert("Nenhum radiobutton selecionado!");
    }
})