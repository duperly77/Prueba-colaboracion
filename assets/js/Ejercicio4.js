function calcularEnvio() {
    let peso = Number(document.getElementById("peso").value);
    let zona = Number(document.getElementById("zona").value);

    let costoPorGramo = 0;
    let costoTotal = 0;

    // Validar peso
    if (peso <= 0 || isNaN(peso)) {
        document.getElementById("res").innerHTML = "¡Ingrese un peso válido!";
        return;
    }

    // Si supera 85 kg, no se transporta
    if (peso > 85) {
        document.getElementById("res").innerHTML =
            "El paquete con peso de " + peso + " kg excede el peso permitido";
        return;
    }

    // Validar zona
    if (zona < 1 || zona > 5 || isNaN(zona)) {
        document.getElementById("res").innerHTML = "¡Zona no valida!";
        return;
    }

    // Asignar costo según zona
    if (zona === 1) costoPorGramo = 210;
    else if (zona === 2) costoPorGramo = 180;
    else if (zona === 3) costoPorGramo = 220;
    else if (zona === 4) costoPorGramo = 340;
    else costoPorGramo = 370; // zona 5

    // Convertir kg a gramos
    let gramos = peso * 1000;

    // Costo total
    costoTotal = gramos * costoPorGramo;

    document.getElementById("res").innerHTML =
        "Valor: $ " + costoTotal;
}