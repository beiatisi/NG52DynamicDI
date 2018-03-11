import { Injectable } from '@angular/core';
import { ServiceInterface } from '../interfaces/service.interface';
import { ServiceEnum } from '../enums/service.enum';

@Injectable()
export class AzureService implements ServiceInterface {
  getName(): ServiceEnum {
    return ServiceEnum.Azure;
  }

  getMessage(): string {
    return 'You have selected Azure service';
  }
}
