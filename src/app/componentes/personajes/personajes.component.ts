import { Component, Input, OnInit } from '@angular/core';
import { DetallePersonaje } from '../../interfaces/personajes';
import { PersonajesService } from '../../services/personajes.service';
import { AlertController, ModalController } from '@ionic/angular';
import { HttpResponse } from '@capacitor/core';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {

  @Input()id:number;
  personajeDatos:DetallePersonaje={}

  constructor( private servicioPersonajes:PersonajesService,
    private modalCtrl:ModalController,
    private alertController:AlertController

  ) { }
  regresar(){
    this.modalCtrl.dismiss()
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Es un mensaje importante',
      message: 'Necesita internet para ver la informacion del personaje',
      buttons: ['OK'],
    });

    await alert.present();
  }


  ngOnInit() {
    this.servicioPersonajes.getPersonaje(this.id)
    .subscribe((resp:DetallePersonaje)=>{
      console.log(resp)
      this.personajeDatos=resp
    },(errorR: HttpResponse)=>{
        if (errorR.status===0) {
          this.presentAlert();
        }
    })
  }

}
