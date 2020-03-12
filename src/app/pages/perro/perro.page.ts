import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalesService } from '../../services/animales/animales.service';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.page.html',
  styleUrls: ['./perro.page.scss'],
})
export class PerroPage implements OnInit {

  id: string;
  perro: any;

  constructor(
    private route: ActivatedRoute,
    private animalesService: AnimalesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.animalesService.getPerro(this.id)
    .subscribe((res: any) =>{ 
      this.perro = res.perro;
    });
  }

}
