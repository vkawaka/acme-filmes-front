'use strict'

import { getFilmes, getFilme } from "./filmes.js"

// console.table(await getFilmes())
// console.table(await getFilme(1))

function criarCard(filme){
    const card = document.createElement('div')
    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome 
    const texto = document.createElement('textarea')
    texto.textContent = filme.sinopse

    card.append(titulo, texto)

    return card
}

async function preencherContainer(){
    const container = document.querySelector('body')

    const filmes = await getFilmes()

    filmes.forEach(filme => {
        const card = criarCard(filme)
        container.appendChild(card)
        
    })
}



//preencherContainer()