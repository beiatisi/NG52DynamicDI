import { Component, ElementRef, ViewChild } from '@angular/core';
import { Service } from './models/service.model';
import { ServiceInterface } from './interfaces/service.interface';
import { ServiceFactory } from './services/service.factory';
import { ServiceEnum } from './enums/service.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  services: Service[] = [
    { name: ServiceEnum.NULL },
    { name: ServiceEnum.AWS },
    { name: ServiceEnum.Azure },
    { name: ServiceEnum.GCP }
  ];

  message = 'Please select service';

  @ViewChild('mySelect')
  private mySelect: ElementRef;
  private service: ServiceInterface;

  constructor(private serviceFactory: ServiceFactory) {}

  onChange() {
    const serviceName = this.mySelect.nativeElement.value;
    this.service = this.serviceFactory.createService(serviceName);
    this.message = this.service.getMessage();
  }
}
