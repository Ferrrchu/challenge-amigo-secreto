let listaAmigos = [];

function agregarAmigo() {
    let amigoNuevo = document.getElementById("amigo").value;
    console.log(amigoNuevo);
    if (amigoNuevo.trim() == '') {
        alert("Error: Debes ingresar un nombre.");
    } else {
        if (listaAmigos.includes(amigoNuevo)) {
            alert("Error: Ese nombre ya fue ingresado.");
        } else {
            listaAmigos.push(amigoNuevo);
            console.log(listaAmigos);
            document.getElementById("amigo").value = "";
            actualizarListaAmigos();
        };
    };
};

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        let nuevoElementoLista = document.createElement('li');
        nuevoElementoLista.innerHTML = listaAmigos[i];
        lista.appendChild(nuevoElementoLista);
    };
};

function sortearAmigo() {
    if (listaAmigos.length == 0) {
        alert("Error: La lista esta vacía.");
    } else {
        console.log(listaAmigos.length);
        let sorteo = Math.floor(Math.random() * listaAmigos.length);
        let textoResultado = document.getElementById("resultado");
        textoResultado.innerHTML = listaAmigos[sorteo];
    };
};