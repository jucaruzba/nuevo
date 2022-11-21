import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PersonajesService } from '../../services/personajes.service';
import { PersonajesComponent } from '../../componentes/personajes/personajes.component';
import { Personaje, Personajes } from '../../interfaces/personajes';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
  personajesRecientes:Personaje[]=[];

  constructor(private servicioPersonajes:PersonajesService,
    private modalcrtl:ModalController
    ) { }

    async verPersonajes(id:number){
      const modal=await this.modalcrtl.create({
        component:PersonajesComponent,
        componentProps:{id}
    });
    modal.present();
  }


  ngOnInit() {
    this.servicioPersonajes.getDatos()
    .subscribe((resp:Personajes)=>{
      console.log(resp)
      this.personajesRecientes=resp.Personajes
    })
  }

}
