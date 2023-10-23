import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users } from 'src/app/pages/interfaces/interfaces';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private httpClient: HttpClient,
               private router: Router) { }

  GetAllUsers():Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios`);
  }
  GetUserById(codigo:any):Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios/?username=${codigo}`);
  }
  IsLogged(){
    return sessionStorage.getItem('username')!=null;
  }
  
}
