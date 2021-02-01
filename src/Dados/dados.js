let Dados = {
    biologia: {
        nome: "Biologia",
        id: 1,
        temas: {
            sistemacardiovascular: {
                nome: "Sistema Cardiovascular",
                id: 1,
                gif: "https://i.pinimg.com/originals/fd/5f/db/fd5fdb1bb1b91faab600b253bcddc101.gif",
                perguntas: [{
                    topico: "Sangue",
                    perguntas: [{
                        pergunta: "Quais as diferenças entre sangue venoso e sangue arterial?",
                        resposta: "VENOSO: sangue pobre em oxigênio e rico em CO2.<br>ARTERIAL: sangue rico em oxigênio e pobre em CO2."
                    }, {
                        pergunta: "Quais as diferenças entre veias e artérias?",
                        resposta: "VEIAS: vaso que CHEGA do coração, com válvulas. ARTÉRIAS: vaso que SAI do coração, parede mais grossa"
                    }, ]
                }, {
                    topico: "Coração",
                    perguntas: [{
                            pergunta: "Quantos átrios e quantos ventrículos tem no coração?",
                            resposta: "2 átrios e 2 ventrículos"
                        },
                        {
                            pergunta: "Qual artéria sai do coração e leva o sangue pro corpo?",
                            resposta: "Artéria aorta"
                        }, {
                            pergunta: "O sangue chega nos átrios ou ventrículos? Sai por onde?",
                            resposta: "Chega nos átrios e sai dos ventrículos"
                        }, {
                            pergunta: "Qual átrio recebe sangue venoso? De quais vasos? De onde os vasos vêm?",
                            resposta: "Átrio DIREITO, das VEIAS CAVAS SUPERIOR E INFERIOR, vêm do CORPO"
                        }, {
                            pergunta: "Qual ventrículo envia sangue venoso? Para qual órgão? Por meio de qual vaso?",
                            resposta: "Ventrículo DIREITO, para o PULMÃO, por meio da ARTÉRIA PULMONAR"
                        }, {
                            pergunta: "Qual átrio recebe sangue arterial? De quais vasos",
                            resposta: "Átrio ESQUERDO, das VEIAS CAVAS SUPERIOR E INFERIOR, vêm do CORPO"
                        }, {
                            pergunta: "Qual ventrículo recebe sangue arterial? Para qual órgão? Por meio de qual vaso?",
                            resposta: "Ventrículo DIREITO, para o PULMÃO, por meio da ARTÉRIA PULMONAR"
                        }, {
                            pergunta: "Quais são as quatro válvulas cardíacas? Onde cada uma fica?",
                            resposta: "TRÍCÚSPIDE: entre o átrio direito e o ventrículo direito<br>BICÚSPIDE: entre o átrio esquerdo e o ventrículo esquerdo<br>AÓRTICA: na entrada da artéria aórta<br>TRÍCÚSPIDE: na entrada da artéria pulmonar"
                        }, {
                            pergunta: "Caracterize os movimentos de sístole e diástole, dizendo em qual o sangue entra e em qual sai",
                            resposta: "SÍSTOLE: CONTRAÇÃO → sangue entra no coração <br> DÍALOLE: RELAXAMENTO → sangue saí do coração"
                        },
                    ]
                }, ]
            },
            ecologia: {
                nome: "Ecologia",
                id: 2,
                gif: "https://cdn.dribbble.com/users/969828/screenshots/2857364/food_chain_dribbble_v2.gif",
                perguntas: [{
                    topico: "Cadeia alimentar",
                    perguntas: [{
                        pergunta: "O que é uma cadeia alimentar",
                        resposta: "sei la",
                    }, ]
                }, ]
            },
            botânica: {
                nome: "Botânica",
                id: 3,
                gif: "https://media0.giphy.com/media/1iLVjz6PbgRuOOxa/giphy.gif",
                perguntas: [{
                    topico: "Flor",
                    perguntas: [{
                        pergunta: "O que é uma planta?",
                        resposta: "floi"
                    }, ]
                }, ]
            },
            biotecnologia: {
                nome: "Biotecnologia",
                id: 4,
                gif: "https://thumbs.gfycat.com/InfatuatedCleverInexpectatumpleco-max-1mb.gif",
                perguntas: [{
                    topico: "DNA Recombinante",
                    perguntas: [{
                            pergunta: "O que é?",
                            resposta: "Molécula híbrida de DNA obtida pela união de moléculas de DNA de fontes biologicamente diferentes",
                        },
                        {
                            pergunta: "Como é feito?",
                            resposta: "Corte de moléculas de DNA em que se tem interesse e ligação das extremidades",
                        },
                        {
                            pergunta: "Quais enzimas são utilizadas e quais suas funções?",
                            resposta: `- <span class="bold">Enzimas de restrição</span>: corte do DNA nos segmentos escolhidos <br>
                        - <span class="bold">DNA ligase</span>: ligação das extremidades`,
                        },
                    ]
                }, {
                    topico: "Organismos geneticamente modificados",
                    perguntas: [{
                            pergunta: "O que é?",
                            resposta: "É um organismo que teve seu material genético modificado por alguma técnica de engenharia genética"
                        },
                        {
                            pergunta: "Qual a diferença para um organismo transgênico?",
                            resposta: "Um organismo só é chamado de transgênico quando são incorporados genes de OUTRA ESPÉCIE"
                        },
                        {
                            pergunta: "Cite algumas aplicações",
                            resposta: `- Produção de medicamentos
                        - Variação de plantas resistentes a pragas
                        - Aumento do valor nutricional de alimentos"`
                        }
                    ]
                }, {
                    topico: "Teste de DNA",
                    perguntas: [{
                            pergunta: "Cite algumas aplicações",
                            resposta: "É um organismo que teve seu material genético modificado por alguma técnica de engenharia genética"
                        },
                        {
                            pergunta: "Como analisar?",
                            resposta: "Um organismo só é chamado de transgênico quando são incorporados genes de OUTRA ESPÉCIE"
                        },
                        {
                            pergunta: "<span class='bold'>EXERCÍCIO:</span> Com as fitas de DNA a seguir, identifique quem é mais provável de ser o filho biológico dos pais",
                            imagemPergunta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f311b7ef-47b1-4ac3-9506-630deb658945/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210129T191347Z&X-Amz-Expires=86400&X-Amz-Signature=e51e714eb0ee8a73cdbf577e90bdea7fcd8eff5a5bb714033f5d936473d9f7b4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22",
                            resposta: `O filho é o indivíduo III`
                        }
                    ]
                }, {
                    topico: "PCR",
                    perguntas: [{
                        pergunta: "O que é?",
                        resposta: "Multiplicação de um trecho específico do DNA milhares de vezes sem a utilização de organismos vivos"
                    }]
                }]
            },            
            conducaodeseiva: {
                nome: "Condução de Seiva",
                id: 5,
                gif: "https://media4.giphy.com/media/3oEjHOUcNRKgpqTHiM/giphy.gif",
                perguntas: [{
                    topico: "Xilema",
                    perguntas: [{
                        pergunta: "Pelo que é composto?",
                        resposta: "Água e sais minerais"
                    },{
                        pergunta: "Quais são os dois tipos de células condutoras do xilema? Quais as caracteristicas de cada uma?",
                        resposta: "<span class='bold'>Traqueídes</span> são células finas. Na extremidade de cada traqueíde, assim como lateralmente, há uma série de pontuações ou poros (pequeníssimos orifícios) que permitem a passagem de seiva no sentido longitudinal e lateral. <br> Menores que as traqueídes, porém mais longos , os <span class='bold'>elementos de vaso</span> também possuem pontuações laterais que permitem a passagem da seiva. Sua principal característica é que em suas extremidades as paredes são perfuradas, isto é, não há parede divisória totalmente isolante entre uma e outra célula."
                    }, {
                        pergunta: "Além da função de condução da seiva, os vasos do xilema também apresentam outra função muito importante. Qual? Que substância permite isso?",
                        resposta: "Função de SUSTENTAÇÃO, por meio da impregnação com a LIGNINA"
                    },{
                        pergunta: "Quais os quatro mecanismos utilizados para a condução da seiva inorgânica? Qual o sentido da condução?",
                        resposta: "Pressão da raiz, coesão e adesão, transpiração e fotossíntese. Sentido raiz → folhas"
                    },{
                        pergunta: "Quais são as duas vias de transporte horizontal?",
                        resposta: "Apoplasto (entre as paredes celulares) e simplasto (Pelo interior do xilema com transporte ativo)"
                    }, ]
                }, {
                    topico: "Floema",
                    perguntas: [{
                        pergunta: "Pelo que é composto?",
                        resposta: "Água e substâncias orgânicas"
                    },{
                        pergunta: "Qual a estrutura do floema?",
                        imagemResposta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a1cbba7e-8c6f-4a64-aaec-725c60007dc8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210130T202325Z&X-Amz-Expires=86400&X-Amz-Signature=ffa43108b27e7dfafaa21f965ee592a952d0f7a5838467ee9ed76edcdc2cfd2d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
                    }, {
                        pergunta: "O que é a hipótese de Munch?",
                        resposta: "Água sai do xilema, vai pro floema e 'arrasta' as substâncias para baixo; depois, a água volta para o floema",
                        imagemResposta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f9bd17ca-7616-4fa4-8c89-c91491c857f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210130T202414Z&X-Amz-Expires=86400&X-Amz-Signature=c1d4a5b89cc07efa0ceae8240004f873d5f6228521fd0118c8fa52bc0e1b9499&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
                    },{
                        pergunta: "O que é o experimento de Malpighi? Quais as consequências? O que ele prova?",
                        resposta: "Retirada de um anel superficial do tronco da árvore (retirada do floema)",
                        imagemResposta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/500979a0-8155-4d83-a07b-1ccc1e678ffc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210130T202450Z&X-Amz-Expires=86400&X-Amz-Signature=f05436e5879db9ab3fcd2e8feff08b64b1c237b9051139e8f08da88dc25bcaec&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
                    },{
                        pergunta: "Qual o sentido de condução do floema?",
                        resposta: "Embora o sentido normal seja folha→raiz, o xilema pode percorrer o caminho inverso"
                    }, ]
                }, ]
            },
        }
    },
    matematica: {
        nome: "Matemática",
        id: 2,
        temas: {
            geometriaplana: {
                nome: "Geometria Plana",
                id: 1,
                gif: "https://i.pinimg.com/originals/96/f9/30/96f93060084041a239833eaa77286cdf.gif",
                perguntas: [{
                    topico: "Triângulos",
                    perguntas: [{
                        pergunta: "O que é um triângulo?",
                        resposta: "Figura com 3 lados"
                    }, ]
                }, ]
            },
        }
    },
    fisica: {
        nome: "Fisica",
        id: 3,
        temas: {
            gravitacao: {
                nome: "Gravitação",
                id: 1,
                gif: "https://i.gifer.com/77Yr.gif",
                perguntas: [{
                    topico: "Gravidade",
                    perguntas: [{
                        pergunta: "O que é a gravidade?",
                        resposta: "Sei lá, responde aí Newton",
                        imagemPergunta: "https://i.makeagif.com/media/6-30-2015/2pZiZJ.gif"
                    }, {
                        pergunta: "Pergunta 02?",
                        resposta: "Sei lá, responde aí Newton",
                        imagemPergunta: "https://i.makeagif.com/media/6-30-2015/2pZiZJ.gif"
                    }]
                }],
            }
        }
    },
    geografia: {
        nome: "Geografia",
        id: 4,
        temas: {
            blocoseconomicos: {
                nome: "Blocos Econômicos",
                id: 1,
                gif: "https://files.bastter.com/outros/6745f643-94e6-49b3-9eb1-8b59616741c1.gif",
                perguntas: [{
                    topico: "Principais blocos",
                    perguntas: [{
                            pergunta: "Quais são as fases de blocos econômicos?",
                            resposta: "Zona de livre comércio, união aduaneira, mercado comum e união monetária"
                        },
                        {
                            pergunta: "Do que se trata a Zona de Livre Comércio? Cite um exemplo!",
                            resposta: "- Livre circulação de mercadoria e bens (menor taxa de importação e investimento); ex:UMSCA"
                        },
                    ]
                }, ]
            },
            globalizacao: {
                nome: "Globalização",
                id: 2,
                gif: "https://www.mckinsey.com/~/media/McKinsey/Email/Shortlist/52/hero.jpg",
                perguntas: [{
                    topico: "Definição",
                    perguntas: [{
                        pergunta: "O que é a globalização?",
                        resposta: "A globalização é um processo de integração social, econômica e cultural entre as diferentes regiões do planeta."
                    }, ]
                }, ]
            }
        }
    },
    literatura: {
        nome: "Literatura",
        id: 5,
        temas: {
            trovadorismo: {
                nome: "Trovadorismo",
                id: 1,
                gif: "https://static.wixstatic.com/media/a1dc11_f9c3f1242b0f470f8703ed41beab2f80.gif",
                perguntas: [{
                    topico: "Não Sei",
                    perguntas: [{
                        pergunta: "Qual o tipo de verso mais comum?",
                        resposta: "Redondilhas"
                    }, ]
                }, {
                    topico: "topico 2",
                    perguntas: [{
                        pergunta: "Pergunta 2",
                        resposta: "Redondilhas"
                    }, ]
                }, ]
            }
        }
    },
    química: {
        nome: "Química",
        id: 6,
        temas: {
            eletroquimica: {
                nome: "Eletroquímica",
                id: 1,
                gif: "https://media2.giphy.com/media/l0MYD0wjKQ84goG6A/giphy.gif",
                perguntas: [{
                    topico: "Pilha",
                    perguntas: [{
                            pergunta: "A pilha é uma reação forçada ou espontânea?",
                            resposta: "Espontânea"
                        },
                        {
                            pergunta: "Foto da pilha teste",
                            resposta: "resposta",
                            imagemPergunta: "https://media.istockphoto.com/vectors/vector-illustration-of-batteries-vector-id986154016?k=6&m=986154016&s=612x612&w=0&h=Ok4svKDSLA523nLNCwekp1UkUMtEyVv0QIPCbx22qxo=",
                            imagemResposta: "https://i.pinimg.com/originals/3a/d8/25/3ad825fa000c3a6c7037e981472d4b1a.gif"
                        },
                    ]
                }, ]
            },
            radioatividade: {
                nome: "Radioatividade",
                id: 2,
                gif: "https://media2.giphy.com/media/l2Je7a6s6zNKXPD1e/giphy.gif",
                perguntas: [{
                    topico: "Conceitos básicos",
                    perguntas: [{
                            pergunta: "Quais são os três tipos principais de radiação?",
                            resposta: `Alfa, Beta e Gama`
                        },
                        {

                        }
                    ]
                }]
            }
        }
    },
    gramática: {
        nome: "Gramática",
        id: 7,
        temas: {
            sintaxe: {
                nome: "Sintaxe",
                id: 1,
                gif: "https://data.whicdn.com/images/141073945/original.gif",
                perguntas: [{
                    topico: "Sujeitos",
                    perguntas: [{
                        pergunta: "O que é um sujeito simples?",
                        resposta: "Visível e com apenas um núcleo"
                    }, ]
                }, ]
            }
        }
    },
    filosofia: {
        nome: "Filosofia",
        id: 8,
        temas: {
            filosofiaclassica: {
                nome: "Filosofia Clássica",
                id: 1,
                gif: "https://classicalwisdom.com/wp-content/uploads/2015/09/Plato-and-Aristotle-gif.gif",
                perguntas: [{
                    topico: "Sócrates",
                    perguntas: [{
                        pergunta: "Qual a frase famosa de Sócrates?",
                        resposta: '"Só sei que nada sei"',
                        imagemPergunta: "https://vegazeta.com.br/wp-content/uploads/2018/09/QUEM-FOI-S%C3%93CRATES-1200x681.png",
                    }, ]
                }, ]
            }
        }
    },
    sociologia: {
        nome: "Sociologia",
        id: 9,
        temas: {
            cultura: {
                nome: "Cultura",
                id: 1,
                gif: "https://i.makeagif.com/media/4-03-2017/DIGEiJ.gif",
                perguntas: [{
                    topico: "Definição",
                    perguntas: [{
                        pergunta: "O que é cultura imaterial?",
                        resposta: "Danças, rituais..."
                    }, ]
                }, ]
            },
        }
    },
    historia: {
        nome: "História",
        id: 10,
        temas: {
            segundaguerra: {
                nome: "Segunda Guerra",
                id: 1,
                gif: "https://media.tenor.com/images/3e8a577d9927905a06f75b90d3757a92/tenor.gif",
                perguntas: [{
                    topico: "Alianças",
                    perguntas: [{
                            pergunta: "Qual foram os dois agrupamentos militares e quais países faziam parte de cada um?",
                            resposta: "EIXO: Alemanha, Itália e Japão <br> ALIADOS: URSS, EUA, Inglaterra, França",
                            imagemResposta: "https://1.bp.blogspot.com/-Br_gosLXecE/ULdHZRclu2I/AAAAAAAAAFQ/T08ws-H--aQ/s1600/Apresenta%C3%A7%C3%A3o1.jpg"
                        },
                        {
                            pergunta: "Em que ano acabou?",
                            resposta: "1945"
                        },
                    ]
                }, ]
            },
            revolucaocubana: {
                nome: "Revolução Cubana",
                id: 2,
                gif: "https://media1.tenor.com/images/f0f853eefafdab07f664ddb35b620629/tenor.gif?itemid=14927106",
                perguntas: [{
                    topico: "",
                    perguntas: [{
                            pergunta: "O que foi a Emenda Platt?",
                            resposta: "Autorizava os EUA intervir política e militarmente a qualquer momento em Cuba"
                        }, {
                            pergunta: "Quem e por que implementaram essa emenda?",
                            resposta: "Os EUA ajudaram Cuba com a independência e organizaram uma assembleia para a elaboração da primeira constituição cubana. A aprovação dela só aconteceu depois que o senado norte-americano garantiu a aprovação da chamada Emenda"
                        },
                        {
                            pergunta: "Qual foi a grande marca do governo de Fungêncio Batista?",
                            resposta: "Foi um ditador e favorecia empresários, latifundiários e o governo norte-americanos"
                        },
                        {
                            pergunta: "A qual movimento Fidel Castro era associado?",
                            resposta: "Era a favor do Movimento Nacionalista (oposto à Fungêncio)"
                        },
                        {
                            pergunta: "Caracterize o Movimento Revolucionário (MR-26)",
                            resposta: "Che Guevara e Fidel Castro → por meio da guerra de guerrilhas e foquismo ganham apoio da população para implementar o nacionalismo"
                        },
                        {
                            pergunta: "O que foi o Foquismo?",
                            resposta: "Foquismo → espalhar focos de resistência guerrilheira pelo território para dispersar seus ataques e pegar os inimigos de surpresa"
                        },
                        {
                            pergunta: "Quais medidas foram adotadas após a Revolução Cubana?",
                            resposta: "Medidas nacionalistas → Reforma agrária, estatização de empresas estrangeiras"
                        },
                        {
                            pergunta: "Quem ficou descontente com essas medidas? O que fizeram?",
                            resposta: "Os EUA, pois perderam territórios e economia (latifúndios e empresas). Implementaram embargo econômico a Cuba e depois deixam de ser parceiros comerciais.",
                            imagemResposta: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/776617ac-5cbb-4b61-b72b-13fb6417305f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210130T031856Z&X-Amz-Expires=86400&X-Amz-Signature=f2cc6aac34f59302511a371503756bd6cf8a217f926f8112450755e5342ec437&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
                        },
                        {
                            pergunta: "Qual o motivo da aproximação Cuba-URSS?",
                            resposta: "Aproveitando a fragilidade economica de Cuba e com a necessidade de aliados no contexto da guerra fria, Crushev se aproxima de Cuba economica e politicamente (socialismo)"
                        },
                        {
                            pergunta: "O que foi a Crise dos mísseis?",
                            resposta: "U2 estadunidense sobrevoa Cuba e descobre bases militares soviéticas (uma grande ameaça aos EUA, e o mais próximo que chegamos da 3ª G.M.) "
                        }
                    ]}]
            }
        }
    },
}

export default Dados