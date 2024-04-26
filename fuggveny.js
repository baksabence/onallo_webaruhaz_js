export function kosarbaTesz(lista1, lista2, id){
    lista2.push(lista1[id])

}

export function torol(lista, id){
    lista.splice(id, 1);
    return lista;
}


export function szures(lista, keresoSzoveg){
    const szurtLista = lista.filter(function(parfum){
        return parfum.termekNeve.toUpperCase().includes(keresoSzoveg.toUpperCase())
    })

    return szurtLista
}