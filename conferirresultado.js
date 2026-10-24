/**
 * Confere os acertos de jogos da Mega-Sena.
 * 
 * @param {Array<number>} resultado - Array com as 6 dezenas sorteadas.
 * @param {Array<Array<number>>} apostas - Matriz contendo os jogos feitos (cada jogo é um array de números).
 */
function conferirMegaSena(resultado, apostas) {
    // Transforma o resultado em um Set para buscas mais rápidas O(1)
    const numerosSorteados = new Set(resultado);

    console.log(`🏆 RESULTADO DO SORTEIO: [${resultado.sort((a, b) => a - b).join(', ')}]\n`);

    apostas.forEach((aposta, index) => {
        // Filtra os números da aposta que estão no resultado
        const acertos = aposta.filter(numero => numerosSorteados.has(numero));
        const quantidadeAcertos = acertos.length;

        // Determina a faixa de premiação
        let premio = "Não pontuou";
        if (quantidadeAcertos === 6) premio = "🥇 SENA!";
        else if (quantidadeAcertos === 5) premio = "🥈 QUINA!";
        else if (quantidadeAcertos === 4) premio = "🥉 QUADRA!";

        // Exibe o resultado de cada jogo formatado
        console.log(`Jogo #${index + 1}: [${aposta.sort((a, b) => a - b).join(', ')}]`);
        console.log(`👉 Acertos: ${quantidadeAcertos} ${quantidadeAcertos > 0 ? `(${acertos.join(', ')})` : ''}`);
        console.log(`💰 Status: ${premio}\n`);
    });
}

// === EXEMPLO DE USO ===

// O resultado oficial do sorteio (6 números)
const resultadoOficial =[12,22,41,45,51,52];

// Seus jogos feitos (suporta jogos de 6 a 20 dezenas)
const meusJogos = [
    [12, 21, 29, 50, 51, 53],
    [22, 26, 30, 36, 43, 47],
    [7, 17, 24, 32, 50, 53],
    [3, 5, 36, 39, 41, 43],
    [4, 11, 25, 26, 45, 56],
    [13, 27, 28, 49, 54, 55],
    [3, 13, 40, 42, 49, 57],
    [5, 7, 16, 26, 30, 35],
    [4, 10, 25, 32, 37, 38]



];

// Executa a checagem
conferirMegaSena(resultadoOficial, meusJogos);
