import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { NavController } from '@ionic/angular';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthService,
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.authService.loginUser(form.value)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          Swal.fire({
            title: 'Error',
            text: 'Error al iniciar seción',
            icon: 'error'
          });
          throw err;
        })
      )
      .subscribe((res: any) => {
        this.authService.token = res.token;
        this.navController.navigateForward('/tabs');
      });
  }

}
