import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = TASKS

  constructor(private taskService: TaskService) { }

  onInit(): void {
    this.taskService.Tasks.subscribe(tasks => {
      this.tasks = tasks
    })
  }
  
}
