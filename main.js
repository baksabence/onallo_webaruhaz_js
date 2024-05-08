import { parfumLISTA } from "./adat.js";
import { kosarbaTesz, torol, szures, rendez, rendezArSzerint } from "./fuggveny.js";
import 
{   hmtlCardLetrehoz, 
    htmlKosarLetrehoz,
    megjelenit 
} 


from "./htmlOsszeallit.js";


const kartyaELEM = $(".kartyak")
const kosarELEM = $(".kosar")


const kosarLISTA = [];

init(parfumLISTA, kosarLISTA)

rendezEsemeny();
szuresEsemeny();
rendezEsArSzerint();

export function init(pLISTA, kLISTA){
    megjelenit(hmtlCardLetrehoz(pLISTA), kartyaELEM);
    megjelenit(htmlKosarLetrehoz(kLISTA), kosarELEM);
    kosarEsemeny();
    torolEsemeny();

}


function kosarEsemeny(){
    const kosarGOMB = $(".buttonkosar")
    kosarGOMB.on("click", function(event){
        let id = event.target.id;
        //console.log(id)
        kosarbaTesz(parfumLISTA, kosarLISTA, id)
        //console.log(kosarLISTA)
        init(parfumLISTA, kosarLISTA)
    })
}


function torolEsemeny(){
    const torolGOMB = $(".eltavolitas")
    torolGOMB.on("click", function(event){
        let id = event.target.id;
        //console.log(id)
        torol(kosarLISTA, id)
        init(parfumLISTA, kosarLISTA)
    })
}

function szuresEsemeny(){
    const keresoElem = $(".kereses")
    //console.log(keresoElem)
    keresoElem.on("keyup", function(){
        let keresoSzoveg = keresoElem.val()
        //console.log(keresoSzoveg)
        const szLista = szures(parfumLISTA, keresoSzoveg)
        //console.log(szLista)
        init(szLista, kosarLISTA)
    });

}


function rendezEsemeny(){    
    const rendezesNov =  $(".novekvo")
    const rendezesCsokk =  $(".csokkeno")
    let rLISTA = [];
    rendezesNov.on("click", function(){
        //const rLISTA = rendez(parfumLISTA, irany) 
        //console.log(rLISTA)
        rLISTA = rendez(parfumLISTA, 1)
        
        console.log(rLISTA)
        init(rLISTA, kosarLISTA)

})
    rendezesCsokk.on("click", function(){
        //const rLISTA = rendez(parfumLISTA, irany) 
        //console.log(rLISTA)
        rLISTA = rendez(parfumLISTA, -1)
    
        console.log(rLISTA)
        init(rLISTA, kosarLISTA)

})

}

function rendezEsArSzerint(){
    const rendNov = $(".arNov");
    const rendCsok = $(".arCsok");

    let rLista = [];
    rendNov.on("click", function(){
        rLista = rendezArSzerint(parfumLISTA, 1)
        console.log(rLista)
        init(rLista, kosarLISTA)
    })

    rendCsok.on("click", function(){
        rLista = rendezArSzerint(parfumLISTA, -1)
        console.log(rLista)
        init(rLista, kosarLISTA)
    })
}

