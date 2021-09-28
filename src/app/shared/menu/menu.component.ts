import { Component, OnInit } from '@angular/core';

interface MenuGraficos {
  nombre: string;
  ruta: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MenuComponent implements OnInit {
  public rutas: MenuGraficos[] = [
    { nombre: 'Barras', ruta: 'graficas/barras' },
    { nombre: 'Barras Dobles', ruta: 'graficas/barras-doble' },
    { nombre: 'Dona', ruta: 'graficas/dona' },
    { nombre: 'Dona Http', ruta: 'graficas/dona-http' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
