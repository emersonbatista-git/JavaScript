function sortearNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarJogo() {
  const numeros = [];
  while (numeros.length < 6) {
    const num = sortearNumero(1, 60);
    if (!numeros.includes(num)) {
      numeros.push(num);
    }
  }
  // Opcional: ordenar os números de forma crescente
  return numeros.sort((a, b) => a - b);
}

// Repetir 3 vezes
for (let i = 1; i <= 9; i++) {
  const jogo = gerarJogo();
  console.log(`Sorteio ${i}:`, jogo.join(', '));
}
