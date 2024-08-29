import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { auth_user } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([auth_user])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
