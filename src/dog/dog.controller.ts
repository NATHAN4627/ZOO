import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { DogService } from './dog.service.js';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }

  @Get('greet/:name')
  public getIntroduce(@Req() req: Request, @Res() res: Response) {
    console.log('params:', req.params);
    console.log('query:', req.query);
    const result = this.dogService.getIntroduce();
    res.status(200).send(result);
  }

  @Post('run')
  public modify(@Req() req: Request, @Res() res: Response) {
    const result = this.dogService.modify();
    res.status(200).send(result);
  }
}
