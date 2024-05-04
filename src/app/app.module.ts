import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogDisplayComponent } from './blog-display/blog-display.component';
import { SafePlainTextPipe } from './services/safe-plain-text.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BlogReadComponent } from './blog-read/blog-read.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    BlogDisplayComponent,
    SafePlainTextPipe,
    BlogReadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
