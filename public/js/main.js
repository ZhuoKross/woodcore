const tareaSinHacer = document.getElementById("sinHacer");
const tareasEnProceso = document.getElementById("Haciendo");
const tareasRealizadas = document.getElementById("taskHecho");
// menú container dashboard
const linkProyectos = document.getElementById("crearProyectos");
const linkTareas = document.getElementById("crearTareas");
// Código del archivo tareas.js para mostrar las tareas



///////////////////////////////////////////////////////////////////////////////////////////
// FUNCIONALIDAD PARA OBTENER LAS TAREAS DE LA BASE DE DATOS Y MOSTRARLAS EN PANTALLA
async function fetchTareas() {
    let res = await fetch("http://localhost:8080/tasks/all")
        .then(tareas => tareas.json())
        .then(tareas => {

            // Recorriendo cada uno de los elementos del conjunto de tareas
            tareas.forEach(task => {
                //console.log(task);
                // Creando y asignando cada una de las propiedades de la tarea por cada una de las tareas 
                const tarea_id = task.tarea_id;
                const nombre = task.nombre;
                const prioridad = task.prioridad;
                const descripcion = task.descripcion;
                const estado = task.estado;
                const encargado = task.encargado;
                const sprint = task.sprint;

                const fecha = new Date(sprint);
                let año = fecha.getFullYear();
                let mes = fecha.getMonth() + 1;
                let dia = fecha.getDate();

                const sprintFormateado = `${dia}/${mes}/${año}`;


                // prueba
                // console.log(sprint);

                // creación de los elmentos para las tareas

                // Contenedor padre principal de la tarea
                const contenedorTarea = document.createElement("div");

                // Parte del head de la tarea
                const containerHeadTask = document.createElement("div");
                const imgEncargado = document.createElement("img");
                const containerNombre = document.createElement("div");
                const nombreEncargado = document.createElement("p");
                const legendEncargado = document.createElement("p");
                const containerSprintTask = document.createElement("div");
                const legendFechaTarea = document.createElement("p");
                const sprintTarea = document.createElement("p");
                const botonEditarTarea = document.createElement("button");
                const iconEditarTarea = document.createElement("img");

                // Parte del contenido de la tarea
                const containerContenidoTarea = document.createElement("div");
                const containerNombreTarea = document.createElement("div");
                const nombreTarea = document.createElement("p");
                const estadoActividad = document.createElement("p");
                const descripcionTarea = document.createElement("p");
                const boldTextDescripcion = document.createElement("b");
                const containerPrioridad = document.createElement("div");
                const legendPrioridadTarea = document.createElement("p");
                const boldTextPrioridad = document.createElement("b");
                const category = document.createElement("p");

                // Parte del progreso de los estados de la tarea
                const containerStates = document.createElement("div");
                const firstState = document.createElement("div");
                const secondtState = document.createElement("div");
                const thirdtState = document.createElement("div");



                // Definiendo los atributos y clases para caada elemento
                contenedorTarea.classList.add("task", "d-flex", "flex-column", "rounded-top", "me-2", "mb-2");
                contenedorTarea.setAttribute("idTask", tarea_id)
                //console.log(contenedorTarea.getAttribute("id"));
                contenedorTarea.setAttribute("draggable", true);

                // Definición de las clases del container head de la tarea
                containerHeadTask.classList.add("container-heading-task", "d-flex", "w-100", "align-items-center");
                imgEncargado.classList.add("rounded-circle", "nav__img--avatar", "ms-2");
                containerNombre.classList.add("d-flex", "flex-column", "ms-1", "align-items-start", "w-50");
                nombreEncargado.classList.add("mb-0", "pt-2", "fw-bold");
                legendEncargado.classList.add("t-encargado");
                containerSprintTask.classList.add("d-flex", "flex-column", "align-items-end", "me-3", "w-50");
                legendFechaTarea.classList.add("mb-0", "mt-2", "t-fecha");
                sprintTarea.classList.add("fecha", "me-1");
                botonEditarTarea.classList.add("btn-abrir-form-edit-tasks", "align-self-start");
                iconEditarTarea.classList.add("edit-task-icon");

                // Definición de las clases del contenido de la tarea
                containerContenidoTarea.classList.add("desc-task", "d-flex", "flex-column", "justify-content-center", "ms-2", "mt-2");
                containerNombreTarea.classList.add("d-flex", "mb-2", "mt-2");
                nombreTarea.classList.add("mb-0", "fw-bold", "fs-5", "mt-3", "name-task");
                estadoActividad.classList.add("mb-0", "text-wrap", "bg-success", "rounded-pill", "text-center", "state", "ms-1", "align-self-center", "me-1", "flex-shrink-0");
                descripcionTarea.classList.add("mb-2");
                containerPrioridad.classList.add("container-prioridad", "d-flex");
                legendPrioridadTarea.classList.add("mb-1", "me-2");
                category.classList.add("category", "text-wrap", "w-50", "rounded-pill", "text-center", "mb-0");


                // Definición de las clases de los estados de progreso de las tareas
                containerStates.classList.add("states", "d-flex", "justify-content-between", "align-items-end", "ms-3", "mt-3");
                firstState.classList.add("first-state", "rounded-pill", "w-50", "me-1");
                secondtState.classList.add("second-state", "rounded-pill", "w-50", "me-1");
                thirdtState.classList.add("third-state", "rounded-pill", "w-50");




                // Agregando el contenido de las tareas
                // Agregando el contenido a la parte del head de la tarea
                imgEncargado.setAttribute("src", "../img/persona06.jpg");
                nombreEncargado.innerText = encargado;
                legendEncargado.innerText = "Encargado";
                legendFechaTarea.innerText = "Fecha límite";
                sprintTarea.innerText = sprintFormateado;
                iconEditarTarea.setAttribute("src", "../img/edit.png");

                // Agregando el contendio del contenido de la tarea
                nombreTarea.innerText = nombre;
                estadoActividad.innerText = "Activa";
                boldTextDescripcion.innerText = "Descripción: ";
                descripcionTarea.innerHTML = descripcion;
                boldTextPrioridad.innerText = "Prioridad:";
                category.innerText = prioridad;

                // Agregando los elementos a la tarea y al DOM
                contenedorTarea.appendChild(containerHeadTask);
                contenedorTarea.appendChild(containerContenidoTarea);
                contenedorTarea.appendChild(containerStates);

                // Agregando los elementos al head de la tarea                
                containerHeadTask.appendChild(imgEncargado);
                containerHeadTask.appendChild(containerNombre);
                containerNombre.appendChild(nombreEncargado);
                containerNombre.appendChild(legendEncargado);
                containerHeadTask.appendChild(containerSprintTask);
                containerSprintTask.appendChild(legendFechaTarea);
                containerSprintTask.appendChild(sprintTarea);
                containerHeadTask.appendChild(botonEditarTarea);
                botonEditarTarea.appendChild(iconEditarTarea);

                // Agregando los elementos al contenido de la tarea
                containerContenidoTarea.appendChild(containerNombreTarea);
                containerNombreTarea.appendChild(nombreTarea);
                containerNombreTarea.appendChild(estadoActividad);
                descripcionTarea.insertAdjacentElement("afterbegin", boldTextDescripcion);
                containerContenidoTarea.appendChild(descripcionTarea);
                containerContenidoTarea.appendChild(containerPrioridad);
                legendPrioridadTarea.appendChild(boldTextPrioridad);
                containerPrioridad.appendChild(legendPrioridadTarea);
                containerPrioridad.appendChild(category);

                // Agregando los elementos a la barra de progreso de states
                containerStates.appendChild(firstState);
                containerStates.appendChild(secondtState);
                containerStates.appendChild(thirdtState);

                // Agregando la tarea el DOM
                tareaSinHacer.appendChild(contenedorTarea);

            });

            obtenerYCrearEventosTareas();
            aplicarPrimerEstado();
            abrirModalEditTasks();

        })
        .catch(err => console.log("error al cargar las tareas: ", err))

}


