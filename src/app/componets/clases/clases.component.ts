import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alerta: string = "alert-secondary"
  loading: boolean = false;

  propiedades: Object = {
    danger: true
  }

  constructor() { }

  ngOnInit() {
  }

  ejecutarLoading() {
    this.loading = true;
    setTimeout( () => this.loading=false, 3000 );
  }

}
