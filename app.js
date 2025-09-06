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