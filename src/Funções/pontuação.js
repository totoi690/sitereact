function calcularPontuacao(pontos, index, tema, cor, data) {
    if (tema.perguntas) {
        tema.perguntas[index].pontos === undefined ? tema.perguntas[index].pontos = pontos : tema.perguntas[index].pontos = tema.perguntas[index].pontos + pontos
    }
    if (cor !== undefined) {
        tema.perguntas[index].cor = cor
    }

    if (data !== undefined) {
        tema.perguntas[index].data = data
    }
}

export default calcularPontuacao