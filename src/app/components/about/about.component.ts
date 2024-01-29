import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public email: string;


  constructor(){
    this.title = "Jeasson Medina";
    this.subtitle = "Ingeniero en Informática"
    this.email = "jason.german.m@gmail.com"
  }

  ngOnInit(){

  }

}
