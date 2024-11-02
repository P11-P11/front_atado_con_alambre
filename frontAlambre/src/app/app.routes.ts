import { Routes } from '@angular/router';
import { VistaDefaultComponent } from './vista-default/vista-default.component';
import { VistaUserComponent } from './vista-user/vista-user.component';
import { VistaAdminComponent } from './vista-admin/vista-admin.component';

export const routes: Routes = [
    {path: '', component: VistaDefaultComponent},
    {path: 'user', component: VistaUserComponent},
    {path: 'admin', component: VistaAdminComponent}
];
