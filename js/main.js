"use strict";
var idRecurso;
var idUsuario;
var nombreRecurso;


window.onload = function () { 
    console.log("load");
    obtenerParametros();
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




function obtenerParametros() {
    const url_string = window.location.href;
    const url = new URL(url_string);
    idRecurso = url.searchParams.get("idRecurso");
    idUsuario = url.searchParams.get("idUsuario");
    console.log("idUsuario------", idUsuario);
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
            nombreRecurso = array[index].nombre_recurso;
        }        
    }
    enviarEstadistica();
    window.location.assign(urlRecurso);
}


function enviarEstadistica() {
console.log("Estadistica usuario", idUsuario);
console.log("Estadistica recurso", nombreRecurso);

    /*
    fetch('./server/estadisticas.php?usuario='+idUsuario + '&recurso=' + nombreRecurso )
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
        console.log(myJson);
        });    
    */
}