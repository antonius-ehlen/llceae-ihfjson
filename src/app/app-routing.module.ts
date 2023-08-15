import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FragenlisteComponent } from './fragenliste/fragenliste.component';
import { AppComponent } from './app.component';
import { EinzelfrageComponent } from './einzelfrage/einzelfrage.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: AppComponent},
  {path: 'fliste', component: FragenlisteComponent},
  {path: 'eliste', component: EinzelfrageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
