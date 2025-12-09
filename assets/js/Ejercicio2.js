function calcularDescuento() {
    let precio = Number(document.getElementById("precio").value);
    let descuento, porcentaje, totalPagar;

    /**
     * Validación del precio ingresado
     */
    if (precio <= 0 || isNaN(precio)) {
        document.getElementById("resul").innerHTML = "¡Ingrese un precio valido!";
        return;
    }

    /**
     * Selección del descuento
     */ 
    if (precio > 125000) {
        porcentaje = 0.35; 
    } else {
        porcentaje = 0.10; 
    }

    /**
     * Cálculo del descuento y total a pagar
     */
    descuento = precio * porcentaje;
    totalPagar = precio - descuento;

    /**
     * Mostrar resultados
     */
    document.getElementById("resul").innerHTML = 
        "Descuento: $ " + descuento.toLocaleString("es-CO") + "<br>" +
        "Porcentaje: " + porcentaje + " %<br>" +
        "Total a pagar: $ " + totalPagar.toLocaleString("es-CO");
}