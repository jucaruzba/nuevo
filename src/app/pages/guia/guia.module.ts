import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuiaPageRoutingModule } from './guia-routing.module';

import { GuiaPage } from './guia.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuiaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [GuiaPage]
})
export class GuiaPageModule {}
