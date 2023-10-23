import { Component } from '@angular/core';


interface Componente{
  name: string;
  icon: string;
  redirecTo: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes: Componente[]=[
    {
      name:'Inicio',
      icon:'home-outline',
      redirecTo:'/inicio'
    },
    {
      name:'Info',
      icon:'book-outline',
      redirecTo:'/info'
    },
    {
      name:'InicioSesion',
      icon:'finger-print-outline',
      redirecTo:'/iniciosesion'
    },
    {
      name:'Registrarse',
      icon:'person-add-outline',
      redirecTo:'/registro'
    },


  ]




}
