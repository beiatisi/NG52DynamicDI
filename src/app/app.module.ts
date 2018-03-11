import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AWSService } from './services/aws.service';
import { ServiceToken } from './tokens/service.token';
import { AzureService } from './services/azure.service';
import { GcpService } from './services/gcp.service';
import { ServiceFactory } from './services/service.factory';
import { NullService } from './services/null.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ServiceFactory,
    { provide: ServiceToken, useClass: NullService, multi: true},
    { provide: ServiceToken, useClass: AWSService, multi: true},
    { provide: ServiceToken, useClass: AzureService, multi: true},
    { provide: ServiceToken, useClass: GcpService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
