import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnapShareListeComponent } from './snap-share-liste/snap-share-liste.component';
import { LandingPageComponentComponent } from './landing-page/landing-page-component.component';
import { SingleSnapShareComponent } from './single-snap-share/single-snap-share.component';
import { NewSnapShareComponent } from './new-snap-share/new-snap-share.component';

const routes: Routes = [{
  path:"snapShare", component: SnapShareListeComponent 
},
{
  path:"", component:LandingPageComponentComponent
},
{
  path:"snapShare/:id",component:SingleSnapShareComponent
},
{
  path:"create", component:NewSnapShareComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
