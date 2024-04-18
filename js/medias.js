document.addEventListener("DOMContentLoaded", function () {
    // Carregar os dados do arquivo JSON
    fetch('cargos.json')
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById('cargos');
            const mediaSalarial = document.getElementById('mediaSalarial');

            // Preencher o dropdown com os cargos
            data.cargos.forEach(cargo => {
                const option = document.createElement('option');
                option.text = cargo.cargo;
                option.value = JSON.stringify(cargo.nivel);
                select.add(option);
            });

            // Evento de mudança no dropdown
            select.addEventListener('change', () => {
                const selectedCargo = JSON.parse(select.value);
                mediaSalarial.innerHTML = ''; // Limpar a div

                // Exibir a média salarial do cargo selecionado
                Object.keys(selectedCargo).forEach(nivel => {
                    const salario = selectedCargo[nivel].salario;
                    const paragraph = document.createElement('p');
                    paragraph.textContent = `${nivel}: ${salario}`;
                    mediaSalarial.appendChild(paragraph);
                });
            });
        })
        .catch(error => console.error('Erro ao carregar os dados:', error));
});
