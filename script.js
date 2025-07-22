const vagasFixas = [
  { empresa: "Artemoda", modelo: "Polo", placa: "STV-3F39" },
  { empresa: "São Francisco", modelo: "Livina", placa: "LQK-8223" },
  { empresa: "Ceasa embalagens", modelo: "Ranger", placa: "FII-3662" },
  { empresa: "Ceasa embalagens", modelo: "Ecosport", placa: "EPB-1440" },
  { empresa: "Agencia CVC", modelo: "Ecosport", placa: "EBH-3439" },
  { empresa: "Despachante Xico", modelo: "HB20", placa: "FVU-5544" },
  { empresa: "Edylene Psique", modelo: "Azera", placa: "EYW-1802" },
  { empresa: "Edylene Psique", modelo: "Courier", placa: "FBD-1809" },
  { empresa: "Edylene Psique", modelo: "Nivus", placa: "SUG-2A89" },
  { empresa: "Bolinha", modelo: "Sonic", placa: "TJZ-5H83" },
  { empresa: "Bolinha", modelo: "Virtur", placa: "GCG-9G74" },
  { empresa: "Bolinha", modelo: "Amarok", placa: "FDW-6867" },
  { empresa: "Feelings", modelo: "Cruze", placa: "FBD-2141" },
  { empresa: "Feelings", modelo: "Livina", placa: "EUY-7523" },
  { empresa: "Kopenhagen", modelo: "Jetta", placa: "GHJ-3H35" },
  { empresa: "Lacore", modelo: "Duster", placa: "QNO-4J03" },
  { empresa: "Lacore", modelo: "Kicks", placa: "DWW-3J70" },
  { empresa: "Lacore", modelo: "Fiesta", placa: "FMS-1625" },
  { empresa: "Lojas Japonesa", modelo: "Uno", placa: "DED-0685" },
  { empresa: "Loja Josemar", modelo: "Renegade", placa: "FUU-5H93" },
  { empresa: "Mega Mix Cursos", modelo: "Compass", placa: "GIN-1J05" },
  { empresa: "Mega Mix Cursos", modelo: "Onix", placa: "FOB-1765" },
  { empresa: "Mega Mix Cursos", modelo: "Sonic", placa: "FIQ-0G16" },
  { empresa: "Oito Oito", modelo: "Polo", placa: "DSC-2D21" },
  { empresa: "Oito Oito", modelo: "Creta", placa: "BWW-1670" },
  { empresa: "Oito Oito", modelo: "Tracker", placa: "STC-8H49" },
  { empresa: "Otica Anne", modelo: "Prisma", placa: "DQM-7847" },
  { empresa: "Otica Anne", modelo: "HB20", placa: "BYQ-2B04" },
  { empresa: "Padihey", modelo: "Fox", placa: "EFX-5608" },
  { empresa: "Padihey", modelo: "Fiorino", placa: "FLV-5805" },
  { empresa: "Campestre", modelo: "Polo", placa: "SUV-8G86" },
  { empresa: "Campestre", modelo: "Fielder", placa: "DRB-2I47" },
  { empresa: "Sport Bike", modelo: "Siena", placa: "EFZ-9267" },
  { empresa: "Lojas Tropical", modelo: "Onix", placa: "TKB-4G62" },
  { empresa: "Tia Lina", modelo: "HR-V", placa: "BVT-0482" },
  { empresa: "Tia Lina", modelo: "Etios", placa: "FPJ-4990" },
  { empresa: "Tia Lina", modelo: "T-cross", placa: "ESE-6J34" },
  { empresa: "Vertice", modelo: "Onix", placa: "FYS-1D01" },
  { empresa: "Vertice", modelo: "kicks", placa: "FPQ-5F43" },
];

const corpoTabela = document.querySelector("#tabela tbody");
const filtroInput = document.getElementById("filtro");

// Função para remover acentos
function removerAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const sinonimos = {
  "agencia cvc": "ag cvc",
  "cvc": "ag cvc",
  "agencia": "ag cvc",
  "são francisco": "sao francisco",
  "sao": "sao francisco"
};

// Função para remover acentos
function removerAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Função para aplicar os sinônimos
function aplicarSinonimo(termo) {
  const chave = removerAcentos(termo.toLowerCase());
  return sinonimos[chave] || chave;
}

// Função para aplicar sinônimos a qualquer texto
function normalizarTexto(texto) {
  const textoSemAcento = removerAcentos(texto.toLowerCase());
  const palavras = textoSemAcento.split(" ");
  return palavras
    .map((palavra) => sinonimos[palavra] || palavra)
    .join(" ");
}

filtroInput.addEventListener("input", () => {
  let termo = filtroInput.value.trim();
  termo = aplicarSinonimo(termo);

  const filtrado = vagasFixas.filter((v) => {
    const empresa = normalizarTexto(v.empresa);
    const modelo = normalizarTexto(v.modelo);
    const placa = removerAcentos(v.placa.toLowerCase());

    return (
      empresa.includes(termo) ||
      modelo.includes(termo) ||
      placa.includes(termo)
    );
  });

  render(filtrado);
});




