import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CatModule } from './cat/cat.module.js';
import { DogModule } from './dog/dog.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [CatModule, DogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
