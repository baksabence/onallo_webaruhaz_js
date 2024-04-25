import { parfumLISTA } from "./adat.js";
import 
{   hmtlCardLetrehoz, 
    htmlKosarLetrehoz,
    megjelenit 
} 
from "./htmlOsszeallit.js";

const kartyaELEM = $(".kartyak")
const kosarELEM = $(".kosar")


const kosarLISTA = [];

export function init(lista){
    megjelenit(hmtlCardLetrehoz(parfumLISTA), kartyaELEM)
    megjelenit(htmlKosarLetrehoz(parfumLISTA), kosarELEM)
    
}

init(parfumLISTA)



