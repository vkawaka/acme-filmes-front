'use strict'

import { getFilmes, getFilme, postFilme, deleteFilme } from "./filmes.js"

const idFilme = localStorage.getItem('id')
export async function infosFilme(id){
    const filme = await getFilme(id)
    console.log(filme);

    const foto = document.createElement('img')
    foto.src = filme.foto_capa

    return foto
}

async function criarTela(){
    const cont = document.getElementById('filmeInfos')
    const filme = infosFilme(idFilme)

    cont.append(filme)
}

criarTela()