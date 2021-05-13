import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderGhComponent } from './header-gh/header-gh.component';
import { FooterGhComponent } from './footer-gh/footer-gh.component';
import { MainGhComponent } from './main-gh/main-gh.component';
import { RepositoryListGhComponent } from './repository-list-gh/repository-list-gh.component';
import { RepositoriesService } from './repositories.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderGhComponent,
    FooterGhComponent,
    MainGhComponent,
    RepositoryListGhComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ RepositoriesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
