function calcularGanancia() {

        let tipo = document.getElementById("tipo").value;
        let tamano = Number(document.getElementById("tamano").value);
        let precio = Number(document.getElementById("precio").value);
        let kilos = Number(document.getElementById("kilos").value);

        let precioAjustado = 0;

        /**
         * reglas de ajuste
         */

        if (tipo === "P1") {
            precioAjustado = precio + (tamano === 1 ? 1200 : 830);
        } else if (tipo === "P2") {
            precioAjustado = precio - (tamano === 1 ? 540 : 350);
        }

       
        let ganancia = precioAjustado * kilos;

        /**
         * muestra el resultado en la pantalla
         */
        document.getElementById("gana").innerHTML =
            "La ganancia es: $" + ganancia;
    }