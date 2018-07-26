import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  
  Color1: Number =this.GeneraColor();
  Color2: Number = this.GeneraColor();
  Color3: Number = this.GeneraColor();

  GeneraColor() {
    let color = Math.floor(Math.random() * 250);
    return color;
  }
  CambiarColor()
  {
    return `rgb(${this.Color1},${this.Color2},${this.Color3})`
  }
  
  constructor() { }

  ngOnInit() {
  }

}
