import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostcreateComponent } from './postcreate/postcreate.component';
import { CommentlistComponent } from './postlist/commentlist/commentlist.component';
import { CommentcreateComponent } from './postlist/commentcreate/commentcreate.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostcreateComponent,
    CommentlistComponent,
    CommentcreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
