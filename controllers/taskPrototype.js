class Task{
    contructor(tarea_id, nombre_tarea, prioridad, resumen, estado, encargado_tarea, sprint_tarea){
        this.tarea_id = tarea_id;
        this.nombre_tarea = nombre_tarea;
        this.prioridad = prioridad;
        this.resumen = resumen;
        this.estado = estado;
        this.encargado_tarea = encargado_tarea;
        this.sprint_tarea = sprint_tarea;
    }
}

module.exports = Task