import { Controller, Get, Query } from '@nestjs/common'
import { UserService } from './user.service'
import { UserGetListDto } from './user.dto'

@Controller('user')
export class UserController {
  constructor (
    private readonly userService: UserService,
  ) {}

  @Get('list')
  getUser (@Query() query: UserGetListDto) {
    return this.userService.getUser(query)
  }
}
