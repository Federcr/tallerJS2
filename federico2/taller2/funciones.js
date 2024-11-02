const palabras = [
    "Manzana", "Banano", "Naranja", "Pera", "Uva",
    "patilla", "Melon", "Fresa", "Piña", "Mango"
];


function agregarPalabra() {
    const lista = document.getElementById("lista");
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
    const li = document.createElement("li");
    li.textContent = palabras[indiceAleatorio];
    lista.appendChild(li);
}


const tasaDolar = 4000;
function convertirDolares() {  // Cambiado de 'convertir' a 'convertirDolares' para coincidir con el HTML
    const dolares = document.getElementById("dolares").value;
    const pesos = dolares * tasaDolar;
    document.getElementById("resultado").textContent = `${dolares} dólares = ${pesos} pesos`;
}


function convertirTemperatura() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = `${fahrenheit.toFixed(2)}°F`;
}


function agregarEmpleado() {
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const tabla = document.getElementById("tablaEmpleados").getElementsByTagName('tbody')[0];
    const fila = tabla.insertRow();
    fila.insertCell(0).textContent = codigo;
    fila.insertCell(1).textContent = nombre;
    document.getElementById("codigo").value = "";
    document.getElementById("nombre").value = "";
}


function toggleSeccion(id) {
    const parrafo = document.getElementById(id);
    if (parrafo.style.display === "none") {
        parrafo.style.display = "block";
    } else {
        parrafo.style.display = "none";
    }
}


function iniciarRastreoMouse() {
    document.addEventListener('mousemove', function(e) {
        document.getElementById('posicion').textContent = 
            `Posición X: ${e.clientX}, Posición Y: ${e.clientY}`;
    });
}


function iniciarDetectorTeclas() {
    document.addEventListener('keypress', function(e) {
        document.getElementById('resultado').innerHTML = 
            `Tecla: ${e.key} Código ASCII: ${e.keyCode}`;
    });
}