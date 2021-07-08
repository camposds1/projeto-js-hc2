// Criando objetos para uma base de dados:
const livros = [
    {
        id: 1,
        nome: "Harmonia e Improvisação - Vol 1",
        autor: "Almir Chediak",
        categoria: "MUSICA",
        paginas: 364,
        recomenda: true,
        leu: true
    },

    {
        id: 2,
        nome: "Harmonia e Improvisação - Vol 2",
        autor: "Almir Chediak",
        categoria: "MUSICA",
        paginas: 296,
        recomenda: true,
        leu: true
    },
    {
        id: 3,
        nome: "O Símbolo Perdido",
        autor: "Dan Brown",
        categoria: "ROMANCE",
        paginas: 528,
        recomenda: true,
        leu: true
    },

    {
        id: 4,
        nome: "Inferno",
        autor: "Dan Brown",
        categoria: "ROMANCE",
        paginas: 511,
        recomenda: true,
        leu: true
    },

    {
        id: 5,
        nome: "Acordes, Arpejos e Escalas",
        autor: "Nelson Faria",
        categoria: "MUSICA",
        paginas: 88,
        recomenda: true,
        leu: false
    },

    {
        id: 6,
        nome: "Harmonia Aplicada ao Violão e à Guitarra: Técnicas em Chord Melody",
        autor: "Nelson Faria",
        categoria: "MUSICA",
        paginas: 100,
        recomenda: true,
        leu: false
    },

    {
        id: 7,
        nome: "O Grande Livro da Palmirinha",
        autor: "Palmira Nery da Silva Onofre",
        categoria: "ALIMENTACAO",
        paginas: 364,
        recomenda: true,
        leu: false
    },

    {
        id: 8,
        nome: "Comida de Bebê: uma introdução à comida de verdade",
        autor: "Rita Lobo",
        categoria: "ALIMENTACAO",
        paginas: 170,
        recomenda: true,
        leu: false
    },

    {
        id: 9,
        nome: "Cozinha de Estar: receitas práticas para receber",
        autor: "Rita Lobo",
        categoria: "ALIMENTACAO",
        paginas: 274,
        recomenda: false,
        leu: false
    },
    
    {
        id: 10,
        nome: "Heróis de Verdade",
        autor: "Roberto Shinyashiki",
        categoria: "ESTILO DE VIDA",
        paginas: 168,
        recomenda: true,
        leu: true
    },
]

// Exportar para utilizar em outro arquivo
module.exports = livros