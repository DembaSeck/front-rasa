import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './composants/menu/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageResponseComponent } from './pages/responses/page-response/page-response.component';
import { DetailResponseComponent } from './composants/detail-response/detail-response.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NouvelResponseComponent } from './pages/responses/nouvel-response/nouvel-response.component';
import { PageSpecialiteComponent } from './pages/specialite/page-specialite/page-specialite.component';
import { NouvelSpecialiteComponent } from './pages/specialite/nouvel-specialite/nouvel-specialite.component';
import { PageLieuxComponent } from './pages/lieux/page-lieux/page-lieux.component';
import { NouvelLieuxComponent } from './pages/lieux/nouvel-lieux/nouvel-lieux.component';
import { DetailSpecialiteComponent } from './composants/detail-specialite/detail-specialite.component';
import { DetailLieuxComponent } from './composants/detail-lieux/detail-lieux.component';



@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    InscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageResponseComponent,
    DetailResponseComponent,
    PaginationComponent,
    BouttonActionComponent,
    NouvelResponseComponent,
    PageSpecialiteComponent,
    NouvelSpecialiteComponent,
    PageLieuxComponent,
    NouvelLieuxComponent,
    DetailSpecialiteComponent,
    DetailLieuxComponent,
   
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
