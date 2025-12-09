function calcularTotal() {
            let cantidad = Number(document.getElementById("cantidad").value);
            let precioUnitario = 0;
            let total = 0;

           /**
            * Validación de entrada
            */
            if (cantidad <= 0 || isNaN(cantidad)) {
                document.getElementById("calcula").innerHTML = "¡Ingrese una cantidad válida!";
                return;
            }

            /**
             * si compra 1000 o más unidades
             */
            if (cantidad >= 1000) {
                precioUnitario = 49850;
            } else { 
                precioUnitario = 71290;
            }

            /**
             * Cálculo del total
             */
            total = precioUnitario * cantidad;

            /**
             * Mostrar el resultado
             */
            document.getElementById("calcula").innerHTML = 
                "Total a pagar es: $ " + total;
        }
    
