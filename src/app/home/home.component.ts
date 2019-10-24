import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
 sideNavMenu: any; 	
constructor(private _router : Router) {    
 this.sideNavMenu = [{"text":"Dashboard","expand":false,"id":null,"leaf":false,"icon":"fa fa-dashcube","routerLink":null,"defaultUi":false,"children":[{"text":"dashboard","expand":false,"id":"a83b853b-211f-429a-96c0-e3723ba0c370","leaf":true,"icon":"fa fa-align-justify","routerLink":"nfmsonline/core/dashboard","defaultUi":false,"children":null}]}]; }
sideNavClick(data: any) {
   if( data.children==null && data.routerLink) {
     this._router.navigate([data.routerLink]);
    }
  }
}
