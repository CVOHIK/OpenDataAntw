import { NavbarComponent } from './../../../src/navbars/navbar.component';
import { NavbarService } from './../../../src/navbars/navbar.service';
import { LogoComponent } from './../../../src/navbars/logo.component';
import { LinksComponent } from './../../../src/navbars/links.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from '../../../src';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';

const routes:Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},  
  {path:"home",component:HomeComponent},
  {path:"test",component:TestComponent}
 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{useHash:true}),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [NavbarService],
  bootstrap: [AppComponent],
  exports: [ NavbarComponent, LinksComponent, LogoComponent],
})
export class AppModule {
}
