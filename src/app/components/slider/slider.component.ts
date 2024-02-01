import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

declare const $:any

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {

  @Input() anchura: number;

  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor(){
    this.anchura = 0;

    this.autor = {
      nombre: "Jeasson Medina",
      website: "www.google.com,",
      youtube: "atun"
    };
  }

  ngOnInit(): void {
    // Inicializar el color actual
    let currentColor = "green";

    $("#logo").click(function(e:any) {
      e.preventDefault();

      // Cambiar al siguiente color en la secuencia
      switch (currentColor) {
        case "green":
          $("header").css("background", "red");
          currentColor = "red";
          break;
        case "red":
          $("header").css("background", "blue");
          currentColor = "blue";
          break;
        case "blue":
          $("header").css("background", "green");
          currentColor = "green";
          break;
        // Añadir más colores según sea necesario

        default:
          break;
      }
    });
 
    ($('.galeria')as any).bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: this.anchura
    });
        
  }

  lanzar(event:any){
    console.log(event)
    this.conseguirAutor.emit(this.autor);
  }
}
