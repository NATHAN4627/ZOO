import { Module } from '@nestjs/common';
import { DogController } from './dog.controller.js';
import { DogService } from './dog.service.js';

@Module({
  controllers: [DogController],
  providers: [DogService]
})
export class DogModule {}
