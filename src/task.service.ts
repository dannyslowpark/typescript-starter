import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskData } from './task-data';
import { Task } from './task';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private taskRepository: Repository<Task>) {}

  async get(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async retrieve(id: number): Promise<Task> {
    return this.taskRepository.findOne({where: {id}});
  }

  async create(task_data: TaskData): Promise<Task> {
    const { title, description, status } = task_data;
    const task = new Task();
    task.title = title;
    task.description = description;
    task.status = status;
    await task.save();
    return task;
  }

  async delete(id: number): Promise<void> {
    await this.taskRepository.delete(id);
}
}
