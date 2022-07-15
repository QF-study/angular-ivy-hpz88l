import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { FatherComponent } from './components/father/father.component';
import { SonComponent } from './components/son/son.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, FatherComponent, SonComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
