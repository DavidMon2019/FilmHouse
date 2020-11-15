import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {PagesComponent} from './pages/pages.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {ChatComponent} from './shared/chat/chat.component';

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent, children: [
            // { path: '', redirectTo: '/landing', pathMatch: 'full' },
            {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
            {path: 'support', component: ChatComponent},
            {
                path: 'properties',
                loadChildren: () => import('./pages/properties/properties.module').then(m => m.PropertiesModule)
            }
        ]
    },
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
            // useHash: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
