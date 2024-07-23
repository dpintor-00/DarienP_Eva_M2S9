// FUNCIONES MOSTRAR Y OCULTAR INPUT-FORMULARIO + FOCUS EN INPUT TEXT //

desplegarForm = document.querySelector("#botonAgrega");

desplegarForm.addEventListener('click', ()=>{
    document.getElementById("formulario").style.display="block";
    document.getElementById("foco").focus();
    });

function ocultaForm(){
    escondeForm = document.getElementById("formulario").style.display="none";
}

// ASIGNACIÓN ID TAREAS Y VARIABLES DOM //

let IDtareasNuevas = 0;
let IDtd = 0;
const tarea = document.querySelector('input[type="text"]');
tareaNueva = document.querySelector("form");
lista = document.querySelector("#lista");

// ACCIÓN Y FUNCIÓN AGREGAR TAREA //

tareaNueva.addEventListener('submit', (event)=>{
    event.preventDefault();
    agregaTarea();
});

let agregaTarea = ()=>{
    IDtareasNuevas++;
    IDtd++;
    let nuevaTarea = tarea.value;
    lista.innerHTML += 
    `
    <tr id="${IDtareasNuevas}">
            <td class="col-9 p-3">${nuevaTarea}</td>
            <td id="${IDtd}"><button type="button" class="btn btn-danger">Finalizar</button></td>
          </tr>
    ` 
    tarea.value='';
}

// ACCIÓN BOTÓN FINALIZAR //

lista.addEventListener('click', (event)=>{
    if(event.srcElement.nodeName == 'BUTTON'){
        finalizaTarea(event.srcElement.parentNode.id);
    };
});

let finalizaTarea = (id) =>{
    let borrarTarea = document.getElementById(id);
    lista.removeChild(borrarTarea);
}