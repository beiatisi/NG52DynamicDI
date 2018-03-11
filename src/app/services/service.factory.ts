import { ServiceInterface } from '../interfaces/service.interface';
import { ServiceToken } from '../tokens/service.token';
import { Inject, Injectable } from '@angular/core';
import { ServiceEnum } from '../enums/service.enum';

@Injectable()
export class ServiceFactory {
  constructor(@Inject(ServiceToken) private services: ServiceInterface[]) {
  }

  createService(name: ServiceEnum): ServiceInterface {
    return this.services
               .filter(item => item.getName() === name)[0];
  }
}
