import { parfumLISTA } from "./adat.js";
import { kosarbaTesz, torol } from "./fuggveny.js";
import 
{   hmtlCardLetrehoz, 
    htmlKosarLetrehoz,
    megjelenit 
} 


from "./htmlOsszeallit.js";


const kartyaELEM = $(".kartyak")
const kosarELEM = $(".kosar")


const kosarLISTA = [];

export function init(parfumLISTA, kosarLISTA){
    megjelenit(hmtlCardLetrehoz(parfumLISTA), kartyaELEM);
    megjelenit(htmlKosarLetrehoz(kosarLISTA), kosarELEM);
    kosarEsemeny();
    torolEsemeny();
}



function kosarEsemeny(){
    const kosarGOMB = $(".buttonkosar")
    kosarGOMB.on("click", function(event){
        let id = event.target.id;
        console.log(id)
        kosarbaTesz(parfumLISTA, kosarLISTA, id)
        console.log(kosarLISTA)
        init(parfumLISTA, kosarLISTA)
    })
}


function torolEsemeny(){
    const torolGOMB = $(".eltavolitas")
    torolGOMB.on("click", function(event){
        let id = event.target.id;
        console.log(id)
        torol(kosarLISTA, id)
        init(parfumLISTA, kosarLISTA)
    })
}


init(parfumLISTA, kosarLISTA)