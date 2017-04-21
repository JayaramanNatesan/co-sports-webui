import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ParticipantsComponent } from './participants/participants.component';

const routes: Routes = [
    {
        path: "home", component: DashboardComponent
    },
    {
        path: "events/:eventId/participants", component: ParticipantsComponent
    },
    {
        path: '**',
        component: DashboardComponent   
    }
]  

export const routing = RouterModule.forRoot(routes);
