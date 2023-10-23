import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAlumnos } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { IAlumno } from '../pages/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpclient:HttpClient) { }

  listarAlumnos():Observable<IAlumnos>{
    return this.httpclient.get<IAlumnos>(`${environment.apiUrl}/Alumnos`);
  }

  CrearAlumno(NewUsuario: IAlumnos): Observable<IAlumnos>{
    return this.httpclient.post<IAlumnos>(`${environment.apiUrl}/Alumnos`, NewUsuario);
  }

  BuscarAlumnoId(id:number):Observable<IAlumnos>{
    return this.httpclient.get<IAlumnos>(`${environment.apiUrl}/Alumnos/?id=${id}`);
  }

  ActualizarAlumno(Alumno:any):Observable<IAlumnos>{
    return this.httpclient.put<IAlumnos>(`${environment.apiUrl}/Alumnos/${Alumno.id}`, Alumno);
  }

  EliminarAlumno (Alumno:any): Observable<IAlumnos>{
    return this.httpclient.delete<IAlumnos>(`${environment.apiUrl}/Alumnos/${Alumno.id}`);
  }
}
