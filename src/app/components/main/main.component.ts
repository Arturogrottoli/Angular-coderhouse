import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/lista';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public LISTA: Array<Lista> = [
    {
    id: 1,
    nombre: 'Juan Carlos',
    apellido: 'Gonzalez',
    cursos: ['JavaScript','React'],
  },
  {
    id: 2,
    nombre: 'María',
    apellido: 'Jamar',
    cursos: ['JavaScript','Desarrollo web'],
  },
  {
    id: 3,
    nombre: 'José',
    apellido: 'Fernandez',
    cursos: ['Angular','React'],
  },
  {
    id: 4,
    nombre: 'Miriam',
    apellido: 'Vento',
    cursos: ['JavaScript'],
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
