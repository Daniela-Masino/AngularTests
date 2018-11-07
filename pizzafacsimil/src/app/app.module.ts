import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModalComponent } from './modal/modal.component';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ModalComponent,
    routingComponents,
    SocialComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
