import { Component, OnInit } from '@angular/core';
import { IAlumno } from '../interfaces/interfaces';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  NewUsuario: IAlumno={
    nombre:"",
    apellido: "",
    username: "",
    carrera: "",
  }

  constructor(private apiCrud: ApiCrudService,  
              private router: Router) { }

ngOnInit() {
}

crearUsuario(){
this.apiCrud.CrearUsuariothis(this.NewUsuario).subscribe();
this.router.navigateByUrl("/listar");
}
}