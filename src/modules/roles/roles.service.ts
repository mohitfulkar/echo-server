import { Injectable } from '@nestjs/common';
import { Role } from './role.models';
import { db } from 'src/db/db';
import { roles } from 'src/db/schema';

@Injectable()
export class RolesService {
  async create(payload: Role) {
    return db
      .insert(roles)
      .values({
        name: payload.name,
        createdBy: payload.createdBy, // or keep 3 if intentional
      })
      .returning({
        id: roles.id,
        name: roles.name,
        createdBy: roles.createdBy,
        createdAt: roles.createdAt, // include if needed
      });
  }
}
