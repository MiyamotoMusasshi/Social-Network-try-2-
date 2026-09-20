import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';

interface dataFromApp{

}

@Injectable()
export class RegistrationService {
  constructor(private readonly prismaService:PrismaService){}

  registration(data:any){
    console.log(data)
  }
}