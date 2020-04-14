import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './myComponent/footer/footer.component';
import { ContentComponent } from './myComponent/content/content.component';
import { SlideComponent } from './myComponent/slide/slide.component';
import { SidebarComponent } from './myComponent/sidebar/sidebar.component';
import { HeaderComponent } from './myComponent/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContentComponent,
    SlideComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
