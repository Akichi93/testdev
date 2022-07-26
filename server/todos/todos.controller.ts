import { Controller, Get, Post } from '@nestjs/common';

@Controller('todos')
export class TodosController {
    @Get()
    all(): string {
        return 'All TODOS';
    }

    @Post()
    add() {
        return 'New TODO';
    }
}
