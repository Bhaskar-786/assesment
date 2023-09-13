import { PassportStrategy } from '@nestjs/passport';
import { User } from 'src/user/user.entity';
import { Strategy } from 'passport-local';
import { UserServices } from 'src/user/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userServices: UserServices) {
    super({
      usernameField: 'name', // Define the username field as 'name'
    });
  }

  async validate(name: string, password: string): Promise<User> {
    const user: User = await this.userServices.getUserByUsername(name);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    if (user.password === password) {
      return user;
    } else {
      throw new UnauthorizedException('Invalid password');
    }
  }
}
