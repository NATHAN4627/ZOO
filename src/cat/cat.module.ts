import { Module } from '@nestjs/common';
import { CatController } from './cat.controller.js';
import { CatService } from './cat.service.js';

@Module({
  controllers: [CatController],
  providers: [CatService]
})
export class CatModule {}
