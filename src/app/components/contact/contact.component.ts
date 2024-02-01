import { Component, OnInit, ViewChild } from '@angular/core';

declare const $:any

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  public widthSlider: number = 0;
  public anchuraToSlider: number = 0;
  public autor: any;
  
  @ViewChild('textos', {static: true}) textos:any;

  constructor(){}

  ngOnInit(): void {
   //var opcionclasica = document.querySelector('#texto')?.innerHTML;
    //alert(this.textos.nativeElement.textContent);
  }

  cargarSlider(){
   this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = 0;
  }

  getAutor(event:any){
   this.autor = event;
  }
 
}