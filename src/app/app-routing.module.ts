import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/main/main.component').then(m => m.MainComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'repair-services',
        loadComponent: () => import('./components/repair-services/repair-services.component').then(m => m.RepairServicesComponent)
    },
    {
        path: 'reviews',
        loadComponent: () => import('./components/reviews/reviews.component').then(m => m.ReviewsComponent)
    },
    {
        path: 'admin',
        loadComponent: () => import('./components/admin/admin.component').then(m => m.AdminComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
