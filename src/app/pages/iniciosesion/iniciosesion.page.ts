import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/servicios/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
})
export class IniciosesionPage implements OnInit {

  userdata: any;

  iniciosesionForm: FormGroup;

    usuario = {
    id: 0,
    username: "",
    password: "",
    role: "",
    isactive: false
}



  constructor(private alertController: AlertController,
              private router: Router,
              private authservice: AuthService,
              private toastController: ToastController,
              private fbuilder: FormBuilder ) {
                this.iniciosesionForm = this.fbuilder.group({
                  'username':new FormControl("",[Validators.required, Validators.minLength(4)]),
                  'password':new FormControl("",[Validators.required, Validators.minLength(4)])
                })
               }

  ngOnInit() {
  }
  
  iniciosesion(){
    if(this.iniciosesionForm.valid){
      this.authservice.GetUserById(this.iniciosesionForm.value.username).subscribe(resp =>{
        this.userdata = resp;
        console.log(this.userdata)
        if(this.userdata.length >0)
        {
          this.usuario ={
            id: this.userdata[0].id,
            username: this.userdata[0].username,
            password: this.userdata[0].password,
            role: this.userdata[0].role,
            isactive: this.userdata[0].isactive
          }
          
          if(this.usuario.password === this.iniciosesionForm.value.password){
            if(this.usuario.isactive){
              sessionStorage.setItem('username', this.usuario.username);
              sessionStorage.setItem('role', this.usuario.role);
              sessionStorage.setItem('ingresado', 'true');
              this.showToast('Sesión Iniciada');
              this.router.navigateByUrl("/inicio");
            }
            else{
              this.UserInactivo();
              this.iniciosesionForm.reset();
            }
          }
          else{
            this.Error();
          }
        }
        else{
            this.NoExiste();
            this.iniciosesionForm.reset();
        }
      })
    }
  }

  async showToast (msg: any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
  });
  toast.present();
}
async UserInactivo() {
  const alerta = await this.alertController.create({
    header: 'Usuario Inactivo',
    message: 'Debe contactar con soporte',
    buttons: ['Ok']
  })
  await alerta.present();
  return;
}
async Error() {
  const alerta = await this.alertController.create({
    header: 'Error...',
    message: 'Revise los datos ingresados',
    buttons: ['Ok']
  })
  await alerta.present();
  return;
}
async NoExiste() {
  const alerta = await this.alertController.create({
    header: 'Error...',
    message: 'No existe, debe registrarse',
    buttons: ['Ok']
  })
  await alerta.present();
  return;
}
  

}
