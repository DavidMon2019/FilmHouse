import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {ChatComponent} from './chat.component';
import {SocketService} from './shared/services/socket.service';
import {DialogUserComponent} from './dialog-user/dialog-user.component';
import {StoreUserService} from './shared/services/store-user.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        TranslateModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        TranslateModule,
        MatMenuModule,
        ScrollingModule, TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })],
    declarations: [ChatComponent, DialogUserComponent],
    providers: [MatDialog, SocketService, StoreUserService],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        TranslateModule,
        MatMenuModule,
        ChatComponent
    ],
    entryComponents: [DialogUserComponent]
})
export class ChatModule {
}
