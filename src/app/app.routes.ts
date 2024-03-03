import { Routes } from '@angular/router';
import { NewPortFolioComponent } from './components/newportfolio/newportfolio.component';
import { FolioComponent } from './components/folio/folio.component';


export const routes: Routes = [
    {
        path: 'newportfolio', loadComponent: () => import('./components/newportfolio/newportfolio.component').then(m => m.NewPortFolioComponent)
    },
    {
        path: 'home', loadComponent: () => import('./components/folio/folio.component').then(m => m.FolioComponent)
    },
{
path:  'newportfolio', component: NewPortFolioComponent

},
{
    path: 'folio', component: FolioComponent
},
{
    path: '**', redirectTo: 'newportfolio'
},
{
    path: '',
    pathMatch: 'full',
    redirectTo: 'newportfolio'
}

];
