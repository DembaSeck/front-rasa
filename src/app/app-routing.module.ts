import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { NouvelLieuxComponent } from './pages/lieux/nouvel-lieux/nouvel-lieux.component';
import { PageLieuxComponent } from './pages/lieux/page-lieux/page-lieux.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { NouvelResponseComponent } from './pages/responses/nouvel-response/nouvel-response.component';
import { PageResponseComponent } from './pages/responses/page-response/page-response.component';
import { NouvelSpecialiteComponent } from './pages/specialite/nouvel-specialite/nouvel-specialite.component';
import { PageSpecialiteComponent } from './pages/specialite/page-specialite/page-specialite.component';

const routes: Routes = [
  {
    path:'login',
    component: PageLoginComponent
  },
  {
    path: 'inscrire',
    component: InscriptionComponent
  },
  {
    path:'',
    component:PageDashboardComponent,
    children:[
      {
        path:'statistiques',
        component:PageStatistiquesComponent
      },
      {
        path:'responses',
        component:PageResponseComponent
      },
      {
        path:'nouvelresponse',
        component:NouvelResponseComponent
      },
      {
        path:'specialites',
        component:PageSpecialiteComponent
      },
      {
        path:'nouvelspecialite',
        component:NouvelSpecialiteComponent
      },{
        path:'lieux',
        component:PageLieuxComponent
      },
      {
        path:'nouvellieux',
        component:NouvelLieuxComponent
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
