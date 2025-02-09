import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServerSideFilterComponent } from './server-side-filter/server-side-filter.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerSideFilterComponent,
    BreadcrumbComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
