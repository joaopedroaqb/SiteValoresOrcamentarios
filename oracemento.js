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
            "juniorAnalistaSistemas": 3000.00,
            "juniorDesenvolvedorSoftware": 3000.00,
            "juniorEngenheiroSoftware": 3250.00,
            "juniorAnalistaRedes": 3000.00,
            "juniorSuporteTecnico": 2500.00,
            "juniorGerenteProjetoTI": 4000.00,
            "juniorArquitetoSoftware": 4000.00,
            "juniorCientistaDados": 4000.00,
            "juniorEngenheiroDados": 4000.00,
            "juniorEspecialistaIA": 4000.00,
            "juniorDesignerUIUX": 3500.00,
            "juniorAnalistaTestes": 3000.00,
            "juniorDevOps": 4000.00,
            "plenoAnalistaSistemas": 5000.00,
            "plenoDesenvolvedorSoftware": 5000.00,
            "plenoEngenheiroSoftware": 5500.00,
            "plenoAnalistaRedes": 5000.00,
            "plenoSuporteTecnico": 4150.00,
            "plenoGerenteProjetoTI": 7000.00,
            "plenoArquitetoSoftware": 7000.00,
            "plenoCientistaDados": 7000.00,
            "plenoEngenheiroDados": 7000.00,
            "plenoEspecialistaIA": 7000.00,
            "plenoDesignerUIUX": 6000.00,
            "plenoAnalistaTestes": 5100.00,
            "plenoDevOps": 7000.00,
            "seniorAnalistaSistemas": 8000.00,
            "seniorDesenvolvedorSoftware": 8000.00,
            "seniorEngenheiroSoftware": 9000.00,
            "seniorAnalistaRedes": 8000.00,
            "seniorSuporteTecnico": 6250.00,
            "seniorGerenteProjetoTI": 11000.00,
            "seniorArquitetoSoftware": 11000.00,
            "seniorCientistaDados": 11000.00,
            "seniorEngenheiroDados": 11000.00,
            "seniorEspecialistaIA": 11000.00,
            "seniorDesignerUIUX": 9250.00,
            "seniorAnalistaTestes": 8000.00,
            "seniorDevOps": 11000.00,
        };
        return valorPorCargo[campoId] || 0; 
    }

    function exibirResultado(total) {
        resultado.textContent = "Total Estimado: R$ " + total;
    }
});
