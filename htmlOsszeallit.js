
export function hmtlCardLetrehoz(lista){
    let txt = `<div class='row'>`
    for(let index = 0; index < lista.length; index++){
        txt += 
        `
        <div class="col-3 mb-3">
            <div class="card" > 
                <div class="card-header">
                    <h1 class="card-title">${lista[index].termekNeve}</h1>
                </div>

                <div class="card-body">
                    <h2 class="card-text">${lista[index].termekTipusa}</h2>
                    <p class="card-text">${lista[index].termekAra}</p>
                    <img class="card-img-top" src="${lista[index].termekKepe}" alt="parfum">
                </div>
                <div class="card-footer">
                    <p>Ára: ${lista[index].termekAra}<button id="${index}" class="buttonkosar btn btn-primary" style="float: right;">Kosárba</button></p>
                </div>
            </div>
        </div>
        `;
    }
    txt += "</div>";
    return txt;
}

export function htmlKosarLetrehoz(lista){
    let txt = "<div class='tabla row'>";
    txt += "<table class='table table-striped col-lg-4'>";
    txt += "<h1>Kosár:</h1>";
    txt +=
        "<thead> <tr> <th> Termék neve: </th> <th> Kiszerelése: </th> <th> Ára: </th> <th> </th> </tr> </thead>";
    txt += "<tbody>";

    lista.forEach((elem, index) => {
        txt += `<tr>`;
        for (const kulcs in elem) {
          txt += `<td>${elem[kulcs]}</td>`;
        }
        txt += `<td class='eltavolitas' id=${index}>❌</td>`;
    
        txt += `</tr>`;
      });
      txt += "</tbody></table></div>";
      return txt;
}




export function megjelenit(txt, divELEM) {
    divELEM.html(txt);
  }

