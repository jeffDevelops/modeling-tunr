import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ArtistsRoutingModule} from './artists/artist-routing.module';
import { ManagersRoutingModule } from './managers/manager-routing.module';
import { ArtistsModule } from './artists/artists.module';
import { ManagersModule } from './managers/managers.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SongsIndexComponent } from './src/app/songs-index/songs-index.component';
import { SongsNewComponent } from './src/app/songs-new/songs-new.component';
import { SongsShowComponent } from './songs/src/app/songs/songs-show/songs-show.component';
import { SongsEditComponent } from './songs/src/app/songs/songs-edit/songs-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SongsIndexComponent,
    SongsNewComponent,
    SongsShowComponent,
    SongsEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'cli-universal-demo'}),
    AppRoutingModule,
    ArtistsRoutingModule,
    ArtistsModule,
    ManagersRoutingModule,
    ManagersModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
