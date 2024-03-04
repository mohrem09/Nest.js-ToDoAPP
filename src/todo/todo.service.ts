// src/todo.service.ts
import { Injectable } from '@nestjs/common';
import { Todo } from '../todo.model';

@Injectable()
export class TodoService {
    private todos: Todo[] = [];

    getAllTodos(): Todo[] {
        return this.todos;
    }

    getTodoById(id: string): Todo {
        return this.todos.find(todo => todo.id === id);
    }

    createTodo(todo: Todo): Todo {
        this.todos.push(todo);
        return todo;
    }

    updateTodo(id: string, updatedTodo: Todo): Todo {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            this.todos[index] = updatedTodo;
            return updatedTodo;
        }
        return null;
    }

    deleteTodo(id: string): void {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
}
