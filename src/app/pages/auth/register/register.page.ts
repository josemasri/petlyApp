import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private authService: AuthService,
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    if (form.valid) {
      if (form.value.password !== form.value.confirmPassword) {
        Swal.fire({
          title: 'Oops...',
          text: 'Las contraseñas no coinciden',
          icon: 'error',
          background: '#fff',
        });
        form.value.password = '';
        form.value.confirmPassword = '';
      } else {
        // El formulario es correcto
        this.authService.registerUser(form.value)
        .pipe()
        .subscribe(res => {
          Swal.fire({
            title: 'Registro éxitoso',
            text: 'Inicia seción para continuar',
            icon: 'success',
            background: '#fff',
          });
          this.navController.navigateForward('login');
        });
      }
    }
  }

}
