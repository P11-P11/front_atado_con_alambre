import { Routes } from '@angular/router';
import { VistaUserComponent } from './vista-user/vista-user.component';
import { VistaAdminComponent } from './vista-admin/vista-admin.component';

export const routes: Routes = [
    {path: 'user', component: VistaUserComponent},
    {path: 'admin', component: VistaAdminComponent}
];
