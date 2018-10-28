import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from 'cats/cats.module';
import { UsersService } from './users.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule { }
