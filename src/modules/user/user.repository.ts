import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { User } from './user.entity';
import { UserGetListDto } from './user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getList(params: UserGetListDto): Promise<User[]> {
    const where: FindOptionsWhere<User> = {};

    console.log(params);
    

    return this.userRepository.find();
  }
}