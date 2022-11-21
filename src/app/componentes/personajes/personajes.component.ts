import { Component, Input, OnInit } from '@angular/core';
import { DetallePersonaje } from '../../interfaces/personajes';
import { PersonajesService } from '../../services/personajes.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {

  @Input()id:number;
  personajeDatos:DetallePersonaje={}

  constructor( private servicioPersonajes:PersonajesService,
    private modalCtrl:ModalController

  ) { }
  regresar(){
    this.modalCtrl.dismiss()
  }

  ngOnInit() {
    this.servicioPersonajes.getPersonaje(this.id)
    .subscribe((resp:DetallePersonaje)=>{
      console.log(resp)
      this.personajeDatos=resp
    })
  }

}