fetchTareas()


///////////////////////////////////////////////////////////////////////////////////////////
// FUNCIONALIDAD PARA DEFINIR EL FONDO DEL PRIMER ESTADO DE CADA TAREA


function aplicarPrimerEstado() {
    const tasks = document.querySelectorAll(".task");

    tasks.forEach(tarea => {

        // para los estados de cada una de las tareas
        const firstState = tarea.children[2].children[0];
        const secondState = tarea.children[2].children[1];
        const thirdState = tarea.children[2].children[2];

        firstState.classList.add("bg-primary");
    })


}



///////////////////////////////////////////////////////////////////////////////////////////
// FUNCIONALIDAD PARA CREAR EL EFECTO DE DRAG AND DROP EN CADA UNA DE LAS TAREAS

async function obtenerYCrearEventosTareas() {
    try {
        const tareas = document.querySelectorAll(".task");

        const arrayTareas = Array.from(tareas);

        // Pruba de código
        // console.log(arrayTareas);

        // total de tareas
        const tareasTotales = arrayTareas.length;

        //  Asignando el data id a cada una de las tareas del arrayTareas
        arrayTareas.forEach((tarea, indice) => {
            tarea.id = indice;
        })

        // Código para hacer que las tareas sean drag and drop 
        // para cuando inicia el arrastre en cada uno de los contenedores y para indentificar que tarea se agrega a qué container
        tareaSinHacer.addEventListener("dragstart", function (e) {
            e.dataTransfer.setData("id", e.target.id);
        })

        tareasEnProceso.addEventListener("dragstart", function (e) {
            e.dataTransfer.setData("id", e.target.id);

        })

        tareasRealizadas.addEventListener("dragstart", function (e) {
            e.dataTransfer.setData("id", e.target.id);

        })


        //  para los eventos dragover de los contenedores
        tareaSinHacer.addEventListener("dragover", function (e) {
            e.preventDefault();
        })
        tareasEnProceso.addEventListener("dragover", function (e) {
            e.preventDefault();
        })
        tareasRealizadas.addEventListener("dragover", function (e) {
            e.preventDefault();
        })


        // para los eventos drop de los contenedores
        tareaSinHacer.addEventListener("drop", function (e) {
            e.stopImmediatePropagation();

            const id = e.dataTransfer.getData("id");
            e.target.appendChild(document.getElementById(id));
            // console.log(id);
            estadosTareas()
        })

        tareasEnProceso.addEventListener("drop", function (e) {
            e.stopImmediatePropagation();

            const id = e.dataTransfer.getData("id");
            e.target.appendChild(document.getElementById(id));
            // console.log(id);
            estadosTareas()
        })

        tareasRealizadas.addEventListener("drop", function (e) {
            e.stopImmediatePropagation();

            const id = e.dataTransfer.getData("id");
            e.target.appendChild(document.getElementById(id));
            // console.log(id);
            estadosTareas()
        })




    } catch (err) {
        console.log(err);
    }
}



