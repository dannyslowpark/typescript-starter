import { Test, TestingModule } from '@nestjs/testing';
import { SaveOptions, RemoveOptions } from 'typeorm';
import { Task, TaskStatus } from './task';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

describe('TaskController', () => {
  let taskController: TaskController;
  let taskService: TaskService; 

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [TaskService],
    }).compile();

    taskController = module.get<TaskController>(TaskController);
    taskService = module.get<TaskService>(TaskService);
  });

  describe('getTaskById', () => {
    it('retrieve the task corresponding to the ID', async () => {
      const taskId = 1
      const expectedTask: Task = {
        id: taskId, title: 'Test Task', description: 'Test Description', status: TaskStatus.TODO, createdAt: new Date(), updatedAt: new Date(),
        hasId: function (): boolean {
          throw new Error('Function not implemented.');
        },
        save: function (options?: SaveOptions): Promise<Task> {
          throw new Error('Function not implemented.');
        },
        remove: function (options?: RemoveOptions): Promise<Task> {
          throw new Error('Function not implemented.');
        },
        softRemove: function (options?: SaveOptions): Promise<Task> {
          throw new Error('Function not implemented.');
        },
        recover: function (options?: SaveOptions): Promise<Task> {
          throw new Error('Function not implemented.');
        },
        reload: function (): Promise<void> {
          throw new Error('Function not implemented.');
        }
      };
      //const expectedTask = await taskController.CreateTask({title: 'Task', description: 'testing this now', status: TaskStatus.TODO})
      //const taskId = expectedTask.id 
      //print()

      const result = await taskController.RetrieveTask(taskId);

      expect(result).toEqual(expectedTask);
    });
  });
});
