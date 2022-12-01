import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { PersonajesService } from '../../services/personajes.service';
import { PersonajesComponent } from '../../componentes/personajes/personajes.component';
import { Personaje, Personajes } from '../../interfaces/personajes';
import { HttpResponse } from '@capacitor/core';
import { identity } from 'rxjs';
import { Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
  personajesRecientes:Personaje[]=[];

  constructor(private servicioPersonajes:PersonajesService,
    private modalcrtl:ModalController,
    private alertController:AlertController
    ) { }
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Es un mensaje importante',
        message: 'Necesita conectarse a una red para visualizar los personajes.',
        buttons: ['OK'],
      });
  
      await alert.present();
    }
  
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
    },(errorR:HttpResponse)=>{
      if (errorR.status===0) {
        this.presentAlert();
      }}
      )
  }

}
