import { ServiceEnum } from '../enums/service.enum';

export interface ServiceInterface {
  getName(): ServiceEnum;
  getMessage(): string;
}
