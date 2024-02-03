import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutes } from './components/login/login.routes';

export const routes: Routes = [
    ...LoginRoutes,
    { path: 'login',
        loadChildren: () => import('./components/login/login.routes')
        .then(route => route.LoginRoutes)
    },
    { path: '', redirectTo: '', pathMatch: 'full'},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
