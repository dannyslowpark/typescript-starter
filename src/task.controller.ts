import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TaskData } from './task-data';
import { Task } from './task';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async GetTask(): Promise<Task[]> {
    return this.taskService.get();
  }

  @Get(':id')
  async RetrieveTask(@Param('id') id: number): Promise<Task> {
    return this.taskService.retrieve(id);
  }

  @Post()
  async CreateTask(@Body() taskdata: TaskData): Promise<Task> {
    return this.taskService.create(taskdata);
  }

  @Delete(':id')
  async DeleteTask(@Param('id') id: number): Promise<void> {
    return this.taskService.delete(id);
  }
}