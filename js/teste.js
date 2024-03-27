'use strict'

import { getFilme} from "./filmes.js"

const idFilme = localStorage.getItem('id')
export async function infosFilme(id){
    const filme = await getFilme(id)

    const sepDura = filme.duracao.split('T')
    const sepData = filme.data_lancamento.split('T')
    let sepDataRe
    // if(filme.data_relancamento != ''){
    //     sepDataRe = filme.data_relancamento.split('T')
    // }
    console.log(filme);

    const cont = document.createElement('div')
    cont.classList.add('flex', 'pt-28', 'gap-8')

    const foto = document.createElement('img')
    foto.classList.add('w-48', 'rounded-lg', 'ml-24')
    foto.src = filme.foto_capa
    const infos = document.createElement('div')
    infos.classList.add('flex', 'flex-col', 'gap-8', 'text-white')
    const nome = document.createElement('p')
    nome.classList.add('text-6xl')
    nome.textContent = filme.nome

    const duracao = document.createElement('p')
    duracao.textContent = `Duração: ${sepDura[1]}`

    const lancamento = document.createElement('p')
    lancamento.textContent = `Data de Lançamento: ${sepData[0]}`

    const valor = document.createElement('p')
    valor.textContent = `Valor unitário: R$${filme.valor_unitario}`

    const sino = document.createElement('p')
    sino.textContent = `Sinopse: ${filme.sinopse}`

    infos.append(nome, duracao, lancamento, valor, sino)

    cont.append(foto, infos)

    return cont
}

async function criarTela(){
    const cont = document.getElementById('filmeInfos')
    const filme = await infosFilme(idFilme)

    cont.append(filme)
}

criarTela()