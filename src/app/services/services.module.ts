import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComentariosService} from './comentarios/comentarios.service';
import {NotificacionService} from './notificacion/notificacion.service';
import {PeliculasService} from './peliculas/peliculas.service';


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        ComentariosService,
        NotificacionService,
        PeliculasService
    ]
})
export class ServicesModule {
}
