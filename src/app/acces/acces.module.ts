import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccesViewComponent } from './acces-view/acces-view.component';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'sign-in', component: AccesViewComponent },
        { path: 'sign-up', component: AccesViewComponent }
    ]),
  ],
  declarations: [
  AccesViewComponent],
  providers: [
  ]
})
export class AccesModule { }
