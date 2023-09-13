import { Module } from '@nestjs/common';
import { AppController } from './main.controller';
import { AppService } from './main.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
 
@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    UserModule,
    TypeOrmModule.forRoot({
        type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '<Enter Your Password>',
      database: 'nydb',
      entities: [__dirname + '/**/*.entity{.ts ,.js}'],
      synchronize: true,
    }),
    
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class RootModule {}
