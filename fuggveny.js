export function kosarbaTesz(lista1, lista2, id){
    lista2.push(lista1[id])

}

export function torol(lista, id){
    lista.splice(id, 1);
    return lista;
}


export function szures(lista, keresoSzoveg){
    //console.log(keresoSzoveg)
    const szurtLista = lista.filter(function(parfum){
        return parfum.termekNeve.toUpperCase().includes(keresoSzoveg.toUpperCase())
    })
    //console.log(szurtLista)
    return szurtLista
}

export function rendez(lista, irany){
    lista.sort(function(e1, e2){
       let eredmeny = 1;
       if(e1.termekNeve < e2.termekNeve){
           eredmeny = -1

       }

        return eredmeny * irany;
    });
    return lista
}