import { Component} from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent{
  //variable listTareas de tipo Tarea[]
  //importamos el modelo Tarea
  listaTareas: Tarea[] = [];

  //variable nombreTarea, que bindearemos con bananaInBox el valor del input(importaremos FormsModule en app.module.ts)
  nombreTarea: string = '';

  constructor() {}

  agregarTarea(): void {
    //comprobamos que recoge el bindeo del banana inbox
    //console.log(this.nombreTarea);
    //crear objeto tareac

    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false,
    };
    //comprobamos que se ha creado el objeto
    //console.table({tarea});

    //agregar el objeto tarea al array (a listaTareas)
    this.listaTareas.push(tarea);
    //resetear el input
    this.nombreTarea = '';
  }

  eliminarTarea(i: number): void {
    //console.log(i);
    this.listaTareas.splice(i, 1);
  }

  modificarTarea(i: number, tarea:Tarea): void{
    this.listaTareas[i].estado = !tarea.estado;

  }


}
