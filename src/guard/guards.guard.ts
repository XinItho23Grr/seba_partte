import { Injectable } from '@angular/core';
import {  UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/servicios/auth.service';
import { ToastController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class GuardsGuard {
  
  constructor(private authservice: AuthService,
              private router: Router, 
              private toastController: ToastController) {}
  
  
  canActivate():
  
    | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
      if (!this.authservice.IsLogged()){
        this.showToast('Debe iniciar sesión');
        this.router.navigate(['/iniciasesion']);
        return false;
    }
    return true;
    }

    async showToast(msg: any) { 
      const toast = await this.toastController.create({
        message: msg,
        duration: 3000
      });
      toast.present();
    }
  }

 

