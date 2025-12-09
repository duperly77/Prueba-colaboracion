function calcularPresupuesto() {
    let personas = Number(document.getElementById("personas").value);
    let costoPorPersona;
    let total;

    if (personas <= 0 || isNaN(personas)) {
        document.getElementById("costo").innerHTML = "¡Ingrese un número válido!";
        return;
    }

    if (personas <= 200) {
        costoPorPersona = 25000;
    } else if (personas <= 300) {
        costoPorPersona = 18500;
    } else {
        costoPorPersona = 16000;
    }

    total = personas * costoPorPersona;

    document.getElementById("costo").innerHTML = 
        "El presupuesto total es: $ " + total;
}