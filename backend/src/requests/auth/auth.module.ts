import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { PrismaModule } from '../../prisma/prisma.module.js';
import { RegistrationService } from './registration.service.js';
import { AuthController } from './auth.controller.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [PrismaModule],
  controllers: [AuthController],
  providers: [RegistrationService],
})
export class AuthModule {}
