import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [AppComponent, HomeComponent, FooterComponent, HeaderComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgbCarouselModule,
        NgbModule,
        AppRoutingModule,
        NgxMaskModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
