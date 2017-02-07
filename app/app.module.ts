import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@NgModule({

imports: [
    BrowserModule, RouterModule
],

declarations:[
    EventsAppComponent
],
bootstrap: [EventsAppComponent]

})
export class AppModule{

}





