import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser';

@Component({
  selector: 'app-sueldo',
  templateUrl: './sueldo.component.html',
  styleUrls: ['./sueldo.component.css']
})
export class SueldoComponent implements OnInit {
  registro=[];
  empleado:any;
  nombre:string;
  salario:number;
  isss:number;
  renta:number;
  afp:number;
  sueldoneto:number;
  contador:number;
  constructor() { }

  ngOnInit(): void {
    this.salario=0;
    this.nombre='';
    this.contador=0;
  }
  ingresar(){
    this.isss=this.salario*0.073;
    this.renta=this.salario*0.11;
    this.afp=this.salario*0.051;
    this.sueldoneto=(this.salario)-(this.isss)-(this.renta)-(this.afp);
    this.empleado={"nombre":this.nombre,"isss":this.isss,"renta":this.renta,"afp":this.afp,"sueldoneto":this.sueldoneto};
    this.registro.push(this.empleado);
    this.contador++;
  }
  
}
