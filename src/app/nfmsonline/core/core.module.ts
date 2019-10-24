import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AmexioWidgetModule, AmexioChartsModule, AmexioDashBoardModule, AmexioMapModule, AmexioEnterpriseModule} from 'amexio-ng-extensions';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoadRecaptchaService } from "amexio-ng-extensions";
import { ROUTES } from './core.route';

@NgModule({
	  imports: [
	    CommonModule, FormsModule,
	    HttpClientModule,
	    RouterModule.forChild(ROUTES),
	    AmexioWidgetModule,
	    AmexioChartsModule,
	    AmexioDashBoardModule,
	    AmexioMapModule,
	    AmexioEnterpriseModule,
	    ReactiveFormsModule		
	  ],
	  exports: [RouterModule],
	  declarations: [
	    DashboardComponent,
	  ],
	  providers: [
	    LoadRecaptchaService,
	  ]
})
export class CoreModule {
}
