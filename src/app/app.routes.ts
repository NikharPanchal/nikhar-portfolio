import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent }
];