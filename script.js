// Lista de curiosidades sobre os lírios e a natureza
const curiosidades = [
    "Os lírios usam suas cores vibrantes e aroma adocicado para atrair polinizadores como abelhas e borboletas.",
    "Na agricultura sustentável, a presença de flores silvestres ajuda a manter o equilíbrio ecológico e controlar pragas naturalmente.",
    "O lírio é uma planta bulbosa, o que significa que ele armazena nutrientes embaixo da terra para sobreviver ao inverno e florescer na primavera!"
];

// Seleciona os elementos da página
const botao = document.getElementById('botao-curiosidade');
const painelMensagem = document.getElementById('mensagem-curiosidade');

// Adiciona o evento de clique ao botão
botao.addEventListener('click', () => {
    // Sorteia uma curiosidade da lista
    const indiceAleatorio = Math.floor(Math.random() * curiosidades.length);
    
    // Mostra o texto sorteado e exibe o bloco na tela
    painelMensagem.textContent = curiosidades[indiceAleatorio];
    painelMensagem.style.display = 'block';
});