///////////////////////////////////////////////////////////////////////////////////////////
// FUNCIONALIDAD DE LA BARRA DE PROGRESO DE LAS TAREAS

async function estadosTareas() {
    const tasks = document.querySelectorAll(".task");
    const containerTareasSinHacer = document.querySelector(".sinHacer");
    const containerTareasEnProceso = document.querySelector(".Haciendo");
    const containerTareasRealizadas = document.querySelector(".taskHecho");


    const hijosContainerTareasSinHacer = containerTareasSinHacer.children;
    const hijosContainerTareasEnProceso = containerTareasEnProceso.children;
    const hijosContainerTareasRealizadas = containerTareasRealizadas.children;


    // console.log(hijosContainerTareasSinHacer);
    // console.log(hijosContainerTareasEnProceso);
    // console.log(hijosContainerTareasRealizadas);

    tasks.forEach((tarea, indice) => {
        // Prueba de código para recorrer cada tarea
        // console.log(tarea)

        // Adquirir los elementos padre y su clase
        const elementoPadre = tarea.parentNode;
        const idElementoPadre = elementoPadre.id;

        // prueba para ver el id del elemento padre de cada tarea
        // console.log(idElementoPadre);

        // para los estados de cada una de las tareas
        const firstState = tarea.children[2].children[0];
        const secondState = tarea.children[2].children[1];
        const thirdState = tarea.children[2].children[2];



        // Hacer la validación para aplicar el fondo a cada uno de los estados en base a si contiene o no la clase "bg-primary";
        //para las clases de cada una de las clases de los estados de la tarea
        const stringClasesFirstState = firstState.className;
        const stringClasesSecondtState = secondState.className;
        const stringClasesThirdtState = thirdState.className;
        //conversión de las clases de los estados a array
        const arrayClasesFirstState = stringClasesFirstState.split(" ");
        const arrayClasesSecondState = stringClasesSecondtState.split(" ");
        const arrayClasesThirdState = stringClasesThirdtState.split(" ");
        // Para verificar que existe la clase dentro del array de clases de cada uno de los estados
        const claseBgPrimaryFirstState = arrayClasesFirstState.includes("bg-primary");
        const claseBgPrimarySecondState = arrayClasesSecondState.includes("bg-primary");
        const claseBgPrimaryThirdState = arrayClasesThirdState.includes("bg-primary");


        // console.log(getComputedStyle(firstState).getPropertyValue("background-color"))
        console.log(idElementoPadre === "sinHacer");


        // condicional para las tareas que se encuentren en el primer elemento padre (Tareas sin hacer)
        if (idElementoPadre === "sinHacer" && claseBgPrimarySecondState && claseBgPrimaryThirdState) {

            secondState.classList.remove("bg-primary");
            thirdState.classList.remove("bg-primary");

        } else if (idElementoPadre === "sinHacer" && claseBgPrimaryThirdState) {

            thirdState.classList.remove("bg-primary");

        } else if (idElementoPadre === "sinHacer" && claseBgPrimarySecondState) {

            secondState.classList.remove("bg-primary");

        } else if (idElementoPadre === "Haciendo" && claseBgPrimaryThirdState) {

            thirdState.classList.remove("bg-primary");
            console.log("elemento padre: Tareas en proceso");


        } else if (idElementoPadre === "Haciendo" && claseBgPrimarySecondState === false) {

            secondState.classList.add("bg-primary");


        } else if (idElementoPadre === "taskHecho" && claseBgPrimarySecondState === false && claseBgPrimaryThirdState === false) {

            secondState.classList.add("bg-primary");
            thirdState.classList.add("bg-primary");


        } else if (idElementoPadre === "taskHecho") {

            thirdState.classList.add("bg-primary");

        }
    })

    // Prueba de código para verificar la obtención de las tareas
    // console.log(tasks)
}





