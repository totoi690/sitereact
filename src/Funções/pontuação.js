function calcularPontuacao(pontos, index, tema, cor) {
    if (tema.perguntas) {
        tema.perguntas[index].pontos === undefined ? tema.perguntas[index].pontos = pontos : tema.perguntas[index].pontos = tema.perguntas[index].pontos + pontos
    }
    if (cor !== undefined) {
        tema.perguntas[index].cor = cor
    }
}

export default calcularPontuacao