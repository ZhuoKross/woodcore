const tareaSinHacer = document.getElementById("sinHacer");
const tareasEnProceso = document.getElementById("Haciendo");
const tareasRealizadas = document.getElementById("taskHecho");
// menú container dashboard
const linkProyectos = document.getElementById("crearProyectos");
const linkTareas = document.getElementById("crearTareas");
// Código del archivo tareas.js para mostrar las tareas




function fetchTareas() {
    fetch("/task-info")
        .then(tareas => tareas.json())
        .then(tareas => {

            // Recorriendo cada uno de los elementos del conjunto de tareas
            tareas.forEach(task => {
                // Creando y asignando cada una de las propiedades de la tarea por cada una de las tareas 
                // const tarea_id = task.tarea_id;
                // const nombre = task.nombre;
                // const prioridad = task.prioridad;
                // const descripcion = task.descripcion;
                // const estado = task.estado;
                // const encargado = task.encargado;
                // const sprint = task.sprint;

                // prueba
                // console.log(estado)

                // creación de los elmentos para las tareas
                const contenedorTarea = document.createElement("div");
                const iconTask = document.createElement("img");
                const contenedorContenido = document.createElement("div");
                const nombreTarea = document.createElement("p");
                const prioridadTarea = document.createElement("p");
                const estadoTarea = document.createElement("p");
                const encargadoTarea = document.createElement("p");
                const sprintTarea = document.createElement("p");


                // Definiendo los atributos y clases para caada elemento
                // Definición de atributos y clases
                contenedorTarea.classList.add("task", "d-flex", "justify-content-start", "rounded-top", "me-2", "mb-2");
                contenedorTarea.setAttribute("draggable", true);
                iconTask.classList.add("task-icon", "align-self-center", "me-2");

                contenedorContenido.classList.add("desc-task", "d-flex", "flex-column", "justify-content-center");

                nombreTarea.classList.add("mb-0", "fw-bold");
                prioridadTarea.classList.add("mb-0");
                estadoTarea.classList.add("mb-0");
                estadoTarea.classList.add("mb-0");



                // Agregando el contenido de las tareas
                iconTask.setAttribute("src", "../img/svg/task-icon.svg");
                nombreTarea.innerText = "Nombre: " + task.nombre;
                prioridadTarea.innerText = "Prioridad: " + task.prioridad;
                estadoTarea.innerText = "Estado: " + task.estado;
                encargadoTarea.innerText = "Encargado: " + task.encargado;


                // Agregando cada elemento al DOM
                contenedorContenido.appendChild(nombreTarea);
                contenedorContenido.appendChild(prioridadTarea);
                contenedorContenido.appendChild(estadoTarea);
                contenedorContenido.appendChild(encargadoTarea);

                contenedorTarea.appendChild(contenedorContenido);
                contenedorTarea.insertAdjacentElement("afterbegin", iconTask);
                tareaSinHacer.appendChild(contenedorTarea);


            });

            obtenerYCrearEventosTareas()
        })
        .catch(err => console.log("error al cargar las tareas: ", err))

}


fetchTareas()


async function obtenerYCrearEventosTareas() {
    try {
        const tareas = document.querySelectorAll(".task");

        const arrayTareas = Array.from(tareas);

        console.log(arrayTareas);
        
        // total de tareas
        const tareasTotales = arrayTareas.length;
        
        //  Asignando el data id a cada una de las tareas del arrayTareas
        arrayTareas.forEach((tarea, indice)=>{
            tarea.id = indice;
        })
        
        // Código para hacer que las tareas sean drag and drop 
        // para cuando inicia el arrastre en cada uno de los contenedores y para indentificar que tarea se agrega a qué container
        tareaSinHacer.addEventListener("dragstart", function(e){
            e.dataTransfer.setData("id", e.target.id);
        })
        
        tareasEnProceso.addEventListener("dragstart", function(e){
            e.dataTransfer.setData("id", e.target.id);

        })

        tareasRealizadas.addEventListener("dragstart", function(e){
            e.dataTransfer.setData("id", e.target.id);

        })


        //  para los eventos dragover de los contenedores
        tareaSinHacer.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        tareasEnProceso.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        tareasRealizadas.addEventListener("dragover", function(e){
            e.preventDefault();
        })

        
        // para los eventos drop de los contenedores
        tareaSinHacer.addEventListener("drop", function(e){
            const id = e.dataTransfer.getData("id");
            e.target.appendChild(document.getElementById(id));
            console.log(id);
        })
        
        tareasEnProceso.addEventListener("drop", function(e){
            const id = e.dataTransfer.getData("id");
            e.target.appendChild(document.getElementById(id));
            console.log(id);
        })
        
        tareasRealizadas.addEventListener("drop", function(e){
            const id = e.dataTransfer.getData("id");
            e.target.appendChild(document.getElementById(id));
            console.log(id);
        })
        



    } catch (err) {
        console.log(err);
    }
}





console.log("Js funcionando")