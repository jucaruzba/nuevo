import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlide } from '@ionic/angular';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {

  opcionesSlide={
    loop:true,
 
  }
  constructor() { }

  ngOnInit() {
  }



}