///////////////////////////////////////////////////////////////////////////////////////////
// Funcionalidad pra el form de crear tareas

const abrirModalForm = document.querySelectorAll(".abrir-form");
const cerrarModalForm = document.querySelectorAll("#cerrar-form");
const modalForm = document.querySelectorAll("#modal-form")

cerrarModalForm.forEach(elemento => {
    modalForm.forEach(form => {
        const Formtask = form;

        abrirModalForm.forEach(elemento => {
            elemento.addEventListener("click", () => {
                Formtask.showModal();
            })
        })

        elemento.addEventListener("click", () => {
            Formtask.close()
        })
    })
})


// para enviar los datos al backend
modalForm.forEach(form => {
    const formCreatTask = form;

    formCreatTask.addEventListener("submit", async (e) => {
        // e.preventDefault()
        const res = await fetch("http://localhost:3000/dashboard/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: e.target.children[0].children[0].children.nombre_task.value,
                prioridad: e.target.children[0].children[0].children.prioridad.value,
                descripcion: e.target.children[0].children[0].children[4].children.des_task.value,
                encargado: e.target.children[0].children[1].children.encargado.value,
                sprint: e.target.children[0].children[1].children.sprint_task.value
            })
        })
        console.log(e)

    })
})



///////////////////////////////////////////////////////////////////////////////////////////
// Funcionalidad para crear el form de editar tareas


//Funcionalidad para abir y cerrar el form de editar tareas

