import { Injectable } from '@angular/core';
import { ServiceInterface } from '../interfaces/service.interface';
import { ServiceEnum } from '../enums/service.enum';

@Injectable()
export class GcpService implements ServiceInterface {
  getName(): ServiceEnum {
    return ServiceEnum.GCP;
  }

  getMessage(): string {
    return 'You have selected GCP service';
  }
}
