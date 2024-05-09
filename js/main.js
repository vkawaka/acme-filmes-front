'use strict'

import { getFilmes, getFilme} from "./filmes.js"

function criarScreenIntro(filme){
    const card = document.createElement('div')
    card.classList.add('swiper-slide', 'intro', 'w-full', 'h-full', 'relative', 'pt-[200px]')
    const foto = document.createElement('img')
    foto.src = filme.foto_capa
    foto.classList.add('absolute', 'bottom-0', 'left-2/3', 'h-3/4', 'object-contain', 'flex', 'ml-20')
    const texto = document.createElement('div')
    texto.classList.add('absolute', 'left-1/4', 'bottom-1/3')
    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome
    titulo.classList.add('text-6xl', 'font-extrabold', 'text-white')
    const teste = document.createElement('div')
    teste.classList.add('absolute', 'h-3/6', 'w-3/6', 'teste', 'mt-[20px]')
    const testeImg = document.createElement('img')
    testeImg.src = filme.midia_fundo
    testeImg.classList.add('h-full', 'w-full', 'object-cover', 'opacity-70', 'flex')

    teste.append(testeImg)
    texto.append(titulo)
    card.append(foto, texto, teste)

    return card
}

function criarScreen(filme){
    const card = document.createElement('div')
    card.classList.add('w-full', 'h-full')
    const fotoBtn = document.createElement('button')
    const foto = document.createElement('img')
    foto.src = filme.foto_capa
    foto.classList.add('h-80', 'object-contain', 'min-w-48')
    fotoBtn.append(foto)
    console.log(filme.id)

    fotoBtn.addEventListener('click', function() {
        location.href = '../html/filme.html'
        localStorage.setItem('id', filme.id)
    })

  
    card.append(fotoBtn)

    return card
}

async function preencherContainer(){
    const container = document.getElementById('filmes')

    const filmes = await getFilmes()

    for (let index = 0; index < 5; index++) {
        const filme = filmes[index];
        const card = criarScreenIntro(filme)
        container.appendChild(card)
    }
}
async function preencherTela(){
    const container = document.getElementById('testes')

    const filmes = await getFilmes()
    
    filmes.forEach(element => {
        const card = criarScreen(element)
        container.appendChild(card)
    })
}



preencherContainer()
preencherTela()