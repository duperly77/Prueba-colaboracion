function calcularSalario() {
            let horas = Number(document.getElementById("horas").value);
            let tarifa = Number(document.getElementById("tarifa").value);

            // Validación
            if (horas <= 0 || tarifa <= 0 || isNaN(horas) || isNaN(tarifa)) {
                document.getElementById("calcu").innerHTML = "¡Ingrese valores válidos!";
                return;
            }

            let salario = 0;

            // Cálculo con horas extra
            if (horas > 40) {
                let horasExtras = horas - 40;
                let pagoNormal = 40 * tarifa;
                let pagoExtra = horasExtras * (tarifa * 1.5);

                salario = pagoNormal + pagoExtra;
            } else {
                salario = horas * tarifa;
            }

            document.getElementById("calcu").innerHTML =
                "Salario del trabajador es: $ " + salario;
        }