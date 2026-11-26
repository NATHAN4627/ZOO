import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service.js';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  public getHello(): string {
    return this.catService.getHello();
  }

  @Get('greet')
  public getIntroduce(): string {
    return this.catService.getIntroduce();
  }
}
