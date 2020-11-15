import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { MatVideoModule } from 'mat-video';
import { SharedModule } from '../../shared/shared.module';
import { PropertiesComponent } from './properties.component';
import { PropertyComponent } from './property/property.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {ChatModule} from '../../shared/chat/chat.module';

export const routes = [
  { path: '', component: PropertiesComponent, pathMatch: 'full' },
  { path: ':id', component: PropertyComponent }
];

@NgModule({
  declarations: [
    PropertiesComponent,
    PropertyComponent
  ],
  exports: [
    PropertiesComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AgmCoreModule,
        MatVideoModule,
        SharedModule,
        YouTubePlayerModule,
        ChatModule
    ]
})
export class PropertiesModule { }
