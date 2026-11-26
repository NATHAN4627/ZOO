import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'Hello Dog!';
  }

  public getIntroduce(): string {
    return 'My name is Reks';
  }
}
