import { Controller, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { type Role } from './role.models';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post('/')
  async create(payload: Role) {
    return await this.rolesService.create(payload);
  }
}
