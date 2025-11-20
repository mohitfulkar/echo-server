import { Injectable } from '@nestjs/common';
import { type User } from './auth.models';
import { db } from 'src/db/db';
import { users } from 'src/db/schema';

@Injectable()
export class AuthService {
  async create(payload: User) {
    const response = db
      .insert(users)
      .values({
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password,
      })
      .returning();

    return response;
  }
}