function abrirModalEditTasks() {
    //obtener los botones para abrir y cerrar cada modal
    const abirModalFormEditTasks = document.querySelectorAll(".btn-abrir-form-edit-tasks");
    const cerrarModalFormEditTasks = document.querySelectorAll("#close-edit-form");
    //obtener el modal y el fom de editar tareas
    const modalEditTaskForm = document.querySelectorAll("#modal-edit-task-form");
    const formEditTask = document.querySelectorAll(".form-edit-tasks")
    //const tarea = document.querySelectorAll(".task")


    //crear las variables para guardar los inputs y los elementos del form
    const inputNombreTarea = formEditTask[0][0];
    const inputDescTarea = formEditTask[0][2];
    const inputEncargadoTarea = formEditTask[0][3];
    const inputSelectPrioridad = formEditTask[0][1];
    const optionsSelectPrioridad = inputSelectPrioridad.children;
    




    //console.log(inputEncargadoTarea);
    //console.log(inputSelectPrioridad);

    abirModalFormEditTasks.forEach(button => {
        modalEditTaskForm.forEach(form => {

            cerrarModalFormEditTasks.forEach(button => {
                button.addEventListener("click", () => {
                    form.close();
                })
            })

            button.addEventListener("click", async (e) => {
                //Funcionalidad para obtener el nombre de la tarea que se quiere 
                //modificar cuando se abre el modal de actualizar

                e.preventDefault();

                const elementoPadreTarea = e.target.parentNode.parentNode.parentNode;
                //console.log(elementoPadreTarea.getAttribute("idTask"));
                const idTarea = elementoPadreTarea.getAttribute("idTask");

                //prueba
                //console.log("id tarea(front-end)", idTarea);
                const tareaAbuscar = {
                    "idTarea": idTarea
                }

                //prueba para ver que se obtiene el nombre de la tarea seleccionada
                //console.log(tareaAbuscar);



                try {
                    //Funcionalidad para enviar el id al backend y hacer la consulta
                    const response = await fetch(`/dashboard/tasks/${idTarea}`)

                    if (!response.ok) {
                        console.log("Error al obtener la tarea");
                    }

                    //console.log(response);

                    const contentType = response.headers.get('content-type');
                    if (!contentType || !contentType.includes('application/json')) {
                        throw new TypeError("La respuesta no es JSON");
                    }

                    // Objeto de respuesta de la petición de la tarea
                    const result = await response.json();
                    //console.log(result);

                    // Asignando el objeto de la tarea a una variable
                    const tareaAActualizar = result[0];

                    if (!result) {
                        
                        console.log("Error en la respuesta:", result);

                    } else {
                        //prueba
                        //console.log("datos de la tarea:", result);

                        //console.log(inputEncargadoTarea);

                        ///////////////////////////////////////////////////////////////
                        //Funcionalidad para definir los valores de los inputs del form
                        inputNombreTarea.setAttribute("value", tareaAActualizar.nombre);
                        inputDescTarea.textContent = tareaAActualizar.descripcion;
                        inputEncargadoTarea.setAttribute("value", tareaAActualizar.encargado);


                        //funcionalidad para recorrer cada uno de los options de prioridad y establecer el valor de acuerdo 
                        // al objeto de la tarea
                        for (const option of optionsSelectPrioridad) {
                            //prueba
                            //console.log("tipo de dato:", typeof(option.textContent));
                            //console.log(option.textContent)

                            if (option.textContent.trim() === tareaAActualizar.prioridad) {
                                inputSelectPrioridad.value = option.value;
                            }
                        }

                    
                        //console.log(tareaAActualizar.descripcion);
                    }

                } catch (err) {
                    console.error("ERROR: ", err);
                }



                form.showModal();


                
                ///////////////////////////////////////////////////////////////
                //Funcionalidad para enviar los valores actualizados del form

                formEditTask.forEach(form => {
                    form.addEventListener("submit", async (e) => {
                        console.log(e)
                        //e.preventDefault();
                        const result = fetch(`/dashboard/tasks/${idTarea}`, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                nombre_tarea: e.target[0].value,
                                prioridad: e.target[1].value,
                                resumen: e.target[2].value,
                                encargado_tarea: e.target[3].value,
                                sprint_tarea: e.target[4].value

                            })
                        })

                        // CÓDGIGO DE PRUEBA
                        //console.log(e);
                        // console.log(e.target[0].value);
                        // console.log(e.target[1].value);
                        // console.log(e.target[2].value);
                        // console.log(e.target[3].value);
                        console.log(e.target[4].value);
                        // console.log(e.target[5].value);
                    })
                })



                ///////////////////////////////////////////////////////////////
                //Funcionalidad para eliminar la tarea seleccionada del form

                const buttonDeleteTask = document.getElementById("delete-task");
                //prueba
                //console.log(buttonDeleteTask);

                buttonDeleteTask.addEventListener("click", async (e) => {
                    const elementoPadreDialog = e.target.parentNode.parentNode;
                    const hijosElementoPadreDialog = elementoPadreDialog.children
                    //const nombreTarea = hijosElementoPadreDialog[1][0].value;


                    //console.log(e.target.parentNode.parentNode.children[1][0].value)

                    const result = await fetch(`dashboard/tasks/${idTarea}`, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" }
                    })

                    if(result.status === 200){
                        location.reload();
                    }else{
                        console.log("ERROR AL ELIMINAR LA TAREA");
                    }

                })


            })
        })
    })
}
















