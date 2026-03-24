import { Injectable, Scope } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { UserGetListDto } from './user.dto';

@Injectable({scope: Scope.REQUEST})
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  async getUser ($params: UserGetListDto) {
    return this.userRepository.getList($params);
  }
}
