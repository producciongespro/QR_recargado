"use strict";
var idRecurso;
var idUsuario;


window.onload = function () { 
    console.log("load");
    obtenerParametro();
    obtenerDataset(function (array) { 
    redirect(array, idRecurso);
     });
 }

function obtenerDataset( mCallBack ) {    
        fetch('./data/recursos.json')
        .then(response => {
        return response.json()
        })
        .then(data => {        
            console.log("data", data);
            mCallBack(data);
        })
        .catch(err => {
            console.log("Error de carga");        
        })
}




function obtenerParametro() {
    const url_string = window.location.href;
    const url = new URL(url_string);
    idRecurso = url.searchParams.get("idRecurso");
    console.log("idRecurso------", idRecurso);
    if (idRecurso == null ) {
        idRecurso = 0;
    } else {
        idRecurso =  parseInt(idRecurso)
        console.log("idRecurso", idRecurso);
    }
    
  
}


function redirect( array ) {
    console.log("idRecurso", idRecurso );    
    var urlRecurso;
	for (let index = 0; index < array.length; index++) {
        console.log("array[index].id_recurso", array[index].id_recurso );        
        if (array[index].id_recurso == idRecurso  ) {
            urlRecurso = array[index].url_recurso;
        }        
    }
    console.log("urlRecurso", urlRecurso );
    //window.location.assign(urlRecurso);

}