///////////////////////////////////////////////////////////////////////////////////////////
// Funcionalidad para crear el form de crear proyectos

const abrirModalFormProject = document.getElementById("abrir-form-proyecto");
const cerrarModalFormProject = document.getElementById("cerrar-form-proyecto");
const modalFormProject = document.getElementById("modal-form-project");
const FormProject = document.getElementById("form-project");

// Eventos para cerrar y abir el form
abrirModalFormProject.addEventListener("click", function (e) {
    modalFormProject.showModal();
})

cerrarModalFormProject.addEventListener("click", function () {
    modalFormProject.close()
})

// fetch para enviar los datos a la base de datos

FormProject.addEventListener("submit", async (e) => {
    // e.preventDefault()
    // console.log(e);


    const res = await fetch("http://localhost:3000/api/add-project", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre_proyecto: e.target.children[0].children[0].children.Nombre.value,
            prioridad: e.target.children[1].children[1].children[0].value,
            sprint: e.target.children[2].children[1].children[0].value,
            encargado_proyecto: e.target.children[3].children[0].children[0].value,
            miembros_equipo: e.target.children[4].children[0].children[0].value,
            roles_equipo: e.target.children[5].children[0].children[0].value,
        })
    })

    // scrum master, dev team, dev team, dev team
})



///////////////////////////////////////////////////////////////////////////////////////////
// Funcionalidad para la partel nav y visualización de los proyectos

const verTareas = document.getElementById("verTareas");
const verProyectos = document.getElementById("verProyectos");
const containerDashboard = document.getElementById("container-dashboard");
const containerDashboardProyectos = document.getElementById("container-dashboard-projects");
const titleDashboard = document.getElementById("title-dashboard");
// const stringClasesContainerDashboard = containerDashboard.className;
// const arrayClasesContainerDashboard = stringClasesContainerDashboard.split(" ");
// const claseDFlex = arrayClasesContainerDashboard.includes("d-flex");

// console.log(ContainerDashboard);

// contenedor principal de cada proyecto
const containerProject = document.createElement("div");
// contenedor para el img del aside
const containerImgCover = document.createElement("div");
const content = document.createElement("div");
const textImgCover = document.createElement("a");
// container par el contenedor del progreso, nombre y descripción
const containerInfoProject = document.createElement("div");
// container de los avatars de las personas 
const containerEquipo = document.createElement("div");
// container de avatar individual
const containerPersona = document.createElement("div");
const imgPersona = document.createElement("img");
const legendPersona = document.createElement("p");

// container para la descripción, progreso, nombre y estado
const containerMainInfo = document.createElement("div");
// container para el nobre y estado del proyecto
const containerNameProject = document.createElement("div");
const nameProject = document.createElement("p");
const stateProject = document.createElement("p");

// container para la descripción del proyecto
const containerDescProject = document.createElement("div");
const descProject = document.createElement("p");

// container para el progreso de cada proyecto
const containerProgressProject = document.createElement("div");
const legendProgress = document.createElement("p");
const progress = document.createElement("div");


