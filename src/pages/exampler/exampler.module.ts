import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamplerPage } from './exampler';

@NgModule({
  declarations: [
    ExamplerPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamplerPage),
  ],
})
export class ExamplerPageModule {}
