import { Injectable } from '@angular/core';
import { ServiceInterface } from '../interfaces/service.interface';
import { ServiceEnum } from '../enums/service.enum';

@Injectable()
export class AWSService implements ServiceInterface {
  getName(): ServiceEnum {
    return ServiceEnum.AWS;
  }

  getMessage(): string {
    return 'You have selected AWS service';
  }
}
