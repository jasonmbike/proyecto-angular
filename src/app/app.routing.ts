import { ModuleWithProviders, createComponent } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { SkillComponent } from "./components/skill/skill.component";


const appRoutes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'sobre-mi', component: AboutComponent},
    {path: 'proyectos', component: ProjectsComponent},
    {path: 'crear-proyecto', component: CreateComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'skills', component: SkillComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);