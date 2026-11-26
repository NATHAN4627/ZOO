import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  public getHello(): string {
    return 'Hello Cat!';
  }

  public getIntroduce(): string {
    return 'My name is Tom';
  }
}
