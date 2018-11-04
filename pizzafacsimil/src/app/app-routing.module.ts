import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeawayComponent } from './takeaway/takeaway.component';
import { TavoloComponent } from './tavolo/tavolo.component';
import { PrenotazioniComponent } from './prenotazioni/prenotazioni.component';
import { BoxComponent } from './box/box.component';
import { ContattiComponent } from './contatti/contatti.component';

const routes: Routes = [
  {path:'', component: BoxComponent},
  {path: 'prenotazione', component: PrenotazioniComponent},
  {path:'prenotazionetavolo', component: TavoloComponent},
  {path:'prenotazionetakeaway', component: TakeawayComponent},
  {path:'contatti', component: ContattiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[BoxComponent, TavoloComponent,TakeawayComponent, PrenotazioniComponent, ContattiComponent]