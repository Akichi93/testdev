import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import { TodosController } from './todos/todos.controller';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/testdev/browser')
    }),
    TodosModule
  ],
  controllers: [TodosController]
})
export class AppModule {}
