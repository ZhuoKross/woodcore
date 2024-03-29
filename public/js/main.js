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
    let res = await fetch("/task-info")
        .then(tareas => tareas.json())
        .then(tareas => {

            // Recorriendo cada uno de los elementos del conjunto de tareas
            tareas.forEach(task => {
                // Creando y asignando cada una de las propiedades de la tarea por cada una de las tareas 
                // const tarea_id = task.tarea_id;
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

            obtenerYCrearEventosTareas()
            estadosTareas()
        })
        .catch(err => console.log("error al cargar las tareas: ", err))

}


fetchTareas()



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
            const id = e.dataTransfer.getData("id");
            e.target.appendChild(document.getElementById(id));
            // console.log(id);
            estadosTareas()
        })

        tareasEnProceso.addEventListener("drop", function (e) {
            const id = e.dataTransfer.getData("id");
            e.target.appendChild(document.getElementById(id));
            // console.log(id);
            estadosTareas()
        })

        tareasRealizadas.addEventListener("drop", function (e) {
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

    let elementosHijosSinHacer = containerTareasSinHacer.children;
    let elementosHijosHaciendo = containerTareasEnProceso.children;
    let elementosHijosRealizadas = containerTareasRealizadas.children;


    tasks.forEach((tarea, indice) => {
        // Prueba de código para recorrer cada tarea
        // console.log(tarea.children[2].children)

        // Adquirir los elementos padre y su clase
        const elementoPadre = tarea.parentNode;
        const stringClasesElementoPadre = elementoPadre.className;
        const arrayClasesElementoPadre = stringClasesElementoPadre.split(" ");
        //para las clases de los elementos padre
        const claseSinHacer = arrayClasesElementoPadre.includes("sinHacer");
        const claseHaciendo = arrayClasesElementoPadre.includes("Haciendo");
        const claseRealizada = arrayClasesElementoPadre.includes("taskHecho");
        // para los estados de cada una de las tareas
        const firstState = tarea.children[2].children[0];
        const secondState = tarea.children[2].children[1];
        const thirdState = tarea.children[2].children[2];
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




        // Hacer la validación para aplicar el fondo a cada uno de los estados en base a si contiene o no la clase "bg-primary";
        if (claseRealizada === true) {
            if (claseBgPrimaryThirdState === true & claseBgPrimarySecondState === true) {
                thirdState.classList.remove("bg-primary")
            } else {
                thirdState.classList.add("bg-primary");
                secondState.classList.add("bg-primary")
            }

        } else if (claseHaciendo === true) {
            if (claseBgPrimaryThirdState === true) {
                thirdState.classList.remove("bg-primary");

            } else {
                secondState.classList.add("bg-primary");

            }
        } else if (claseSinHacer === true) {

            if (claseBgPrimarySecondState === true || claseBgPrimaryThirdState === true) {
                thirdState.classList.remove("bg-primary");
                secondState.classList.remove("bg-primary");
            } else {
                firstState.classList.add("bg-primary");
            }
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
        const res = await fetch("http://localhost:3000/api/add-task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: e.target.children[0].children[0].children.nombre_task.value,
                prioridad: e.target.children[0].children[0].children.prioridad.value,
                descripcion: e.target.children[0].children[0].children[4].children.des_task.value,
                estado: e.target.children[0].children[1].children.estado.value,
                encargado: e.target.children[0].children[1].children.encargado.value,
                sprint: e.target.children[0].children[1].children.sprint_task.value
            })
        })
        console.log(e)

    })
})



///////////////////////////////////////////////////////////////////////////////////////////
// Funcionalidad para crear el form de crear proyectos

const abrirModalFormProject = document.getElementById("abrir-form-proyecto");
const cerrarModalFormProject = document.getElementById("cerrar-form-proyecto");
const modalFormProject = document.getElementById("modal-form-project");
const FormProject = document.getElementById("form-project");

// Eventos para cerrar y abir el form
abrirModalFormProject.addEventListener("click", function(e){
    modalFormProject.showModal();
})

cerrarModalFormProject.addEventListener("click", function(){
    modalFormProject.close()
})

// fetch para enviar los datos a la base de datos

FormProject.addEventListener("submit", async (e) =>{
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
// const stringClasesContainerDashboard = containerDashboard.className;
// const arrayClasesContainerDashboard = stringClasesContainerDashboard.split(" ");
// const claseDFlex = arrayClasesContainerDashboard.includes("d-flex");

// console.log(ContainerDashboard);

verProyectos.addEventListener("click", function (e) {

    containerDashboard.style.display = "none";

    console.log(containerDashboard);

})


verTareas.addEventListener("click", function(){
    containerDashboard.style.display = "flex";

    console.log(containerDashboard);
})









console.log("Js funcionando")