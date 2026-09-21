import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { error } from 'node:console';

interface dataFromApp{
  username: string
  email:string
  password:string
  return_password:string
}

@Injectable()
export class RegistrationService {
  constructor(private readonly prismaService:PrismaService){}

  async registration(data:dataFromApp){
    let response:string|boolean = true
    const userExists = !(await this.prismaService.users.findFirst({where:{email:data.email}}) == null)
    const unsuitableLengthUsername = data.username.length < 5
    const unsuitableLengthPassword = data.password.length < 6
    const passwordDontMatch = data.password != data.return_password

    if(userExists){
      response = "Such a user already exists"
      return response
    }else if(unsuitableLengthUsername){
      response = "The username must be at least 5 characters long."
      return response
    }else if(unsuitableLengthPassword){
      response = "The password must be at least 6 characters long."
      return response
    }else if(passwordDontMatch){
      response = "Passwords don't match"
      return response
    }

    return response
  }
}