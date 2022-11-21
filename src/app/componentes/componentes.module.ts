import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { IonicModule } from '@ionic/angular';
import { PersonajesComponent } from './personajes/personajes.component';

@NgModule({
  declarations: [HeaderComponent, PersonajesComponent],

  exports:[HeaderComponent, PersonajesComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentesModule { }
