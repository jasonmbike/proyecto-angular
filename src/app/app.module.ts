import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {routing, appRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { SkillComponent } from './components/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    provideClientHydration(),
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
