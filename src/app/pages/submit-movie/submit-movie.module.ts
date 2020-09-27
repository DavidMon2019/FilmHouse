import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {AgmCoreModule} from '@agm/core';
import {InputFileModule} from 'ngx-input-file';
import {SubmitMovieComponent} from './submit-movie.component';

export const routes = [
    {path: '', component: SubmitMovieComponent, pathMatch: 'full'}
];

@NgModule({
    declarations: [SubmitMovieComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        AgmCoreModule,
        InputFileModule
    ]
})
export class SubmitMovieModule {
}
