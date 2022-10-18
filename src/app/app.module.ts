import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TrendingProjectsComponent } from './trending-projects/trending-projects.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { FormComponent } from './form/form.component';
import { WelcomeWindowComponent } from './welcome-window/welcome-window.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    TrendingProjectsComponent,
    ProjectDescriptionComponent,
    FeedbackComponent,
    FooterComponent,
    BannerComponent,
    FormComponent,
    WelcomeWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
