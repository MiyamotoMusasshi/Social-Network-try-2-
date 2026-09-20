import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegistrationService } from './registration.service.js';


@Controller()
export class AuthController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post('/registration')
  registration(@Body() data:any){
    return this.registrationService.registration(data)
  }
}