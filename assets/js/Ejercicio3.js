function calcularTotal() {
    let cantidad = Number(document.getElementById("cantidad").value);
    let tipo = document.getElementById("tipoHamb").value;
    let pago = document.getElementById("pago").value;

    let precioUnit = 0;
    let totalSinCargo = 0;
    let cargo = 0;
    let totalFinal = 0;

   /**
    * Validación de la cantidad ingresada
    */
    if (cantidad <= 0 || isNaN(cantidad)) {
        document.getElementById("result").innerHTML = "¡Ingrese una cantidad válida!";
        return;
    }

    /**
     *  precio según el tipo de hamburguesa
     */
    if (tipo === "sencilla") {
        precioUnit = 20000;
    } else if (tipo === "doble") {
        precioUnit = 25000;
    } else {
        precioUnit = 28000;
    }

    // Cálculo del total sin cargo
    totalSinCargo = cantidad * precioUnit;

    // Si paga con tarjeta, el cargo es del 7%
    if (pago === "tarjeta") {
        cargo = totalSinCargo * 0.07;
    } else {
        cargo = 0;
    }

    totalFinal = totalSinCargo + cargo;

    // Mostrar datos
    document.getElementById("result").innerHTML =
        "Precio Unit.: $ " + precioUnit.toLocaleString("es-CO") + "<br>" +
        "Cantidad: " + cantidad + "<br>" +
        "Tipo de pago: " + pago.charAt(0).toUpperCase() + pago.slice(1) + "<br>" +
        "Total sin cargo: $ " + totalSinCargo.toLocaleString("es-CO") + "<br>" +
        "El cargo es: $ " + cargo.toLocaleString("es-CO") + "<br>" +
        "Total a pagar es: $ " + totalFinal.toLocaleString("es-CO");
}
