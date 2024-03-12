'use strict'

import { getFilmes, getFilme } from "./filmes.js"

console.table(await getFilmes())
// console.table(await getFilme(1))

function criarCard(filme){
    const card = document.createElement('div')
    // const titulo = document.createElement('h2')
    // titulo.textContent = filme.nome 
    // const texto = document.createElement('textarea')
    // texto.textContent = filme.sinopse
    const foto = document.createElement('img')
    foto.src = filme.foto_capa
    foto.classList.add('w-44', 'h-60', 'ml-4')

    card.append(foto)

    return card
}

async function preencherContainer(){
    const container = document.getElementById('filmes')

    const filmes = await getFilmes()

    
        filmes.forEach(filme => {
            const card = criarCard(filme)
            container.appendChild(card)
            console.log(card)
        })
}



preencherContainer()
