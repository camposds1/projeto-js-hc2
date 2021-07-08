// Importa a base de dados criada no arquivo database.js
const livros = require("./database")


// pegar um input do usuário
const readline = require("readline-sync")

const entradaInicial = readline.question("Deseja buscar um livro? S/N")

// Caso "S", mostrar as categorias disponíveis e pergunta ao usuário qual categoria ele quer
if (entradaInicial.toLocaleUpperCase() === "S") {
    console.log("Estas são as categorias disponíveis:")
    console.log("romance", "/ musica", "/ alimentacao", "/ estilo de Vida")
    
    const entradaCategoria = readline.question("Qual categoria voce deseja?")

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria.toLocaleUpperCase())

    console.table(retorno)
}
// Caso "N", mostrar todos os livros em ordem crescente pela quantidade de páginas
else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log("Esses são os livros disponíveis:")
    console.table(livrosOrdenados)
}