// FETCH PARA OBTENER LOS PROYECTOS E INSERCIÓN EN EL DOM
async function mostrarProjectos() {
    const res = await fetch("/projects-info")
        .then(proyectos => proyectos.json())
        .then(proyectos => {

            proyectos.forEach(proyecto => {

                // creación de las propiedades de cada proyecto
                const nombre = proyecto.nombre_proyecto;
                const prioridad = proyecto.prioridad;
                const sprint = proyecto.sprint;
                const encargao = proyecto.encargado_proyecto;
                const miembros = proyecto.miembros_proyecto;
                const roles = proyecto.roles_proyecto;

                // definiendo las clases de cada elemento de cada proyecto
                containerProject.classList.add("container-project", "d-flex", "ms-4", "mt-3");
                // para las clases del contenedor del img del aside
                containerImgCover.classList.add("container-img-cover");
                content.classList.add("content");
                textImgCover.classList.add("text-img-cover");
                textImgCover.setAttribute("href", "#")

                // para el container con la info de cada proyecto
                containerInfoProject.classList.add("container-info-project");
                containerEquipo.classList.add("container-equipo", "d-flex", "justify-content-start", "ms-2");
                containerPersona.classList.add("contaiener-persona", "d-flex", "flex-column", "align-items-center", "mt-2", "me-2");
                imgPersona.classList.add("img-persona", "rounded-circle");
                legendPersona.classList.add("legend-persona", "mb-0");
                // para el container que contiene el estado, descripción y nombre del proyecto
                containerMainInfo.classList.add("container-main-info", "d-flex", "flex-column", "align-content-between", "me-1", "ms-2", "mt-1");
                containerNameProject.classList.add("container-name-project", "d-flex");
                nameProject.classList.add("fs-4", "fw-bold", "name-project", "mb-0");
                stateProject.classList.add("state-project", "mb-0", "text-wrap", "bg-success", "rounded-pill", "text-center", "state", "ms-1", "me-1", "flex-shrink-0", "align-self-center");
                // Para el container que contiene la descripción
                containerDescProject.classList.add("container-desc-project");
                descProject.classList.add("desc-project", "mb-0");
                // para el container que contiene el progreso del proyecto
                containerProgressProject.classList.add("container-progress-project");
                legendProgress.classList.add("legend-progress", "mb-0");
                progress.classList.add("progress", "bg-success");


                // DEFINIENDO EL CONTENIDO PARA CADA ELEMENTO DEL PROYECTO

                textImgCover.innerText = "Ver detalles del proyecto";
                imgPersona.setAttribute("src", "/img/persona07.jpg");
                legendPersona.innerText = miembros;
                nameProject.innerText = nombre;
                stateProject.innerText = "Activo";
                descProject.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quidem officiis deleniti odit doloremque enim autem exercitationem perspiciatis quis. Quas quis nulla soluta dolorum, possimus dolorem aliquam ea porro hic?"
                legendProgress.innerText = "Progreso 75%";


                // AGREGANDO LOS ELEMENTOS AL DOM

                containerProject.appendChild(containerImgCover);
                containerProject.appendChild(containerInfoProject);

                // agregando los elementos al container img del aside
                containerImgCover.appendChild(content);
                content.appendChild(textImgCover);


                // agregando los elementos al container de equipo
                containerEquipo.appendChild(containerPersona);
                containerPersona.appendChild(imgPersona);
                containerPersona.appendChild(legendPersona);

                // agregando los elementos al container main 
                containerMainInfo.appendChild(containerNameProject);
                containerMainInfo.appendChild(containerDescProject);
                containerMainInfo.appendChild(containerProgressProject);

                // agregando los elementos del nombre y estado
                containerNameProject.appendChild(nameProject);
                containerNameProject.appendChild(stateProject);

                // agregando los elementos de la descripción
                containerDescProject.appendChild(descProject);

                // agregando los elementos del progreso
                containerProgressProject.appendChild(legendProgress);
                containerProgressProject.appendChild(progress);

                containerInfoProject.appendChild(containerEquipo);
                containerInfoProject.appendChild(containerMainInfo);




                containerDashboardProyectos.appendChild(containerProject);





            })




        })

}









document.addEventListener("DOMContentLoaded", function () {
    containerDashboardProyectos.style.display = "none";
})


verProyectos.addEventListener("click", function (e) {
    titleDashboard.innerText = "Tus Projectos";


    containerDashboard.style.display = "none";
    containerDashboardProyectos.style.display = "block"

    mostrarProjectos();

})


verTareas.addEventListener("click", function () {
    titleDashboard.innerText = "Proyecto X"

    containerDashboard.style.display = "flex";
    containerDashboardProyectos.style.display = "none"

    console.log(containerDashboard);
})









console.log("Js funcionando")