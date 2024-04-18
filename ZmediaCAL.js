const fs = require('fs');

function lerDadosJson(nomeArquivo) {
  try {
    const dados = fs.readFileSync(nomeArquivo, 'utf8');
    return JSON.parse(dados);
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
    return null;
  }
}

const dadosCargos = lerDadosJson('cargos.json');

function calcularMediaSalarial(cargos) {
  const medias = {};
  cargos.forEach(cargo => {
    medias[cargo.cargo] = {};
    Object.keys(cargo.nivel).forEach(nivel => {
      const salario = cargo.nivel[nivel].salario.split(' - ');
      const salarioMin = parseInt(salario[0].replace('R$ ', '').replace('.', ''));
      const salarioMax = parseInt(salario[1].replace('R$ ', '').replace('.', ''));
      const media = (salarioMin + salarioMax) / 2;
      medias[cargo.cargo][nivel] = media;
    });
  });
  return medias;
}

function calcularMediaSalarialPorNivel(cargos) {
  const mediasPorNivel = {};
  cargos.forEach(cargo => {
    Object.keys(cargo.nivel).forEach(nivel => {
      if (!mediasPorNivel[nivel]) {
        mediasPorNivel[nivel] = [];
      }
      const salario = cargo.nivel[nivel].salario.split(' - ');
      const salarioMin = parseInt(salario[0].replace('R$ ', '').replace('.', ''));
      const salarioMax = parseInt(salario[1].replace('R$ ', '').replace('.', ''));
      const media = (salarioMin + salarioMax) / 2;
      mediasPorNivel[nivel].push(media);
    });
  });

  Object.keys(mediasPorNivel).forEach(nivel => {
    const media = mediasPorNivel[nivel].reduce((acc, curr) => acc + curr, 0) / mediasPorNivel[nivel].length;
    mediasPorNivel[nivel] = media;
  });

  return mediasPorNivel;
}

const mediaSalarialPorCargoENivel = calcularMediaSalarial(dadosCargos.cargos);
console.log('Média Salarial por Cargo e Nível:', mediaSalarialPorCargoENivel);

const mediaSalarialPorNivel = calcularMediaSalarialPorNivel(dadosCargos.cargos);
console.log('Média Salarial por Nível:', mediaSalarialPorNivel);
