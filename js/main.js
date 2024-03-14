'use strict'

import { getFilmes, getFilme, postFilme, deleteFilme } from "./filmes.js"

function criarCard(filme){
    const card = document.createElement('div')
    card.classList.add('swiper-slide', 'w-full', 'h-full', 'relative')
    const foto = document.createElement('img')
    foto.src = filme.foto_capa
    foto.classList.add('absolute', 'bottom-0', 'right-1/3', 'h-3/4', 'object-contain')
    const texto = document.createElement('div')
    texto.classList.add('absolute', 'left-1/4', 'bottom-1/3')
    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome

    texto.append(titulo)
    card.append(foto, texto)

    return card
}

async function preencherContainer(){
    const container = document.getElementById('filmes')

    const filmes = await getFilmes()

    for (let index = 0; index < 1; index++) {
        const filme = filmes[index];
        const card = criarCard(filme)
        container.appendChild(card)
        console.log(card)
    }
        // filmes.forEach(filme => {
        //     const card = criarCard(filme)
        //     container.appendChild(card)
        //     console.log(card)
        // })
}



preencherContainer()
