// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtiene el botón y el contenedor principal del documento
    const modoNocturnoBtn = document.getElementById("modoNocturnoBtn");
    const contenedorPrincipal = document.getElementById("contenedorPrincipal");
    const caroid = document.getElementById("caroid");
    const caroidd = document.getElementById("caroidd");
    const caroid3 = document.getElementById("caroid3");
    const caroid4 = document.getElementById("caroid4");
    const caroid5 = document.getElementById("caroid5");
    const caroid6 = document.getElementById("caroid6");


    // Agrega un event listener al botón
    modoNocturnoBtn.addEventListener("click", function () {
        // Toggle entre clases para cambiar estilos
        contenedorPrincipal.classList.toggle("modo-nocturno");
        caroid.classList.toggle("modo-nocturno");
        caroidd.classList.toggle("modo-nocturno");
        caroid3.classList.toggle("modo-nocturno");
        caroid4.classList.toggle("modo-nocturno");
        caroid5.classList.toggle("modo-nocturno");
        caroid6.classList.toggle("modo-nocturno");

        // Puedes agregar lógica adicional aquí según sea necesario
    });
});
function mostrarInfoCreador() {
    
    var nombreCreador = "Carolina";
    var emailCreador = "carolinabelen85@gmail.com";
    var informacion = "Creado por: " + nombreCreador + "\nCorreo electrónico: " + emailCreador;

    
    alert(informacion);
}


document.getElementById("mostrarInfoCreador").addEventListener("click", mostrarInfoCreador);


