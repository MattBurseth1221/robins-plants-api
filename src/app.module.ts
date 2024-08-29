import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { auth_user } from './user/entities/user.entity';
import { PGUSERNAME, PGDATABASE, PGPASSWORD, PGHOST } from 'env';

console.log(process.env.PGDATABASE);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: PGHOST,
      port: 5432,
      password: PGPASSWORD,
      username: PGUSERNAME,
      entities: [auth_user],
      database: PGDATABASE,
      logging: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
