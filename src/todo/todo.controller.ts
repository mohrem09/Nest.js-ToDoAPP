// src/todo.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, BadRequestException  } from '@nestjs/common';
import { Todo } from '../todo.model';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    @Get()
    getAllTodos(): Todo[] {
        return this.todoService.getAllTodos().map(todo => ({ ...todo, id: todo.id }));
    }

    @Get(':id')
    getTodoById(@Param('id') id: string): Todo {
        return this.todoService.getTodoById(id);
    }

    @Post()
    createTodo(@Body() todo: Todo): Todo {
        if (!todo.title) {
            throw new BadRequestException('Title is required');
        }
        return this.todoService.createTodo(todo);
    }
    
    @Put(':id')
    updateTodo(@Param('id') id: string, @Body() updatedTodo: Todo): Todo {
        if (!updatedTodo.title) {
            throw new BadRequestException('Title is required');
        }
        return this.todoService.updateTodo(id, updatedTodo);
    }
    

    @Delete(':id')
    deleteTodo(@Param('id') id: string): void {
        this.todoService.deleteTodo(id);
    }
}
