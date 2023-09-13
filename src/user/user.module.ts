import { Module } from '@nestjs/common';
import { UserServices } from './user.service';
import { UsersController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UserServices],
  exports:[UserServices],
})
export class UserModule {}
