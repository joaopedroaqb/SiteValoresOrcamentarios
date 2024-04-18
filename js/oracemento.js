document.getElementById("comoFuncionaBtn").addEventListener("click", function() {
document.getElementById("modal").style.display = "block";
    });
document.getElementsByClassName("close")[0].addEventListener("click", function() {
document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
        }
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("profissionaisForm");
    const resultado = document.getElementById("resultado");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const valores = extrairValoresDosCampos();
        const total = calcularTotal(valores);
        exibirResultado(total);
    });

    function extrairValoresDosCampos() {
        const campos = form.querySelectorAll("input[type='number']");
        const valores = {};
        campos.forEach(function(campo) {
            valores[campo.id] = parseFloat(campo.value) || 0; 
        });
        return valores;
    }

    function calcularTotal(valores) {
        let total = 0;
        for (const key in valores) {
            if (valores.hasOwnProperty(key)) {
                const valor = valores[key];
                total += valor * obterValorPorCampo(key);
            }
        }
        return total.toFixed(2); 
    }

    function obterValorPorCampo(campoId) {
        const valorPorCargo = {
            "juniorAnalistaSistemas": 2500.00,
            "juniorDesenvolvedorSoftware": 2500.00,
            "juniorEngenheiroSoftware": 2750.00,
            "juniorAnalistaRedes": 2500.00,
            "juniorSuporteTecnico": 2300.00,
            "juniorGerenteProjetoTI": 3500.00,
            "juniorArquitetoSoftware": 3500.00,
            "juniorCientistaDados": 3500.00,
            "juniorEngenheiroDados": 3500.00,
            "juniorEspecialistaIA": 3500.00,
            "juniorDesignerUIUX": 3000.00,
            "juniorAnalistaTestes": 2500.00,
            "juniorDevOps": 3500.00,
            "plenoAnalistaSistemas": 4500.00,
            "plenoDesenvolvedorSoftware": 4500.00,
            "plenoEngenheiroSoftware": 5000.00,
            "plenoAnalistaRedes": 4500.00,
            "plenoSuporteTecnico": 3650.00,
            "plenoGerenteProjetoTI": 6000.00,
            "plenoArquitetoSoftware": 6000.00,
            "plenoCientistaDados": 6000.00,
            "plenoEngenheiroDados": 6000.00,
            "plenoEspecialistaIA": 6000.00,
            "plenoDesignerUIUX": 5000.00,
            "plenoAnalistaTestes": 4250.00,
            "plenoDevOps": 6000.00,
            "seniorAnalistaSistemas": 6750.00,
            "seniorDesenvolvedorSoftware": 6750.00,
            "seniorEngenheiroSoftware": 7500.00,
            "seniorAnalistaRedes": 6750.00,
            "seniorSuporteTecnico": 5250.00,
            "seniorGerenteProjetoTI": 9250.00,
            "seniorArquitetoSoftware": 9250.00,
            "seniorCientistaDados": 9250.00,
            "seniorEngenheiroDados": 9250.00,
            "seniorEspecialistaIA": 9250.00,
            "seniorDesignerUIUX": 7750.00,
            "seniorAnalistaTestes": 6750.00,
            "seniorDevOps": 9250.00,
        };
        return valorPorCargo[campoId] || 0; 
    }

    function exibirResultado(total) {
        resultado.textContent = "Total Estimado: R$ " + total;
    }
});
