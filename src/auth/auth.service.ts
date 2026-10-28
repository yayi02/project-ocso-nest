import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import {JwtService} from '@nestjs/jwt'
import * as bcrypt from "bcrypt"
import { LoginUserDto } from './dto/login-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  registerUser(createUserDto: CreateUserDto){
    createUserDto.userPassword = bcrypt.hashSync(createUserDto.userPassword, 5)
    return this.userRepository.save(createUserDto)
  }

  async loginUser(loginUserDto: LoginUserDto){
    const user = await this.userRepository.findOne({
      where: {
        userEmail: loginUserDto.userEmail
      }
    });
    if (!user) throw new UnauthorizedException("No estas autorizado")
    const match = await bcrypt.compare(
      loginUserDto.userPassword,
      user.userPassword,
    );
    if (!match) throw new UnauthorizedException("No estas autorizado");
    const payload = {
      userEmail: user.userEmail,
      userPassword: user.userPassword,
      userRoles: user.userRoles
    };

    const token = this.jwtService.sign(payload);
    return token;
  }
  async updateUser(userEmail: string, updateUserDto: UpdateUserDto){
    const user = await this.userRepository.findOneBy({ userEmail });
    if(!user) throw new NotFoundException();
    if(updateUserDto.userPassword){
      updateUserDto.userPassword = bcrypt.hashSync(updateUserDto.userPassword, 5);
    }
    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }
}

