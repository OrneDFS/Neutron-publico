let tablero = document.getElementById("tablero");
let ficha;
let fichaSeleccionada = false;
let movNeutron;
let movE;



cargarEventListeners();

function cargarEventListeners() {
    tablero.addEventListener("click", seleccionarCasilla);
    tablero.addEventListener("click", seleccionarFicha);
}



function seleccionarCasilla(e) {
    if (fichaSeleccionada === true) {

        if (e.target.classList.contains('casilla')) {
            var casilla = e.target;

            if (casilla.childNodes.length === 0 || casilla.childNodes.length === 2) {
                if (`${ficha.classList}` == `Neutron`) {
                    casilla.innerHTML = `<p class="${ficha.classList}">N</p>`;
                } else {
                    casilla.innerHTML = `<p class="${ficha.classList}">E</p>`;
                }

                ficha.remove();
            }
        }
    }
    fichaSeleccionada = false;
    return;
}

function seleccionarFicha(e) {
    if (movNeutron === false || movNeutron === undefined) {
        if (e.target.classList.contains('Neutron')) {
            let Neutron = e.target;

            ficha = Neutron;
            fichaSeleccionada = true;
            ficha.style.backgroundColor = "white";
            movNeutron = true;
            return;
        }
    }
    if (movNeutron === true) {

        if (e.target.classList.contains('ElectronA') && movE !== false) {
            ElectronA = e.target;
            ficha = ElectronA;
            fichaSeleccionada = true;
            ficha.style.backgroundColor = "white";

            movNeutron = false;
            movE = false;
            return;
        }
        if (e.target.classList.contains('ElectronB') && movE !== true) {
            let ElectronB = e.target;
            ficha = ElectronB;
            fichaSeleccionada = true;
            console.log(ElectronB)
            ficha.style.backgroundColor = "white";

            movNeutron = false;
            movE = true;
            return;
        }
    }
}