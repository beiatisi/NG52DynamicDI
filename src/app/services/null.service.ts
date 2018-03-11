import { Injectable } from '@angular/core';
import { ServiceInterface } from '../interfaces/service.interface';
import { ServiceEnum } from '../enums/service.enum';

@Injectable()
export class NullService implements ServiceInterface {
  getName(): ServiceEnum {
    return ServiceEnum.NULL;
  }

  getMessage(): string {
    return 'Please select service';
  }
}
