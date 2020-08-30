import { Component, OnInit, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__ } from '@angular/core';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {
//crear las siguientes variables
unidades;
opcionSeleccionado: string ;
valorcm:number;
valorconversion:number;
  constructor() { }

  ngOnInit(): void {
    //inicializar las variables
    this.unidades = ["Pulgada","Metro","Kilometro"];
    this.opcionSeleccionado="Selecciona";
    this.valorcm=0;
    this.valorconversion=0;
  }
  capturar() {
    switch(this.opcionSeleccionado){
    case'Pulgada':
    this.valorconversion=this.valorcm* 0.39370;
    break;
    case'Metro':
    this.valorconversion=this.valorcm/100;
    break;
    case'Kilometro':
    this.valorconversion=this.valorcm/100000;
    break;
    }
    }
    }
export class AppComponent{

}
