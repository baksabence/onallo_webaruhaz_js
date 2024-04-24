import { parfumLISTA } from "./adat.js";

export function hmtlCardLetrehoz(parfumLISTA){
    let txt = `<div class='row'>`
    for(index = 0; index < parfumLISTA.length; i++){
        txt += `<div class="card" style="width:400px"></div>
        <div class="card-body">
        <h4 class="card-title">${parfumLISTA}</h4>`
    }
}